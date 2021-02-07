import React from 'react'
import { Col, Image } from 'react-bootstrap'
import { GetScreenState } from '../../contexts/screenSizeContext'

export default function backgroundDiv(props) {

    const isMobile = GetScreenState()
    const boxShadow = props.isReversed ? '-2vw -2vh rgb(214,212,113)' : '2vw -2vh rgb(214,212,113)'

    const styles = {

        project: {
            backgroundColor: 'white',
            minHeight: '30vh',
            border: '5px solid rgb(230,225,215)',
            boxShadow: isMobile ? '0px 0px' : boxShadow
        }
    }

    return (

        <Col sm={{ span: 4, offset: props.isReversed ? 0 : 8}} style={styles.project}>
            <Image src={props.image} /> 
        </Col>

    )
}
