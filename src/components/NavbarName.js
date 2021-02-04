import React from 'react'
import Nav from 'react-bootstrap/Nav'

const stylings = {
    top: {
        // backgroundColor: 'rgb(230,225,215)'
    },
    links: {
        fontSize: '40px',
        color: 'rgb(141,77,90)'

    }
}

export default function Navbar() {
    return (
        <Nav className='justify-content-around align-items-center' id='Nav' style={stylings.top}>
            <Nav.Item>
                <Nav.Link style={{display: 'inline-block'}}>
                    Projects
                </Nav.Link>
                <Nav.Link style={{display: 'inline-block'}}>
                    Reach Out!
                </Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link id='myName' style={stylings.links} >
                    <p>Mykel</p>
                    Valadez
                </Nav.Link>  
            </Nav.Item>
            <Nav.Item>
                <Nav.Link>
                    Projects
                </Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link>
                    Reach Out!
                </Nav.Link>
            </Nav.Item>
        </Nav>
    )
}
