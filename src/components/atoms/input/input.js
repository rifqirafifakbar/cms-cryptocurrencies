import { memo, useState } from "react";

// eslint-disable-next-line react/display-name
export const Input = memo(
  ({
    type,
    name,
    description,
    label,
    addClass,
    isRequired,
    warningText,
    ...props
  }) => {

    const [isHide, setHide] = useState(true); 

    const renderSwitch = (param, nameClass, isRequired) => {
      switch (param) {
        case "input-email":
          return (
            <input
              type="text"
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
            <input type="text" id={nameClass} name={nameClass} {...props} />
          );
        case "input-password":
          return (
            <div className="passwordWrapper">
              <input type={isHide ? "password" : "text"} id={nameClass} name={nameClass} {...props} />
              <div className="icon">
                <box-icon name={isHide ? 'low-vision' : 'show'} type='solid' className="hidePassword" onClick={(e) => setHide(!isHide)} color="#d0d0d0"></box-icon>
              </div>
            </div>
          );
        default:
          return null;
      }
    };

    return (
      <div
        className={[
          addClass ? `inputWrapper inputWrapper-model-2` : `inputWrapper`,
          isRequired ? "required" : "",
        ].join(" ")}
      >
        {description ? (
          <label htmlFor={label ? label : null} className="inputWrapper--title">
            {description}
          </label>
        ) : (
          ""
        )}

        {renderSwitch(type, name)}

        {type === "input-password" ? 
        
          <>
            <div className="wrapperFPerrorMsg">
              <span className="danger"><box-icon size="xs" type='solid' name='error' color="red"></box-icon> <span className="text">{warningText}</span> </span>
              <a href='#' className='font12-grey'>Forgot password ?</a>
            </div>
          </>
        : null}

        {isRequired && type !== "input-password" ? <span className="danger"><box-icon size="xs" type='solid' name='error' color="red"></box-icon> <span className="text">{warningText}</span> </span> : ""}
      </div>
    );
  }
);
