import React from 'react'

function Button({value, handleClick}) {
    return (
        <div className="Buttons">
            <button onClick={handleClick}>{value}</button>
        </div>
    )
}

export default Button
