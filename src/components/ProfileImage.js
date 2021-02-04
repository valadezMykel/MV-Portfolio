import React from 'react'
import { Row, Col, Image } from 'react-bootstrap'

export default function ProfileImage() {
    
    const image = {
        objectFit: "cover",
        width: '30vw',
        height: '80%',
        objectPosition: '0 0',
        // rotate: '90deg',
        // overflow: 'hidden',
        // aspectRatio: '3:4',
        zIndex: 1,
        float: 'left',
        border: '5px solid rgb(214,212,113)',
    }

    const stylings = {
        width: '50vw',
        height: '80%',
        marginLeft: '15vw',
        backgroundColor: 'rgb(214,242,255, .7)',
        // 'rgb(230,225,215)',
        padding: '20px',
        marginTop: '5%'

    }

    return (
    <>
        <Row>
            <Col>
                <Image src='./IMG_1242.jpeg' style={image} />
                <div style={stylings}>
                    Hi I'm Mykel
                </div>
            </Col>
        </Row>
    </>
    )
}
