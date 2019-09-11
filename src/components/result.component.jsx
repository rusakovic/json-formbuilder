import React from 'react';
import Numberfield from './fields/numberfield.component';
import Textfield from './fields/textfield.component';
import Textarea from './fields/textarea.component';
import Checkbox from './fields/checkbox.component';
import Radiobutton from './fields/radiobutton.component';
import Date from './fields/date.component';


const Result = (props) => {
    const { form, label, value, checked, values  } = props
	switch (form) {
		case "numberfield":
            return <Numberfield label={label} value={value} />
		case "textfield":
            return <Textfield label={label} value={value} />
		case "textarea":
            return <Textarea label={label} value={value} />
		case "checkbox":
            return <Checkbox label={label} checked={checked} />
		case "radio":
            return <Radiobutton label={label} values={values} />
		case "date":
            return <Date label={label} />

		default:
			return <h6>Please, check the JSON input</h6>;
	}

};

export default Result;
