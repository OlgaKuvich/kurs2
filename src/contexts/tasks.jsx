import { createContext, useState } from "react";

export const TasksContext = createContext(null);

export const TasksProvider = ({ children }) => {    
      
    const [tasks,setTasks]=useState([]);
    
    return (
        <TasksContext.Provider value={{setTasks, tasks}}>
            {children}
        </TasksContext.Provider>
        
    )

}