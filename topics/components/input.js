import React from "react";

function Input({ placeholder, style , onKeyDown}, ref) {
    // return <input placeholder={placeholder} type={type}></input>
    return <input onKeyDown={onKeyDown} ref={ref} type="text" placeholder={placeholder} style={style}></input>;
  }
  const forwardedInput = React.forwardRef(Input);
  
  export default forwardedInput;
  