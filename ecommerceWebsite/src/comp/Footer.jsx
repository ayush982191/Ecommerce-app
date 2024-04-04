import React from 'react'
import styled from 'styled-components'
import { FaDiscord } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import {NavLink} from "react-router-dom"
function Footer() {
  return (
    <Container>
        <div className="start">
            <div className="">
            <p>Ready to get Started</p>
            <p>talk to us today</p>
            </div>
            <button><NavLink to="/" style={{textDecoration:"none",color:'white'}} >GET STARTED </NavLink></button>
        </div>
        <div className="footer">
            <br />
            <br />
           <div className="lowerSection">
           <div className="about">
                <h3>Ayush Techie</h3>
                <p>If you are intersted, <br /> <b>then congratulations</b> <br /> You are welcomed in <br /> our group</p>

            </div>
            <div className="subscribe">
                <p>Connect to me with email</p>
                <input type="email" placeholder='Enter your email' />
            </div>
            <div className="socialLinks">
                <p>Follow me</p>
                <div className="linkIcons">
                <FaDiscord />
                <FaInstagram />
                <a href="https://www.linkedin.com/in/ayushkumar0209/" target='_blank'><FaLinkedin /></a>

                </div>
            </div>
            <div className="contact">
                <p>Conect to me at</p>
                <a href="tel:8935982191">8935982191</a>

            </div>
           </div>
        </div>
        
    </Container>
  )
}

export default Footer
const Container = styled.div`
font-size: 12px;
margin-top: 10vh;
.start{
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: #dfc2fc;
    position: relative;
    top: 2.5vh;
    margin-left: 10vw;
    margin-right: 10vw;
    border-radius: 10px;
    button{
        padding: .2rem;
        border: none;
        background-color:  #bd68f2;
        
        border-radius: 5px;
        cursor: pointer;
        
     }

}
.footer{
    background-color: #fde1e3;
    /* margin-top: 10vh; */
    padding: 1rem;
    border-radius: 10px;
    /* margin-bottom: 10vh; */
    .lowerSection{
        display: flex;
        justify-content: space-between;
        .subscribe{
            input{
                border: none;
                padding: 0.2rem;
                
            }
        }
        .socialLinks{
            .linkIcons{
                display: flex;
                justify-content: space-around;
                a{
                    color: black;
                }
            }

        }
        .contact{
            a{
                text-decoration: none;
                color: black;
            }
        }
        
    }
}
`