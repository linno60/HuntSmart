     function searchskill() {
            v = document.getElementById("skillinput").value.charAt(0);
           
            if (v=="C" || v=='c')
            {
                document.getElementById("nosugessions").style.visibility = "hidden";
                document.getElementById("skilllist").style.visibility = "visible";
               

            }
            else
            {
                document.getElementById("skilllist").style.visibility = "hidden";
                document.getElementById("nosugessions").style.visibility = "visible";
             
            }
        }
        function clear() {

            document.getElementById("nosugessions").style.visibility = "hidden";
            document.getElementById("skilllist").style.visibility = "hidden";
        }

        function findskill() {
            
            v = document.getElementById("skillinput").value;
            
            document.getElementById("skillinput").value = "C++";
            document.getElementById("skilllist").style.visibility = "hidden";
            
        }
        function RemoveSkill(val,val2)
        {
         
            document.getElementById(val).style.visibility = "hidden";
            document.getElementById(val2).style.visibility = "hidden";
           
        }
        function AddSkill() {
            document.getElementById("skilldiv").style.visibility = "visible";
        }
        function ShowSkillField() {
            
            document.getElementById("skillinput").disabled = false;
            document.getElementById("addskillbutton").disabled = false;
            document.getElementById("save").style.visibility = "visible";
            document.getElementById("cancle").style.visibility = "visible";
        }
        function EditSkill() {
            if (document.getElementById("skilldiv").style.visibility == "visible")
            {
                document.getElementById("minus3").style.visibility = "visible";
            }

            
            document.getElementById("minus").style.visibility = "visible";
            document.getElementById("minus1").style.visibility = "visible";
            document.getElementById("minus2").style.visibility = "visible";
           
            document.getElementById("save").style.visibility = "visible";
            document.getElementById("cancle").style.visibility = "visible";
        }
        function cancleskill() {

            document.getElementById("minus").style.visibility = "hidden";
            document.getElementById("minus1").style.visibility = "hidden";
            document.getElementById("minus2").style.visibility = "hidden";
            document.getElementById("minus3").style.visibility = "hidden";
            document.getElementById("save").style.visibility = "hidden";
            document.getElementById("cancle").style.visibility = "hidden";
            document.getElementById("nosugessions").style.visibility = "hidden";
            document.getElementById("skilllist").style.visibility = "hidden";
            document.getElementById("skillinput").value = " ";
            document.getElementById("skillinput").disabled = true;
            document.getElementById("addskillbutton").disabled = true;
        }
        function saveskill() {

            document.getElementById("minus").style.visibility = "hidden";
            document.getElementById("minus1").style.visibility = "hidden";
            document.getElementById("minus2").style.visibility = "hidden";
            document.getElementById("minus3").style.visibility = "hidden";
            document.getElementById("save").style.visibility ="hidden";
            document.getElementById("cancle").style.visibility = "hidden";
            document.getElementById("nosugessions").style.visibility = "hidden";
            document.getElementById("skilllist").style.visibility = "hidden";
            document.getElementById("skillinput").value = " ";
            document.getElementById("skillinput").disabled = true;
            document.getElementById("addskillbutton").disabled = true;
        }
       
     function readURL(input) {
         if (input.files && input.files[0]) {
             var reader = new FileReader();

             reader.onload = function (e) {
                 $('#coverphoto')
                     .attr('src', e.target.result)
                     .width(245)
                     .height(220);
             };

             reader.readAsDataURL(input.files[0]);
         }
     }
//////////////////////////
     function editprofile() {
         document.getElementById("saveprofile").style.visibility = "visible";
         document.getElementById("cancleprofile").style.visibility = "visible";
         document.getElementById("employeename").disabled = false;
         document.getElementById("dob").disabled = false;
         document.getElementById("contactno").disabled = false;
         document.getElementById("profiledes").disabled = false;
         document.getElementById("employeename").style.border = "2px solid #0099CC";
         document.getElementById("dob").style.border = "2px solid #0099CC";
         document.getElementById("contactno").style.border = "2px solid #0099CC";
         document.getElementById("profiledes").style.border = "2px solid #0099CC";
     }
     function cancleprofile() {
         document.getElementById("saveprofile").style.visibility = "hidden";
         document.getElementById("cancleprofile").style.visibility = "hidden";
         document.getElementById("employeename").disabled = true;
         document.getElementById("dob").disabled = true;
         document.getElementById("contactno").disabled = true;
         document.getElementById("profiledes").disabled = true;
         document.getElementById("employeename").style.borderColor = 'transparent';
         document.getElementById("dob").style.borderColor = 'transparent';
         document.getElementById("contactno").style.borderColor = 'transparent';
         document.getElementById("profiledes").style.borderColor = 'transparent';
     }
     function saveprofile() {
         
         v1 = document.getElementById("employeename").value;
         v2=document.getElementById("dob").value;
         v3=document.getElementById("contactno").value;
         v4=document.getElementById("profiledes").value;
         document.getElementById("employeename").value=v1
         document.getElementById("dob").value = v2;
         document.getElementById("contactno").value=v3;
         document.getElementById("profiledes").value=v4;

         document.getElementById("saveprofile").style.visibility = "hidden";
         document.getElementById("cancleprofile").style.visibility = "hidden";
         document.getElementById("employeename").disabled = true;
         document.getElementById("dob").disabled = true;
         document.getElementById("contactno").disabled = true;
         document.getElementById("profiledes").disabled = true;
         document.getElementById("employeename").style.borderColor = 'transparent';
         document.getElementById("dob").style.borderColor = 'transparent';
         document.getElementById("contactno").style.borderColor = 'transparent';
         document.getElementById("profiledes").style.borderColor = 'transparent';
         

     }
///////////////////////////////////////////////////////////////////////////////////

     function editeducation() {

         document.getElementById("saveeducation").style.visibility = "visible";
         document.getElementById("cancleeducation").style.visibility = "visible";

         document.getElementById("school").disabled = false;
         document.getElementById("edu-st-dt").disabled = false;
         document.getElementById("edu-end-dt").disabled = false;
         document.getElementById("degree").disabled = false;
         document.getElementById("studyfield").disabled = false;
         document.getElementById("edu-des").disabled = false;

         document.getElementById("school").style.border = "2px solid #0099CC";
         document.getElementById("edu-st-dt").style.border = "2px solid #0099CC";
         document.getElementById("edu-end-dt").style.border = "2px solid #0099CC";
         document.getElementById("degree").style.border = "2px solid #0099CC";
         document.getElementById("studyfield").style.border = "2px solid #0099CC";
         document.getElementById("edu-des").style.border = "2px solid #0099CC";
     }
 
     function saveeducation()
     {

         v1 = document.getElementById("school").value;
         v2 = document.getElementById("edu-st-dt").value;
         v3 = document.getElementById("edu-end-dt").value;
         v4 = document.getElementById("degree").value;
         v5 = document.getElementById("studyfield").value;
         v6 = document.getElementById("edu-des").value;

         document.getElementById("school").value = v1;
         document.getElementById("edu-st-dt").value = v2;
         document.getElementById("edu-end-dt").value = v3;
         document.getElementById("degree").value = v4;
         document.getElementById("studyfield").value = v5;
         document.getElementById("edu-des").value = v6;

         document.getElementById("divEditEducation").style.visibility = "visible";
         document.getElementById("saveeducation").style.visibility = "hidden";
         document.getElementById("cancleeducation").style.visibility = "hidden";
         document.getElementById("school").disabled = true;
         document.getElementById("edu-st-dt").disabled = true;
         document.getElementById("edu-end-dt").disabled = true;
         document.getElementById("degree").disabled = true;
         document.getElementById("studyfield").disabled = true;
         document.getElementById("edu-des").disabled = true;

         document.getElementById("school").style.borderColor = 'transparent';
         document.getElementById("edu-st-dt").style.borderColor = 'transparent';
         document.getElementById("edu-end-dt").style.borderColor = 'transparent';
         document.getElementById("degree").style.borderColor = 'transparent';
         document.getElementById("studyfield").style.borderColor = 'transparent';
         document.getElementById("edu-des").style.borderColor = 'transparent';

     }
     function cancleeducation()
     {
      

         document.getElementById("school").value ="";
         document.getElementById("edu-st-dt").value = "";
         document.getElementById("edu-end-dt").value = "";
         document.getElementById("degree").value = "";
         document.getElementById("studyfield").value = "";
         document.getElementById("edu-des").value = "";

         document.getElementById("divEditEducation").style.visibility = "visible";
         document.getElementById("saveeducation").style.visibility = "hidden";
         document.getElementById("cancleeducation").style.visibility = "hidden";
         document.getElementById("school").disabled = true;
         document.getElementById("edu-st-dt").disabled = true;
         document.getElementById("edu-end-dt").disabled = true;
         document.getElementById("degree").disabled = true;
         document.getElementById("studyfield").disabled = true;
         document.getElementById("edu-des").disabled = true;

         document.getElementById("school").style.borderColor = 'transparent';
         document.getElementById("edu-st-dt").style.borderColor = 'transparent';
         document.getElementById("edu-end-dt").style.borderColor = 'transparent';
         document.getElementById("degree").style.borderColor = 'transparent';
         document.getElementById("studyfield").style.borderColor = 'transparent';
         document.getElementById("edu-des").style.borderColor = 'transparent';
     }
     function addeducation()
     {
         
         document.getElementById("edu-detail").style.display = "block";
         document.getElementById("saveeducation").style.border = "2px solid #0099CC";
         document.getElementById("cancleeducation").style.border = "2px solid #0099CC";
     }
//////////////////////////////////////////
     function addreview() {
        
         document.getElementById("review-detail").style.display = "block";
         document.getElementById("reviewblock").style.display = "block";
     }
     function rev()
     
     {
         document.getElementById("r").style.display = "block";
     }
     