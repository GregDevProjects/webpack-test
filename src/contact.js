import React from 'react'
import { render } from 'react-dom'
import './style.css'

const C = () => { 
    return( 
    <div>
        <h1>CONTACT</h1>
        <div id="image"></div>
    </div>
    )
}

render(
    <C/>,
    document.getElementById('target')
)