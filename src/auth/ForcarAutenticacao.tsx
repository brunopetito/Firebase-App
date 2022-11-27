/* eslint-disable @next/next/inline-script-id */
import Image from 'next/image';
import Router from 'next/router';
import loading from '../../public/loading.gif';
import useAuth from '../data/hook/useAuth';
import Head from 'next/head';
import { teste } from './scriptAuth';
import Script from 'next/script';
//props.children serve para renderizar oq ta dentro dele lá em layout
export default function ForcarAutenticacao(props: any) {
  const { usuario, carregando } = useAuth();
  function renderizarConteudo() {
    return <>{props.children}</>;
  }

  function renderizarCarregando() {
    return (
      <div className="flex justify-center items-center h-screen bg-zinc-800">
        <Image src={loading} alt="carregando" priority />
      </div>
    );
  }

  if (!carregando && usuario?.email) {
    return renderizarConteudo();
  } else if (carregando) {
    return renderizarCarregando();
  } else {
    Router.push('/autenticacao');
    return null;
  }
}
