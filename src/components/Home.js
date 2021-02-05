import React from 'react'
import { Container } from 'react-bootstrap'
import PortfolioImage from './homeComponents/ProfileImage'

export default function Home() {
    return (
    <div style={{backgroundColor: 'rgb(230,225,215)'}}>
        <Container className='mt-5'>
            <PortfolioImage />
        </Container>
    </div>
    )
}
