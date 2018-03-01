import React from 'react';

import { Field, reduxForm } from 'redux-form';

const validate = values =>{
    const errors = {};
    console.log('values = ',values)
    if(!values.inputA){
        errors.inputA = 'requiredA'
    }
    if(!values.inputB){
        errors.inputB = 'requiredB'
    }
    if(!values.inputC){
        errors.inputC = 'requiredC'
    }
    if(!values.inputD || values.inputD.length < 3 ){
        errors.inputD = 'requiredD min 3'
    }
    return errors;
}
const renderInput = ({
    input, type , meta
}) => (
    <div>
        {console.log('inner props: ',{input, type , meta})}
        <pre>  {JSON.stringify(meta,0,2)} </pre>
        <input {...input} type={type} /> { meta.visited  && meta.error}
    </div>
);

let ReduxForm = ({
    //handleSubmit,
    //submitting,
    ...props 
}) =>(
    <form onSubmit = {props.handleSubmit}>
        {console.log('overall props: ',props)}

        invalid = {props.invalid ? 'y':'n'} <br />
        valid = {props.valid ? 'y':'n'} <br />

        overall props: <br />
        <pre> {JSON.stringify(props,0,2)} </pre>

        <Field name = "inputA" component="input" type="text"/><br />

        <Field name = "inputB" component="input" type="password"/>

        <Field name = "inputC" component={renderInput} type="input"/>

        <Field name = "inputD" component={renderInput} type="password"/>

        <br />
        <button type="submit" disabled = {props.submitting}>Submit</button>

    </form>
);

ReduxForm = reduxForm({
    form: 'reduxFormEx',
    validate: validate
})(ReduxForm);




//export default ReduxForm;

const ReduxFormContainer = () =>{
    const submit = () =>{

        console.log('submit...')
    }
    return <ReduxForm onSubmit = {submit}/>
}

export default ReduxFormContainer;