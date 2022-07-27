       setTimeout(function(){
          document.getElementById("button-contaner").style.transition ='1s';
         },2000);


         document.getElementById('home1').style.color="#FFA88C";
window.addEventListener('scroll',()=>{
  if(window.scrollY < window.innerHeight){
    document.getElementById('home1').style.color="#FFA88C";
    document.getElementById('service1').style.color="#f3f3f3";
    document.getElementById('Learning1').style.color="#f3f3f3";
    document.getElementById('Abutus1').style.color="#f3f3f3";
  }else if (window.scrollY > window.innerHeight && window.scrollY < window.innerHeight*2){
    document.getElementById('home1').style.color="#f3f3f3";
    document.getElementById('service1').style.color="#FFA88C";
    document.getElementById('Learning1').style.color="#f3f3f3";
    document.getElementById('Abutus1').style.color="#f3f3f3";
  }else if (window.scrollY > window.innerHeight && window.scrollY < window.innerHeight*4){
    document.getElementById('home1').style.color="#f3f3f3";
    document.getElementById('service1').style.color="#f3f3f3";
    document.getElementById('Learning1').style.color="#FFA88C";
    document.getElementById('Abutus1').style.color="#f3f3f3";
  }else if (window.scrollY > window.innerHeight && window.scrollY < window.innerHeight*5 -100){
    document.getElementById('home1').style.color="#f3f3f3";
    document.getElementById('service1').style.color="#f3f3f3";
    document.getElementById('Learning1').style.color="#f3f3f3";
    document.getElementById('Abutus1').style.color="#FFA88C";
  }
});

function displycolor(color){
  if(color == 1){
    document.getElementById('home1').style.color="#FFA88C";
    document.getElementById('service1').style.color="#f3f3f3";
    document.getElementById('Learning1').style.color="#f3f3f3";
    document.getElementById('Abutus1').style.color="#f3f3f3";

  }else if (color == 2){
    document.getElementById('home1').style.color="#f3f3f3";
    document.getElementById('service1').style.color="#FFA88C";
    document.getElementById('Learning1').style.color="#f3f3f3";
    document.getElementById('Abutus1').style.color="#f3f3f3";

  }else if (color == 3){
    document.getElementById('home1').style.color="#f3f3f3";
    document.getElementById('service1').style.color="#f3f3f3";
    document.getElementById('Learning1').style.color="#FFA88C";
    document.getElementById('Abutus1').style.color="#f3f3f3";

  }else if (color == 4){
    document.getElementById('home1').style.color="#f3f3f3";
    document.getElementById('service1').style.color="#f3f3f3";
    document.getElementById('Learning1').style.color="#f3f3f3";
    document.getElementById('Abutus1').style.color="#FFA88C";

  }

};

window.addEventListener("orientationchange", function(){


  window.location.reload();
    if(window.orientation == 90){
    document.getElementById('stylesheet_css').href="home.css";
    }if(window.orientation == 0){
        document.getElementById('stylesheet_css').href="mw.css";
    }
    if(window.orientation == 270){
        document.getElementById('stylesheet_css').href="home.css";
        }if(window.orientation ==180){
            document.getElementById('stylesheet_css').href="mw.css";
        }

 
  }, false);



var pc;

  if (window.innerHeight > window.innerWidth){
    var pc =false;
  }else if(window.innerHeight < window.innerWidth ){
    var pc =true;
  }

  window.addEventListener("resize",()=>{
    if ( window.innerHeight > window.innerWidth ){
      pc =false;

    }else if( window.innerHeight < window.innerWidth ){
      pc =true;
    }
    });


if (!pc){

  function displycolor(color){
    if(color ==1){

      document.getElementById('button-contaner').style.left="-50vw";
    }else if (color ==2){

      document.getElementById('button-contaner').style.left="-50vw";
    }else if (color ==3){

      document.getElementById('button-contaner').style.left="-50vw";
    }else if (color ==4){

      document.getElementById('button-contaner').style.left="-50vw";
    }
    if(color == 1){
      document.getElementById('home1').style.color="#FFA88C";
      document.getElementById('service1').style.color="#f3f3f3";
      document.getElementById('Learning1').style.color="#f3f3f3";
      document.getElementById('Abutus1').style.color="#f3f3f3";
  
    }else if (color == 2){
      document.getElementById('home1').style.color="#f3f3f3";
      document.getElementById('service1').style.color="#FFA88C";
      document.getElementById('Learning1').style.color="#f3f3f3";
      document.getElementById('Abutus1').style.color="#f3f3f3";
  
    }else if (color == 3){
      document.getElementById('home1').style.color="#f3f3f3";
      document.getElementById('service1').style.color="#f3f3f3";
      document.getElementById('Learning1').style.color="#FFA88C";
      document.getElementById('Abutus1').style.color="#f3f3f3";
  
    }else if (color == 4){
      document.getElementById('home1').style.color="#f3f3f3";
      document.getElementById('service1').style.color="#f3f3f3";
      document.getElementById('Learning1').style.color="#f3f3f3";
      document.getElementById('Abutus1').style.color="#FFA88C";
  
    }
  
  };
let clos_nvb =false;
  function disablaynvb(){
    document.getElementById('button-contaner').style.left="-50vw";
    clos_nvb =false;
    };  
function displaynvb(){
document.getElementById('button-contaner').style.left=0;
clos_nvb =true;
};  

$(document).on('click', '.targ', function(e) {
      if (clos_nvb == true) {
  let center = $(this).width() / 2;
  if (e.offsetX > center) {
      document.getElementById('button-contaner').style.left="-50vw";
      clos_nvb =false;
  } else {
  }   
 }
});


    document.getElementById('stylesheet_css').href="mw.css";

    function button_scroll_m() {
      $('#button_scro').prop('disabled', true);
      setTimeout(function() {
            $('#button_scro').prop('disabled', false);
      }, 1000);
      $('#button_scro1').prop('disabled', true);
      setTimeout(function() {
            $('#button_scro1').prop('disabled', false);
      }, 1000);
      $('#button_scro2').prop('disabled', true);
      setTimeout(function() {
            $('#button_scro2').prop('disabled', false);
      }, 1000);
        document.getElementById('button_scroll_m').src="Active.svg";
        document.getElementById('button_scroll_d').src="Carousel Dot-1.svg";
        document.getElementById('button_scroll_w').src="Carousel Dot-1.svg";
        document.getElementById('design_png').src="mobile.png";

        gsap.from('#s',{opacitv:0, duration:1, x: "-1200"})
        document.getElementById("text_service_1").innerHTML = "do you need to go digital with your business? ";
        document.getElementById("text_service_2").innerHTML = "or do you have an idea and you need help  ";
        document.getElementById("text_service_3").innerHTML = "developing it?  ";
        document.getElementById("text_service_4").innerHTML = "dorto offers developing service for both platform ";
        document.getElementById("text_service_5").innerHTML = "Apple and android ";
        document.getElementById('design_png').style.width="80vw";
        document.getElementById('s').style.left="7vw";



    };
    function button_scroll_d() {

      $('#button_scro').prop('disabled', true);
      setTimeout(function() {
            $('#button_scro').prop('disabled', false);
      }, 1000);
      $('#button_scro1').prop('disabled', true);
      setTimeout(function() {
            $('#button_scro1').prop('disabled', false);
      }, 1000);
      $('#button_scro2').prop('disabled', true);
      setTimeout(function() {
            $('#button_scro2').prop('disabled', false);
      }, 1000);
        document.getElementById('button_scroll_d').src="Active.svg";
        document.getElementById('button_scroll_m').src="Carousel Dot-1.svg";
        document.getElementById('button_scroll_w').src="Carousel Dot-1.svg";
        document.getElementById('design_png').src="design.png";


        gsap.from('#s',{opacitv:0, duration:1, x: "-1200"})
        document.getElementById("text_service_1").innerHTML = "does your business needs designs and branding? ";
        document.getElementById("text_service_2").innerHTML = "do you have a program idea and need a design?  ";
        document.getElementById("text_service_3").innerHTML = "then dorto is the solution to your problem  ";
        document.getElementById("text_service_4").innerHTML = "we offer web and mobile and graphic design. ";
        document.getElementById('design_png').style.width="60vw";
        document.getElementById('s').style.left="15vw";


    };
    function button_scroll_w() {
      $('#button_scro').prop('disabled', true);
      setTimeout(function() {
            $('#button_scro').prop('disabled', false);
      }, 1000);
      $('#button_scro1').prop('disabled', true);
      setTimeout(function() {
            $('#button_scro1').prop('disabled', false);
      }, 1000);
      $('#button_scro2').prop('disabled', true);
      setTimeout(function() {
            $('#button_scro2').prop('disabled', false);
      }, 1000);

      document.getElementById('design_png').style.width="80vw";
      document.getElementById('s').style.left="7vw";
        document.getElementById('button_scroll_w').src="Active.svg";
        document.getElementById('button_scroll_d').src="Carousel Dot-1.svg";
        document.getElementById('button_scroll_m').src="Carousel Dot-1.svg";
        document.getElementById('design_png').src="web.png";

        gsap.from('#s',{opacitv:0, duration:1, x: "-1200"});
        document.getElementById("text_service_1").innerHTML = "Dorto offers Web development services. ";
        document.getElementById("text_service_2").innerHTML = "our developers can build a digital version of your  ";
        document.getElementById("text_service_3").innerHTML = "business that can represent youe brand and  ";
        document.getElementById("text_service_4").innerHTML = "boost your sales using the latest technolohies. ";


    };
    
    function displayDate() {

        setTimeout(function(){
           var learn_button =document.getElementById("learn_button");
        learn_button.remove();  
        },500);
        
      gsap.to('#learn_button',{opacitv:0,duration:1, y: "400" });
      gsap.from('.text3',{opacitv:0,duration:1,delay: 0.6, x: "-1100" });
      document.getElementById("demo").innerHTML = "Amet minim mollit non deserunt ullamco est sit";
      document.getElementById("demo1").innerHTML = "aliqua dolor do amet sint. Velit officia  ";
      document.getElementById("demo2").innerHTML = "duis enim velit mollit. Exercitation veniam  ";



      
    }
const slides = document.getElementById("slides");
const allSlides = document.querySelectorAll(".slide");
const slidesLength = allSlides.length;
console.log('al Qassim tag ras say');
const slideWidth = allSlides[0].offsetHeight;

let index = 0;
let posX1;
let posX2;
let initialPosition;
let finalPosition;

let canISlide = true;

const prev = document.getElementById("prev");
const next = document.getElementById("next");

const firstSlide = allSlides[0];
const lastSlide = allSlides[allSlides.length - 1];

const cloneFirstSlide = firstSlide.cloneNode(true);
const cloneLastSlide = lastSlide.cloneNode(true);

slides.appendChild(cloneFirstSlide);
slides.insertBefore(cloneLastSlide, firstSlide);

next.addEventListener("click", () => switchSlide("next"));
prev.addEventListener("click", () => switchSlide("prev"));

slides.addEventListener("transitionend", checkIndex);

slides.addEventListener("mousedown", dragStart);

slides.addEventListener("touchstart", dragStart);
slides.addEventListener("touchmove", dragMove);
slides.addEventListener("touchend", dragEnd);

function dragStart(e) {
  e.preventDefault();
  initialPosition = slides.offsetTop;

  if (e.type == "touchstart") {
    posX1 = e.touches[0].clientY;
  } else {
    posX1 = e.clientY;

    document.onmouseup = dragEnd;
    document.onmousemove = dragMove;
  }
}

function dragMove(e) {
  if (e.type == "touchmove") {
    posX2 = posX1 - e.touches[0].clientY;
    posX1 = e.touches[0].clientY;
  } else {
    posX2 = posX1 - e.clientY;
    posX1 = e.clientY;
  }

  slides.style.top = `${slides.offsetTop - posX2}px`;
}

function dragEnd() {
  /* 
    three possibilities:
    1. next slide
    2. prev slide
    3. stay still
    */
  finalPosition = slides.offsetTop;
  if (finalPosition - initialPosition < -100) {
    switchSlide("next", "dragging");
  } else if (finalPosition - initialPosition > 100) {
    switchSlide("prev", "dragging");
  } else {
    slides.style.top = `${initialPosition}px`;
  }

  document.onmouseup = null;
  document.onmousemove = null;
}

function switchSlide(arg, arg2) {
  slides.classList.add("transition");

  if (canISlide) {
    if (!arg2) {
      initialPosition = slides.offsetTop;
    }
    if (arg == "next") {
      slides.style.top = `${initialPosition - slideWidth}px`;
      index++;
    } else {
      slides.style.top = `${initialPosition + slideWidth}px`;
      index--;
    }
  }

  canISlide = false;
}

function checkIndex() {
  slides.classList.remove("transition");

  if (index == -1) {
    slides.style.top = `-${slidesLength * slideWidth}px`;
    index = slidesLength - 1;
  }

  if (index == slidesLength) {
    slides.style.top = `-${1 * slideWidth}px`;
    index = 0;
  }

  canISlide = true;
}


var kos9 =false; 
window.addEventListener("scroll",()=>{
  let kosom9 = document.getElementById("Learning").getBoundingClientRect().bottom;
  if(kosom9 < window.innerHeight+1||kosom9< window.innerHeight-10){
    if(!kos9){
      display_Lea9();
    }
    kos9 =true;
  }
});
function display_Lea9(){
gsap.from('#Vector222',{opacitv:0,duration:1, y: "1000" });
gsap.from('#Vector22',{opacitv:0,duration:1, y: "-1000" });
gsap.from('#Vector_Learning',{opacitv:0,duration:1, x: "1000" });
gsap.from('#Vector15',{opacitv:0,duration:1,delay:0.9, x: "1000" });
gsap.from('#Vector12',{opacitv:0,duration:1 ,delay:0.6, x: "1000" });
gsap.from('#Vector13',{opacitv:0,duration:1 ,delay:1.2, x: "1000" });
gsap.from('#first_Learning',{opacitv:0,duration:1 ,delay:7.6, x: "800" });

gsap.to('#Vector22',{opacitv:0,duration:1,delay:4.4, y: "800" });
gsap.to('#Vector_Learning',{opacitv:0,duration:1,delay:4.6, x: "-800" });
gsap.to('#Vector15',{opacitv:0,duration:1,delay:5.3, x: "-800" });
gsap.to('#Vector12',{opacitv:0,duration:1 ,delay:5.6, x: "-800" });
gsap.to('#Vector13',{opacitv:0,duration:1 ,delay:5, x: "-800" });
gsap.to('#Vector222',{opacitv:0,duration:1,delay:5, y: "800" });

setTimeout(function(){
   

    document.getElementById("Vector_Learning").remove();
   document.getElementById("Vector15").remove();
   document.getElementById("Vector12").remove();
   document.getElementById("Vector13").remove();
   document.getElementById("Vector22").remove();
   document.getElementById("Vector222").remove();
   document.getElementById("Learning_svg_remov").remove();


   

   },7500);
   setTimeout(function(){
   
   document.getElementById("first_Learning").src = "prod.png";
   document.getElementById("first_Learning").style.height = "20%";
   document.getElementById("first_Learning").style.width = "80%";

   

   },8000);


};
   const slides1 = document.getElementById("slides2");
   const allSlides1 = document.querySelectorAll(".slide2");
   const slidesLength1 = allSlides1.length/3;
   const slideWidth1 = allSlides1[0].offsetHeight*3;
   
   let index1 = 0;
   let posX11;
   let posX21;
   let initialPosition1;
   let finalPosition1;
   
   let canISlide1 = true;
   
   const prev1 = document.getElementById("prev2");
   const next1 = document.getElementById("next2");
   
   const firstSlide1 = allSlides1[0];
   const lastSlide1 = allSlides1[allSlides1.length - 1];
   
   const cloneFirstSlide1 = firstSlide1.cloneNode(true);
   const cloneLastSlide1 = lastSlide1.cloneNode(true);
   
   slides1.appendChild(cloneFirstSlide1);
   slides1.insertBefore(cloneLastSlide1, firstSlide1);
   
   next1.addEventListener("click", () => switchSlide1("next"));
   prev1.addEventListener("click", () => switchSlide1("prev"));
   
   slides1.addEventListener("transitionend", checkIndex1);
   
   slides1.addEventListener("mousedown", dragStart1);
   
   slides1.addEventListener("touchstart", dragStart1);
   slides1.addEventListener("touchmove", dragMove1);
   slides1.addEventListener("touchend", dragEnd1);
   
   function dragStart1(e) {
     e.preventDefault();
     initialPosition1 = slides1.offsetTop;
   
     if (e.type == "touchstart") {
       posX11 = e.touches[0].clientY;
     } else {
       posX11 = e.clientY;
   
       document.onmouseup = dragEnd1;
       document.onmousemove = dragMove1;
     }
   }
   
   function dragMove1(e) {
     if (e.type == "touchmove") {
       posX21 = posX11 - e.touches[0].clientY;
       posX11 = e.touches[0].clientY;
     } else {
       posX21 = posX11 - e.clientY;
       posX11 = e.clientY;
     }
   
     slides1.style.top = `${slides1.offsetTop - posX21}px`;
   }
   
   function dragEnd1() {
     /* 
       three possibilities:
       1. next slide
       2. prev slide
       3. stay still
       */
     finalPosition1 = slides1.offsetTop;
     if (finalPosition1 - initialPosition1 < -100) {
       switchSlide1("next1", "dragging1");
     } else if (finalPosition1 - initialPosition1 > 100) {
       switchSlide1("prev1", "dragging1");
     } else {
       slides1.style.top = `${initialPosition1}px`;
     }
   
     document.onmouseup = null;
     document.onmousemove = null;
   }
   
   function switchSlide1(arg, arg2) {
     slides1.classList.add("transition");
   
     if (canISlide1) {
       if (!arg2) {
         initialPosition1 = slides.offsetTop1;
       }
       if (arg == "next1") {
         slides1.style.top = `${initialPosition1 - slideWidth1}px`;
         index1++;
       } else {
         slides1.style.top = `${initialPosition1 + slideWidth1}px`;
         index1--;
       }
     }
   
     canISlide1 = false;
   }
   
   function checkIndex1() {
     slides1.classList.remove("transition");
   
     if (index1 == -1) {
       slides1.style.top = `-${slidesLength1 * slideWidth1}px`;
       index1 = slidesLength1 - 1;
     }
   
     if (index1 == slidesLength1) {
       slides1.style.top = `-${1 * slideWidth1}px`;
       index1 = 0;
     }
   
     canISlide1 = true;
   }






/*pc js 123456787654444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444*/








}else if(pc){
    document.getElementById('stylesheet_css').href="home.css";



if (window.innerHeight < window.innerWidth ){
    
  var kos =false; 
  window.addEventListener("scroll",()=>{
    let kosom = document.getElementById("service").getBoundingClientRect().bottom;
    if(kosom/2 < window.innerHeight){
      if(!kos){
        display_servic();
        kos =true;
              setTimeout(function(){
        kos =false;
     },4000);
      }

      
    }
  });
  var kos1 =false; 
  window.addEventListener("scroll",()=>{
    let kosom1 = document.getElementById("Products").getBoundingClientRect().bottom;
    if(kosom1/2< window.innerHeight){
      if(!kos1){
        display_Products();
      
      kos1 =true;
      setTimeout(function(){
        kos1 =false;
     },5000);
    }
  }
  });
  var kos2 =false; 
  window.addEventListener("scroll",()=>{
    let kosom2 = document.getElementById("Learning").getBoundingClientRect().bottom;
    if(kosom2 /2< window.innerHeight){
      if(!kos2){
        display_Lea();
      }
      kos2 =true;
    }
  });

  var kos3 =false; 
  window.addEventListener("scroll",()=>{
    let kosom3 = document.getElementById("Abutus").getBoundingClientRect().bottom;
    if(kosom3 /2< window.innerHeight ){
      if(!kos3){
        display_abut();
      kos3 =true;
      setTimeout(function(){
        kos3 =false;
     },9000);
    }
    }
  });


    gsap.from('.nvb',{opacitv:0, duration:1, x: "-1200"});
    gsap.from('.text',{opacitv:0, delay: 1.3,duration:1, x: "-1500" });
    gsap.from('.img1',{opacitv:0,  delay: 1,duration:1, y: "1000"});
    gsap.from('.button-contaner',{opacitv:0, duration:1,delay: 0.7, y: "-1000" });
    gsap.from('.nvb_img',{opacitv:0, duration:1,delay: 0.7, y: "-1000" });            



    function displayDate() {

        setTimeout(function(){
           var learn_button =document.getElementById("learn_button");
        learn_button.remove();  
        },500);
        
      gsap.to('#learn_button',{opacitv:0,duration:1, y: "400" });
      gsap.from('.text3',{opacitv:0,duration:1,delay: 0.6, x: "-1100" });
      document.getElementById("demo").innerHTML = "Amet minim mollit non deserunt ullamco est sit";
      document.getElementById("demo1").innerHTML = "aliqua dolor do amet sint. Velit officia consequat ";
      document.getElementById("demo2").innerHTML = "duis enim velit mollit. Exercitation veniam  ";
      document.getElementById("demo3").innerHTML = "consequat sunt nostrud amet. ";
      document.getElementById("demo4").innerHTML = "Amet minim mollit non deserunt ullamco est sit ";
      document.getElementById("demo5").innerHTML = "aliqua dolor do amet sint. Velit officia consequat ";


      
    }
function display_servic(){

document.getElementById("w").style.opacity ='1';
document.getElementById("m").style.opacity ='1';
document.getElementById("s").style.opacity ='1';


    gsap.from('.web',{opacitv:0, duration:1, delay: 1.5, x: "-1500"});
gsap.from('.mobile',{opacitv:0, duration:1, delay: 1.5, x: "1500"});
gsap.from('.design',{opacitv:0, duration:1,  x: "-1500"});
//git push -u origin main  to abdat the data 
let service_itme = 0;
};
function displayDate_w() {
  service_itme = 3;

        gsap.to('.web',{opacitv:0, duration:1, x: "43%",y: "13%"});
        gsap.to('.mobile',{opacitv:0, duration:1,x: "500",y: "1000"});
        gsap.to('.design',{opacitv:0, duration:1,  x: "-500",y: "500"});
        gsap.to('.dtow',{opacitv:0, duration:1, x: "-1000",y: "-500"});
        gsap.to('.dtom',{opacitv:0, duration:1,y: "500"});
        gsap.to('.wtom',{opacitv:0, duration:1,  x: "500",y: "-500"});
        document.getElementById("text_service_1").innerHTML = "Dorto offers Web development services. ";
        document.getElementById("text_service_2").innerHTML = "our developers can build a digital version of your  ";
        document.getElementById("text_service_3").innerHTML = "business that can represent youe brand and  ";
        document.getElementById("text_service_4").innerHTML = "boost your sales using the latest technolohies. ";
        setTimeout(function(){
            document.getElementById("text_service_id").style.opacity ='1';
            document.getElementById("scroll_button").style.opacity ='1';
            document.getElementById("back_servis").style.opacity ='1';
            document.getElementById("next_servis").style.opacity ='1';
           },1500);
           document.getElementById('button_scroll_w').src="Active.svg";
           document.getElementById('button_scroll_d').src="Carousel Dot-1.svg";
           document.getElementById('button_scroll_m').src="Carousel Dot-1.svg";
    setTimeout(function(){


        document.getElementById("r").remove();
        document.getElementById("r1").remove();
        document.getElementById("r2").remove();
        document.getElementById("s").remove();
       document.getElementById("m").remove();
       },2000);

       document.getElementById('button_scroll_w').addEventListener("click",()=>{
        document.getElementById('button_scroll_w').src="Active.svg";
        document.getElementById('button_scroll_d').src="Carousel Dot-1.svg";
        document.getElementById('button_scroll_m').src="Carousel Dot-1.svg";
        document.getElementById("text_service_1").innerHTML = "Dorto offers Web development services. ";
        document.getElementById("text_service_2").innerHTML = "our developers can build a digital version of your  ";
        document.getElementById("text_service_3").innerHTML = "business that can represent youe brand and  ";
        document.getElementById("text_service_4").innerHTML = "boost your sales using the latest technolohies. ";
        document.getElementById('web_png').src="web.png";
        document.getElementById('w').style.width="27%";
        document.getElementById('w').style.height="28%";
        document.getElementById('w').style.marginLeft="-1%";
        service_itme = 3;
        });
        document.getElementById('button_scroll_d').addEventListener("click",()=>{
          document.getElementById('button_scroll_d').src="Active.svg";
          document.getElementById('button_scroll_w').src="Carousel Dot-1.svg";
          document.getElementById('button_scroll_m').src="Carousel Dot-1.svg";
          document.getElementById("text_service_1").innerHTML = "does your business needs designs and branding? ";
          document.getElementById("text_service_2").innerHTML = "do you have a program idea and need a design?  ";
          document.getElementById("text_service_3").innerHTML = "then dorto is the solution to your problem  ";
          document.getElementById("text_service_4").innerHTML = "we offer web and mobile and graphic design. ";
          document.getElementById('web_png').src="design.png";
          document.getElementById('w').style.width="15%";
          document.getElementById('w').style.marginLeft="10.5%";
          service_itme = 1;

          });
          document.getElementById('button_scroll_m').addEventListener("click",()=>{
            document.getElementById('button_scroll_m').src="Active.svg";
            document.getElementById('button_scroll_w').src="Carousel Dot-1.svg";
            document.getElementById('button_scroll_d').src="Carousel Dot-1.svg";
            document.getElementById("text_service_1").innerHTML = "do you need to go digital with your business? ";
            document.getElementById("text_service_2").innerHTML = "or do you have an idea and you   ";
            document.getElementById("text_service_3").innerHTML = "need help developing it?  ";
            document.getElementById("text_service_4").innerHTML = "dorto offers developing service for both ";
            document.getElementById("text_service_5").innerHTML = "platform Apple and android ";
            document.getElementById('web_png').src="mobile.png";
            document.getElementById('w').style.width="19%";
            document.getElementById('w').style.height="27%";
            document.getElementById('w').style.marginLeft="7%";
            document.getElementById('w').style.marginRight="0%";
            service_itme = 2;

            });
           
            document.getElementById("next_servis").addEventListener("click",()=>{
              if(service_itme==1){
                document.getElementById('button_scroll_m').src="Active.svg";
                document.getElementById('button_scroll_w').src="Carousel Dot-1.svg";
                document.getElementById('button_scroll_d').src="Carousel Dot-1.svg";
                document.getElementById("text_service_1").innerHTML = "do you need to go digital with your business? ";
                document.getElementById("text_service_2").innerHTML = "or do you have an idea and you   ";
                document.getElementById("text_service_3").innerHTML = "need help developing it?  ";
                document.getElementById("text_service_4").innerHTML = "dorto offers developing service for both ";
                document.getElementById("text_service_5").innerHTML = "platform Apple and android ";
                document.getElementById('web_png').src="mobile.png";
                document.getElementById('w').style.width="19%";
                document.getElementById('w').style.height="27%";
                document.getElementById('w').style.marginLeft="7%";
                document.getElementById('w').style.marginRight="0%";
                service_itme = 2;
              }else if(service_itme==2){
                document.getElementById('button_scroll_w').src="Active.svg";
                document.getElementById('button_scroll_d').src="Carousel Dot-1.svg";
                document.getElementById('button_scroll_m').src="Carousel Dot-1.svg";
                document.getElementById("text_service_1").innerHTML = "Dorto offers Web development services. ";
                document.getElementById("text_service_2").innerHTML = "our developers can build a digital version of your  ";
                document.getElementById("text_service_3").innerHTML = "business that can represent youe brand and  ";
                document.getElementById("text_service_4").innerHTML = "boost your sales using the latest technolohies. ";
                document.getElementById('web_png').src="web.png";
                document.getElementById('w').style.width="27%";
                document.getElementById('w').style.height="28%";
                document.getElementById('w').style.marginLeft="-1%";
                service_itme = 3;
              }else if(service_itme==3){
                document.getElementById('button_scroll_d').src="Active.svg";
                document.getElementById('button_scroll_w').src="Carousel Dot-1.svg";
                document.getElementById('button_scroll_m').src="Carousel Dot-1.svg";
                document.getElementById("text_service_1").innerHTML = "does your business needs designs and branding? ";
                document.getElementById("text_service_2").innerHTML = "do you have a program idea and need a design?  ";
                document.getElementById("text_service_3").innerHTML = "then dorto is the solution to your problem  ";
                document.getElementById("text_service_4").innerHTML = "we offer web and mobile and graphic design. ";
                document.getElementById('web_png').src="design.png";
                document.getElementById('w').style.width="15%";
                document.getElementById('w').style.marginLeft="10.5%";
                service_itme = 1;
              }
            
            });  
            document.getElementById("back_servis").addEventListener("click",()=>{
              if(service_itme==3){
                document.getElementById('button_scroll_m').src="Active.svg";
                document.getElementById('button_scroll_w').src="Carousel Dot-1.svg";
                document.getElementById('button_scroll_d').src="Carousel Dot-1.svg";
                document.getElementById("text_service_1").innerHTML = "do you need to go digital with your business? ";
                document.getElementById("text_service_2").innerHTML = "or do you have an idea and you   ";
                document.getElementById("text_service_3").innerHTML = "need help developing it?  ";
                document.getElementById("text_service_4").innerHTML = "dorto offers developing service for both ";
                document.getElementById("text_service_5").innerHTML = "platform Apple and android ";
                document.getElementById('web_png').src="mobile.png";
                document.getElementById('w').style.width="19%";
                document.getElementById('w').style.height="27%";
                document.getElementById('w').style.marginLeft="7%";
                document.getElementById('w').style.marginRight="0%";
                service_itme = 2;
              }else if(service_itme==1){
                document.getElementById('button_scroll_w').src="Active.svg";
                document.getElementById('button_scroll_d').src="Carousel Dot-1.svg";
                document.getElementById('button_scroll_m').src="Carousel Dot-1.svg";
                document.getElementById("text_service_1").innerHTML = "Dorto offers Web development services. ";
                document.getElementById("text_service_2").innerHTML = "our developers can build a digital version of your  ";
                document.getElementById("text_service_3").innerHTML = "business that can represent youe brand and  ";
                document.getElementById("text_service_4").innerHTML = "boost your sales using the latest technolohies. ";
                document.getElementById('web_png').src="web.png";
                document.getElementById('w').style.width="27%";
                document.getElementById('w').style.height="28%";
                document.getElementById('w').style.marginLeft="-1%";
                service_itme = 3;
              }else if(service_itme==2){
                document.getElementById('button_scroll_d').src="Active.svg";
                document.getElementById('button_scroll_w').src="Carousel Dot-1.svg";
                document.getElementById('button_scroll_m').src="Carousel Dot-1.svg";
                document.getElementById("text_service_1").innerHTML = "does your business needs designs and branding? ";
                document.getElementById("text_service_2").innerHTML = "do you have a program idea and need a design?  ";
                document.getElementById("text_service_3").innerHTML = "then dorto is the solution to your problem  ";
                document.getElementById("text_service_4").innerHTML = "we offer web and mobile and graphic design. ";
                document.getElementById('web_png').src="design.png";
                document.getElementById('w').style.width="15%";
                document.getElementById('w').style.marginLeft="10.5%";
                service_itme = 1;
              }
            
            }); 
}
let service_itme1 = 0;
function displayDate_m() {
  service_itme1 = 2;
  document.getElementById("text_service_1").innerHTML = "do you need to go digital with your business? ";
  document.getElementById("text_service_2").innerHTML = "or do you have an idea and you   ";
  document.getElementById("text_service_3").innerHTML = "need help developing it?  ";
  document.getElementById("text_service_4").innerHTML = "dorto offers developing service for both ";
  document.getElementById("text_service_5").innerHTML = "platform Apple and android ";
    setTimeout(function(){
        document.getElementById("text_service_id").style.opacity ='1';
        document.getElementById("scroll_button").style.opacity ='1';
        document.getElementById("back_servis").style.opacity ='1';
        document.getElementById("next_servis").style.opacity ='1';
       },1500);
       

    

    gsap.to('.web',{opacitv:0, duration:1, y: "-900"});
    gsap.to('.mobile',{opacitv:0, duration:1,x: "-120%",y: "-130%"});
    gsap.to('.design',{opacitv:0, duration:1,  x: "-500",y: "500"});
    gsap.to('.dtow',{opacitv:0, duration:1, x: "-1000",y: "-500"});
    gsap.to('.dtom',{opacitv:0, duration:1,y: "500"});
    gsap.to('.wtom',{opacitv:0, duration:1,  x: "500",y: "-500"});
    document.getElementById('button_scroll_m').src="Active.svg";
    document.getElementById('button_scroll_w').src="Carousel Dot-1.svg";
    document.getElementById('button_scroll_d').src="Carousel Dot-1.svg";

setTimeout(function(){
    document.getElementById("r").remove();
    document.getElementById("r1").remove();
    document.getElementById("r2").remove();
    document.getElementById("s").remove();
   document.getElementById("w").remove();
   },2000);
   document.getElementById('button_scroll_w').addEventListener("click",()=>{
    document.getElementById('button_scroll_w').src="Active.svg";
    document.getElementById('button_scroll_d').src="Carousel Dot-1.svg";
    document.getElementById('button_scroll_m').src="Carousel Dot-1.svg";
    document.getElementById("text_service_1").innerHTML = "Dorto offers Web development services. ";
    document.getElementById("text_service_2").innerHTML = "our developers can build a digital version of your  ";
    document.getElementById("text_service_3").innerHTML = "business that can represent youe brand and  ";
    document.getElementById("text_service_4").innerHTML = "boost your sales using the latest technolohies. ";
    document.getElementById('mobile_png').src="web.png";
    document.getElementById('m').style.width="28%";
    document.getElementById('m').style.height="27%";
    document.getElementById('m').style.marginRight="-18%";
    service_itme1 = 3;
    });
    document.getElementById('button_scroll_d').addEventListener("click",()=>{
      document.getElementById('button_scroll_d').src="Active.svg";
      document.getElementById('button_scroll_w').src="Carousel Dot-1.svg";
      document.getElementById('button_scroll_m').src="Carousel Dot-1.svg";
      document.getElementById("text_service_1").innerHTML = "does your business needs designs and branding? ";
      document.getElementById("text_service_2").innerHTML = "do you have a program idea and need a design?  ";
      document.getElementById("text_service_3").innerHTML = "then dorto is the solution to your problem  ";
      document.getElementById("text_service_4").innerHTML = "we offer web and mobile and graphic design. ";
      document.getElementById('mobile_png').src="design.png";
      document.getElementById('m').style.width="15%";
      document.getElementById('m').style.marginLeft="0%";
      document.getElementById('m').style.marginRight="5%";
      service_itme1 = 1;
      });
      document.getElementById('button_scroll_m').addEventListener("click",()=>{
        document.getElementById('button_scroll_m').src="Active.svg";
        document.getElementById('button_scroll_w').src="Carousel Dot-1.svg";
        document.getElementById('button_scroll_d').src="Carousel Dot-1.svg";
        document.getElementById("text_service_1").innerHTML = "do you need to go digital with your business? ";
        document.getElementById("text_service_2").innerHTML = "or do you have an idea and you   ";
        document.getElementById("text_service_3").innerHTML = "need help developing it?  ";
        document.getElementById("text_service_4").innerHTML = "dorto offers developing service for both ";
        document.getElementById("text_service_5").innerHTML = "platform Apple and android ";
        document.getElementById('mobile_png').src="mobile.png";
        document.getElementById('m').style.width="19%";
        document.getElementById('m').style.height="27%";
        document.getElementById('m').style.marginLeft="0%";
        document.getElementById('m').style.marginRight="-2%";
        service_itme1 = 2;
        });

        document.getElementById("next_servis").addEventListener("click",()=>{
          if(service_itme1==1){
            document.getElementById('button_scroll_m').src="Active.svg";
            document.getElementById('button_scroll_w').src="Carousel Dot-1.svg";
            document.getElementById('button_scroll_d').src="Carousel Dot-1.svg";
            document.getElementById("text_service_1").innerHTML = "do you need to go digital with your business? ";
            document.getElementById("text_service_2").innerHTML = "or do you have an idea and you   ";
            document.getElementById("text_service_3").innerHTML = "need help developing it?  ";
            document.getElementById("text_service_4").innerHTML = "dorto offers developing service for both ";
            document.getElementById("text_service_5").innerHTML = "platform Apple and android ";
            document.getElementById('mobile_png').src="mobile.png";
            document.getElementById('m').style.width="19%";
            document.getElementById('m').style.height="27%";
            document.getElementById('m').style.marginLeft="0%";
            document.getElementById('m').style.marginRight="-2%";
            service_itme1 = 2;
          }else if(service_itme1==2){
            document.getElementById('button_scroll_w').src="Active.svg";
    document.getElementById('button_scroll_d').src="Carousel Dot-1.svg";
    document.getElementById('button_scroll_m').src="Carousel Dot-1.svg";
    document.getElementById("text_service_1").innerHTML = "Dorto offers Web development services. ";
    document.getElementById("text_service_2").innerHTML = "our developers can build a digital version of your  ";
    document.getElementById("text_service_3").innerHTML = "business that can represent youe brand and  ";
    document.getElementById("text_service_4").innerHTML = "boost your sales using the latest technolohies. ";
    document.getElementById('mobile_png').src="web.png";
    document.getElementById('m').style.width="28%";
    document.getElementById('m').style.height="27%";
    document.getElementById('m').style.marginRight="-18%";
    service_itme1 = 3;
          }else if(service_itme1==3){
            document.getElementById('button_scroll_d').src="Active.svg";
            document.getElementById('button_scroll_w').src="Carousel Dot-1.svg";
            document.getElementById('button_scroll_m').src="Carousel Dot-1.svg";
            document.getElementById("text_service_1").innerHTML = "does your business needs designs and branding? ";
            document.getElementById("text_service_2").innerHTML = "do you have a program idea and need a design?  ";
            document.getElementById("text_service_3").innerHTML = "then dorto is the solution to your problem  ";
            document.getElementById("text_service_4").innerHTML = "we offer web and mobile and graphic design. ";
            document.getElementById('mobile_png').src="design.png";
            document.getElementById('m').style.width="15%";
            document.getElementById('m').style.marginLeft="0%";
            document.getElementById('m').style.marginRight="5%";
            service_itme1 = 1;
          }
        

          
        });

        document.getElementById("back_servis").addEventListener("click",()=>{
          if(service_itme1==3){
            document.getElementById('button_scroll_m').src="Active.svg";
            document.getElementById('button_scroll_w').src="Carousel Dot-1.svg";
            document.getElementById('button_scroll_d').src="Carousel Dot-1.svg";
            document.getElementById("text_service_1").innerHTML = "do you need to go digital with your business? ";
            document.getElementById("text_service_2").innerHTML = "or do you have an idea and you   ";
            document.getElementById("text_service_3").innerHTML = "need help developing it?  ";
            document.getElementById("text_service_4").innerHTML = "dorto offers developing service for both ";
            document.getElementById("text_service_5").innerHTML = "platform Apple and android ";
            document.getElementById('mobile_png').src="mobile.png";
            document.getElementById('m').style.width="19%";
            document.getElementById('m').style.height="27%";
            document.getElementById('m').style.marginLeft="0%";
            document.getElementById('m').style.marginRight="-2%";
            service_itme1 = 2;
          }else if(service_itme1==1){
            document.getElementById('button_scroll_w').src="Active.svg";
    document.getElementById('button_scroll_d').src="Carousel Dot-1.svg";
    document.getElementById('button_scroll_m').src="Carousel Dot-1.svg";
    document.getElementById("text_service_1").innerHTML = "Dorto offers Web development services. ";
    document.getElementById("text_service_2").innerHTML = "our developers can build a digital version of your  ";
    document.getElementById("text_service_3").innerHTML = "business that can represent youe brand and  ";
    document.getElementById("text_service_4").innerHTML = "boost your sales using the latest technolohies. ";
    document.getElementById('mobile_png').src="web.png";
    document.getElementById('m').style.width="28%";
    document.getElementById('m').style.height="27%";
    document.getElementById('m').style.marginRight="-18%";
    service_itme1 = 3;
          }else if(service_itme1==2){
            document.getElementById('button_scroll_d').src="Active.svg";
            document.getElementById('button_scroll_w').src="Carousel Dot-1.svg";
            document.getElementById('button_scroll_m').src="Carousel Dot-1.svg";
            document.getElementById("text_service_1").innerHTML = "does your business needs designs and branding? ";
            document.getElementById("text_service_2").innerHTML = "do you have a program idea and need a design?  ";
            document.getElementById("text_service_3").innerHTML = "then dorto is the solution to your problem  ";
            document.getElementById("text_service_4").innerHTML = "we offer web and mobile and graphic design. ";
            document.getElementById('mobile_png').src="design.png";
            document.getElementById('m').style.width="15%";
            document.getElementById('m').style.marginLeft="0%";
            document.getElementById('m').style.marginRight="5%";
            service_itme1 = 1;
          }
        

          
        });
}
let service_itme2 = 1;
function displayDate_d() {
  service_itme2 = 1;

    
    document.getElementById("text_service_1").innerHTML = "does your business needs designs and branding? ";
    document.getElementById("text_service_2").innerHTML = "do you have a program idea and need a design?  ";
    document.getElementById("text_service_3").innerHTML = "then dorto is the solution to your problem  ";
    document.getElementById("text_service_4").innerHTML = "we offer web and mobile and graphic design. ";
    setTimeout(function(){
        document.getElementById("text_service_id").style.opacity ='1';
        document.getElementById("scroll_button").style.opacity ='1';
        document.getElementById("back_servis").style.opacity ='1';
        document.getElementById("next_servis").style.opacity ='1';
       },1500);



    gsap.to('.web',{opacitv:0, duration:1, y: "-900"});
    gsap.to('.mobile',{opacitv:0, duration:1,x: "500",y: "1000"});
    gsap.to('.design',{opacitv:0, duration:1,x: "185%",y: "-165%"});
    gsap.to('.dtow',{opacitv:0, duration:1, x: "-1000",y: "-500"});
    gsap.to('.dtom',{opacitv:0, duration:1,y: "500"});
    gsap.to('.wtom',{opacitv:0, duration:1,  x: "500",y: "-500"});

    document.getElementById('button_scroll_w').addEventListener("click",()=>{
      service_itme2 = 3;
      document.getElementById('button_scroll_w').src="Active.svg";
      document.getElementById('button_scroll_d').src="Carousel Dot-1.svg";
      document.getElementById('button_scroll_m').src="Carousel Dot-1.svg";
      document.getElementById("text_service_1").innerHTML = "Dorto offers Web development services. ";
      document.getElementById("text_service_2").innerHTML = "our developers can build a digital version of your  ";
      document.getElementById("text_service_3").innerHTML = "business that can represent youe brand and  ";
      document.getElementById("text_service_4").innerHTML = "boost your sales using the latest technolohies. ";
      document.getElementById('design_png').src="web.png";
      document.getElementById('s').style.width="28%";
      document.getElementById('s').style.height="27%";
      document.getElementById('s').style.marginLeft="-30%";
      });
      document.getElementById('button_scroll_d').addEventListener("click",()=>{
        service_itme2 = 1;
        document.getElementById('button_scroll_d').src="Active.svg";
        document.getElementById('button_scroll_w').src="Carousel Dot-1.svg";
        document.getElementById('button_scroll_m').src="Carousel Dot-1.svg";
        document.getElementById("text_service_1").innerHTML = "does your business needs designs and branding? ";
        document.getElementById("text_service_2").innerHTML = "do you have a program idea and need a design?  ";
        document.getElementById("text_service_3").innerHTML = "then dorto is the solution to your problem  ";
        document.getElementById("text_service_4").innerHTML = "we offer web and mobile and graphic design. ";
        document.getElementById('design_png').src="design.png";
        document.getElementById('s').style.width="15%";
        document.getElementById('s').style.marginLeft="0%";
        });
        document.getElementById('button_scroll_m').addEventListener("click",()=>{
          service_itme2 = 2;
          document.getElementById('button_scroll_m').src="Active.svg";
          document.getElementById('button_scroll_w').src="Carousel Dot-1.svg";
          document.getElementById('button_scroll_d').src="Carousel Dot-1.svg";
          document.getElementById("text_service_1").innerHTML = "do you need to go digital with your business? ";
          document.getElementById("text_service_2").innerHTML = "or do you have an idea and you   ";
          document.getElementById("text_service_3").innerHTML = "need help developing it?  ";
          document.getElementById("text_service_4").innerHTML = "dorto offers developing service for both ";
          document.getElementById("text_service_5").innerHTML = "platform Apple and android ";
          document.getElementById('design_png').src="mobile.png";
          document.getElementById('s').style.width="18%";
          document.getElementById('s').style.height="27%";
          document.getElementById('s').style.marginLeft="-8%";
          });
  


setTimeout(function(){

    document.getElementById("r").remove();
    document.getElementById("r1").remove();
    document.getElementById("r2").remove();
    document.getElementById("m").remove();
   document.getElementById("w").remove();
   },2000);



   document.getElementById("next_servis").addEventListener("click",()=>{
    if(service_itme2==1){
      service_itme2 = 2;
      document.getElementById('button_scroll_m').src="Active.svg";
      document.getElementById('button_scroll_w').src="Carousel Dot-1.svg";
      document.getElementById('button_scroll_d').src="Carousel Dot-1.svg";
      document.getElementById("text_service_1").innerHTML = "do you need to go digital with your business? ";
      document.getElementById("text_service_2").innerHTML = "or do you have an idea and you   ";
      document.getElementById("text_service_3").innerHTML = "need help developing it?  ";
      document.getElementById("text_service_4").innerHTML = "dorto offers developing service for both ";
      document.getElementById("text_service_5").innerHTML = "platform Apple and android ";
      document.getElementById('design_png').src="mobile.png";
      document.getElementById('s').style.width="18%";
      document.getElementById('s').style.height="27%";
      document.getElementById('s').style.marginLeft="-8%";
    }else if(service_itme2==2){
      service_itme2 = 3;
      document.getElementById('button_scroll_w').src="Active.svg";
      document.getElementById('button_scroll_d').src="Carousel Dot-1.svg";
      document.getElementById('button_scroll_m').src="Carousel Dot-1.svg";
      document.getElementById("text_service_1").innerHTML = "Dorto offers Web development services. ";
      document.getElementById("text_service_2").innerHTML = "our developers can build a digital version of your  ";
      document.getElementById("text_service_3").innerHTML = "business that can represent youe brand and  ";
      document.getElementById("text_service_4").innerHTML = "boost your sales using the latest technolohies. ";
      document.getElementById('design_png').src="web.png";
      document.getElementById('s').style.width="28%";
      document.getElementById('s').style.height="27%";
      document.getElementById('s').style.marginLeft="-30%";
    }else if(service_itme2==3){
      service_itme2 = 1;
      document.getElementById('button_scroll_d').src="Active.svg";
      document.getElementById('button_scroll_w').src="Carousel Dot-1.svg";
      document.getElementById('button_scroll_m').src="Carousel Dot-1.svg";
      document.getElementById("text_service_1").innerHTML = "does your business needs designs and branding? ";
      document.getElementById("text_service_2").innerHTML = "do you have a program idea and need a design?  ";
      document.getElementById("text_service_3").innerHTML = "then dorto is the solution to your problem  ";
      document.getElementById("text_service_4").innerHTML = "we offer web and mobile and graphic design. ";
      document.getElementById('design_png').src="design.png";
      document.getElementById('s').style.width="15%";
      document.getElementById('s').style.marginLeft="0%";    
    }
  
  });

  document.getElementById("back_servis").addEventListener("click",()=>{
    if(service_itme2==3){
      service_itme2 = 2;
      document.getElementById('button_scroll_m').src="Active.svg";
      document.getElementById('button_scroll_w').src="Carousel Dot-1.svg";
      document.getElementById('button_scroll_d').src="Carousel Dot-1.svg";
      document.getElementById("text_service_1").innerHTML = "do you need to go digital with your business? ";
      document.getElementById("text_service_2").innerHTML = "or do you have an idea and you   ";
      document.getElementById("text_service_3").innerHTML = "need help developing it?  ";
      document.getElementById("text_service_4").innerHTML = "dorto offers developing service for both ";
      document.getElementById("text_service_5").innerHTML = "platform Apple and android ";
      document.getElementById('design_png').src="mobile.png";
      document.getElementById('s').style.width="18%";
      document.getElementById('s').style.height="27%";
      document.getElementById('s').style.marginLeft="-8%";
    }else if(service_itme2==1){
      service_itme2 = 3;
      document.getElementById('button_scroll_w').src="Active.svg";
      document.getElementById('button_scroll_d').src="Carousel Dot-1.svg";
      document.getElementById('button_scroll_m').src="Carousel Dot-1.svg";
      document.getElementById("text_service_1").innerHTML = "Dorto offers Web development services. ";
      document.getElementById("text_service_2").innerHTML = "our developers can build a digital version of your  ";
      document.getElementById("text_service_3").innerHTML = "business that can represent youe brand and  ";
      document.getElementById("text_service_4").innerHTML = "boost your sales using the latest technolohies. ";
      document.getElementById('design_png').src="web.png";
      document.getElementById('s').style.width="28%";
      document.getElementById('s').style.height="27%";
      document.getElementById('s').style.marginLeft="-30%";
    }else if(service_itme2==2){
      service_itme2 = 1;
      document.getElementById('button_scroll_d').src="Active.svg";
      document.getElementById('button_scroll_w').src="Carousel Dot-1.svg";
      document.getElementById('button_scroll_m').src="Carousel Dot-1.svg";
      document.getElementById("text_service_1").innerHTML = "does your business needs designs and branding? ";
      document.getElementById("text_service_2").innerHTML = "do you have a program idea and need a design?  ";
      document.getElementById("text_service_3").innerHTML = "then dorto is the solution to your problem  ";
      document.getElementById("text_service_4").innerHTML = "we offer web and mobile and graphic design. ";
      document.getElementById('design_png').src="design.png";
      document.getElementById('s').style.width="15%";
      document.getElementById('s').style.marginLeft="0%";    
    }
  
  });

}

function display_Products(){
  document.getElementById("contaner_Products").style.opacity ='1';
  
gsap.from('#Vector',{opacitv:0,duration:1,delay: 0.2, x: "-700" , ease: Power0.easeInOut});
           gsap.from('#Vector1',{opacitv:0,duration:1, x: "-700" , ease: Power0.easeInOut});

           gsap.from('#Vector11',{opacitv:0,duration:1, y: "700", ease: Power0.easeInOut });

           gsap.from('#Vector111',{opacitv:0,duration:1, y: "-500",delay: 0.5,  ease: Power0.easeInOut});

           gsap.from('#Vector1t1',{opacitv:0,duration:1, y: "-700" , ease: Power0.easeInOut});



    gsap.from('.text_Products',{opacitv:0, duration:1,delay: 0.6, x: "800" });
    gsap.from('.see',{opacitv:0, duration:1,delay: 1, y: "800" });



}; 
function displayDate_Products() {
  gsap.to('#Vector',{opacitv:0,duration:1, x: "-700" , ease: Power0.easeInOut});
  
  gsap.to('#Vector1',{opacitv:0,duration:1,delay: 0.2, x: "-700" , ease: Power0.easeInOut});

  gsap.to('#Vector11',{opacitv:0,duration:1, y: "700", ease: Power0.easeInOut });

  gsap.to('#Vector111',{opacitv:0,duration:1,delay:0.1, y: "-500",  ease: Power0.easeInOut});

  gsap.to('#Vector1t1',{opacitv:0,duration:1, y: "-700" , ease: Power0.easeInOut});




  gsap.to('#remov',{opacitv:0, duration:1, x: "300" }); 
;

  setTimeout(function(){
   document.getElementById("remov").remove();
   document.getElementById("Vector").remove();
  document.getElementById("Vector1").remove();
  document.getElementById("Vector11").remove();
  document.getElementById("Vector111").remove();
  document.getElementById("Vector1t1").remove();

  },500);
  gsap.to('#remov',{opacitv:0, duration:1, x: "300" }); 
  gsap.from('.first',{opacitv:0,delay: 0.9, duration:1, y: "-700" });



  setTimeout(function(){
    document.getElementById("prod_contaner").style.height = "auto";
  document.getElementById("first").src = "Grou.png";
  document.getElementById("first").style.height = "100%";
  },800);
  
  
}


const slides = document.getElementById("slides");
const allSlides = document.querySelectorAll(".slide");
const slidesLength = allSlides.length;
const slideWidth = allSlides[0].offsetWidth;

let index = 0;
let posX1;
let posX2;
let initialPosition;
let finalPosition;

let canISlide = true;

const prev = document.getElementById("prev");
const next = document.getElementById("next");

const firstSlide = allSlides[0];
const lastSlide = allSlides[allSlides.length - 1];

const cloneFirstSlide = firstSlide.cloneNode(true);
const cloneLastSlide = lastSlide.cloneNode(true);

slides.appendChild(cloneFirstSlide);
slides.insertBefore(cloneLastSlide, firstSlide);

next.addEventListener("click", () => switchSlide("next"));
prev.addEventListener("click", () => switchSlide("prev"));

slides.addEventListener("transitionend", checkIndex);

slides.addEventListener("mousedown", dragStart);

slides.addEventListener("touchstart", dragStart);
slides.addEventListener("touchmove", dragMove);
slides.addEventListener("touchend", dragEnd);

function dragStart(e) {
  e.preventDefault();
  initialPosition = slides.offsetLeft;

  if (e.type == "touchstart") {
    posX1 = e.touches[0].clientX;
  } else {
    posX1 = e.clientX;

    document.onmouseup = dragEnd;
    document.onmousemove = dragMove;
  }
}

function dragMove(e) {
  if (e.type == "touchmove") {
    posX2 = posX1 - e.touches[0].clientX;
    posX1 = e.touches[0].clientX;
  } else {
    posX2 = posX1 - e.clientX;
    posX1 = e.clientX;
  }

  slides.style.left = `${slides.offsetLeft - posX2}px`;
}

function dragEnd() {
  /* 
    three possibilities:
    1. next slide
    2. prev slide
    3. stay still
    */
  finalPosition = slides.offsetLeft;
  if (finalPosition - initialPosition < -496) {
    switchSlide("next", "dragging");
  } else if (finalPosition - initialPosition > 496) {
    switchSlide("prev", "dragging");
  } else {
    slides.style.left = `${initialPosition}px`;
  }

  document.onmouseup = null;
  document.onmousemove = null;
}

function switchSlide(arg, arg2) {
  slides.classList.add("transition");

  if (canISlide) {
    if (!arg2) {
      initialPosition = slides.offsetLeft;
    }
    if (arg == "next") {
      slides.style.left = `${initialPosition - slideWidth}px`;
      index++;
    } else {
      slides.style.left = `${initialPosition + slideWidth}px`;
      index--;
    }
  }

  canISlide = false;
}

function checkIndex() {
  slides.classList.remove("transition");

  if (index == -1) {
    slides.style.left = `-${slidesLength * slideWidth}px`;
    index = slidesLength - 1;
  }

  if (index == slidesLength) {
    slides.style.left = `-${1 * slideWidth}px`;
    index = 0;
  }

  canISlide = true;
};

function display_Lea(){
  document.getElementById("Learning").style.opacity ='1';
gsap.from('.text_Learning',{opacitv:0,duration:1,delay:0.9, x: "-1800" });
gsap.from('#Vector222',{opacitv:0,duration:1, y: "1000" });
gsap.from('#Vector22',{opacitv:0,duration:1, y: "-1000" });
gsap.from('#Vector_Learning',{opacitv:0,duration:1, x: "1000" });
gsap.from('#Vector15',{opacitv:0,duration:1,delay:0.9, x: "1000" });
gsap.from('#Vector12',{opacitv:0,duration:1 ,delay:0.6, x: "1000" });
gsap.from('#Vector13',{opacitv:0,duration:1 ,delay:1.2, x: "1000" });
gsap.from('#first_Learning',{opacitv:0,duration:1 ,delay:7.6, x: "800" });

gsap.to('#Vector22',{opacitv:0,duration:1,delay:4.4, y: "800" });
gsap.to('#Vector_Learning',{opacitv:0,duration:1,delay:4.6, x: "-800" });
gsap.to('#Vector15',{opacitv:0,duration:1,delay:5.3, x: "-800" });
gsap.to('#Vector12',{opacitv:0,duration:1 ,delay:5.6, x: "-800" });
gsap.to('#Vector13',{opacitv:0,duration:1 ,delay:5, x: "-800" });
gsap.to('#Vector222',{opacitv:0,duration:1,delay:5, y: "800" });





setTimeout(function(){
   

    document.getElementById("Vector_Learning").remove();
   document.getElementById("Vector15").remove();
   document.getElementById("Vector12").remove();
   document.getElementById("Vector13").remove();
   document.getElementById("Vector22").remove();
   document.getElementById("Vector222").remove();
   document.getElementById("first_Learning").src = "prod.png";
   document.getElementById("first_Learning").style.height = "80%";

   

   },7500);

  };

  function display_abut(){
document.getElementById("Abutus3").style.opacity ='1';
document.getElementById("Abutus2").style.opacity ='1';

  let cl = document.querySelector('.slides2');
  let aaa = cl.children;
  let firstChild = aaa[0];
  let firstChild1 = aaa[1];
  let firstChild2 = aaa[2];
  let cl1 = document.querySelector('.slides3');
  let aaa1 = cl1.children;
  let firstChilda = aaa1[0];
  let firstChild1a = aaa1[1];
  let firstChild2a = aaa1[2];
  
  console.log(parseFloat(firstChild1.index));
  gsap.from(firstChild,{opacitv:0, duration:1, x: "1600"});
gsap.from(firstChild1,{opacitv:0, duration:1,delay:1, x: "1600"});
gsap.from( firstChild2,{opacitv:0, duration:1,delay:2, x: "1600"});
gsap.from(firstChilda,{opacitv:0, duration:1,delay:3, x: "1800"});
gsap.from(firstChild1a,{opacitv:0, duration:1,delay:4, x: "1800"});
gsap.from(firstChild2a,{opacitv:0, duration:1,delay:5, x: "1600"});

};

}else{
    
    
};
}