// @ts-nocheck

import React from "react";
import { makeStyles } from '@material-ui/core';
import Chicago from '../Images/Chicago.jpg';
import { Link } from 'react-router-dom';
// import { Component } from 'react';
// import './main.css';

// class main extends Component {
//     render() {
//         return <div className="main" />;
//     }
// }

interface Props{
    title: string;
}

// const useStyles = makeStyles({
//     root:{
//         padding: '0',
//         margin: '0'
//     },
//     navbar_container: {
//         display: 'flex',
//         justifyContent: 'space-between'
//     },
//     logo: {
//         margin: ' 0 0 0 0.45rem'
//     },
//     logo_a: {
//         color: 'rgb(28,24,22)'
//     },
//     logo_navigation: {
//         listStyle: 'none',
//         textTransform: 'uppercase',
//         textDecoration: 'none'
//     },
//     nav_a: {
//         display: 'block',
//         padding: '1em',
//         color: 'black'
//     },
//     navigation: {
//         display: 'flex',
//         listStyle: 'none'
//     },
//     main:{
//         backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${Chicago})`,
//         width: '100%',
//         height: '100%',
//         backgroundSize: 'cover',
//         backgroundRepeat: 'no-repeat',
//         backgroundPosition: 'center',
//         position: 'absolute'
//     },
//     main_text: {
//         textAlign: 'center',
//         position: 'relative',
//         top: '48%',
//         color: 'white'
//     }

// });

export const Home = (props:Props) => {
    // const classes = useStyles();
    const classes = {};

    return (
        <div className={classes.root}>
            <nav>
                <div className={classes.navbar_container}>
                    <ul className={ `${classes.navigation} ${classes.logo_navigation}`}>
                        <li>
                            <Link to='/' className={classes.nav_a}>Home</Link>
                        </li>
                        <li>
                            <Link to='/aboutme' className={classes.nav_a}>About Me</Link>
                        </li>
                        <li>
                            <Link to='/resume' className={classes.nav_a}>Resume</Link>
                        </li>
                        <li>
                            <Link to='/contactme' className={classes.nav_a}>Contact Me</Link>
                        </li>
                    </ul>
                </div>
            </nav>
            <main className={classes.main}>
                <div className={classes.main_text}>
                    <h1>{ props.title }</h1>
                    <p>Programmer Extraordinaire</p>
                    <p>Focusing on Python, JavaScript, and React</p>
                </div>
                <div>
                    <a href="https://www.linkedin.com/in/joseph-fallon-0763b95a/" target="_blank"> <img src="../Images/linkedin.png" alt="LinkedIn"></img></a>
                    <a href="https://github.com/jud21" target="_blank"> <img src=".../Images/github.png" alt="GitHub"></img></a>
                </div>
            </main>
        </div>
    )
}