import React, { useContext, useState, useEffect } from 'react'

const ScreenStateContext = React.createContext()

export function GetScreenState() {
    return useContext(ScreenStateContext)
}

export default function ScreenSize({children}) {
    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        window.addEventListener('resize', () => {
            
            if(window.innerWidth < '576') {
                console.log('is mobile')
                setIsMobile(true)
            } else {
                setIsMobile(false)
            }
        })
    })

    return (
        <ScreenStateContext.Provider value={isMobile}>
            {children}
        </ScreenStateContext.Provider>
    )
}
