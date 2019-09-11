import React, { useState } from 'react';

const Textarea = (props) => {
    const { label, value } = props
    const [valueState, setValueState] = useState(value)
	return (
		<div className='form-items'>
			<h6>{label}</h6>
            <textarea 
                value={valueState} 
                onChange={(e) => setValueState(e.target.value)} 
            />
		</div>
	);
};

export default Textarea;
