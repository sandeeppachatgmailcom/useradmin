import { useRouteError } from "react-router-dom"

const ErrorPage =()=>{
    const Error = useRouteError();
     
    return(
        <div>
            <h1>Opsss!!!!  Error</h1>
            <h6>{Error.status + Error.statusText}</h6>
        </div>
    )
}

export default ErrorPage