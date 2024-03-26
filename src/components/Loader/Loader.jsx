import { FC, MutableRefObject, useEffect, useRef } from 'react';
import gsap from 'gsap'

import './Loader.scss'
import { Logo } from '../Logo/Logo';

function getRandomPower() {
  const powers = ['out', 'inOut'];
  const randomPower = Math.floor(Math.random() * 5) + 1;
  const randomEase = powers[Math.floor(Math.random() * powers.length)];

  return `power${randomPower}.${randomEase}`;
}  

const loaderAnim = (tl, onComplete) => {
  tl = gsap.timeline({
    onComplete: onComplete
  });
  
  tl
  .to('.loader__progress', {
    scaleX: 1,
    duration: 5,
    delay: 0.5,
    ease: getRandomPower(),
  })
  .to('.loader', {
    opacity: 0,
    delay: 0.5,
    duration: 0.2,
  })
}

const Loader = ({ setLoaderFinished }) => {

    useEffect(() => {
      const tl = gsap.timeline();

      tl.add(loaderAnim(tl, () => setLoaderFinished(true)))
    })

  return (
    <section className="loader">
      <div className="loader__wrapper">
        <Logo classImage="loader__logo" />
        <div className="loader__progress-wrapper" >
          <div className="loader__progress"/>
        </div>
      </div>
    </section>
  )
}

export default Loader;
