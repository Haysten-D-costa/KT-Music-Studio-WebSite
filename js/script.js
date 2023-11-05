function validate() {
    
    // getting all the values provided by user....
    var first_name = document.getElementById("first-name").value;
    var last_name = document.getElementById("last-name").value;
    var dob = document.getElementById("dob").value;
    var dt_connence = document.getElementById("doc").value;
    var phone_no = document.getElementById("ph-number").value;
    var email = document.getElementById("email").value;
    var address = document.getElementById("address").value;
    var feedback = document.getElementById("feedback").value;

    // finding which gender(radio-button) is selected....
    var gender_selected = "";
    var gender = document.getElementsByName("gender");
    for(var i=0; i<gender.length; i++) 
    {
        if(gender[i].checked == true) { 
            gender_selected = gender[i].value; 
        }
    }

    // finding which dropdown option(level) is selected....
    var level_selected = "";
    var level = document.getElementById("level");
    level_selected = level.options[level.selectedIndex].value;

    // finding which checkbox (instruments) are selected....
    var instruments_selected = ""; 
    var instruments = document.getElementsByName("instrument");
    for(var i=0; i<instruments.length; i++) 
    {
        if(instruments[i].checked) {
            instruments_selected = instruments_selected + "&" + instruments[i].value;
        }
    }

    // finding which checkbox (week-days) are selected....
    var days_selected = "";
    var days = document.getElementsByName("day");
    for(var i=0; i<days.length; i++) 
    {
        if(days[i].checked) {
            days_selected = days_selected + "&" + days[i].value;
        }
    }



    // Validation of all details : 
    if(first_name.trim() == "") {
        alert("Please enter First name !");
        return false;
    } 
    else if(last_name.trim() == "") {
        alert("Please enter Last name !");
        return false;
    } 
    else if(dob == "") {
        alert("Please select birth date !");
        return false;
    }
    else if(dt_connence == "") {
        alert("Please select classes commencement date !");
        return false;
    }
    else if(phone_no == "") {
        alert("Please enter phone no. !");
        return false;
    }
    else if(email == "") {
        alert("Please enter email !");
        return false;
    }
    else if(address == "") {
        alert("Please enter address !");
        return false;
    }
    else {
        alert("Registration Form validated successfully...");
        alert("DECLARATION :\n" + 
            "I am " + first_name + last_name + " born on the "
            + dob + " (" + gender + ") " + "give my confirmation that, i would like to join the course from the " +
            dt_connence + ", with musician level as a "+ level + ", for :  " + instruments_selected + "\n On " + days_selected + 
            ". \nMy contact details are : \n phone no : " + phone_no + " address : " + address + " Thanks for the feedback !!! < " + feedback + " >"
        );
    }
}