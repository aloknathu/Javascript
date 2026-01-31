const user = {
            name: "Rahul",
            age: 22,
            isAdmin: true
        };

        function checkAccess() {

        
            if ("age" in user) {
                console.log("Age property exists in user object");
            } else {
                console.log("Age property does not exist");
            }

    
            const message = (user.age >= 18 && user.isAdmin)
                ? "Access Granted"
                : "Access Denied";

        
            document.getElementById("result").innerText = message;

            
            delete user.age;

            console.log("User object after deleting age:", user);
        }