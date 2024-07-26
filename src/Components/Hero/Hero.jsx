import React, { useState, useEffect } from 'react';
import './Hero.css';
import Virat1 from '../../Images/Virat1.png';
import CountUp from 'react-countup';

export default function Hero() {
  const [startAnimation, setStartAnimation] = useState(false);

  useEffect(() => {
    // Start the animation when the component is mounted
    setStartAnimation(true);
  }, []);

  return (
    <div className='MainHome'>
      <div className="containerr">

        <div className="Home" id='Home'>
          <div className="left-h">

            <div className="best-add">
              <div id="aman"></div>
              <span>Experience comfort and style with our sneakers</span>
            </div>

            <div className="Home-text">
              <div>
                <span className='stroke-text'>power </span>
                <span>that</span>
                <div>
                  <span>you run</span>
                </div>
                <div>
                  <span className='span-line'>
                    Our sneakers are good for running, walking, dashing, and everything else too.
                  </span>
                </div>
              </div>
            </div>

            <div className="figures">
              <div className="figures1">
                <span className="span1">+<CountUp start={0} end={75} duration={2.5} /></span>
                <span className='span2'>comfort sneakers</span>
              </div>
              <div className="figures2">
                <span className="span1">+<CountUp start={0} end={500} duration={2.5} /></span>
                <span className='span2'>Customer</span>
              </div>
              <div className="figures3">
                <span className="span1">+<CountUp start={0} end={90} duration={2.5} /></span>
                <span className='span2'>Design</span>
              </div>
            </div>

            <div className="hero-btn">
              <button className="btn">Get Started</button>
              <button className="btn">Learn More</button>
            </div>

          </div>

          <div className="right-h">
            <img src={Virat1} alt="" className='Virat-image' />
          </div>

        </div>

      </div>

    </div>
  );
}
