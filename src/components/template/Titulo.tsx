

interface TituloProps{
  titulo:string
  subtitulo:string
  
}




export default function Titulo(props:TituloProps){
  return(
    <div>
        <h1 className={`font-black text-3xl text-zinc-900 dark:text-zinc-100`}>{props.titulo}</h1>
        <h2 className={`font-light text-sm text-gray-600 dark:text-zinc-300
        `}>{props.subtitulo}</h2>

    </div>
  )
}