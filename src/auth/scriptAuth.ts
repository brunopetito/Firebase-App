
export const teste= ()=>{
  if (!document.cookie?.includes('isLogged')) {
    window.location.href = '/autenticacao';
  }

} 
