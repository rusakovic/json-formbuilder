import React from 'react';

const Radiobutton = (props) => {
	const { label, values } = props;
	return (
			<div className='form-items'>
				<h6>{label}</h6>
				{values.map((el, idx) => (
                    <div key={idx+label}>
                        {el}
                        <input 
                            name={label} 
                            type="radio" 
                            value={el}
                        />
                    </div>
                    ))
                }
			</div>
	);
};

export default Radiobutton;
