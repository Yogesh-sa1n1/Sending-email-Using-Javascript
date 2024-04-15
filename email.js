function sendEmail(){
    Email.send({
        Host : "smtp.gmail.com",
        Username : "abc@gmail.com",//Enter email id here
        Password : "********", //Enter email password
        To : 'abc@gmail.com',
        From : document.getElementById("email").value,
        Subject : "New Contact form Enquiry",
        Body :"Name: "+document.getElementById("name").value
                +"<br> Email: "+document.getElementById("email").value
                +"<br> Phone No.: "+document.getElementById("phone").value
                +"<br> Message: "+document.getElementById("message").value
    }).then(
      message => alert("Message Send Successfully!!")
    );
}