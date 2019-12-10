//import Axios from "axios";

$(function () {
    $("button.signup").on('click', handleSignUp);
    $("button.login").on('click', handleLogIn);
});

export async function handleSignUp() {
    event.preventDefault();
    $('#passError').remove();
    $('#userError').remove();
    $('#takenError').remove();
    let pass = $('#password').val();
    let user = $('#username').val();
    if (user === "") {
        handleNoUser();
    }
    if (pass === "") {
        handleNoPass();
    }
    try {
        const result = await axios({
            method: 'POST',
            url: 'http://localhost:3000/account/create',
            data: {
                "name": user,
                "pass": pass,
            },
        });
        const res = await axios({
            method: 'post',
            url: 'http://localhost:3000/account/login',
            data: {
                "name": user,
                "pass": pass,
            },
        });
        let jwt = res.data.jwt;
        localStorage.setItem('jwt', jwt);
        window.location.href = "index.html";
    } catch (error) {
        console.log(error.response);
        let msg = error.response.data.msg;
        let e = `<div id="takenError">
                <p class="error">${msg}</p>
            </div>`
        $('#input').append(e);

    }
}

export async function handleLogIn() {
    event.preventDefault();
    $('#passError').remove();
    $('#userError').remove();
    $('#takenError').remove();
    let pass = $('#password').val();
    let user = $('#username').val();
    if (user === "") {
        handleNoUser();
    }
    if (pass === "") {
        handleNoPass();
    }
    try {
        const result = await axios({
            method: 'post',
            url: 'http://localhost:3000/account/login',
            data: {
                "name": user,
                "pass": pass,
            },
        });
        let jwt = result.data.jwt;
        localStorage.setItem('jwt', jwt);
        window.location.href = "index.html";
    } catch (error) {
        console.log(error.response);
        let msg = error.response.data.msg;
        let e = `<div id="takenError">
                <p class="error">${msg}</p>
            </div>`
        $('#input').append(e);
    }
}

export function handleNoPass() {
    let e = `<div id="passError">
                <p class="error">Password is a required field</p>
            </div>`
    $('#input').append(e);
}

export function handleNoUser() {
    let e = `<div id="userError">
                <p class="error">Username is a required field</p>
            </div>`
    $('#input').append(e);
}