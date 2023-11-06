import React from 'react';
import './Home.css';
import img3 from './images/img3.jpeg';
import CV from './files/CV Oct 2023 (1).pdf';
const Home = () => {
  return (
    <>
    <div className='Home-container'>
    <div className='left'>
     <div className='Head'>
     <h1 className='HeadName'>Suyasha Singh</h1>
     <p>Professor in Philosophy</p>
     </div>
      <div className='intro'>
      <h2>About</h2>
      <hr></hr>
       <p className='grey'>
      A passionate assistant Professor intrested
      <br></br>
      in social and political Philosophy and ethics.
      <br></br>
      Excited to embark on this intellectual journey
      <br></br> 
      and explore the complexities of the thought-provoking
      <br></br>
      concepts of Philosophy
       </p>
      </div>
      <div className='intro'>
        <h2>My Resume</h2>
        <hr></hr>
      <button><a href={CV} target={'_blank'} rel="noreferrer">Download CV</a></button>
      </div>
    </div>
    <div className='right'>
      <div className='im'>
        <img src={img3} alt='this is Suyasha Singh' width={300} height={300}/>        
      </div>
    </div>
    </div>
    <div className='Contact-Footer'>
     <p>&copy; 2023 by Suyasha Singh</p>
    </div>
    </>
  )
}

export default Home
