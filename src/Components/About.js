import React from 'react'
import './About.css';
import LSR from './images/LSR.jpg';
import ZKC from './images/ZKC.png';
import UOH from './images/UOH.jpg';
import DU from './images/DU.jpg';
const About = () => {
  return (
    <>
    <div className='About-container'>
    <div className='A-right'>
      <div className='Education'>
     <h1>Academic Acheivement</h1>
     <hr></hr>
     <div className='Education1'>
    <div className='E-left'>
     <p><span>Education Qualification:</span>Completed PHD under Dr. Rekha Navneet on the topic 'Relocating Women on Rousseau's General'</p>
     <br></br>
     <p><span>FellowShip:</span> ICPR Junior Reasearch Fellow at Indian Council of Philosophical Reasearch,2019-2021.</p>
     <br></br>
     <p><span>Reasearch Intrest:</span> social and political Philosophy, Feminism , Indian Philosophy , Ethics , Greek Philosophy</p>
     <br></br>
     <p><span>Reasearch Experience:</span>Completed M.Phil under supervision of Prof. A Raghuramraju from University Of Hyderabad</p>
     <br></br>
     <p><span>CBSE-UGC NET:</span>Qualified</p>
    </div>
    </div>
    </div>
    <div className='E-back'>
    
    </div>
      <div className='Ed'>
        <h1>Education Qualification</h1>
        <hr></hr>
      </div>
      <div className='Education2'>
      <div className='le'>
       <img src={LSR} alt='Lady Shri Ram college'    width={200} height={200}/>
      </div>
      <div className='Ri'>
        <p><span>BA(Hons) Philosophy 2014</span></p>
      </div>
      <div className='le'>
      <img src={ZKC} alt='Zakir Hussain college'    width={200} height={200}/>
      </div>
      <div className='Ri'>
      <p><span>MA Philosophy 2017</span></p>
      </div>
      <div className='le'>
      <img src={UOH} alt='University Of Hyderabad'    width={200} height={200}/>
      </div>
      <div className='Ri'>
      <p><span>M.Phil Philosophy 2017-2018</span></p>
      </div>
      <div className='le'>
      <img src={DU} alt='University Of Delhi'      width={200} height={190}/>
      </div>
      <div className='Ri'>
      <p><span>Ph.D. Philosophy 2022</span></p>
      </div>
    </div>  
    </div>
    </div>
    <div className='Contact-Footer'>
     <p>&copy; 2023 by Suyasha Singh</p>
    </div>
    </> 
  )
}

export default About