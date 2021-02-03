import React from 'react'
import { Nav } from 'react-bootstrap'

export default function SmallNav() {
    return (
        <Nav className='justify-content-center mt-5'>
            <Nav.Item>
                <Nav.Link>
                    Projects
                </Nav.Link>  
            </Nav.Item>
        </Nav>
    )
}
