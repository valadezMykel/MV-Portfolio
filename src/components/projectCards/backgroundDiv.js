import React from 'react'
import { Container, Col, Row } from 'react-bootstrap'
import { GetScreenState } from '../../contexts/screenSizeContext'

export default function backgroundDiv() {
    const isMobile = GetScreenState()
    console.log(isMobile)
    const styles = {
        backdrop: {
            backgroundColor: 'purple',
            minHeight: '30vh',
            position: 'absolute',
            top: '10vh',
            right: '10vh',
            zIndex: -1
        },

        project: {
            backgroundColor: 'blue',
            minHeight: '30vh',
            // position: 'relative',
            zIndex: 1
        },

        cardBody:{

        }
    }

    function whichBackgrounds() {
        if(isMobile) {
            return (
                <Row>
                    <Col md={{ span: 4, offset: 7 }} style={styles.project}></Col>
                </Row>
            )
        } else {
            return (
                <Row>
                    <Col md={{ span: 4, offset: 7 }} style={styles.backdrop}></Col>
                    <Col md={{ span: 4, offset: 7 }} style={styles.project}></Col> 
                </Row>
            )
        }
    }
    return (
        <Container>
            {whichBackgrounds()}
            <Row>stop</Row>
        </Container>
    )
}
