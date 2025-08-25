let button=document.getElementById('btn');
let Resume = document.getElementById('resumeBtn');
let education=document.getElementById('edu-sec');

let isBoxVisible = false;
//script for hidden Education box
button.addEventListener('click',() => {
    if(!isBoxVisible){
        education.innerHTML=`<div class="education" class="edu-container">
    <h3>Education</h3>
    <hr class="divider">
    <ul>
      <li style="color:rgb(151, 234, 49)">B.Sc. Mathematics<strong style="color:#ef3c60"> — Vidhyasagar College (2014-2017) | 80%</strong></li>
      <li style="color:rgb(157, 234, 40)">M.Sc. Mathematics<strong style="color:#EF3C60">— GVG College (2017-2019) | 82%</strong></li>
    </ul>
  </div> `;
  isBoxVisible = true;
    }else {
        education.innerHTML = '';
        isBoxVisible = false;
    }
});
//For resume dowload
Resume.addEventListener("click",function() {
   //Resume file path
   let resumeUrl = "./my image/Divya Resume.pdf";
   
   //create a temporary link element
   let link = document.createElement('a');
   link.href = resumeUrl;
   link.download = "My_Resume.pdf";
   document.body.appendChild(link);
   link.click();
   document.body.removeChild(link);
   
   //open the resume in new tab
   window.open(resumeUrl,"_blank");
});


// Get elements
let proBtn = document.getElementById('html-btn');
let Card = document.getElementById('Html-card');

let cssBtn = document.getElementById('css-btn');
let Card2 = document.getElementById('Css-card');
let Card3 = document.getElementById('Css2-card');

let jsBtn = document.getElementById('js-btn');
let Card4 = document.getElementById("JS-card");
let Card5 = document.getElementById("JS2-card");

let bsBtn = document.getElementById('BS-btn');
let Card6 = document.getElementById('BS-card');

let reactBtn = document.getElementById('react-btn');
let Card7 = document.getElementById("React-card");
let Card8 = document.getElementById("React2-card");

let mernBtn = document.getElementById('mern-btn');
let Card9 = document.getElementById("Mern-card");
let Card10 = document.getElementById("Mern2-card");

// Initially hide all cards
Card.style.display = 'none';
Card2.style.display = 'none';
Card3.style.display = 'none';
Card4.style.display = 'none';
Card5.style.display = 'none';
Card6.style.display = 'none';
Card7.style.display = 'none';
Card8.style.display = 'none';
Card9.style.display = 'none';
Card10.style.display = 'none';

// Toggle HTML project card
proBtn.addEventListener('click', () => {
  if (Card.style.display === 'none') {
    Card.style.display = 'block';
  } else {
    Card.style.display = 'none';
  }
});

// Toggle HTML,CSS project cards
cssBtn.addEventListener('click', () => {
  const allHidden = Card2.style.display === 'none' && Card3.style.display === 'none';

  if (allHidden) {
    Card2.style.display = 'block';
    Card3.style.display = 'block';
  } else {
    Card2.style.display = 'none';
    Card3.style.display = 'none';
  }
});

  // Toggle HTML,CSS,JS PRIJECT Cards
  jsBtn.addEventListener('click',()=>{
   const allHidden = Card4.style.display === 'none' && Card5.style.display === 'none';

  if (allHidden) {
    Card4.style.display = 'block';
    Card5.style.display = 'block';
  } else {
    Card4.style.display = 'none';
    Card5.style.display = 'none';
  }
  })

  // Toggle Bootstrap project card
bsBtn.addEventListener('click', () => {
  if (Card6.style.display === 'none') {
    Card6.style.display = 'block';
  } else {
    Card6.style.display = 'none';
  }
});

  // Toggle HTML,CSS,JS ,REACT PRIJECT Cards
  reactBtn.addEventListener('click',()=>{
   const allHidden = Card7.style.display === 'none' && Card8.style.display === 'none';

  if (allHidden) {
    Card7.style.display = 'block';
    Card8.style.display = 'block';
  } else {
    Card7.style.display = 'none';
    Card8.style.display = 'none';
  }
  })

  // Toggle HTML,CSS,JS ,REACT PRIJECT Cards
  mernBtn.addEventListener('click',()=>{
   const allHidden = Card9.style.display === 'none' && Card10.style.display === 'none';

  if (allHidden) {
    Card9.style.display = 'block';
    Card10.style.display = 'block';
  } else {
    Card9.style.display = 'none';
    Card10.style.display = 'none';
  }
  })


