import { useEffect, useState } from "react"

const InputText =(props)=>{
    const {name,result,type} = props
    console.log(props)
    const[value,setValue] =useState({name:'',
password:''})
    
useEffect(()=>{
    result(value);
    console.log(value)
})

    return(
            <div class="input-group mb-3 align-self-center ">
                <span class="input-group-text col-3 " type={type} placeholder={name} id="inpuText">{name} </span>
                <input type="text" class="form-control col-9  " onChange={(e)=>{
                    setValue(e.target.value)
                } }  placeholder={name} aria-label={name} type={type} aria-describedby="basic-addon1"/>
            </div>
    )
} 

export default InputText