import React, { useState } from "react";

const FormValidation =()=>{
    const data ={
        "Name": {
            "id":"Name",
            "label": "Name",
            "placeholder":"Type Name Here ..",
            "type":"text",
            "name":"Name",
            "isError":false,
            "errMessage":"Type Name here"
        },
        "Email": {
            "id":"Email",
            "label": "Email",
            "placeholder":"Type Email Here ..",
            "name":"Email",
            "isError":false,
            "errMessage":"Type Name here"
        },
        "Password": {
            "id":"Password",
            "label": "Password",
            "placeholder":"Type Password Here ..",
            "name":"Password",
            "isError":false,
            "errMessage":"Type Name here"
        },
        "ConfirmPassword": {
            "id":"ConfirmPassword",
            "label": "ConfirmPassword",
            "placeholder":"Type ConfirmPassword Here ..",
            "name":"ConfirmPassword",
            "isError":false,
            "errMessage":"Type Name here"
        },
    }

    const [formData, setFormData] = useState(data);
    
    return(
        <>
            {Object.keys(formData).map((key)=>{
                const {id, name, label} = formData[key];
                return(
                    <>
                    <label>{label}</label>
                    <input type="{}" />
                    </>
                )
            })}
        </>
    )
}

export default FormValidation;
