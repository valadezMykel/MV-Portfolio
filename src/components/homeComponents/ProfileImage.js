import React from 'react'
import { Row, Col, Image, Container } from 'react-bootstrap'

export default function ProfileImage(props) {
    
    const image = {
        objectFit: "cover",
        width: '30vw',
        height: '80vh',
        objectPosition: '0 0',
        zIndex: 1,
        float: props.reversed ? 'right' : 'left',
        border: '5px solid black',
        marginRight: props.reversed ? '0px' : '50px',
        marginLeft: props.reversed ? '50px' : '0px'
    }

    const stylings = {
        maxWidth: '800px',
        minHeight: '55vh',
        backgroundColor: props.reversed ? 'rgb(230,225,215)' : 'white',
        // 'rgb(214,242,255, .7)', 
        // 'rgb(230,225,215)',
        padding: '5%',
        marginTop: '5%',
        margin: '10%',
        border: '1vw solid rgb(214,212,113)',
        fontSize: '20px',

        h3: {
            color: 'rgb(149,180,185)'
        }
    }

    return (
        <div style={{backgroundColor: props.backgroundColor, paddingTop: '10px', paddingBottom: '25px'}}>
        <Container className='mt-5'>
        <Row>
            <Col>
                <Image src={props.image} style={image} />
                <div style={stylings}>
                    <h3 >
                        {props.title}
                    </h3>
                    <br/>
                    <p style={{}}>
                        {props.text} 
                    </p>
                </div>
            </Col>
        </Row>
        </Container>
        </div>
    )
}
