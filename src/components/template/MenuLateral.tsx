import MenuItem from "./MenuItem"
import { IconeAjustes, IconeCasa, IconeSino, IconeSair } from "../icons/index"
import Logo from './Logo'

export default function MenuLateral(){
  return(
    <aside className="flex flex-col 
    bg-zinc-200
    text-zinc-800
    transition-colors duration-700
    dark:bg-zinc-900 
   ">
      <div className={`h-20 w-20 bg-gradient-to-r from-sky-400 to-sky-600 flex flex-col justify-center items-center`}>
        <Logo/>
      </div>
      <ul className="flex-grow">
    
        <MenuItem url="/" texto="Início" icone={IconeCasa}/>
        <MenuItem url="/ajustes" texto="Início" icone={IconeAjustes}/>
        <MenuItem url="/notificacoes" texto="Novidades" icone={IconeSino}/>
      </ul>
      <ul>
        <MenuItem  texto="Sair" icone={IconeSair}
            onClick={()=>console.log('logout')}
            className={`
            text-red-600
          
            hover:bg-red-400 
            hover:text-white
            dark:hover:bg-red-400 `}
        />

      </ul>
    </aside>
  )
}