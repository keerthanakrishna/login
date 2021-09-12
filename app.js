document.getElementById('submit').addEventListener('click', function (e) {
    e.preventDefault();
    let user = document.getElementById('username')
    let pass = document.getElementById('password')

    if ((user.value == "admin" || user.value == "kalayarasi" || user.value == "keerthana") && (pass.value == "admin"||pass.value=="kalayarasi"||pass.value=="keerthana")) {
        localStorage.setItem('username', user.value)
        localStorage.setItem('password', pass.value)
        location.href = '/home.html'
    }
    else{
        alert('wrong credentials!')
    }
})

document.getElementById('username').addEventListener('input', function (e) {
    if (e.target.value == '' || e.target.value == 'admin' || e.target.value == "keerthana" || e.target.value == "kalayarasi") {
        document.getElementById('erroruser').innerText = ''
    }
    else {
        document.getElementById('erroruser').innerText = '*invalid username'
    }
})

document.getElementById('password').addEventListener('input', function (e) {
    if (e.target.value == '' || e.target.value == 'admin'|| e.target.value == 'kalayarasi'||e.target.value=="keerthana") {
        document.getElementById('errorpass').innerText = ''
    }
    else {
        document.getElementById('errorpass').innerText = '*invalid password'
    }
})