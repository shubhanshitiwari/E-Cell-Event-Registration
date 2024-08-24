

let cont = document.querySelectorAll(".container")
cont.forEach(con => {
    con.onmousemove = function(e){
        let x = e.pageX - con.offsetLeft;
        let y = e.pageY - con.offsetTop;

        con.style.setProperty("--x",x+"px")
        con.style.setProperty("--y",y+"px")
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

// API

const form = document.getElementById('registrationForm');


form.addEventListener('submit', function (event) {
    event.preventDefault();
    
    const formData = {
        firstName: document.getElementById('firstName').value,
        lastName: document.getElementById('lastName').value,
        email: document.getElementById('email').value,
        mobileNumber: document.getElementById('mobileNumber').value,
        branch: document.getElementById('branch').value,
        college: document.getElementById('college').value,
        enrollmentNo: document.getElementById('enrollmentNo').value,
        whyEvent: document.getElementById('whyEvent').value,
        expectations: document.getElementById('expectations').value,
        wantsUpdates: document.getElementById('wantsUpdates').value
    };
  
    registerUser(formData);
  });
async function registerUser(formData) {
    try {
      const response = await axios.post('http://localhost:8000/register', formData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
       console.log('Registration successful:', response.data);
       alert("Regitration Successfull");
    } catch (error) {
      if (error.response) {
        console.log('Registration failed:', error.response.data);
      } else if (error.request) {
        console.error('No response received:', error.request);
      } else {
        console.error('Error occurred:', error.message);
      }
    }
  }