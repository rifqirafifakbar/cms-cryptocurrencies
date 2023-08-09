import { memo } from "react";

export const Input = memo(({type, name, description, label, addClass, isRequired, warningText, ...props}) => {
    
    const renderSwitch = (param,nameClass) => {
        
        switch (param) {
            case "input-email":
                return (
                    <input
                        type='text'
                        id={nameClass}
                        name={nameClass}
                        {...props}
                        // onKeyPress={(event) => {
                        //     if (!/[0-9]/.test(event.key)) {
                        //     event.preventDefault();
                        //     }
                        // }}
                    /> 
                );
            case "input-text":
                return (
                    <input
                        type='text'
                        id={nameClass}
                        name={nameClass}
                        {...props}
                    /> 
                );     
            case "input-password":
                return (
                    <input
                        type='text'
                        id={nameClass}
                        name={nameClass}
                        {...props}
                    /> 
                );       
            default:
                return null;
        }
    };

    return (
        <div className={[addClass ? `inputWrapper inputWrapper-model-2` : `inputWrapper`, isRequired ? 'required' : ''].join(' ')}>
            {description ?
                <label htmlFor={label ? label : null} className="inputWrapper--title">
                    {description}
                </label>
                :
                ''
            }

            {renderSwitch(type,name)}

            {isRequired ? 
                <span className="danger">{warningText}</span>
            : ''}
        </div>
    );
});
