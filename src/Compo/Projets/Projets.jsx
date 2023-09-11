import React, { useState } from 'react';
import transition from '../transition';
import './projets.css';
import { motion } from 'framer-motion';
import Menu from './donnes';
import imgapropo from '../../images/WorldWideMétéo.png';

function Projets() {
  const [items, setItems] = useState(Menu);

  const filterItems = (categoryItem) => {
    const updatedItems = Menu.filter((curElem) => {
      return curElem.category === categoryItem;
    });
    setItems(updatedItems);
  };

  return (
    <section id='projets' className='projet container section'>
      <div className='motion-div'>
        <motion.h3
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          My Projects
        </motion.h3>
        <linearGradient className='linearGradient' />
        <motion.p
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Allow me to warmly introduce you to a selection of the personal projects I've had the privilege of crafting during my academic journey !
        </motion.p>
      </div>
      <div className='project-container'>
        {items.map((elem) => {
          const { id, image, title, category } = elem;
          return (
            <motion.div
              className='project'
              key={id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <img src={image} alt='Projet 1' />
              <div className='workmask'></div>
              <h5 className='worktitle'>{title}</h5>
              <p className='worktag'>{category}</p>
              <a href='#' className='workbutton'>
                <i class='fa-solid fa-link'></i>
              </a>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

export default transition(Projets);
