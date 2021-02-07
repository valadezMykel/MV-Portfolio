import React from 'react'
import { Row, Col, Image, Container } from 'react-bootstrap'
import { GetScreenState } from '../../contexts/screenSizeContext'

export default function ProfileImage(props) {
    
    const isMobile = GetScreenState()

    const stylings = {

        textDiv: {
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
            position: 'relative',
            left: isMobile ? '' : '5vw',
            zIndex: '3',

        },

        image: {
            objectFit: "cover",
            width: '30vw',
            height: '80vh',
            objectPosition: '40% 40%',
            position: 'relative',
            zIndex: '4',
            float: props.reversed ? 'right' : 'left',
            border: '5px solid black',
            // marginRight: props.reversed ? '0px' : '5vw',
            // marginLeft: props.reversed ? '50px' : '0px'
        },



        h3: {
            color: 'rgb(149,180,185)'
        }
    }

    let profilePiece;

    if(isMobile) {
        profilePiece = (
            <Row>
                <Col sm>
                    <Image src={props.image} style={stylings.image} />
                </Col>
                <Col sm>
                    <div style={stylings.textDiv}>
                        <h3 style={stylings.h3}>
                            {props.title}
                        </h3>
                        <br/>
                        <p style={{}}>
                            {props.text} 
                        </p>
                    </div>
                </Col>
            </Row>
        )
    } else {
        profilePiece = (

            <Row>
                <Col md >
                    <Image src={props.image} style={stylings.image} />
                    <div style={stylings.textDiv}>
                        <h3 style={stylings.h3}>
                            {props.title}
                        </h3>
                        <br/>
                        <p style={{}}>
                            {props.text} 
                        </p>
                    </div>
                </Col>
            </Row>
        )
    }
    return (
        <div style={{backgroundColor: props.backgroundColor, paddingTop: '10px', paddingBottom: '25px'}}>
        <Container className='mt-5'>
            {profilePiece}
        </Container>
        </div>
    )
}
