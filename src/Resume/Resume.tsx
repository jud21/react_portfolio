import React from "react";
import { Link } from "react-router-dom";

const Resume = (props: {}) => (
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
                    <img src="../Images/template5.jpg" alt="Resume Picture" />
                </div>
            </main>
        </div>
)

export default Resume