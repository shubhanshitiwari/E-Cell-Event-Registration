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
