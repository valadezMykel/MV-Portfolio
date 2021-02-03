import React from 'react'
import Nav from 'react-bootstrap/Nav'

const stylings = {
    fontSize: '40px'
}

export default function Navbar() {
    return (
        <Nav className='justify-content-center mt-5' id='Nav' style={stylings}>
            <Nav.Item>
                <Nav.Link id='myName'>
                    Mykel Valadez
                </Nav.Link>  
            </Nav.Item>
        </Nav>
    )
}
