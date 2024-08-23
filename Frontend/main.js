let cont = document.querySelectorAll(".container")
cont.forEach(con => {
    con.onmousemove = function(e){
        let x = e.pageX - con.offsetLeft;
        let y = e.pageY - con.offsetTop;

        con.style.setProperty("--x",x+"px")
        con.style.setProperty("--y",y+"px")
    }
    
});

//  api

document.getElementById('registrationForm').addEventListener('submit', async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target); 

    try {
        const response = await fetch('http://localhost:8080/register', {
            method: 'POST',
            body: formData // Send form data
        });

        if (response.ok) {
            const result = await response.json();
            console.log('Success:', result);
            // Handle success (e.g., display a message or redirect)
        } else {
            console.error('Error:', response.statusText);
            // Handle errors (e.g., display an error message)
        }
    } catch (error) {
        console.error('Error:', error);
        // Handle fetch errors
    }
});

const college = document.getElementById("college")
const branch = document.getElementById("branch")

function clearErrors() {

    errors = document.getElementsByClassName('formerror');
    for (let item of errors) {
        item.innerHTML = "";
    }


}
function seterror(id, error) {
    //sets error inside tag of id 
    element = document.getElementById(id);
    element.getElementsByClassName('formerror')[0].innerHTML = error;

}

function validateForm() {
    var returnval = true;
    clearErrors();

    //perform validation and if validation fails, set the value of returnval to false
    var name = document.forms['myForm']["fname"].value;
    if (name.length < 5) {
        seterror("name", "*Length of name is too short");
        returnval = false;
    }

    if (name.length === 0) {
        seterror("name", "*Length of name cannot be zero!");
        returnval = false;
    }

    var email = document.forms['myForm']["femail"].value;
    if (email.length > 30) {
        seterror("email", "*Email length is too long");
        returnval = false;
    }
    if (!email.includes("@")) {
        seterror("email", "*Email should contain @ symbol");
    }

    if (college === "") {
        formerror.textContent = "Please enter your college."
        returnval = false;
    }

    if (branch === "") {
        formerror.textContent = "Please select your branch."
        returnval = false;
    }

    var phone = document.forms['myForm']["fphone"].value;
    if (phone.length != 10) {
        seterror("phone", "*Phone number should be of 10 digits!");
        returnval = false;
    }

    return returnval;
}

// confirmation message after submission of the form
if (returnval = true) {
    document.getElementById('submit').addEventListener('click', function (e) {
        document.querySelector(".container").style.display = "none";
        document.getElementById('confirmation-message').style.display = 'block';

    })

}

=======
//  api

document.getElementById('registrationForm').addEventListener('submit', async (event) => {
    event.preventDefault(); // Prevent the default form submission

    const formData = new FormData(event.target); // Gather form data

    try {
        const response = await fetch('http://localhost:8080/register', {
            method: 'POST',
            body: formData // Send form data
        });

        if (response.ok) {
            const result = await response.json();
            console.log('Success:', result);
            // Handle success (e.g., display a message or redirect)
        } else {
            console.error('Error:', response.statusText);
            // Handle errors (e.g., display an error message)
        }
    } catch (error) {
        console.error('Error:', error);
        // Handle fetch errors
    }
});
