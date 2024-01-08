"use client"
import WebsiteScreen from '@/lib/components/website-screen';
import { COURSE_WELCOME_TEXT } from '@/lib/config';
import Image from 'next/image';
import Link from 'next/link';
import menta from "../images/menta.png"
import menta2 from "../images/menta2.jpeg"
import menta3 from "../images/menta3.png"
import { title } from 'process';
import React, { useState } from 'react';
 


const Home = () => {
  const [showIframe, setShowIframe] = useState(false);

  const handleButtonClick = () => {
    setShowIframe(!showIframe);
  };  return (
    
    <div>
      <h1 className='title'>This Is A Website About Menta The Labrador</h1>
  
      <div className='button-container'>
        <button onClick={handleButtonClick} className='toggle-button'>
          {showIframe ? 'Close Video' : 'Do Not Push!'}
        </button>

        <div style={{ display:'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: '70px' }}>
          <Image src={menta2} width="240" height="320" alt="Menta the Labrador" style={{ transform: 'None' }}/>
          <Image src={menta} width="240" height="320" alt="Menta the Labrador" style={{ transform: 'None' }}/>
          <Image src={menta3} width="240" height="320" alt="Menta the Labrador" style={{ transform: 'None' }}/>
        </div>
        <button onClick={handleButtonClick} className='toggle-button'>
          {showIframe ? 'Close Video' : 'Do Not Push!'}
        </button>
      </div>

        <div className='column'>
          <h3 className='title'>People Who <em>Love</em> Menta</h3>
          <ul >
            <li>Neel</li>
            <li>Yaron</li>
            <li>Shir</li>
            <li>Noam</li>
            <li>Gila</li>
            <li>Amichay</li>
            <li>Dor</li>
            <li>Ella</li>
          </ul>
        </div> 

        <div id="intro to Menta" className='column'>
          <h2 className='title'>A Little Bit About Menta</h2>
            <p>Menta was raised a <a href="https://www.israelguidedog.org.il/" target="_blank" > service puppy</a>.<br></br>
              After a year at her owners she was sent to the service-dog-bootcamp. <br></br>
              A few months later her owners were told that she was disqualified from the course due to health issues. <br></br>
              Menta was happy to return to her owners and the lived happliy ever after <br></br>
            </p>
        </div>

        <div className='column'>
          <h3 className='title'>People Who <em>Do Not Love</em> Menta</h3>
          <ul >
            <li>Eitan</li>
            <li>Yafit</li>
            <li>Avia</li>
            <li>Noam (the child)</li>
            <li>Dolly</li>
          </ul>
        </div>
        
        <div>
          {showIframe && (
            <div className='iframe-container'>
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/ojULkWEUsPs"
                title="YouTube Video"
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div>
          )}
        </div>
    </div>
  );
};


export default Home;

