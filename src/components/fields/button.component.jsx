import React from 'react'

const Button = (props) => {
    const { name } = props

    return (
        <div className="buttons">
           <button >
                {name}
            </button> 
        </div>
    )
}

export default Button
