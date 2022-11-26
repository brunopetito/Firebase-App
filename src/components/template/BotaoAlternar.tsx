import DarkModeToggle from "react-dark-mode-toggle";
import useAppData from "../../data/hook/useAppData";

export default function BotaoAlternar() {
  const {tema,alternarTema} = useAppData()
  return (
    <DarkModeToggle
      onChange={alternarTema}
      checked={tema===' '}
      size={70}
      />
  )
}

