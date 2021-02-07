import React, { useEffect, useState } from 'react'
import Nav from 'react-bootstrap/Nav'



export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    const stylings = {

        nameLink: {
            fontSize: '12vh',
            color: 'rgb(141,77,90)'
    
        },
        textLinks: {
            fontSize: '2.5vh',
            color: 'black',
            display: 'inline-block',
    
        },
        iconLinks: {
            ln: {
                color: 'black',
                fontSize: '5.5vh',
                display: 'inline-block',
                zIndex: '100',
                position: scrolled ? 'fixed' : '',
                right: scrolled ? '0' : '',
                bottom: scrolled ? '0' : '',

            },
            git: {
                color: 'black',
                fontSize: '5.5vh',
                display: 'inline-block',
                zIndex: '100',
                position: scrolled ? 'fixed' : '',
                right: scrolled ? '7.5%' : '',
                bottom: scrolled ? '0' : '',

            }
        }
    }

    useEffect(() => {
        window.onscroll = function() {scrollFunction()};

        function scrollFunction() {

        if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
            setScrolled(true)
        } else {
            setScrolled(false)
        }
        }
    })

    return (
        <Nav className='justify-content-around align-items-center' id='Nav' style={stylings.top}>
            <Nav.Item>
                <Nav.Link style={stylings.textLinks} className='textLink' href='/projects'>
                    Projects
                </Nav.Link>
                <Nav.Link style={stylings.textLinks} className='textLink' href='/contact'>
                    Reach Out!
                </Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link id='myName' style={stylings.nameLink} href="/">
                    <p>Mykel
                    Valadez</p>
                </Nav.Link>  
            </Nav.Item>
            <Nav.Item>
                <Nav.Link 
                    style={stylings.iconLinks.git} href="https://github.com/valadezMykel" className="iconLinks fab fa-github icon" target="_blank">
                </Nav.Link>
                <Nav.Link 
                    style={stylings.iconLinks.ln} href="https://www.linkedin.com/in/mykel-valadez-3b18971b1/" target="_blank" className="iconLinks fab fa-linkedin icon">
                </Nav.Link>
            </Nav.Item>
        </Nav>
    )
}
