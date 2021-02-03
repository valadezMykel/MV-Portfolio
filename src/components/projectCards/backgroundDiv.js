import React from 'react'
import { Container, Col, Row } from 'react-bootstrap'
import { GetScreenState } from '../../contexts/screenSizeContext'

export default function backgroundDiv(props) {

    const isMobile = GetScreenState()
    const boxShadow = props.isReversed ? '-2vw -2vh purple' : '2vw -2vh purple'

    const styles = {

        project: {
            backgroundColor: 'white',
            minHeight: '30vh',
            border: '5px solid blue',
            boxShadow: isMobile ? '0px 0px' : boxShadow
        }
    }

    return (
        <Container style={{position: 'relative'}} className='mt-5'>
                <Row>
                    <Col sm={{ span: 4, offset: props.isReversed ? 0 : 8}} style={styles.project}>Hello</Col>
                </Row>
        </Container>
    )
}
