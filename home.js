document.getElementById('name').innerText = localStorage.getItem('username')
console.log("Username: " + localStorage.getItem('username'))
console.log("Password: " + localStorage.getItem('password'))
alert("Logged in successfully as: "+localStorage.getItem('username'))


document.getElementById('logout').addEventListener('click', function(e) {
    localStorage.clear()
    location.href = "/"
    alert("Logged out successfully")
})

if(localStorage.getItem('username') === null){
    location.href = '/'
}
