import { createContext } from "react";

const context = createContext();

const AppContext = ({children}) => {
    return (
        <context.Provider>
            {children}
        </context.Provider>
    )
}

export default AppContext;