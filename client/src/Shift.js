import React from "react";

export const Login = (props) => {
    return (<>
	<div id="grey_screen">
	</div>
	
	<div id="add_shift" class="form_popup">
		<div class="close" onclick="hide_form('add_shift');">
			X
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
				{/* <?php echo $users_dropdown; ?> */}
			</select>
			<label htmlFor="add_shift_am_pm">
				shift
			</label>
			<select id="add_shift_am_pm">
				{/* <?php echo $shift_types_dropdown; ?> */}
			</select>
			<button type="submit">
				OK
			</button>
		</form>
	</div>
    </>)
}

   



    // <script type="text/javascript">
			
	// 		function add_shift(e)
	// 		{
	// 			//prevent auto form submission with page reload
	// 			e.preventDefault();
	// 			//get form details
	// 			var user_id = $("#add_shift_user_id").val();
	// 			var roster_id = $("#add_shift_roster_id").val();
	// 			var roster_day = $("#add_shift_roster_day").val();
	// 			var roster_am = false;
	// 			var roster_pm = false;
	// 			if($("#add_shift_am_pm").val()=="am")
	// 			{
	// 				roster_am = true;
	// 			}
	// 			else if($("#add_shift_am_pm").val()=="pm")
	// 			{
	// 				roster_pm = true;
	// 			}
	// 			console.log("user_id:"+user_id);
	// 			console.log("roster_id:"+roster_id);
	// 			console.log("roster_day:"+roster_day);
	// 			console.log("roster_am:"+roster_am);
	// 			console.log("roster_pm:"+roster_pm);
	// 		}
			
	// 		function display_form(form_id)
	// 		{
	// 			console.log("here at display form");
	// 			grey_screen_enable();
	// 			$("#"+form_id).css("display","flex");
	// 		}
			
	// 		function grey_screen_disable()
	// 		{
	// 			$("#grey_screen").css("display","none");
	// 		}
			
	// 		function grey_screen_enable()
	// 		{
	// 			$("#grey_screen").css("display","inline-block");
	// 		}
			
	// 		function hide_form(form_id)
	// 		{
	// 			$("#"+form_id).css("display","none");
	// 			grey_screen_disable();
	// 		}
			
	// 		function login_or_register(e)
	// 		{
	// 			//prevent auto form submission with page reload
	// 			e.preventDefault();
	// 			//hide login and register forms
	// 			$("#login").css("display","none");
	// 			$("#register").css("display","none");
	// 			//show calendar
	// 			$("#calendar").css("display","inline-block");
				
	// 		}
			
	// 		function populate_add_shift(roster_id,user_id,roster_day,date)
	// 		{
	// 			console.log("here at populate");
	// 			//populate the add shift form with user id and roster day
	// 			$("#add_shift_roster_id").val(roster_id);
	// 			$("#add_shift_user_id").val(user_id);
	// 			$("#add_shift_roster_day").val(roster_day);
	// 			$("#add_shift_date").val(date);
	// 		}
			
	// 		function toggleForm()
	// 		{
	// 			//if login form is showing
	// 			if($("#login").css("display")=="flex")
	// 			{
	// 				$("#login").css("display","none");
	// 				$("#register").css("display","flex");
	// 			}
	// 			else
	// 			{
	// 				$("#register").css("display","none");
	// 				$("#login").css("display","flex");
	// 			}
	// 		}
			
	// 	</script>