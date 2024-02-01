import { createContext, useEffect, useState } from "react";
import { useSelector } from "react-redux";
const Mycontext = createContext({
    loginUser:'sandeep'
});


export default Mycontext;