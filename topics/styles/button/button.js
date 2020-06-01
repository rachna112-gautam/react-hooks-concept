import React from "react";
import "../common.scss";
import './button.scss';


function Button({children,type}){
    let localClass = "primary";
    if(type === "primary"){
        localClass = "primary";
    }
    if(type === "disabled"){
        localClass = "disabled";
    }
    const cls = `radius15 bgYellow fontBlack padd8 width100 ${localClass}`.trim();
    return <div className="btnClass">
    <button className={cls}>{children}</button>
    </div>
}

export default Button;