import React from 'react';
import './home.css';
import transition from '../transition';
import { motion } from 'framer-motion';

function Home() {
    return (
        <motion.div
            className="home container"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className='titlehome'>
                <motion.h1
                    initial={{ y: -50 }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >PORTFOLIO</motion.h1>
                <motion.h4
                    initial={{ y: -50 }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                >SALAS ALKAMA</motion.h4>
                <motion.div
                    className="soslink"
                    initial={{ y: -50 }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                >
                    <a href="https://github.com/salasss"><i class="fa-brands fa-square-github"></i></a>
                    <a href=""><i class="fa-brands fa-linkedin"></i></a>
                </motion.div>
            </div>
            <div className='ellipse-container'>
                <motion.svg
                    viewBox="0 0 200 100"
                    xmlns="http://www.w3.org/2000/svg"
                    className='ellipse e1'
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                >
                    <ellipse cx="100" cy="50" rx="100" ry="50" stroke="#F2C744" strokeWidth="0.25" fill="none" />
                </motion.svg>
                <motion.svg
                    viewBox="0 0 200 100"
                    xmlns="http://www.w3.org/2000/svg"
                    className='ellipse e2'
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                >
                    <ellipse cx="100" cy="50" rx="100" ry="50" stroke="black" strokeWidth="0.25" fill="none" />
                </motion.svg>
                <motion.svg
                    viewBox="0 0 200 100"
                    xmlns="http://www.w3.org/2000/svg"
                    className='ellipse e4'
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: 1 }}
                >
                    <ellipse cx="100" cy="50" rx="100" ry="50" stroke="black" strokeWidth="0.25" fill="none" />
                </motion.svg>
                <motion.svg
                    viewBox="0 0 200 100"
                    xmlns="http://www.w3.org/2000/svg"
                    className='ellipse e3'
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: 1.2 }}
                >
                    <ellipse cx="100" cy="50" rx="100" ry="50" stroke="#F2C744" strokeWidth="0.25" fill="none" />
                </motion.svg>
            </div>
        </motion.div>
    )
}

export default transition(Home);