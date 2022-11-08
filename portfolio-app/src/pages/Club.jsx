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
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis similique laboriosam perferendis vitae sunt, culpa provident impedit nulla nam, earum temporibus minus delectus ex! Aperiam odio minus reprehenderit corrupti officiis?</p>
                    </div>


                </div>
            </div>
            
        </div>
    );
}

export default Club;
