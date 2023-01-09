// function show()
// {
//  console.log("show class")
// Input = document.getElementById("img");
// output = document.getElementById("img2");
// output.src= `${URL.createObjectURL(Input.files[0])}`
// <input type="file" accept="image/*" id="img"/ onchange="show()">
// {/* <input type="file" accept="image/*" id="img"/ onchange="show()">  */}

// }

fname = document.getElementById("fname");
lname = document.getElementById("lname");
mail = document.getElementById("mail");
num = document.getElementById("num");
address = document.getElementById("address");
img = document.getElementById("inpimg");
edu = document.getElementById("edu");
skill = document.getElementById("skill");
exp = document.getElementById("exp");
bod = document.getElementById("info-bod")
project = document.getElementById("project")

res_name = document.getElementById("res-name");
res_mail = document.getElementById("res-mail");
res_num = document.getElementById("res-num");
res_address = document.getElementById("res-address");
res_img = document.getElementById("out-img");
res_edu = document.getElementById("res-edu");
res_skill = document.getElementById("res-skill");
res_exp = document.getElementById("res-work");
res_project = document.getElementById("res-project");
res_bod = document.getElementById("res-bod"); 
btn = document.getElementById("generate");
console.log(res_bod, bod,btn)
function show() {
 console.log("show");
 bod.style.display = "none"; 
 btn.style.display = "none"; 
 res_bod.style.display = "flex"; 
 res_name.innerText = `${fname.value + lname.value}`
 res_exp.innerHTML = `<h3>Work & Experience: </h3>
 ${exp.value}`
 res_skill.innerHTML = `<h3>Skills: </h3>
 ${skill.value}`
 res_project.innerHTML = `<h3>Projects: </h3>
 ${project.value}`
 res_edu.innerHTML = `<h3>Education: </h3>
 ${edu.value}`
 res_num.innerHTML = `<h3>Contact Info: </h3>
 ${num.value}`
 res_mail.innerHTML = `<h3>Gmail: </h3>
 ${mail.value}`
 res_address.innerHTML = `<h3>Projects: </h3>
 ${address.value}`
res_img.src = `${URL.createObjectURL(img.files[0])}`;
}
btn.addEventListener("click",show); 
