import React from 'react'
import { Row, Col, Image } from 'react-bootstrap'

export default function ProfileImage() {
    
    const image = {
        objectFit: "cover",
        width: '30vw',
        height: '50vh',
        objectPosition: '0 0',
        zIndex: 1,
        float: 'left',
        border: '5px solid black',
        marginRight: '50px'
    }

    const stylings = {
        width: '50vw',
        height: '60vh',
        marginLeft: '15vw',
        backgroundColor: 'white',
        // 'rgb(214,242,255, .7)',
        // 'rgb(230,225,215)',
        padding: '5%',
        marginTop: '5%',
        border: '1vw solid rgb(214,212,113)',
        fontSize: '20px'
    }

    return (
        <Row>
            <Col>
                <Image src='./IMG_1242.jpeg' style={image} />
                <div style={stylings}>
                    <p style={{
                        
                    }}>Hello I'm Mykel, I code good. PleaseHello I'm Mykel, I'm a coder.Hello I'm Mykel, I'm a coder.Hello I'm Mykel, I'm a coder.Hello I'm Mykel, I'm a coder.Hello I'm Mykel, I'm a coder.Hello I'm Mykel, I'm a coder.Hello I'm Mykel, I'm a coder.Hello I'm Mykel, I'm a coder.Hello I'm Mykel, I'm a coder.Hello I'm Mykel, I'm a coder.Hello I'm Mykel, I'm a coder.Hello I'm Mykel, I'm a coder.Hello I'm Mykel, I'm a coder.Hello I'm Mykel, I'm a coder.Hello I'm Mykel, I'm a coder.Hello I'm Mykel, I'm a coder.Hello I'm Mykel, I'm a coder.Hello I'm Mykel, I'm a coder.Hello I'm Mykel, I'm a coder.Hello I'm Mykel, I'm a coder.Hello I'm Mykel, I'm a coder.Hello I'm Mykel, I'm a coder.Hello I'm Mykel, I'm a coder.Hello I'm Mykel, I'm a coder.Hello I'm Mykel, I'm a coder.Hello I'm Mykel, I'm a coder.Hello I'm Mykel, I'm a coder.Hello I'm Mykel, I'm a coder.</p>
                </div>
            </Col>
        </Row>
    )
}
