import React, {useState} from 'react';
import Nav from '../routes/route'
import './res.css'


const Resume = () => {
    return (
        <div className="resume-content">
            <Nav></Nav>
            <iframe src="https://drive.google.com/file/d/1243K6FgkMBUTld_Wxhqxqi0sK5bOzQW3/preview" width="640" height="480" allow="autoplay"></iframe>
            {/* <form action="">
                <p htmlFor="Name"></p>
                <input type="text" />
                <label htmlFor="Email"></label>
                <input type="email" name="" id="" />
            </form> */}
        </div>
    );
}

export default Resume;
