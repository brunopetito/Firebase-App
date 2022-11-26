import Link from 'next/link'


interface MenuItemProps{
  url?:string
  texto:string
  icone:any
  className?:string
  onClick?: (evento:any)=> void
}



export default function MenuItem(props:MenuItemProps){

  function renderizarLink(){
    return(
      <div className={`
      flex flex-col 
      justify-center 
      items-center w-20 h-20
      dark:text-zinc-400 transition-colors duration-700
    `}>
        {props.icone}
        <span className={`text-xs font-light `}>
          {props.texto}
        </span>
        </div>
    )
   }
  return(
      
    <li onClick={props.onClick} className={`hover:bg-gray-100 dark:hover:bg-zinc-800 transition-colors duration-700 text-gray-600 cursor-pointer ${props.className}`}>
     {props.url ? (
        <Link href={props.url}>
          {renderizarLink()}
        </Link>
     ): (
        <div className={`
        flex flex-col 
        justify-center 
        items-center w-20 h-20
      `}>
          {props.icone}
          <span className={`text-xs font-light `}>
            {props.texto}
          </span>
          </div>  
      )}
    </li>
  )
}