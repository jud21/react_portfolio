import React from "react";
import { Link } from 'react-router-dom';

const ContactMe = (props: {}) => (
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
                    <h1>Contact Me!</h1>
                    <div className="container">
                        <form action="action_page.php">

                            <label>Name</label>
                            <input type="text" id="name" name="name"></input>

                            <label>Email</label>
                            <input type="email" id="email" name="email"></input>

                            <label>Subject</label>
                            <textarea id="subject" name="subject" placeholder="Reach Out!"></textarea>

                            <input type="submit" value="Submit"></input>

                        </form>
                    </div>
                </div>
            </main>
        </div>
)

export default ContactMe