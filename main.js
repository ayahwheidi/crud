var courseName =document.querySelector("#courseName");
var courseCategory =document.querySelector("#courseCategory");
var coursePrice =document.querySelector("#coursePrice");
var courseDescription =document.querySelector("#courseDescription");
var courseCapacity =document.querySelector("#courseCapacity");
var addbtn =document.querySelector("#click");
var courses=[];
var inputs=document.querySelectorAll(".inputs");


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

courses.splice(id,1)
displaydata()
}