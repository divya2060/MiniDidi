import React from 'react';
import './Reasearch.css';
import Amity from './images/Amity.webp';
const Reasearch = () => {
  return (
    <>
    <div className='Reasearch-container'>
      <div className='R-First'>
       <h1>Reasearch</h1>
       <hr></hr>
       <p> <a href='https://www.linkedin.com/in/dr-suyasha-singh-isser-25609175?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' target={'_blank'}><span>“Art of Segregation: Navigating Patriarchy of Plato, Aristotle and Rousseau”</span></a></p>
       <br></br>
       <p><a href='https://du-in.academia.edu/DrSuyashaSinghIsser' target={'_blank'}><span>University Of Delhi Academia.edu profile</span></a></p>
       <br></br>
       <p><a href='https://www.researchgate.net/profile/Suyasha-Singh' target={'_blank'}><span>Reasearch gate profile</span></a></p>
      </div>
      <div className='R-second'>
        <h1>Experience</h1>
        <hr></hr>
        <div className='Exp'>
         <div className='Exp-left'>
         <img src={Amity} alt='Amity University' width={400} height={400}/> 
         </div>
         <div className='Exp-right'>
         <h2>Assistant Professor At Amity University</h2>
         </div>
        </div>
      </div>
    </div>
    <div className='Contact-Footer'>
    <p>&copy;2023 by Suyasha Singh</p>
    </div>
    </>
  )
}

export default Reasearch