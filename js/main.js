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
function visiblePass() {
    let x = document.getElementById("checkPass").checked;
    if (x === true) {
        document.getElementById("pass").type = "text";
    }
    else {
        document.getElementById("pass").type = "password";
    }
}
//Видимость повтора пароля
document.getElementById("checkPass").onchange = visiblePass;
function visiblePass2() {
    let x = document.getElementById("checkPass2").checked;
    if (x === true) {
        document.getElementById("conf_pass").type = "text";
    }
    else {
        document.getElementById("conf_pass").type = "password";
    }
}
document.getElementById("checkPass2").onchange = visiblePass2;