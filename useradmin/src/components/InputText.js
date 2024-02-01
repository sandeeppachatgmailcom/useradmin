import { useEffect, useState } from "react"

const InputText =(props)=>{
        const {input,name,result,type,readOnly} = props
         
        const[value,setValue] =useState({name:'',
password:''})
    
useEffect(()=>{
    result(value);
},[value])

    return(
            <div class="input-group mb-3 align-self-center ">
                <span class="input-group-text col-3 " type={type} placeholder={name} id="inpuText">{name} </span>
                <input type="text" class="form-control col-9  " readOnly= {readOnly} value={props?.input} onChange={(e)=>{
                    result(e.target.value)
                }}  placeholder={name} aria-label={name} type={type} aria-describedby="basic-addon1"/>
            </div>
    )
} 

export default InputText