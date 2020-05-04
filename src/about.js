import React from 'react'
import { render } from 'react-dom'
import './style.css'

const A = () => { 
    return( 
    <div>
        <h1>ABOUT</h1>
        <div id="image"></div>
    </div>
    )
}

render(
    <A/>,
    document.getElementById('target')
)