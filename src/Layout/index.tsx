import React from 'react'
import { Routes, Route } from 'react-router';
import { Home } from '../Home'
import AboutMe from '../AboutMe/AboutMe';
import ContactMe from '../ContactMe/ContactMe';
import Resume from '../Resume/Resume';

const Layout = (props : {}) => (
    <div>
        <Routes>
            <Route path="/" element={<Home title="JD Fallon"/>} />
            <Route path="/aboutme" element={<AboutMe />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/contactme" element={<ContactMe />} />
        </Routes>
    </div>
)

export default Layout