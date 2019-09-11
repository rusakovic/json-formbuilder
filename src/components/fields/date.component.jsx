import React from 'react'

const Date = (props) => {
    const { label } = props;
    return (
        <div className='form-items'>
            <h6>{label}</h6>
            <input type="date" name="bday"></input>
        </div>
    )
}

export default Date
