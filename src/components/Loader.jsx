import React from 'react'
import { HashLoader } from 'react-spinners'

const Loader = () => {
    return (
        <div
            style={{
                width:'100%',
                height:'100vh',
                display:'flex',
                justifyContent:'center',
                alignItems:'center',
                position:'fixed',
                top:'0',
                left:'0',
                backdropFilter: 'blur(10px)',
                zIndex:'10000'
            }}
        >
            <HashLoader
                color='#39A6FF'
            />
        </div>
    )
}

export default Loader