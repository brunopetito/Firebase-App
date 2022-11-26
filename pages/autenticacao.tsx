import { useState } from 'react';
import { isPropertySignature } from 'typescript';
import AuthInput from '../src/auth/AuthInput';
import IconeGoogle from '../src/components/icons';

export default function Autenticacao() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [modo, setModo] = useState<'login' | 'cadastro'>('login');

  function submeter() {
    if (modo === 'login') {
      console.log('login');
    } else {
      console.log('cadastrar');
    }
  }

  return (
    <div className="flex items-center flex-col h-screen justify-center">
      <div className="w-1/2">
        <h1 className={`text-xl font-bold mb-5`}>
          {modo === 'login'
            ? 'Entre com a sua Conta'
            : 'Cadastre-se na plataforma'}
        </h1>
        <AuthInput
          label="Email"
          tipo="email"
          valor={email}
          valorMudou={setEmail}
          obrigatorio
        />
        <AuthInput
          label="Senha"
          tipo="password"
          valor={senha}
          valorMudou={setSenha}
          obrigatorio
        />

        <button
          onClick={submeter}
          className={`w-full bg-indigo-500 hover:bg-indigo-400 text-white rounded-lg px-4 py-3 mt-6`}
        >
          {modo === 'login' ? 'Entar' : 'Cadastrar'}
        </button>

        <hr className="my-6 border-gray-300 w-full" />
        <button
          onClick={submeter}
          className={`w-full border hover:bg-gray-100 text-gray-500 rounded-lg px-4 py-3  flex items-center justify-center gap-4 ; >`}
        >
          <IconeGoogle />
          Entrar com Google
        </button>
      </div>
    </div>
  );
}
