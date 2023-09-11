import React from 'react';
import './Contact.css';
import transition from '../transition';
import { motion } from 'framer-motion';

function Contact() {
  return (
    <motion.section
      className='contact container section'
      id='Contact'
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.h1
        className='section_title'
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Contact Me
      </motion.h1>
      <div className='contact_container grid'>
        <motion.div
          className='contact_info'
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h5 className='contact_p'>
            Ready to collaborate on exciting projects and take on new challenges in the world of web and software development!
          </h5>
        </motion.div>
        <form
          action=''
          className='contact_form'
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className='contactformgroup a1'>
            <div className='contactformdiv'>
              <input
                type='text'
                className='contactforminput'
                placeholder="Your First Name"
              />
            </div>

            <div className='contactformdiv'>
              <input
                type='email'
                className='contactforminput'
                placeholder='Your Email'
              />
            </div>
          </div>
          <div className='contactformdiv'>
            <input
              type='text'
              className='contactforminput'
              placeholder='Subject'
            />
          </div>

          <div className='contactformdiv area'>
            <textarea
              name=''
              id=''
              cols='30'
              rows='10'
              className='contactforminput'
              placeholder='Write your message here'
            ></textarea>
          </div>
          <motion.button
            type='submit'
            className='btn'
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Send Message
          </motion.button>
        </form>
      </div>
    </motion.section>
  );
}

export default transition(Contact);
