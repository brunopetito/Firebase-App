import { createContext, ReactNode, useState } from "react";

type Tema = 'dark' | ' ' 

interface AppContextProps{
  children?: ReactNode;
  tema:Tema
  alternarTema?:any
  
}


const AppContext = createContext<AppContextProps>({
  tema:' '
})

export function AppProvider(props:AppContextProps){

  const [tema,setTema] = useState<Tema>('dark')



  function alternarTema(){
    setTema(tema === ' ' ? 'dark': ' ' )
  
  }



  return(
    <AppContext.Provider value={{
      tema,
      alternarTema
    }}>
      {props.children}

    </AppContext.Provider>
  )
}



export default AppContext
export const AppConsumer = AppContext.Consumer