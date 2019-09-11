import React, { useState } from 'react';

const Checkbox = (props) => {
    const { label, checked } = props
    const [checkbox, setcheckbox] = useState(checked)
	return (
		<div className='form-items'>
			<h6>{label}</h6>
            <input 
                name={label} 
                type="checkbox" 
                checked={JSON.parse(checkbox)} 
                onChange={(e) => {setcheckbox(e.target.checked)}}
            />
		</div>
	);
};

export default Checkbox;
