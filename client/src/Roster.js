export const Roster = () => {
    const display_form = (form_id) => {
        console.log("here at display form" + form_id);
        var text = document.getElementById(form_id);
        if (text.innerText == "") {
            text.innerText = "AM";
        } else if (text.innerText == "AM") {
            text.innerText = "PM";
        } else if (text.innerText == "PM") {
            text.innerText = "";
        }
        //grey_screen_enable();
        //document.getElementById('add_shift').style.display = "flex";
        //$("#"+form_id).css("display","flex");
    }
    return (
        <div id="calendar">
            Roster starting: Jan 30
            <table>
                <tbody>
                    <tr>
                        <th>
                            Name
                        </th>
                        <th>
                            Title
                        </th>
            
                <th className="">
                    Mon
                    <span className="date_header">Jan 30</span>
                </th>
                
                <th className="">
                    Tue
                    <span className="date_header">Jan 31</span>
                </th>
                
                <th className="">
                    Wed
                    <span className="date_header">Feb 01</span>
                </th>
                
                <th className="">
                    Thu
                    <span className="date_header">Feb 02</span>
                </th>
                
                <th className="">
                    Fri
                    <span className="date_header">Feb 03</span>
                </th>
                
                <th className="weekend">
                    Sat
                    <span className="date_header">Feb 04</span>
                </th>
                
                <th className="weekend">
                    Sun
                    <span className="date_header">Feb 05</span>
                </th>
                
                <th className="">
                    Mon
                    <span className="date_header">Feb 06</span>
                </th>
                
                <th className="">
                    Tue
                    <span className="date_header">Feb 07</span>
                </th>
                
                <th className="">
                    Wed
                    <span className="date_header">Feb 08</span>
                </th>
                
                <th className="">
                    Thu
                    <span className="date_header">Feb 09</span>
                </th>
                
                <th className="">
                    Fri
                    <span className="date_header">Feb 10</span>
                </th>
                
                <th className="weekend">
                    Sat
                    <span className="date_header">Feb 11</span>
                </th>
                
                <th className="weekend">
                    Sun
                    <span className="date_header">Feb 12</span>
                </th>
                
                </tr><tr>
                    <td>
                        Vanessa Danai
                    </td>
                    <td>
                        RN
                    </td>
                
                    <td className="active_date" id="1" onClick={e => display_form(1)}>
                        
                    </td>
                    
                    <td className="active_date" id="2" onClick={e => display_form(2)}>
                        
                    </td>
                    
                    <td className="active_date" id="3" onClick={e => display_form(3)}>
                        
                    </td>
                    
                    <td className="active_date" id="4" onClick={e => display_form(4)}>
                        
                    </td>
                    
                    <td className="active_date " onClick={display_form}>
                        
                    </td>
                    
                    <td className="active_date weekend" onClick={display_form}>
                        
                    </td>
                    
                    <td className="active_date weekend" onClick={display_form}>
                        
                    </td>
                    
                    <td className="active_date " onClick={display_form}>
                        
                    </td>
                    
                    <td className="active_date " onClick={display_form}>
                                    
                    </td>
                    
                    <td className="active_date " onClick={display_form}>
                        
                    </td>
                    
                    <td className="active_date " onClick={display_form}>
                        
                    </td>
                    
                    <td className="active_date " onClick={display_form}>
                        
                    </td>
                    
                    <td className="active_date weekend" onClick={display_form}>
                        
                    </td>
                    
                    <td className="active_date weekend" onClick={display_form}>
                        
                    </td>
                    
                </tr>
                
                <tr>
                    <td>
                        John Carlin
                    </td>
                    <td>
                        AN
                    </td>
                
                    <td className="active_date " onClick={display_form}>
                        
                    </td>
                    
                    <td className="active_date " onClick={display_form}>
                        
                    </td>
                    
                    <td className="active_date " onClick={display_form}>
                        
                    </td>
                    
                    <td className="active_date " onClick={display_form}>
                        
                    </td>
                    
                    <td className="active_date " onClick={display_form}>
                        
                    </td>
                    
                    <td className="active_date weekend" onClick={display_form}>
                        
                    </td>
                    
                    <td className="active_date weekend" onClick={display_form}>
                                    
                    </td>
                    
                    <td className="active_date " onClick={display_form}>
                        
                    </td>
                    
                    <td className="active_date " onClick={display_form}>
                        
                    </td>
                    
                    <td className="active_date " onClick={display_form}>
                        
                    </td>
                    
                    <td className="active_date " onClick={display_form}>
                        
                    </td>
                    
                    <td className="active_date " onClick={display_form}>
                        
                    </td>
                    
                    <td className="active_date weekend" onClick={display_form}>
                        
                    </td>
                    
                    <td className="active_date weekend" onClick={display_form}>
                        
                    </td>
                    
                </tr>
                
                <tr>
                    <td>
                        Kaveh Danai
                    </td>
                    <td>
                        CN
                    </td>
                
                    <td className="active_date " onClick={display_form}>
                        
                    </td>
                    
                    <td className="active_date " onClick={display_form}>
                        
                    </td>
                    
                    <td className="active_date " onClick={display_form}>
                        
                    </td>
                    
                    <td className="active_date " onClick={display_form}>
                        
                    </td>
                    
                    <td className="active_date " onClick={display_form}>
                        
                    </td>
                    
                    <td className="active_date weekend" onClick={display_form}>
                        
                    </td>
                    
                    <td className="active_date weekend" onClick={display_form}>
                        
                    </td>
                    
                    <td className="active_date " onClick={display_form}>
                        
                    </td>
                    
                    <td className="active_date " onClick={display_form}>
                        
                    </td>
                    
                    <td className="active_date " onClick={display_form}>
                        
                    </td>
                    
                    <td className="active_date " onClick={display_form}>
                        
                    </td>
                    
                    <td className="active_date " onClick={display_form}>
                        
                    </td>
                    
                    <td className="active_date weekend" onClick={display_form}>
                        
                    </td>
                    
                    <td className="active_date weekend" onClick={display_form}>
                        
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    )
}
