import React from 'react';
import backgroundImage from "../asset/background.jpg";
import image from '../asset/globe.png';

const About = () => (
  <div className="p-4 bg-cover bg-center h-screen" style={{ backgroundImage: `url(${backgroundImage})`}}>
    <div className='text-slate-100 text-center md:mx-60'>
      <h1 className="text-5xl font-bold mb-4">About Us</h1>
      <img src={image} alt='World University'
        className='m-auto h-32'></img>
      <p className='text-lg'>World University is a platform developed by PT World University to help students gather detailed information about various countries worldwide. Our goal is to provide a user-friendly and informative experience for our users.</p>
      <h2 className="text-3xl font-semibold mt-4">Our Vision</h2>
      <p className='text-lg'>To become the leading platform in global education by providing comprehensive and accessible information about countries around the world.</p>
      <h2 className="text-3xl font-semibold mt-4">Our Team</h2>
      <p className='text-lg'>We are a team of passionate developers and educators committed to enhancing global knowledge sharing.</p>
    </div>
    
  </div>
);

export default About;
