import useAppData from '../../data/hook/useAppData'

import BotaoAlternar from './BotaoAlternar'
import Titulo from './Titulo'

interface CabecalhoProps{
  titulo:string
  subtitulo:string
  
}




export default function Cabecalho(props:CabecalhoProps){
  const {tema,alternarTema} = useAppData()
  return(
    <div className={`flex`}>
        <Titulo titulo={props.titulo} subtitulo={props.subtitulo}/>
        <div className=' flex-grow justify-end hidden sm:flex'>
            <BotaoAlternar/>
        </div>  
    </div>
  )
}