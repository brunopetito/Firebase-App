import { useState } from 'react';
import { isPropertySignature } from 'typescript';
import AuthInput from '../src/auth/AuthInput';
import IconeGoogle, { IconeAtencao } from '../src/components/icons';
import Image from 'next/image';
import useAuth from '../src/data/hook/useAuth';

export default function Autenticacao() {
  const { cadastrar, login, loginGoogle } = useAuth();
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [modo, setModo] = useState<'login' | 'cadastro'>('login');
  const [erro, setErro] = useState('');

  function exibirErro(msg: string, tempoSeg = 5) {
    setErro(msg);
    setTimeout(() => setErro(''), tempoSeg * 1000);
    return msg;
  }

  async function submeter() {
    try {
      if (modo === 'login') {
        if (login) await login(email, senha);
      } else {
        if (cadastrar) await cadastrar(email, senha);
      }
    } catch (e: any) {
      exibirErro(e?.message ?? 'erro desconhecido');
    }
  }

  return (
    <div className="flex items-center  h-screen justify-center">
      <div className="w-1/2 hidden md:block lg:w-2/3">
        <Image
          className="h-screen w-full object-cover"
          src="/ini.jpg"
          alt="Imagem da tela de autenticação"
          width={1920}
          height={2750}
        />
      </div>

      <div className="m-10 md:w-1/2 w-full lg:w-1/3">
        <h1 className={`text-3xl font-bold mb-5`}>
          {modo === 'login'
            ? 'Entre com a sua Conta'
            : 'Cadastre-se na plataforma'}
        </h1>

        {erro && (
          <div className="bg-red-400 flex items-center gap-1 text-white py-2 px-5 my-2 border border-red-700 rounded-lg">
            {IconeAtencao()}
            <span>{erro}</span>
          </div>
        )}

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
          onClick={loginGoogle}
          className={`w-full border hover:bg-gray-100 text-gray-500 rounded-lg px-4 py-3  flex items-center justify-center gap-4 ; >`}
        >
          <IconeGoogle />
          Entrar com Google
        </button>

        {modo === 'login' ? (
          <p className="mt-8">
            Novo por aqui?
            <a
              onClick={() => setModo('cadastro')}
              className="text-blue-500 hover:text-blue-700 font-semiobold cursor-pointer"
            >
              {' '}
              Criar uma Conta
            </a>
          </p>
        ) : (
          <p className="mt-8">
            Já possui conta?
            <a
              onClick={() => setModo('login')}
              className="text-blue-500 hover:text-blue-700 font-semiobold cursor-pointer"
            >
              {' '}
              Entre com suas credenciais
            </a>
          </p>
        )}
      </div>
    </div>
  );
}
