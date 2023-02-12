
None selected

Skip to content
Using Gmail with screen readers
Conversations
Google
Security alert
 - A new sign-in on Mac johnodaman@gmail.com We noticed a new sign-in to your Google Account on a Mac device. If this was you, you don't need to do anything. If not, we'll help you secure your
 
9:43 PM
me
roster
 
Attachment:
index.php
9:42 PM
9.66 GB of 15 GB used
Terms · Privacy · Program Policies
Last account activity: 0 minutes ago
Open in 3 other locations · Details
<?php

ini_set('display_errors',1);

$shift_types = array(
	'am'=>'Day',
	'pm'=>'Night',
);
$shift_types_dropdown = '';
foreach($shift_types as $am_pm=>$friendly)
{
	$shift_types_dropdown .= '
	<option value="'.$am_pm.'">
		'.$friendly.'
	</option>
	';
}

$users = array(
	array(
		'id'=>1,
		'name'=>'Vanessa Danai',
		'title'=>'RN',
		'initials'=>'VD',
		'color'=>'red'
	),
	array(
		'id'=>2,
		'name'=>'John Carlin',
		'title'=>'AN',
		'initials'=>'JC',
		'color'=>'blue'
	),
		array(
		'id'=>3,
		'name'=>'Kaveh Danai',
		'title'=>'CN',
		'initials'=>'KD',
		'color'=>'yellow'
	),
);

//assuming we pull a list of shifts based on roster id (1 below) from db
$roster_id = 99;
$shifts = array(
	array(
		'user_id'=>1,
		'roster_day'=>9,//day of fortnight, 1-14
		'roster_am'=>false,//only one, roster_am or roster_pm can be true for any shift
		'roster_pm'=>true,
	),
	array(
		'user_id'=>3,
		'roster_day'=>4,//day of fortnight, 1-14
		'roster_am'=>false,//only one, roster_am or roster_pm can be true for any shift
		'roster_pm'=>true,
	),
	array(
		'user_id'=>2,
		'roster_day'=>7,//day of fortnight, 1-14
		'roster_am'=>true,//only one, roster_am or roster_pm can be true for any shift
		'roster_pm'=>false,
	),
);

$users_dropdown = '
<option value="">
	Please select
</option>
';
foreach($users as $user)
{
	$users_dropdown .= '
	<option value="'.$user['id'].'">
		'.$user['name'].'
	</option>
	';
}
$date = new DateTime('monday this week');
$roster_starting = $date->format('M d');
$roster = '
Roster starting: '.$roster_starting.'
<table>
	<tbody>
		<tr>
			<th>
				Name
			</th>
			<th>
				Title
			</th>
';
$limit = 14;
$n = 1;
do
{
	$class = '';
	if($date->format('D')=='Sat'||$date->format('D')=='Sun')
	{
		$class = 'weekend';
	}
	$roster .= '
	<th class="'.$class.'">
		'.$date->format('D').'
		<span class="date_header">'.$date->format('M d').'</span>
	</th>
	';
	$date->modify('+1 day');
	$n++;
}
while($n<=$limit);

//render user shifts for each day of fortnight
foreach($users as $user)
{
	$roster .= '
	<tr>
		<td>
			'.$user['name'].'
		</td>
		<td>
			'.$user['title'].'
		</td>
	';
	unset($date);
	$date = new DateTime('monday this week');
	$limit = 14;
	$n = 1;
	do
	{
		$class = '';
		$shift_html = '';
		if($date->format('D')=='Sat'||$date->format('D')=='Sun')
		{
			$class = 'weekend';
		}
		
		//loop through the shifts we pulled from the db
		foreach($shifts as $shift)
		{
			//if the user_id of the current user we are processing matches the user_id of the shift
			if($shift['user_id']==$user['id'])
			{
				//if the roster day matches
				if($shift['roster_day']==$n)
				{
					//if it's an am shift, add am class
					if($shift['roster_am'])
					{
						$shift_html = '
						<div class="shift am">
							AM
						</div>
						';
					}
					//otherwise, add pm class
					else
					{
						$shift_html = '
						<div class="shift pm">
							PM
						</div>
						';
					}
				}
			}
		}
		$roster .= '
		<td class="active_date '.$class.'" onclick="populate_add_shift(\''.$roster_id.'\',\''.$user['id'].'\',\''.$n.'\',\''.$date->format('D M d').'\');display_form(\'add_shift\');">
			'.$shift_html.'
		</td>
		';
		$date->modify('+1 day');
		$n++;
	}
	while($n<=$limit);
	$roster .= '
	</tr>
	';
}
$roster .= '
	</tbody>
</table>
';

?>
<!DOCTYPE html>
<html>
	<head>
		<script src="https://code.jquery.com/jquery-3.6.3.min.js"></script>
		<style>
			.active_date
			{
				cursor:pointer;
			}
			.active_date:hover
			{
				background-color:rgba(50,155,168,0.2);
			}
			.App {
			  text-align: center;
			  display: flex;
			  min-height: 100vh;
			  align-items: center;
			  justify-content: center;
			  color: white;
			  background-image: linear-gradient(79deg, #7439db, #C66FBC 48%, #F7944D);
			}

			.auth-form-container, .login-form, .register-form {
			  display: flex;
			  flex-direction: column;
			}
			
			body {
			  margin: 0;
			  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
				'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
				sans-serif;
			  -webkit-font-smoothing: antialiased;
			  -moz-osx-font-smoothing: grayscale;
			}
			
			button {
			  border: none;
			  background-color: white;
			  padding: 15px;
			  border-radius: 10px;
			  cursor: pointer;
			  color: #7439db;
			}
			
			#calendar
			{
				display:none;
				<!-- display:inline-block; -->
				border:1px solid #ffffff;
				border-radius:5px;
				overflow:hidden;
			}
			
			code {
			  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
				monospace;
			}
			
			.day
			{
				display:flex;
				flex-direction:row;
				align-items:center;
				justify-content:center;
				float:left;
				background-color:rgba(0,0,0,0.5);
				width:70px;
				height:70px;
			}
			
			.day_title
			{
				display:inline-block;
				float:left;
				background-color:rgba(0,0,0,0.5);
				width:70px;
			}
			.date_header
			{
				display:block;
				font-size:0.5em;
				font-weight:normal;
			}
			
			.form_popup
			{
				display:none;
				flex-direction:column;
				position:fixed;
				z-index:1;
				background-color:rgba(255,255,255,0.5);
				padding:10px;
				border:1px solid #ffffff;
				border-radius:5px;
			}
			.form_popup .close
			{
				position:absolute;
				top:0px;
				right:0px;
				width:25px;
				height:25px;
				color:#ffffff;
				background-color:rgba(0,0,0,0.5);
				cursor:pointer;
				border-top-right-radius: 5px;
			}
			.form_popup input, select
			{
				display:block;
				width:100%;
				box-sizing:border-box;
			}
			#grey_screen
			{
				position: fixed;
				display: none;
				background-color: rgba(0,0,0,0.7);
				width: 100%;
				height: 100%;
				z-index: 1;
			}
			.hidden_input
			{
				display:none !important;
			}
			input, select {
				margin:0px 0px 10px 0px;
				padding: 10px;
				border: none;
				border-radius: 10px;
			}
			
			label {
			  text-align: left;
			  padding: 0.25rem 0;
			  float:left;
			}
			
			.link-btn {
			  background: none;
			  color: white;
			  text-decoration: underline;
			}
			
			#login
			{
				display:flex;
				<!-- display:none; -->
			}
			
			#register
			{
				display:none;
			}
			table
			{
				border-radius:5px;
			}
			table, th, td
			{
				border: 1px solid rgba(255,255,255,0.5);
				border-collapse: collapse;
			}
			th, td
			{
				padding:5px;
			}
			.weekend
			{
				background-color:rgba(0,0,0,0.3);
			}
			@media screen and (min-width: 600px) {
			  .auth-form-container {
				padding: 4rem;
				border: 1px solid white;
				border-radius: 10px;
				margin: 0.5rem;
			  }
			}
		</style>
	</head>
	<body>
		<!-- grey screen overlay -->
		<div id="grey_screen">
		</div>
		<!-- main react component -->
		<div class="App">
			<!-- add shift form -->
			<div id="add_shift" class="form_popup">
				<div class="close" onclick="hide_form('add_shift');">
						
				</div>
				<h2>Add shift</h2>
				<form id="form_add_shift" class="form_overlay" onSubmit="add_shift(event);">
					<label htmlFor="add_shift_date">
						date
					</label>
					<input id="add_shift_date" value="" style="pointer-events:none;" readonly/>
					<input id="add_shift_roster_id" class="hidden_input" name="roster_id" value="" />
					<input id="add_shift_roster_day" class="hidden_input" name="roster_day" value="" />
					<label htmlFor="add_shift_user_id">
						employee
					</label>
					<select id="add_shift_user_id">
						<?php echo $users_dropdown; ?>
					</select>
					<label htmlFor="add_shift_am_pm">
						shift
					</label>
					<select id="add_shift_am_pm">
						<?php echo $shift_types_dropdown; ?>
					</select>
					<button type="submit">
						OK
					</button>
				</form>
			</div>
			<!-- login -->
			<div id="login" class="auth-form-container">
				<h2>Login</h2>
				<form class="login-form" onSubmit="login_or_register(event);">
					<label htmlFor="login_email">
						email
					</label>
					<input value="" onChange="" type="email" placeholder="youremail@gmail.com" id="login_email" name="email" />
					<label htmlFor="login_password">
						password
					</label>
					<input value="" onChange="" type="password" placeholder="********" id="login_password" name="password" />
					<button type="submit">
						Login
					</button>
				</form>
				<button class="link-btn" onClick="toggleForm();">
					Don't have an account? Register here.
				</button>
			</div>
			<!-- register -->
			<div id="register" class="auth-form-container">
				<h2>Register</h2>
				<form class="register-form" onSubmit="login_or_register(event);">
					<label htmlFor="name">
						Full name
					</label>
					<input value="" name="name" onChange="" id="name" placeholder="Full name" />
					<label htmlFor="register_email">
						email
					</label>
					<input value="" onChange="" type="email" placeholder="youremail@gmail.com" id="register_email" name="email" />
					<label htmlFor="register_password">
						password
					</label>
					<input value="" onChange="" type="password" placeholder="********" id="register_password" name="password" />
					<button type="submit">
						Log In
					</button>
				</form>
				<button class="link-btn" onClick="toggleForm();">
					Already have an account? Login here.
				</button>
			</div>
			<!-- calendar -->
			<div id="calendar">
				<?php echo $roster; ?>
			</div>
		</div><!-- end App -->
		<script type="text/javascript">
			
			function add_shift(e)
			{
				//prevent auto form submission with page reload
				e.preventDefault();
				//get form details
				var user_id = $("#add_shift_user_id").val();
				var roster_id = $("#add_shift_roster_id").val();
				var roster_day = $("#add_shift_roster_day").val();
				var roster_am = false;
				var roster_pm = false;
				if($("#add_shift_am_pm").val()=="am")
				{
					roster_am = true;
				}
				else if($("#add_shift_am_pm").val()=="pm")
				{
					roster_pm = true;
				}
				console.log("user_id:"+user_id);
				console.log("roster_id:"+roster_id);
				console.log("roster_day:"+roster_day);
				console.log("roster_am:"+roster_am);
				console.log("roster_pm:"+roster_pm);
			}
			
			function display_form(form_id)
			{
				grey_screen_enable();
				$("#"+form_id).css("display","flex");
			}
			
			function grey_screen_disable()
			{
				$("#grey_screen").css("display","none");
			}
			
			function grey_screen_enable()
			{
				$("#grey_screen").css("display","inline-block");
			}
			
			function hide_form(form_id)
			{
				$("#"+form_id).css("display","none");
				grey_screen_disable();
			}
			
			function login_or_register(e)
			{
				//prevent auto form submission with page reload
				e.preventDefault();
				//hide login and register forms
				$("#login").css("display","none");
				$("#register").css("display","none");
				//show calendar
				$("#calendar").css("display","inline-block");
				
			}
			
			function populate_add_shift(roster_id,user_id,roster_day,date)
			{
				//populate the add shift form with user id and roster day
				$("#add_shift_roster_id").val(roster_id);
				$("#add_shift_user_id").val(user_id);
				$("#add_shift_roster_day").val(roster_day);
				$("#add_shift_date").val(date);
			}
			
			function toggleForm()
			{
				//if login form is showing
				if($("#login").css("display")=="flex")
				{
					$("#login").css("display","none");
					$("#register").css("display","flex");
				}
				else
				{
					$("#register").css("display","none");
					$("#login").css("display","flex");
				}
			}
			
		</script>
	</body>
</html>