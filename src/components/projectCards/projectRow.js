import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import BackgroundDiv from './backgroundDiv'
import ProjectInfo from './projectInfo'


export default function ProjectRow(props) {
    return (
        <Container style={{position: 'relative'}} className='mt-5'>
            <Row>
                <ProjectInfo />
                <BackgroundDiv isReversed={props.isReversed} image={props.image}/>
            </Row>
        </Container>
    )
}
