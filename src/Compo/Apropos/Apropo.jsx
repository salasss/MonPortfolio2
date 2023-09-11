import React from 'react';
import './Apropo.css';
import imgapropo from '../../images/Programming-amico.svg';
import tailwind from '../../images/tailwind-css.png';
import fig from '../../images/figma.png';
import transition from '../transition';
import { motion } from 'framer-motion';

function Apropo() {
  return (
    <motion.div
      className="apropos container section"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2>LET ME INTRODUCE MYSELF</h2>
      <div className="info_apropos grid">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h5>I am ALKAMA SALAS,</h5>
          <p>
            A dedicated computer science student with a strong passion for all things related to technology. From a young age, I have been captivated by the world of programming and software development, driven by the desire to deepen my knowledge and skills in this dynamic field.
          </p>
          <div className="skillscontainer">
            <h4>My Skills</h4>
            <div className='brands'>
              <i class="fa-brands fa-square-js"></i>
              <i class="fa-brands fa-react"></i>
              <i class="fa-brands fa-java"></i>
              <i class="fa-brands fa-laravel"></i>
              <i class="fa-brands fa-php"></i>
              <i class="fa-brands fa-python"></i>
              <i><img src={tailwind} alt="" /></i>
              <i><img src={fig} alt="" /></i>

            </div>
          </div>
        </motion.div>
        <motion.img
  src={imgapropo}
  alt=""
  initial={{ opacity: 0, x: -50, rotate: -10 }} // Ajoutez une rotation initiale
  animate={{ opacity: 1, x: 0, rotate: 0 }} // Anime la rotation
  transition={{ duration: 0.5, delay: 0.4 }}
/>
      </div>
    </motion.div>
  );
}

export default transition(Apropo);
