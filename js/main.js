document.getElementById("reg-form").addEventListener("submit", checkForm)

function checkForm(event) {
    event.preventDefault();
    let el = document.getElementById("reg-form");

    let name = el.username.value;
    let pass = el.pass.value;
    let conf = el.conf_pass.value;
    let email = el.email.value;

    let fail = "";

    if (name === "" || pass === "" || conf === "" || email === "") {
        fail = "Fill in the blanks!"; //Пустые поля
    } else if (name.length < 3 || name.length > 16) {
        fail = "The minimum name length is 3 characters, the maximum is 16!"; //Длина никнейма
    } else if (pass !== conf) {
        fail = "Passwords must match!"; //Пароли не совпадают
    } else if (pass.length < 8 || pass.length > 24) {
        fail = "The minimum password length is 8 characters, the maximum is 24!"; //Длина пароля
    }
    if (fail !== "") {
        document.getElementById("error").innerHTML = fail;
        return;
    }

    alert("Все данные корректно введены");
    window.location = "https://google.com";
}
//Видимость пароля
document.getElementById("checkPass").addEventListener("click", function() {
    clickCountReg++
    if (clickCountReg % 2 === 1){
        document.getElementById("pass").type = "text";
        document.getElementById("checkPass").src = "css/img/invisible.png";
    }else{
        document.getElementById("pass").type = "password";
        document.getElementById("checkPass").src = "css/img/visible.png";
    }
    return true;
});
//Видимость повтора пароля
document.getElementById("checkPass2").addEventListener("click", function() {
    clickCountReg2++
    if (clickCountReg2 % 2 === 1){
        document.getElementById("conf_pass").type = "text";
        document.getElementById("checkPass2").src = "css/img/invisible.png";
    }else{
        document.getElementById("conf_pass").type = "password";
        document.getElementById("checkPass2").src = "css/img/visible.png";
    }
    return true;
});



document.getElementById("checkPass2")

let clickCount = 0;
let clickCountReg = 0;
let clickCountReg2 = 0;
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
