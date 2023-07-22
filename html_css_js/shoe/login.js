function handleLogin() {
       
    var name = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    var allUserData = JSON.parse(localStorage.getItem('allUserData'));

    
    if (!allUserData) {
        alert("No users found. Please sign up first.");
        return false;
    }

    if (allUserData.hasOwnProperty(name)) {
        
        if (password === allUserData[name].password) {
            alert("Login successful!");
            
            localStorage.setItem('loggedInUsername', name);
            
            window.location.href = "index.html";
            return false; 
        } else {
            alert("Invalid password.");
            return false; 
        }
    } else {
        alert("User not found. Please sign up first.");
        return false;
    }
}