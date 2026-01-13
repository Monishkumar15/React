import { createContext } from "react";

export const AppContext = createContext();

const contextProvider = (props)=>{
    const phone = "+91 1234567894"
    const name = "John";

    return(
        <AppContext.Provider value={{phone,name}}>
            {props.children}
        </AppContext.Provider>
    )
}

export default contextProvider;