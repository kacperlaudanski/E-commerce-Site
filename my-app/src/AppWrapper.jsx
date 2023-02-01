import React from 'react'
import './index.scss'


const AppWrapper = (props) => {
    return (
        <div className='app'>
            {props.children}
        </div>
    )
}

export default AppWrapper; 