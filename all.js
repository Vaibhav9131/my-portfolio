// JavaScript code for the hover effect (optional)
const navLinks = document.querySelectorAll('nav ul li a');

navLinks.forEach(link => {
    link.addEventListener('mouseover', () => {
        link.style.color = 'green';
});

    link.addEventListener('mouseout', () => {
        link.style.color = 'black';
});
});
//******************contact******************** */
const contact = document.getElementById('contact');
const photo = document.getElementById('photos');
const ContactUp = document.getElementById('UP');
ContactUp.addEventListener('click',()  =>  {
      contact.classList.remove("active");
      photo.classList.remove("active");

});
const ContactDown = document.getElementById('DOWN');
ContactDown.addEventListener('click',()  =>  {
      contact.classList.add("active");
      photo.classList.add("active");
});

//******************password******************** */
let i=0;
 document.getElementById('submit').addEventListener('click', function(e){

    const inputValueusername = document.getElementById('Username').value;
    let storedValueusername = inputValueusername;
    const inputValuepassword = document.getElementById('Password').value;
    let storedValuepassword = inputValuepassword;
       i=i+1;
       if(i<=3){
              if(storedValuepassword==="vaibhav123" && storedValueusername==="vaibhav")
                 {
                    alert("Login Successful")
                     window.location.href='home.html'
                     return(e);
                 }
      
       
              else if(i<3)
        {
        
            document.getElementById('output').innerText = " ⚠︎ Incorrect Pasword";
        }
      
        else{
        document.getElementById('output').innerText = " You are block, Please Wait ";
        }
       }
   });