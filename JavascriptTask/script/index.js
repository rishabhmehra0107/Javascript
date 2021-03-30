var employeesFirstName=[];
    var employeesLastName=[];
    var employeesEmail=[];
    var employeesJobTitle=[];
    var employeesOffice=[];
    var employeesDepartment=[];
    var employeesPhone=[];
    var employeesSkypeId=[];
    var employeesPreferredName=[];
    var currentFilterType;
    window.addEventListener( "load", function( windowLoadE ) {
    var p, letter, button, holder;
    holder = document.getElementById( "buttonsHolder" );
    for ( var i = 65; i <= 90; i++ ) {
        if ( i == 65) {
            p = document.createElement( "p" );
        }
        letter = String.fromCharCode( i );
        button = document.createElement( "button" );
        button.style.background="#00b1fc";
        button.style.fontSize="18px";
        button.style.color="white";
        button.style.border="none";
        button.style.cursor="pointer";
        button.style.margin="4px";
        button.style.width="33px";
        button.style.height="33px";
        button.style.padding="0px";
        button.style.fontFamily="'Open Sans', sans-serif";
        button.innerHTML = letter;
        button.setAttribute( "data-letter", letter );
        button.onclick = function( e ) { searchByLetter( this.getAttribute( "data-letter" ) ); };
        p.appendChild( button );
        if ( i == 90 ) {
            holder.appendChild( p );
        }
    }
} );
function searchByLetter( letter ) {
    currentFilterType=document.getElementById('selectType').value;
    if(currentFilterType=='Last Name'){
        for(var i=0;i<employeesLastName.length;i++){
            if(employeesLastName[i].charAt(0)==letter){
                document.getElementsByClassName("employee-card")[i].style.display="inline-block";
                    document.getElementsByClassName("name")[i].innerHTML = employeesFirstName[i]+" "+employeesLastName[i];
                    document.getElementsByClassName("employee-job-title")[i].innerHTML = employeesJobTitle[i];
                    document.getElementsByClassName("employee-department")[i].innerHTML = employeesDepartment[i];
            }
        }
    }
    else if(currentFilterType=='Preffered Name'){
        for(var i=0;i<employeesPreferredName.length;i++){
            if(employeesPreferredName[i].charAt(0)==letter){
                document.getElementsByClassName("employee-card")[i].style.display="inline-block";
                    document.getElementsByClassName("name")[i].innerHTML = employeesFirstName[i]+" "+employeesLastName[i];
                    document.getElementsByClassName("employee-job-title")[i].innerHTML = employeesJobTitle[i];
                    document.getElementsByClassName("employee-department")[i].innerHTML = employeesDepartment[i];
            }
        }
    }
    else if(currentFilterType=='Department'){
        for(var i=0;i<employeesDepartment.length;i++){
            if(employeesDepartment[i].charAt(0)==letter){
                document.getElementsByClassName("employee-card")[i].style.display="inline-block";
                    document.getElementsByClassName("name")[i].innerHTML = employeesFirstName[i]+" "+employeesLastName[i];
                    document.getElementsByClassName("employee-job-title")[i].innerHTML = employeesJobTitle[i];
                    document.getElementsByClassName("employee-department")[i].innerHTML = employeesDepartment[i];
            }
        }
    }
    else if(currentFilterType=='Office'){
        for(var i=0;i<employeesOffice.length;i++){
            if(employeesOffice[i].charAt(0)==letter){
                document.getElementsByClassName("employee-card")[i].style.display="inline-block";
                    document.getElementsByClassName("name")[i].innerHTML = employeesFirstName[i]+" "+employeesLastName[i];
                    document.getElementsByClassName("employee-job-title")[i].innerHTML = employeesJobTitle[i];
                    document.getElementsByClassName("employee-department")[i].innerHTML = employeesDepartment[i];
            }
        }
    }
    else if(currentFilterType=='Job Title'){
        for(var i=0;i<employeesJobTitle.length;i++){
            if(employeesJobTitle[i].charAt(0)==letter){
                document.getElementsByClassName("employee-card")[i].style.display="inline-block";
                    document.getElementsByClassName("name")[i].innerHTML = employeesFirstName[i]+" "+employeesLastName[i];
                    document.getElementsByClassName("employee-job-title")[i].innerHTML = employeesJobTitle[i];
                    document.getElementsByClassName("employee-department")[i].innerHTML = employeesDepartment[i];
            }
        }
    }
    else{
        for(var i=0;i<employeesFirstName.length;i++){
            if(employeesFirstName[i].charAt(0)==letter){
                document.getElementsByClassName("employee-card")[i].style.display="inline-block";
                    document.getElementsByClassName("name")[i].innerHTML = employeesFirstName[i]+" "+employeesLastName[i];
                    document.getElementsByClassName("employee-job-title")[i].innerHTML = employeesJobTitle[i];
                    document.getElementsByClassName("employee-department")[i].innerHTML = employeesDepartment[i];
            }
        }
}
}
function openForm() {
  document.getElementById("myForm").style.display = "block";
}
function openEmployeeForm(value) {
    document.getElementById("employeeForm").style.display = "block";
    for(var i=0;i<employeesPreferredName.length;i++){
        if(employeesPreferredName[i]==value){
            document.getElementById('displayEmployeeId').value=i+1;
            document.getElementById('displayFirstName').value=employeesFirstName[i];
            document.getElementById('displayLastName').value=employeesLastName[i];
            document.getElementById('displayPreferredName').value=employeesPreferredName[i];
            document.getElementById('displayEmail').value=employeesEmail[i];
            document.getElementById('displayJobTitle').value=employeesJobTitle[i];
            document.getElementById('displayOffice').value=employeesOffice[i];
            document.getElementById('displayDepartment').value=employeesDepartment[i];
            document.getElementById('displayPreferredName').value=employeesPreferredName[i];
            document.getElementById('displayPhone').value=employeesPhone[i];
            document.getElementById('displaySkypeId').value=employeesSkypeId[i];
        }
    }

  }

function closeForm() {
  document.getElementById("myForm").style.display = "none";
  document.getElementById("employeeForm").style.display = "none";
  for(var i=0;i<employeesPreferredName.length;i++){
                document.getElementsByClassName("employee-card")[i].style.display="inline-block";
                document.getElementsByClassName("name")[i].innerHTML = employeesFirstName[i]+" "+employeesLastName[i];
                document.getElementsByClassName("employee-job-title")[i].innerHTML = employeesJobTitle[i];
                document.getElementsByClassName("employee-department")[i].innerHTML = employeesDepartment[i];
        }
        var departmentType = [],
        departmentCount = [],
        previousDepartment="abc";
    
      var departmentList=employeesDepartment.sort();
      for (var i = 0; i < departmentList.length; i++) {
        if (departmentList[i] != previousDepartment) {
          departmentType.push(departmentList[i]);
          departmentCount.push(1);
        } else {
            departmentCount[departmentCount.length - 1]++;
        }
        previousDepartment = departmentList[i];
      }
      for(i=0;i<departmentType.length;i++)
      {
        document.getElementsByClassName('get-employee-department')[i].innerHTML=departmentType[i];
        document.getElementsByClassName('get-employee-department-count')[i].innerHTML="("+departmentCount[i]+")";
      }

      var officeType = [],
        officeCount = [],
        previousOffice="abc";
    
      var officeList=employeesOffice.sort();
      for (var i = 0; i < officeList.length; i++) {
        if (officeList[i] != previousOffice) {
          officeType.push(officeList[i]);
          officeCount.push(1);
        } else {
            officeCount[officeCount.length - 1]++;
        }
        previousOffice = officeList[i];
      }
      for(i=0;i<officeType.length;i++)
      {
        document.getElementsByClassName('get-employee-office')[i].innerHTML=officeType[i];
        document.getElementsByClassName('get-employee-office-count')[i].innerHTML="("+officeCount[i]+")";
      }

      var jobType = [],
        jobCount = [],
        previousJob="abc";
    
      var jobList=employeesJobTitle.sort();
      for (var i = 0; i < jobList.length; i++) {
        if (jobList[i] != previousJob) {
          jobType.push(jobList[i]);
          jobCount.push(1);
        } else {
            jobCount[jobCount.length - 1]++;
        }
        previousJob = jobList[i];
      }
      for(i=0;i<jobType.length;i++)
      {
        document.getElementsByClassName('get-employee-job-title')[i].innerHTML=jobType[i];
        document.getElementsByClassName('get-employee-job-title-count')[i].innerHTML="("+jobCount[i]+")";
      }
}

function updateEmployeeForm(id) {
    for(var i=0;i<employeesPreferredName.length;i++)
    {
        if((id-1)==i){
            employeesFirstName[i]=document.getElementById('displayFirstName').value;
            employeesLastName[i]=document.getElementById('displayLastName').value;
            employeesPreferredName[i]=document.getElementById('displayPreferredName').value;
            employeesEmail[i]=document.getElementById('displayEmail').value;
            employeesJobTitle[i]=document.getElementById('displayJobTitle').value;
            employeesOffice[i]=document.getElementById('displayOffice').value;
            employeesDepartment[i]=document.getElementById('displayDepartment').value;
            employeesPreferredName[i]=document.getElementById('displayPreferredName').value;
            employeesPhone[i]=document.getElementById('displayPhone').value;
            employeesSkypeId[i]=document.getElementById('displaySkypeId').value;
        }
    }
    alert("Employee Details Updated");
  }

function formSubmit() {
        var email = document.EmployeeForm.email.value;
        var skypeId = document.EmployeeForm.skype.value;
        var firstName = document.EmployeeForm.firstname.value;
        var lastName = document.EmployeeForm.lastname.value;
        var jobTitle = document.EmployeeForm.jobtitle.value;
        var office = document.EmployeeForm.office.value;
        var department = document.EmployeeForm.department.value;
        var phone = document.EmployeeForm.phone.value;
        var preferredName=firstName.concat(" ",lastName);
        var atPositionEmail=email.indexOf("@");  
        var dotPositionEmail=email.lastIndexOf(".");
        var regEx = /^[a-zA-Z ]+$/;  
        var flag=1;
        if (firstName==null || firstName==""){  
        document.getElementsByClassName("formerror")[0].innerHTML = "Name can't be blank"; 
        document.EmployeeForm.firstname.style.border="1px solid red"; 
        flag=0;  
        }
        else if(regEx.test(firstName)==false){
        document.getElementsByClassName("formerror")[0].innerHTML = "Enter letters and space only"; 
        document.EmployeeForm.firstname.style.border= "1px solid red"; 
        flag=0;   
        }
        else{
            document.EmployeeForm.firstname.style.border= "none";
            document.getElementsByClassName("formerror")[0].innerHTML = ""; 
        }
        if (lastName==null || lastName==""){  
        document.getElementsByClassName("formerror")[1].innerHTML = "Name can't be blank"; 
        document.EmployeeForm.lastname.style.border= "1px solid red";   
        flag=0;   
        }
        else if(regEx.test(lastName)==false){
        document.getElementsByClassName("formerror")[1].innerHTML = "Enter letters and space only"; 
        document.EmployeeForm.lastname.style.border= "1px solid red"; 
        flag=0;    
        }
        else{
            document.EmployeeForm.lastname.style.border= "none";
            document.getElementsByClassName("formerror")[1].innerHTML = ""; 
        }
        if (atPositionEmail<1 || dotPositionEmail<atPositionEmail+2 || dotPositionEmail+2>=email.length){  
        document.getElementsByClassName("formerror")[2].innerHTML = "Please enter valid e-mail address"; 
        document.EmployeeForm.email.style.border= "1px solid red"; 
        flag=0; 
         }  
         else{
            document.EmployeeForm.email.style.border= "none";
            document.getElementsByClassName("formerror")[2].innerHTML = ""; 
        }
         if (jobTitle==null || jobTitle==""){ 
        document.getElementsByClassName("formerror")[3].innerHTML = "Job title can't be blank"; 
        document.EmployeeForm.jobtitle.style.border= "1px solid red"; 
        flag=0;   
        }
        else if(regEx.test(jobTitle)==false){
        document.getElementsByClassName("formerror")[3].innerHTML = "Enter letters and space only"; 
        document.EmployeeForm.jobtitle.style.border= "1px solid red"; 
        flag=0;    
        }
        else{
            document.EmployeeForm.jobtitle.style.border= "none";
            document.getElementsByClassName("formerror")[3].innerHTML = ""; 
        }
        if (office==null || office==""){  
        document.getElementsByClassName("formerror")[4].innerHTML = "Office name can't be blank"; 
        document.EmployeeForm.office.style.border= "1px solid red"; 
        flag=0;  
        }
        else if(regEx.test(office)==false){
        document.getElementsByClassName("formerror")[4].innerHTML = "Enter letters and space only"; 
        document.EmployeeForm.office.style.border= "1px solid red"; 
        flag=0;    
        }
        else{
            document.EmployeeForm.office.style.border= "none";
            document.getElementsByClassName("formerror")[4].innerHTML = ""; 
        }
        if (department==null || department==""){ 
        document.getElementsByClassName("formerror")[5].innerHTML = "Department name can't be blank"; 
        document.EmployeeForm.department.style.border= "1px solid red"; 
        flag=0;   
        }
        else if(regEx.test(department)==false){
        document.getElementsByClassName("formerror")[5].innerHTML = "Enter letters and space only"; 
        document.EmployeeForm.department.style.border= "1px solid red";
        flag=0;   
        }
        else{
            document.EmployeeForm.department.style.border= "none";
            document.getElementsByClassName("formerror")[5].innerHTML = ""; 
        }
        if(phone=="" || phone==null)
        {
        document.getElementsByClassName("formerror")[6].innerHTML = "Please Enter the Phone Number"; 
        document.EmployeeForm.phone.style.border= "1px solid red"; 
        flag=0; 
        }
        else if(isNaN(phone))
        {
        document.getElementsByClassName("formerror")[6].innerHTML = "Enter the valid Mobile Number(Like : 9566137117)"; 
        document.EmployeeForm.phone.style.border= "none"; 
        flag=0; 
        }
        else if(phone.length!=10)
        {
        document.getElementsByClassName("formerror")[6].innerHTML = "Your Mobile Number must be 10 Integers"; 
        document.EmployeeForm.phone.style.border= "1px solid red";
        flag=0; 
        }
        else{
            document.EmployeeForm.phone.style.border= "none";
            document.getElementsByClassName("formerror")[6].innerHTML = ""; 
        }
        var atPositionSkypeId=skypeId.indexOf("@");  
        var dotPositionSkypeId=skypeId.lastIndexOf(".");  
        if (atPositionSkypeId<1 || dotPositionSkypeId<atPositionSkypeId+2 || dotPositionSkypeId+2>=skypeId.length){  
        document.getElementsByClassName("formerror")[7].innerHTML = "Please enter valid Skype ID"; 
        document.EmployeeForm.skype.style.border= "1px solid red";
        flag=0;  
         }
         else{
            document.EmployeeForm.skype.style.border= "none";
            document.getElementsByClassName("formerror")[7].innerHTML = ""; 
        }
        if(flag==0){
        return false;
        }
         employeesFirstName.push(firstName);
         employeesLastName.push(lastName);
         employeesEmail.push(email);
         employeesJobTitle.push(jobTitle);
         employeesDepartment.push(department);
         employeesOffice.push(office);
         employeesPhone.push(phone);
         employeesSkypeId.push(skypeId);
         employeesPreferredName.push(preferredName);
         alert("Employee added successfully");
         document.EmployeeForm.firstname.value= "";
         document.EmployeeForm.lastname.value= "";
         document.EmployeeForm.email.value= "";
         document.EmployeeForm.jobtitle.value= "";
         document.EmployeeForm.office.value= "";
         document.EmployeeForm.department.value= "";
         document.EmployeeForm.phone.value= "";
         document.EmployeeForm.skype.value= "";

         return true;
    }

    function displayEmployee(type){
        for(var i=0;i<employeesDepartment.length;i++){
         if(employeesDepartment[i]==type){
            document.getElementsByClassName("employee-card")[i].style.display="inline-block";
            document.getElementsByClassName("name")[i].innerHTML = employeesFirstName[i]+" "+employeesLastName[i];
            document.getElementsByClassName("employee-job-title")[i].innerHTML = employeesJobTitle[i];
            document.getElementsByClassName("employee-department")[i].innerHTML = employeesDepartment[i]+" Department";
         }
         }
        for(var i=0;i<employeesDepartment.length;i++){
            if(employeesOffice[i]=='type'){
                document.getElementsByClassName("employee-card")[i].style.display="inline-block";
                document.getElementsByClassName("name")[i].innerHTML = employeesFirstName[i]+" "+employeesLastName[i];
                document.getElementsByClassName("employee-job-title")[i].innerHTML = employeesJobTitle[i];
                document.getElementsByClassName("employee-department")[i].innerHTML = employeesDepartment[i]+" Department";
            }
         }
        for(var i=0;i<employeesDepartment.length;i++){
            if(employeesJobTitle[i]==type){
                document.getElementsByClassName("employee-card")[i].style.display="inline-block";
                document.getElementsByClassName("name")[i].innerHTML = employeesFirstName[i]+" "+employeesLastName[i];
                document.getElementsByClassName("employee-job-title")[i].innerHTML = employeesJobTitle[i];
                document.getElementsByClassName("employee-department")[i].innerHTML = employeesDepartment[i]+" Department";
            }
         }
        }

    function getData(){
        var enteredData=document.getElementsByName('searchEntry');
        currentFilterType=document.getElementById('selectType').value;
        if(currentFilterType=='Last Name'){
            for(var i=0;i<employeesLastName.length;i++){
                if(employeesLastName[i].includes(enteredData[0].value)){
                document.getElementsByClassName("employee-card")[i].style.display="inline-block";
                document.getElementsByClassName("name")[i].innerHTML = employeesFirstName[i]+" "+employeesLastName[i];
                document.getElementsByClassName("employee-job-title")[i].innerHTML = employeesJobTitle[i];
                document.getElementsByClassName("employee-department")[i].innerHTML = employeesDepartment[i];
            }
        }
        }
        else if(currentFilterType=='Preffered Name'){
            for(var i=0;i<employeesPreferredName.length;i++){
                if(employeesPreferredName[i].includes(enteredData[0].value)){
                document.getElementsByClassName("employee-card")[i].style.display="inline-block";
                document.getElementsByClassName("name")[i].innerHTML = employeesFirstName[i]+" "+employeesLastName[i];
                document.getElementsByClassName("employee-job-title")[i].innerHTML = employeesJobTitle[i];
                document.getElementsByClassName("employee-department")[i].innerHTML = employeesDepartment[i];
            }
        }
        }
        else if(currentFilterType=='Department'){
            for(var i=0;i<employeesDepartment.length;i++){
                if(employeesDepartment[i].includes(enteredData[0].value)){
                document.getElementsByClassName("employee-card")[i].style.display="inline-block";
                document.getElementsByClassName("name")[i].innerHTML = employeesFirstName[i]+" "+employeesLastName[i];
                document.getElementsByClassName("employee-job-title")[i].innerHTML = employeesJobTitle[i];
                document.getElementsByClassName("employee-department")[i].innerHTML = employeesDepartment[i];
            }
        }
        }
        else if(currentFilterType=='Office'){
            for(var i=0;i<employeesOffice.length;i++){
                if(employeesOffice[i].includes(enteredData[0].value)){
                document.getElementsByClassName("employee-card")[i].style.display="inline-block";
                document.getElementsByClassName("name")[i].innerHTML = employeesFirstName[i]+" "+employeesLastName[i];
                document.getElementsByClassName("employee-job-title")[i].innerHTML = employeesJobTitle[i];
                document.getElementsByClassName("employee-department")[i].innerHTML = employeesDepartment[i];
            }
        }
        }
        else if(currentFilterType=='Job Title'){
            for(var i=0;i<employeesJobTitle.length;i++){
                if(employeesJobTitle[i].includes(enteredData[0].value)){
                document.getElementsByClassName("employee-card")[i].style.display="inline-block";
                document.getElementsByClassName("name")[i].innerHTML = employeesFirstName[i]+" "+employeesLastName[i];
                document.getElementsByClassName("employee-job-title")[i].innerHTML = employeesJobTitle[i];
                document.getElementsByClassName("employee-department")[i].innerHTML = employeesDepartment[i];
                }
        }
        }
        else{
            for(var i=0;i<employeesFirstName.length;i++){
                if(employeesFirstName[i].includes(enteredData[0].value)){
                document.getElementsByClassName("employee-card")[0].style.display="inline-block";
                document.getElementsByClassName("name")[i].innerHTML = employeesFirstName[i]+" "+employeesLastName[i];
                document.getElementsByClassName("employee-job-title")[i].innerHTML = employeesJobTitle[i];
                document.getElementsByClassName("employee-department")[i].innerHTML = employeesDepartment[i];
            }
        }
    }
}

function clearData(){
    var elements=document.getElementsByClassName("employee-card");
    for(var i=0;i<elements.length;i++){
        document.getElementsByClassName("employee-card")[i].style.display="none";
    }
}

function removeError(errorFrom){
    if(errorFrom=='fromFirstName'){
        document.EmployeeForm.firstname.style.border= "none";
        document.getElementsByClassName("formerror")[0].innerHTML = "";
    }
    else if(errorFrom=='fromLastName'){
        document.EmployeeForm.lastname.style.border= "none";
        document.getElementsByClassName("formerror")[1].innerHTML = "";
    }
    else if(errorFrom=='fromEmail'){
        document.EmployeeForm.email.style.border= "none";
        document.getElementsByClassName("formerror")[2].innerHTML = "";
    }
    else if(errorFrom=='fromJobTitle'){
        document.EmployeeForm.jobtitle.style.border= "none";
        document.getElementsByClassName("formerror")[3].innerHTML = "";
    }
    else if(errorFrom=='fromDepartment'){
        document.EmployeeForm.department.style.border= "none";
        document.getElementsByClassName("formerror")[5].innerHTML = "";
    }
    else if(errorFrom=='fromOffice'){
        document.EmployeeForm.office.style.border= "none";
        document.getElementsByClassName("formerror")[4].innerHTML = "";
    }
    else if(errorFrom=='fromPhone'){
        document.EmployeeForm.phone.style.border= "none";
        document.getElementsByClassName("formerror")[6].innerHTML = "";
    }
    else if(errorFrom=='fromSkypeId'){
        document.EmployeeForm.skype.style.border= "none";
        document.getElementsByClassName("formerror")[7].innerHTML = "";
    }
}