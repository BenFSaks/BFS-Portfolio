import React from 'react';
import Nav from '../routes/route'
import './Club.css'
import logo from '../eleetcoderslogo.png'

const Club = () => {
    return (
        <div class="club-content">
            <Nav></Nav>
            <div>
                <img src={logo} alt="" />
                <div class="socials">
                    <iframe width="820" height="440" src="https://www.instagram.com/p/CiibrCTuCoC/embed" frameborder="0"></iframe>
                    <div>
                        <a href="https://discord.gg/PdJxzCCP4e">Join the Discord Here</a>
                        <a href="https://www.linkedin.com/company/eleet-coders/">Follow us on linkedin</a>
                        <p>I founded this club in Fall 2021 to better prepare New Paltz students for careers in tech. We practice interview problems, hold mock interviews, resume review, and provide a great place for students to have success.</p>
                    </div>


                </div>
            </div>
            
        </div>
    );
}

export default Club;
