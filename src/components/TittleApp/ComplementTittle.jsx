import React from 'react'
import "./ComplementTittle.css"

const ComplementTittle = ({text}) =>{
    return(
        <div className='tittle-container'>
            <label className='tittle-label'>{text}</label>

        </div>
    )

}

export default ComplementTittle;