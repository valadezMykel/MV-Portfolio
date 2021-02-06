import React from 'react'
import { Container } from 'react-bootstrap'
import PortfolioImage from './homeComponents/ProfileImage'

export default function Home() {
    return (
    <>
        <PortfolioImage backgroundColor={'rgb(230,225,215)'} reversed={false} image={'IMG_1242.jpeg'} 
            text={"Hi, I'm Mykel Valadez and I help people and business' get their ideas out on the internet."}
            title={"Bring your web dream to life!"}/>
        <PortfolioImage backgroundColor={'white'} reversed={true} image={'IMG_1192.jpeg'} 
            text={"Hi, I'm Mykel Valadez and I help people and business' get their ideas out on the internet."}
            title={"Bring your web dream to life!"}/>
 
    </>
    )
}
