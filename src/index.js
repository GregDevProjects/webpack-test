import React from 'react'
import './style.css'
import s from './sass.scss'

// import useStyles from 'isomorphic-style-loader/useStyles'

const G = () => { 
    return( 
    <div>
        <h1>REACT</h1>
        <div id="image"></div>
    </div>
    )
}

const I = () =>{
    // useStyles(s);
     return <div className={s.s}>SCSS</div>
    }


//
export {G, I}