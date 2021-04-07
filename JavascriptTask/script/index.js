class Employee{
    constructor(firstName, lastName,email,jobTitle,office,department,phone,skypeId,preferredName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.jobTitle = jobTitle;
        this.office = office;
        this.department = department;
        this.phone = phone;
        this.skypeId = skypeId;
        this.preferredName=preferredName;
      }

}
var employees=[], currentFilter, activeEmployee=0;

    window.addEventListener( "load", function( windowLoadE ) {
    var p, letter, button, holder;
    p= document.getElementById("getLetters");
    holder = document.getElementById( "buttonsHolder" );
    for ( var i = 65; i <= 90; i++ ) {
        letter = String.fromCharCode( i );
        button = document.createElement( "button" );
        button.setAttribute("class","alphabetClass");
        button.innerHTML = letter;
        button.setAttribute( "data-letter", letter );
        button.onclick = function( e ) { searchByLetter( this.getAttribute( "data-letter" ) ); };
        p.appendChild( button );
        if ( i == 90 ) {
            holder.appendChild( p );
        }
    }
} );
function printEmployee(i){
    document.getElementsByClassName("employee-card")[i].style.display="inline-block";
                    document.getElementsByClassName("name")[i].innerHTML = employees[i].firstName+" "+employees[i].lastName;
                    document.getElementsByClassName("employee-job-title")[i].innerHTML = employees[i].jobTitle;
                    document.getElementsByClassName("employee-department")[i].innerHTML = employees[i].department+" Department";
}
function searchByLetter( letter ) {
    hideAllEmployees();
    currentFilter=document.getElementById('selectType').value;
        for(var i=0;i<employees.length;i++){
            if((employees[i].lastName.charAt(0).toUpperCase()==letter && currentFilter=='Last Name')||(employees[i].firstName.charAt(0).toUpperCase()==letter && currentFilter=='First Name')||(employees[i].email.charAt(0).toUpperCase()==letter && currentFilter=='Email')||
            (employees[i].preferredName.charAt(0).toUpperCase()==letter && currentFilter=='Preferred Name')||(employees[i].jobTitle.charAt(0).toUpperCase()==letter && currentFilter=='Job Title')||(employees[i].office.charAt(0).toUpperCase()==letter && currentFilter=='Office')||
            (employees[i].department.charAt(0).toUpperCase()==letter && currentFilter=='Department')||(employees[i].skypeId.charAt(0).toUpperCase()==letter && currentFilter=='Skype ID')){
                printEmployee(i);
            }
        }
}
function openForm() {
  document.getElementById("myForm").style.display = "block";
}
function openEmployeeForm(value) {
    document.getElementById("employeeForm").style.display = "block";
    for(var i=0;i<employees.length;i++){
        if(employees[i].preferredName==value){
            document.getElementById('displayEmployeeId').value=i+1;
            document.getElementById('displayFirstName').value=employees[i].firstName;
            document.getElementById('displayLastName').value=employees[i].lastName;
            document.getElementById('displayPreferredName').value=employees[i].preferredName;
            document.getElementById('displayEmail').value=employees[i].email;
            document.getElementById('displayJobTitle').value=employees[i].jobTitle;
            document.getElementById('displayOffice').value=employees[i].office;
            document.getElementById('displayDepartment').value=employees[i].department;
            document.getElementById('displayPreferredName').value=employees[i].preferredName;
            document.getElementById('displayPhone').value=employees[i].phone;
            document.getElementById('displaySkypeId').value=employees[i].skypeId;
        }
    }

  }

  function closeForm() {
    var elements=document.getElementsByClassName("formerror");
    for(var i=0;i<elements.length;i++){
        elements[i].innerHTML="";
    }
    elements=document.getElementsByClassName("field-input");
    for(var i=0;i<elements.length;i++){
        elements[i].style.border="none";
    }
    document.getElementById("myForm").style.display = "none";
    document.getElementById("employeeForm").style.display = "none";
    
    var departmentList = [], officeList=[], jobList=[];
    for(var i=0;i<employees.length;i++){
        departmentList.push(employees[i].department);
        officeList.push(employees[i].office);
        jobList.push(employees[i].jobTitle);
    }    
    getFiltersByType(departmentList.sort(),'department-list','get-employee-department','get-employee-department-count','departmentContainer');
    getFiltersByType(officeList.sort(),'office-list','get-employee-office','get-employee-office-count','officeContainer');
    getFiltersByType(jobList.sort(),'job-title-list','get-employee-job-title','get-employee-job-title-count','jobTitleContainer');
}

function updateEmployeeForm(id) {
    for(var i=0;i<employees.length;i++)
    {
        if((id-1)==i){
            employees[i].firstName=document.getElementById('displayFirstName').value;
            employees[i].lastName=document.getElementById('displayLastName').value;
            employees[i].preferredName=document.getElementById('displayPreferredName').value;
            employees[i].email=document.getElementById('displayEmail').value;
            employees[i].jobTitle=document.getElementById('displayJobTitle').value;
            employees[i].office=document.getElementById('displayOffice').value;
            employees[i].department=document.getElementById('displayDepartment').value;
            employees[i].preferredName=document.getElementById('displayPreferredName').value;
            employees[i].phone=document.getElementById('displayPhone').value;
            employees[i].skypeId=document.getElementById('displaySkypeId').value;
        }
    }
    for(var i=0;i<employees.length;i++){
           printEmployee(i);
        }
        closeForm();
  }

function formSubmit() {
        var formEmail = document.EmployeeForm.email.value;
        var formSkypeId = document.EmployeeForm.skype.value;
        var formFirstName = document.EmployeeForm.firstname.value;
        var formLastName = document.EmployeeForm.lastname.value;
        var formJobTitle = document.EmployeeForm.jobtitle.value;
        var formOffice = document.EmployeeForm.office.value;
        var formDepartment = document.EmployeeForm.department.value;
        var formPhone = document.EmployeeForm.phone.value;
        var formPreferredName=formFirstName.concat(" ",formLastName); 
        var atPositionEmail=formEmail.indexOf("@"), dotPositionEmail=formEmail.lastIndexOf("."),atPositionSkypeId=formSkypeId.indexOf("@"),dotPositionSkypeId=formSkypeId.lastIndexOf("."); 
        var regEx = /^[a-zA-Z ]+$/;  
        var flag=1;
        if (formFirstName==null || formFirstName==""){  
        document.getElementsByClassName("formerror")[0].innerHTML = "Required"; 
        document.EmployeeForm.firstname.style.border="1px solid red"; 
        flag=0;  
        }
        else if(regEx.test(formFirstName)==false){
        document.getElementsByClassName("formerror")[0].innerHTML = "Enter letters and space only"; 
        document.EmployeeForm.firstname.style.border= "1px solid red"; 
        flag=0;   
        }
        else{
            document.EmployeeForm.firstname.style.border= "none";
            document.getElementsByClassName("formerror")[0].innerHTML = ""; 
        }
        if (formLastName==null || formLastName==""){  
        document.getElementsByClassName("formerror")[1].innerHTML = "Required"; 
        document.EmployeeForm.lastname.style.border= "1px solid red";   
        flag=0;   
        }
        else if(regEx.test(formLastName)==false){
        document.getElementsByClassName("formerror")[1].innerHTML = "Enter letters and space only"; 
        document.EmployeeForm.lastname.style.border= "1px solid red"; 
        flag=0;    
        }
        else{
            document.EmployeeForm.lastname.style.border= "none";
            document.getElementsByClassName("formerror")[1].innerHTML = ""; 
        }
        if(formEmail=="" || formEmail==null){
            document.getElementsByClassName("formerror")[2].innerHTML = "Required"; 
        document.EmployeeForm.email.style.border= "1px solid red";
        flag=0;  
        }
        else if (atPositionEmail<1 || dotPositionEmail<atPositionEmail+2 || dotPositionEmail+2>=formEmail.length){  
        document.getElementsByClassName("formerror")[2].innerHTML = "Please enter valid e-mail address"; 
        document.EmployeeForm.email.style.border= "1px solid red"; 
        flag=0; 
         }  
         else{
            document.EmployeeForm.email.style.border= "none";
            document.getElementsByClassName("formerror")[2].innerHTML = ""; 
        }
         if (formJobTitle==null || formJobTitle==""){ 
        document.getElementsByClassName("formerror")[3].innerHTML = "Required"; 
        document.EmployeeForm.jobtitle.style.border= "1px solid red"; 
        flag=0;   
        }
        else if(regEx.test(formJobTitle)==false){
        document.getElementsByClassName("formerror")[3].innerHTML = "Enter letters and space only"; 
        document.EmployeeForm.jobtitle.style.border= "1px solid red"; 
        flag=0;    
        }
        else{
            document.EmployeeForm.jobtitle.style.border= "none";
            document.getElementsByClassName("formerror")[3].innerHTML = ""; 
        }
        if (formOffice==null || formOffice==""){  
        document.getElementsByClassName("formerror")[4].innerHTML = "Required"; 
        document.EmployeeForm.office.style.border= "1px solid red"; 
        flag=0;  
        }
        else if(regEx.test(formOffice)==false){
        document.getElementsByClassName("formerror")[4].innerHTML = "Enter letters and space only"; 
        document.EmployeeForm.office.style.border= "1px solid red"; 
        flag=0;    
        }
        else{
            document.EmployeeForm.office.style.border= "none";
            document.getElementsByClassName("formerror")[4].innerHTML = ""; 
        }
        if (formDepartment==null || formDepartment==""){ 
        document.getElementsByClassName("formerror")[5].innerHTML = "Required"; 
        document.EmployeeForm.department.style.border= "1px solid red"; 
        flag=0;   
        }
        else if(regEx.test(formDepartment)==false){
        document.getElementsByClassName("formerror")[5].innerHTML = "Enter letters and space only"; 
        document.EmployeeForm.department.style.border= "1px solid red";
        flag=0;   
        }
        else{
            document.EmployeeForm.department.style.border= "none";
            document.getElementsByClassName("formerror")[5].innerHTML = ""; 
        }
        if(formPhone=="" || formPhone==null)
        {
        document.getElementsByClassName("formerror")[6].innerHTML = "Required"; 
        document.EmployeeForm.phone.style.border= "1px solid red"; 
        flag=0; 
        }
        else if(isNaN(formPhone))
        {
        document.getElementsByClassName("formerror")[6].innerHTML = "Enter the valid Mobile Number(Like : 9566137117)"; 
        document.EmployeeForm.phone.style.border= "none"; 
        flag=0; 
        }
        else if(formPhone.length!=10)
        {
        document.getElementsByClassName("formerror")[6].innerHTML = "Your Mobile Number must be 10 Integers"; 
        document.EmployeeForm.phone.style.border= "1px solid red";
        flag=0; 
        }
        else{
            document.EmployeeForm.phone.style.border= "none";
            document.getElementsByClassName("formerror")[6].innerHTML = ""; 
        } 
        if(formSkypeId=="" || formSkypeId==null){
            document.getElementsByClassName("formerror")[7].innerHTML = "Required"; 
        document.EmployeeForm.skype.style.border= "1px solid red";
        flag=0;  
        }
        else if (atPositionSkypeId<1 || dotPositionSkypeId<atPositionSkypeId+2 || dotPositionSkypeId+2>=formSkypeId.length){  
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
        var employee= new Employee(formFirstName,formLastName,formEmail,formJobTitle,formOffice,formDepartment,formPhone,formSkypeId,formPreferredName);
        employees.push(employee);
        var elements=document.getElementsByClassName("field-input");
        for(var i=0;i<elements.length;i++){
        elements[i].value="";
        }
        for(var i=0;i<employees.length;i++){
            document.getElementById('noEmployeeAdded').style.display="none";
                var preferred_name=employees[i].preferredName;
                var new_employee = document.createElement("div");
                new_employee.setAttribute("class", "employee-card");
                new_employee.onclick = function() { openEmployeeForm(preferred_name); };
                new_employee.innerHTML+="<img class='container-image' src='https://cdn.wisden.com/wp-content/uploads/2017/11/GettyImages-689405274-e1520010556769.jpg'>"+
                "<div class='container-text'>"+
                "<h4 class='name'></h4>"+
                "<p class='employee-job-title'></p>"+
                "<p class='employee-department'></p>"+
                "<i class='fas fa-phone-square-alt'></i>"+
                "<i class='fas fa-envelope'></i>"+
                "<i class='fas fa-comment'></i>"+
                "<i class='fas fa-star'></i>"+
                "<i class='fas fa-heart'></i>"+
                "</div>";
                document.getElementById("employeeList").appendChild(new_employee);
                printEmployee(i);
            }
        closeForm();
         return true;
    }

    function hideAllEmployees(){
         var elements=document.getElementsByClassName("employee-card");
        for(var i=0;i<elements.length;i++){
        document.getElementsByClassName("employee-card")[i].style.display="none";
    }
    }

    function filterEmployee(type){
        hideAllEmployees();
        for(var i=0;i<employees.length;i++){
         if(employees[i].department==type){
            printEmployee(i);
         }
        if(employees[i].office==type){
                printEmployee(i);
            }
        if(employees[i].jobTitle==type){
                printEmployee(i);
            }
         }
    }

    function getData(){  
        hideAllEmployees();
        var enteredData=document.getElementsByName('searchEntry');
        currentFilter=document.getElementById('selectType').value;
            for(var i=0;i<employees.length;i++){
                if((employees[i].lastName.includes(enteredData[0].value) && currentFilter=='Last Name')||(employees[i].firstName.includes(enteredData[0].value) && currentFilter=='First Name')||(employees[i].email.includes(enteredData[0].value) && currentFilter=='Email')||
                (employees[i].preferredName.includes(enteredData[0].value) && currentFilter=='Preferred Name')||(employees[i].jobTitle.includes(enteredData[0].value) && currentFilter=='Job Title')||(employees[i].office.includes(enteredData[0].value) && currentFilter=='Office')||
                (employees[i].department.includes(enteredData[0].value) && currentFilter=='Department')||(employees[i].phone.includes(enteredData[0].value) && currentFilter=='Phone')||(employees[i].skypeId.includes(enteredData[0].value) && currentFilter=='Skype ID')){
                printEmployee(i);
            }
        }
}

function clearData(){
    hideAllEmployees();
    for(var i=0;i<employees.length;i++){
        printEmployee(i);
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
function filterByViewMore(type){
var departmentList = [], officeList=[], jobList=[];
for(var i=0;i<employees.length;i++){
    departmentList.push(employees[i].department);
    officeList.push(employees[i].office);
    jobList.push(employees[i].jobTitle);
}    
if(type=='department')
viewMore(departmentList.sort(),'get-employee-department','get-employee-department-count');
else if(type=='office')
viewMore(officeList.sort(),'get-employee-office','get-employee-office-count');
else
viewMore(jobList.sort(),'get-employee-job-title','get-employee-job-title-count');
}
function viewMore(filterTypeList,filterType,filterCount){
    var previousElement, listItems=[],itemsCount=[];
    for (var i = 0; i < filterTypeList.length; i++) {
        if (filterTypeList[i] != previousElement) {
          listItems.push(filterTypeList[i]);
          itemsCount.push(1);
        } else {
            itemsCount[itemsCount.length - 1]++;
        }
        previousElement = filterTypeList[i];
      }
      for(i=4;i<listItems.length;i++)
      {
        document.getElementsByClassName(filterType)[i].style.display="inline-block";
        document.getElementsByClassName(filterCount)[i].style.display="inline-block";
}
}

function removeFilters(filterType){
    var filterElements=document.getElementsByClassName(filterType);
    for(var i=0;i<filterElements.length;i++){
        document.getElementsByClassName(filterType)[i].style.display="none";
}}

function getFiltersByType(filterTypeList,filterType,filterTypeClass,filterCountClass,filterCategory){
          var previousElement, listItems=[],itemsCount=[],viewmore=0;
          for (var i = 0; i < filterTypeList.length; i++) {
        if (filterTypeList[i] != previousElement) {
          listItems.push(filterTypeList[i]);
          itemsCount.push(1);
        } else {
            itemsCount[itemsCount.length - 1]++;
        }
        previousElement = filterTypeList[i];
      }
      for(i=0;i<listItems.length;i++){
          var newFilter = document.createElement("div");
          newFilter.setAttribute("class", filterType);
          newFilter.innerHTML+='<button class="'+filterTypeClass+'" id="employee_'+(activeEmployee)+'" onclick="filterEmployee(document.getElementById(\'employee_' + (activeEmployee++) + '\').innerHTML)"></button><p class="'+filterCountClass+'"></p>';
          document.getElementById(filterCategory).appendChild(newFilter);
      }
      removeFilters(filterTypeClass);
      removeFilters(filterCountClass);
      for(i=0;i<listItems.length;i++)
      {
        if(i<=3){
            document.getElementsByClassName(filterTypeClass)[i].style.display="inline-block";
        document.getElementsByClassName(filterTypeClass)[i].innerHTML=listItems[i];
        document.getElementsByClassName(filterCountClass)[i].style.display="inline-block";
        document.getElementsByClassName(filterCountClass)[i].innerHTML="("+itemsCount[i]+")";
        }
        else{
            document.getElementsByClassName('view-more')[0].style.display="inline-block";
            document.getElementsByClassName('view-more')[1].style.display="inline-block";
            document.getElementsByClassName('view-more')[2].style.display="inline-block";
            document.getElementsByClassName(filterTypeClass)[i].innerHTML=listItems[i];
            document.getElementsByClassName(filterCountClass)[i].innerHTML="("+itemsCount[i]+")";
}}}