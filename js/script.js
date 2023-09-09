
/*============== Toggle Icon nav bar===========*/
let menuIcon = document.querySelector('#menu-icon');
let navBar = document.querySelector('.navbar');


menuIcon.onclick=()=>{

    menuIcon.classList.toggle('bx-x');
    navBar.classList.toggle('active');
};




/*============== Scrll Secion Active Link===========*/

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll =()=>{
    sections.forEach(sec=>{
        let top=window.scrollY;
        let offset=sec.offsetTop-document.querySelector('header').offsetHeight*2;
        let height=sec.offsetHeight;
        let id=sec.getAttribute('id');

        if(top>=offset && top<offset+height){
            navLinks.forEach((link)=>{
                link.classList.remove('active');
                document.querySelector('header nav a[href*=' + id +']').classList.add('active');

            });
        }
    });
    /*============== Header sticky =========*/
    let header = document.querySelector('header');
    header.classList.toggle('sticky',window.scrollY>100);

    menuIcon.classList.remove('bx-x');
    navBar.classList.remove('active');
};

 /*============== Scroll Reveal =========*/

 ScrollReveal({
     reset: false , 
     distance:'80px',
     duration:2000,
     delay:200,
     });

     ScrollReveal().reveal('.home-content , .heading', { origin: 'top' });
     ScrollReveal().reveal('.home-content h1 , .about-iamge', { origin: 'left' });
     ScrollReveal().reveal('.home-content p , .about-content', { origin: 'right' });
     ScrollReveal().reveal('.home-image , .services-container , .portfolio-box , .contact form', { origin: 'bottom' });

      /*============== Multiple-Text =========*/
      const typed=new Typed('.multiple-text',{
            strings:["Frontend" , "Backend" ,"Android", "Developer"],
            typeSpeed:100,
            backSpeed:100,
            backDelay:1000,
            loop:true
      });



      function sendEmail(){
        
        if(document.getElementById('full-name').value !='' &&  document.getElementById('email').value !='' && document.getElementById('subject-title').value !='' && document.getElementById('message').value !='')
        {
        var params={
            from_name : document.getElementById('full-name').value,
            email_id : document.getElementById('email').value,
            title :document.getElementById('subject-title').value,
            message : document.getElementById('message').value,

        }
        
        console.log('done ! Before');
        emailjs.send("service_smnxfgm" ,"template_h73scuq" , params).then(function(res){
            document.getElementsByClassName('alert')[0].classList.add('active');
            console.log('done ! Inner');
            setTimeout(()=>{
                document.getElementsByClassName('alert')[0].classList.remove('active');
            },10000);
        })

    }
      }

      function close(){
        document.getElementsByClassName('alert')[0].classList.remove('active');
        document.getElementsByClassName('alert')[0].classList.add('hide');
        console.log('close');
      }