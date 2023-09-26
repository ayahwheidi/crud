var courseName =document.querySelector("#courseName");
var courseCategory =document.querySelector("#courseCategory");
var coursePrice =document.querySelector("#coursePrice");
var courseDescription =document.querySelector("#courseDescription");
var courseCapacity =document.querySelector("#courseCapacity");
var addbtn =document.querySelector("#click");

var search=document.querySelector("#search");
var inputs=document.querySelectorAll(".inputs");
var isNameTrue=false;


/* because at the first time the cources was empty */
if(JSON.parse(localStorage.getItem("Savedcources"))==null)
{
    var courses=[];
}
else{
    courses=JSON.parse(localStorage.getItem("Savedcources"));
    displaydata();
}


addbtn.addEventListener("click",function(e){
e.preventDefault();
addcourse()
clearinputs();
displaydata();
});

function addcourse(){

 var cource= {
name:courseName.value,
category:courseCategory.value,
price:coursePrice.value,
desc:courseDescription.value,
capacity:courseCapacity.value,
}
courses.push(cource)
//console.log(courses);
localStorage.setItem("Savedcources",JSON.stringify(courses));
  const Toast = Swal.mixin({
    toast: true,
    position: 'bottom-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  })
  
  Toast.fire({
    icon: 'success',
    title: 'cource added successfuly'
  })

}
function clearinputs(){
for(var i=0;i<inputs.length;i++){
    inputs[i].value="";
}
}
function displaydata(){
    result="";
    for(var i=0;i<courses.length;i++){
        
        result+=`
        <tr>
        <td> ${i}</td>
        <td> ${courses[i].name}</td>
        <td> ${courses[i].category}</td>
        <td> ${courses[i].price}</td>
        <td> ${courses[i].desc}</td>
        <td> ${courses[i].capacity}</td>
        <td><button class="btn btn-outline-info">Update</button></td>
        <td><button class="btn btn-outline-danger" onclick="deleatcource(${i})">Delete</button></td>
        </<tr>
        `;

    }
document.getElementById("data").innerHTML=result;

}
function deleatcource(id){
    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
            courses.splice(id,1);
            localStorage.setItem("Savedcources",JSON.stringify(courses));

            displaydata();

          Swal.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success'
          )
        }
      })



}
search.addEventListener("keyup",function(e){

  console.log(e.target.value.toLowerCase());
   var result="";
    for(var i=0;i<courses.length;i++){
        if(courses[i].name.toLowerCase().includes(e.target.value.toLowerCase()))
        result+=`
        <tr>
        <td> ${i}</td>
        <td> ${courses[i].name}</td>
        <td> ${courses[i].category}</td>
        <td> ${courses[i].price}</td>
        <td> ${courses[i].desc}</td>
        <td> ${courses[i].capacity}</td>
        <td><button class="btn btn-outline-info">Update</button></td>
        <td><button class="btn btn-outline-danger" onclick="deleatcource(${i})">Delete</button></td>
        </<tr>
        `;

    }
document.getElementById("data").innerHTML=result;

}
)

courseName.addEventListener("keyup",function(){
   

document.getElementById("name-error").innerHTML="";
var pateern=/^[A-Z][a-z]{2,10}$/;
if(pateern.test(courseName.value)){
isNameTrue=true;
/* addbtn.removeAttribute("disabled");*/
courseName.classList.add("is-valid");
if( courseName.classList.contains("is-invalid"))
{
    courseName.classList.remove("is-invalid");
}


}

    else{
       
         
         isNameTrue=false;
         document.getElementById("name-error").innerHTML="name must be start with Capital and number of character between 3 and 10";
         courseName.classList.add("is-invalid");
         /*  addbtn.setAttribute("disabled","disabled");*/
         if(courseName.classList.contains("is-valid")){
            courseName.classList.remove("is-valid")
         }
   
        }
if(isNameTrue){
    addbtn.removeAttribute("disabled");
}
else{
    addbtn.setAttribute("disabled","disabled");
}
/* tihs will add after every keyup(or i put it in function and calliing  this function at the end of each keyup) like 

if(isNameTrue && isPriceTrue && isCategoryTrue){
    addbtn.removeAttribute("disabled");
}
else{
    addbtn.setAttribute("disabled","disabled");
}

*/ 
   }
)