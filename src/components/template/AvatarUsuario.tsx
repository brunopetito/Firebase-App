/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Link from 'next/link';
import useAuth from '../../data/hook/useAuth';
import Image from 'next/image';

export default function AvatarUsuario() {
  const { usuario } = useAuth();

  return (
    <Link href="/perfil">
      <img
        src={usuario?.imagemUrl ?? '/avatar.svg'}
        alt=""
        className={`rounded-full cursor pointer h-10 w-10 `}
      />
    </Link>
  );
}
