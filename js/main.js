
const name = document.getElementById("name");
const password = document.getElementById("password");
const passwordConfirm = document.getElementById("confirmPassword");
const email = document.getElementById("email");

let error = document.getElementById("error");
clickCountReg = 0;
clickCountReg2 = 0;
let fail ="";

document.getElementById("registrationForm").addEventListener("submit", chekForm);

function chekForm(event) {
    event.preventDefault();

    if (name.value===""||password.value===""||passwordConfirm.value===""||email.value==="") {
        fail = "Fill in the blanks!";
    }else if(name.value.length<3){
        fail = "The minimum name length is 3 characters, the maximum is 16!";
    }else if(password.value.length<8 || password.value.length>24){
        fail = "The minimum password length is 8 characters, the maximum is 24!";
    }else if(password.value !== passwordConfirm.value){
        fail = "Passwords must match!";
    }
    if(fail!==""){
        error.innerHTML = fail;
        return;
    }
    alert("Thnx bro)")
    name.value = "";
    password.value = "";
    email.value = "";
    passwordConfirm.value = "";
}

document.getElementById("visiblePas").addEventListener("click", function() {
    clickCountReg++
    if (clickCountReg % 2 === 1){
        document.getElementById("password").type = "text";
        document.getElementById("visiblePas").src = "css/img/invisible.png";
    }else{
        document.getElementById("password").type = "password";
        document.getElementById("visiblePas").src = "css/img/visible.png";
    }
    return true;
});
//Видимость повтора пароля
document.getElementById("visibleConfPas").addEventListener("click", function() {
    clickCountReg2++
    if (clickCountReg2 % 2 === 1){
        document.getElementById("confirmPassword").type = "text";
        document.getElementById("visibleConfPas").src = "css/img/invisible.png";
    }else{
        document.getElementById("confirmPassword").type = "password";
        document.getElementById("visibleConfPas").src = "css/img/visible.png";
    }
    return true;
});
let clickCount = 0;
let con = document.getElementById("contacts")
let vk = document.getElementById("vk")
let tg = document.getElementById("tg")

con.addEventListener("click", function(){
    clickCount++;
    if (clickCount % 2 === 1) {
        vk.classList.remove("contVkBack");
        tg.classList.remove("contTgBack");
        vk.style.display = "block";
        tg.style.display = "block";
        vk.classList.add("contVk")
        tg.classList.add("contTg");
    } else {
        vk.classList.remove("contVk");
        tg.classList.remove("contTg");
        vk.classList.add("contVkBack")
        tg.classList.add("contTgBack");
        return true;
    }
});