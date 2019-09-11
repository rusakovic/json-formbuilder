import React, { useState } from 'react';

const Numberfield = (props) => {
    const { label, value } = props
    const [valueState, setValueState] = useState(value)
	return (
		<div className='form-items'>
				<h6>{label}</h6>
				<input
					name="numberField"
					type="number"
					value={valueState}
					onChange={(e) => setValueState(e.target.value)}
				/>
		</div>
	);
};

export default Numberfield;
