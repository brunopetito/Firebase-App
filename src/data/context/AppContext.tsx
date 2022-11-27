import { createContext, ReactNode, useEffect, useState } from 'react';

interface AppContextProps {
  children?: ReactNode;
  tema: string;
  alternarTema?: any;
}

const AppContext = createContext<AppContextProps>({
  tema: ' ',
});

export function AppProvider(props: AppContextProps) {
  const [tema, setTema] = useState('dark');

  function alternarTema() {
    const novoTema = tema === ' ' ? 'dark' : ' ';
    setTema(novoTema);
    localStorage.setItem('tema', novoTema);
  }

  useEffect(() => {
    const temaSalvo = localStorage.getItem('tema');
    if (temaSalvo) {
      setTema(temaSalvo);
    }
  }, []);

  return (
    <AppContext.Provider
      value={{
        tema,
        alternarTema,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
}

export default AppContext;
export const AppConsumer = AppContext.Consumer;
