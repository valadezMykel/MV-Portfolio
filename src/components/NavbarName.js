import React from 'react'
import Nav from 'react-bootstrap/Nav'

const stylings = {
    top: {
        // backgroundColor: 'rgb(230,225,215)'
    },
    nameLink: {
        fontSize: '12vh',
        color: 'rgb(141,77,90)'

    },
    textLinks: {
        fontSize: '2.5vh',
        color: 'black',
        display: 'inline-block'
    },
    iconLinks: {
        color: 'black',
        fontSize: '5.5vh',
        display: 'inline-block' 
    }
}

export default function Navbar() {
    return (
        <Nav className='justify-content-around align-items-center' id='Nav' style={stylings.top}>
            <Nav.Item>
                <Nav.Link style={stylings.textLinks}>
                    Projects
                </Nav.Link>
                <Nav.Link style={stylings.textLinks}>
                    Reach Out!
                </Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link id='myName' style={stylings.nameLink} >
                    <p>Mykel
                    Valadez</p>
                </Nav.Link>  
            </Nav.Item>
            <Nav.Item>
                <Nav.Link 
                    style={stylings.iconLinks} href="https://github.com/valadezMykel" className="fab fa-github icon" target="_blank">
                </Nav.Link>
                <Nav.Link 
                    style={stylings.iconLinks} href="https://www.linkedin.com/in/mykel-valadez-3b18971b1/" target="_blank" className="fab fa-linkedin icon">
                </Nav.Link>
            </Nav.Item>
        </Nav>
    )
}
