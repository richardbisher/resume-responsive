import './App.css';

import arrowright from'./images/arrowright.svg';
import footerimage from'./images/Footer.svg';
import bgshape from './images/bgshape.svg';
import tab_view_first_image from'./images/first_image_tabview.svg';

import firstimage from './images/firstimage.png'
import facebook_icon from './images/facebook.svg';
import insta from './images/instagram.svg';
import linkedin from './images/linkedin.png';
import twit from './images/twitter.png';





import secondimage from './images/Combined Shape.svg'
function Border_blur_right(props){
  return(
    <div className='border_blue'>{props.label}</div>
  
  );
}
function Rightcontentparagraph(props){
  return(
  <div className='rightcontentparagraph'>{props.label}</div>
  );
}
function Middlerightheading(props){
  return(
    <div className='right_heading'>{props.label}</div>
  );
}

function Linkblue(props){
  return(
    
    <a href='#' className='linkblue' >{props.label}<img src={arrowright}/></a>
  );
}
function Leftcontentparagraph(props){
  return(
    <div className='Leftcontentparagraph'>{props.label}</div>
  );
}
function Leftcontentparagraphheading(props){
  return(
    <div className='Leftcontentparagraphheading'>{props.label}</div>
  );
}
function Leftcontent(props){
  return(
    <div className='left_content'>{props.label}</div>
  );
}

function Headingleft(props){
  return(
         <div className='left_heading'>{props.label}</div>
  );
}
function Toper(props){
  return(
        <button className='button_contact'>{props.label}</button>
      
  );
}

function Header(){
  return(

<div className='body'>

<div className='container'>
 
 <div className='profile'>
      <img src={firstimage} className='firstimage' />
      <img src={secondimage}className='imagecircle' />
</div>

<div className='right_content'>
     <h4>Designer / Developer</h4>
     <div className='first_heading'> Matt McDonald</div>
    
     <div className='blue_button_top'> <Toper label="Contact Me"/></div>
  
</div>


</div>

<div className='second_content_container'>
          <div className='secondcontent'>
    <div className='left_par'>
      <div>
        <Headingleft label="Skillset"/>
        <Leftcontent label="Visual Design"/>
        <Leftcontent label="Illustration"/>
        <Leftcontent label="UX / Prototyping"/>
        <Leftcontent label="Video / Motion Graphics"/>
        <Leftcontent label="Marketing"/>
        <Leftcontent label="Front-End Development"/>
      </div>


      <div>
        <Headingleft label="Awards"/>
         <Leftcontent label="Award 1 — Mar. 2019"/>
        <Leftcontent label="Award 2 — Sept. 2015"/>
        <Leftcontent label="Award 3 — Feb. 2013"/>
        <Leftcontent label="Award 4 — Dec. 2011"/>
        <Leftcontent label="Award 5 — Jan. 2005"/>
      
      </div>


      
        <div className='left_middle_par'>

         <div>
         <Headingleft label="Career Traits"/>
          <Leftcontentparagraphheading label="Holistic Designer"/>
         <Leftcontentparagraph className='career' label="Design should be treated as a living organism, guided by the environment it lives in as a whole."/>
         </div>
     
        </div>
          <div>
            <Leftcontentparagraphheading label="User-focused"/>
            <Leftcontentparagraph className='career' label="I pay close attention to the user’s needs and pain points. I design with empathy. Launch, learn & iterate."/>

          </div>
               <div>
               <Leftcontentparagraphheading label="Proactive Evol"/>
               <Leftcontentparagraph className='career' label="Curiosity and a desire to learn constantly broadens my skill set, enabling me to wear many hats at once."/>
               </div>
    
           <div>
                 <Leftcontentparagraphheading label="Bold,yet practical"/>
      <Leftcontentparagraph className='career' label="Bold, yet practical - I know when to push the boundaries vs. when to embrace simplicity to meet multiple deadlines. "/>

     </div>

   <div>
<Headingleft label="RECENT WORKS"/>
      <div className='link_list'>
      <Linkblue label="thedonut.co"/>
      <Linkblue label="outboundengine.com"/>
      <Linkblue label="tipyo.net "/>
      <Linkblue label="codefresh.io "/>
      <Linkblue label="carsoncreekranch.com "/>
</div>
         
      </div>

       
      
      







       </div>
</div>

<div className='right_container'>
   <div className='about_me'>
   <Middlerightheading label="About me"/>
  <Rightcontentparagraph label="Use this area to say something about yourself or describe your goals.  Tum dicere exorsus est cur verear, ne ad id omnia referri oporteat, ipsum per se ipsam voluptatem, quia consequuntur magni dolores eos, qui blanditiis praesentium voluptatum deleniti atque insitam in ea quid est eligendi optio, cumque nihil ut ipsi auctori huius disciplinae placet: constituam, quid."/>
  <Border_blur_right label=""/>
   </div>


   <div>
   <Middlerightheading label="Experience"/>
        <Headingleft label="Front-End Developer — Dropbox"/>

  <Rightcontentparagraph label="Describe your responsibilities.  Tum dicere exorsus est cur verear, ne ad id omnia referri oporteat, ipsum per se ipsam voluptatem, quia consequuntur magni dolores eos, qui blanditiis praesentium voluptatum deleniti atque insitam in ea quid est eligendi optio, cumque nihil ut ipsi auctori huius disciplinae placet: constituam, quid."/>
   </div>


   <div>
        <Headingleft label="Lead Designer — Scrypt, Inc."/>

  <Rightcontentparagraph label="Describe your responsibilities.  Tum dicere exorsus est cur verear, ne ad id omnia referri oporteat, ipsum per se ipsam voluptatem, quia consequuntur magni dolores eos, qui blanditiis praesentium voluptatum deleniti atque insitam in ea quid est eligendi optio, cumque nihil ut ipsi auctori huius disciplinae placet: constituam, quid."/>
   </div>

   <div>
        <Headingleft label="UI Designer — Pinger Inc."/>

  <Rightcontentparagraph label="Describe your responsibilities.  Tum dicere exorsus est cur verear, ne ad id omnia referri oporteat, ipsum per se ipsam voluptatem, quia consequuntur magni dolores eos, qui blanditiis praesentium voluptatum deleniti atque insitam in ea quid est eligendi optio, cumque nihil ut ipsi auctori huius disciplinae placet: constituam, quid."/>
   </div>

  <Border_blur_right label=""/>


  <div>
       <Middlerightheading label="Education"/>
          <Rightcontentparagraph label="BFA in Graphic Design — James Madison University"/>
    </div>

   
</div>






</div>

            <div className='footer_backgroundimage'>
               <div className='footer'>
               <Middlerightheading className='footer_heading' label="Get in touch!"/>
               <a href='#' className='footer_content'>youremail@email.com  |  512.273.1838</a>
               <div className='icons'>
               <img src={facebook_icon}></img>
               <img src={insta}></img>
               <img src={linkedin}></img>
               <img src={twit}></img>

               <h1>richard</h1>
               </div>
               </div>

                         



               </div>
</div>

      
    

   

  
  );
}


export default Header;
