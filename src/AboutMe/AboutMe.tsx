import React from "react";
import { Link } from 'react-router-dom';

const AboutMe = (props: {}) => (
       <div>
            <nav>
                <div>
                    <ul>
                        <li>
                            <Link to='/'>Home</Link>
                        </li>
                        <li>
                            <Link to='/aboutme' >About Me</Link>
                        </li>
                        <li>
                            <Link to='/resume'>Resume</Link>
                        </li>
                        <li>
                            <Link to='/contactme'>Contact Me</Link>
                        </li>
                    </ul>
                </div>
            </nav>
            <main>
                <div>
                    <h1>About Me</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce porta condimentum consectetur. Nam ullamcorper luctus dapibus. Cras convallis mauris vitae quam pulvinar vestibulum. Donec blandit bibendum sem, sed auctor lectus gravida sed. Phasellus nisl velit, gravida sed purus ut, sollicitudin tempus nibh. Donec felis tortor, tincidunt id dictum eu, molestie faucibus purus. Sed rhoncus, ante consectetur imperdiet viverra, risus enim blandit arcu, vitae efficitur risus justo in sem. Vivamus at tincidunt nulla.</p>
                </div>
            </main>
        </div> 
)


export default AboutMe