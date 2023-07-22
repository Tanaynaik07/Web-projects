
            function handleSignUp() {
                
                var name = document.querySelector('input[name="name"]').value;
                var email = document.querySelector('input[name="email"]').value;
                var password = document.querySelector('input[name="password"]').value;
                var confirmPassword = document.querySelector('input[name="confirm-password"]').value;
    
                
                if (password !== confirmPassword) {
                    alert("Passwords do not match.");
                    return;
                }
    
                
                var userData = {
                    name: name,
                    password: password
                };
    
                
                var storedData = JSON.parse(localStorage.getItem('allUserData')) || {};
    
                storedData[name] = userData;
    
                localStorage.setItem('allUserData', JSON.stringify(storedData));
    
                window.location.href = "index.html";
            }
     