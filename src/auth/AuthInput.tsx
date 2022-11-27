interface AuthInputProps {
  label: string;
  valor: any;
  obrigatorio?: boolean;
  tipo?: 'text' | 'email' | 'password';
  valorMudou: (novoValor: any) => void;
}

export default function AuthInput(props: AuthInputProps) {
  return (
    <div className="flex flex-col mt-6 ">
      <label>{props.label}</label>
      <input
        className="px-4 py-3 rounded-lg bg-gray-200
          border focus:outline-none focus:border-blue-500
          focus:bg-white "
        type={props.tipo ?? 'text'}
        value={props.valor}
        onChange={(e) => props.valorMudou?.(e.target.value)}
        required={props.obrigatorio}
      />
    </div>
  );
}
