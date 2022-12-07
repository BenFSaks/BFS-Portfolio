import React from 'react';
import './Experience.css'
import Nav from '../routes/route'
import geLogo from '../ge.png'
import techodet from '../techodet.png'
const Experience = () => {
    return (
        <div className='experience-content'>
            <Nav></Nav>
            <div className='exp-page'>
                <div>
                    <img src={geLogo} alt="" />
                    <p><span>May 2022 - November 2022</span></p>
                    <p>I have worked with GE for 6 months as a software engineer intern. I worked on two seperate teams during my time there. Learn low level development and web programming.</p>
                </div>
                <div>
                    <img id="techodet" src={techodet} alt="" />
                    <p><span>June 2021 - July 2021</span></p>
                    <p>My first internship; And at a startup too! I got my first work experience from here learning about the challenges of bias in hiring and how we can solve this problem.</p>
                </div>
                <div>
                    <form action="">
                        <h1>Conact Me</h1>
                        <div className='names'>
                            <input type="text" placeholder='first name' />
                            <input type="text" placeholder='last name'/>
                        </div>
                        <input type="email" placeholder='email' />
                        <input type="text"  placeholder='msg'/>
                        <input type="button" value="Submit" />
                    </form>
                </div>

            </div>
        </div>
    );
}

export default Experience;
