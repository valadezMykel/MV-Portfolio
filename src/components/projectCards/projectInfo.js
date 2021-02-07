import React from 'react'
import { Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function projectInfo(props) {

    const stylings = {
        col: {
            backgroundColor: 'red'
        }
    }

    return (
        <Col style={stylings.col}>
            <h2>{props.title}</h2>
            <h4>Repository Link: <Link href={props.link}/></h4>
        </Col>
    )
}
