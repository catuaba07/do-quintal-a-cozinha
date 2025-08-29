"use client";
import Image from "next/image";
import { Tag } from "@/components/tag";
import { HomeIcon } from "@/components/home-icon";
import Link from "next/link";


export default function Home() {
  return (
    <main className="container-wrapper">
      <div className="container flex flex-col gap-6 -mt-10">
        <div className="h-150 w-full relative">
          <Image src="/home-image.jpg" alt="Description of my image" layout="fill" objectFit="cover" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"/>
        </div>
        <div className="space-y-4">
          <Tag text="Destaques" caption="" />
        </div>
        <div></div>
        <div className="grid grid-cols-2 gap-30 place-items-center justify-center w-fit mx-auto ">
           <Link href="/nosso-espaco"><HomeIcon text="Nosso Espaço"></HomeIcon></Link>       
          <Link href="/nossa-historia"><HomeIcon text="Nossas Histórias"></HomeIcon></Link> 
          <Link href="/nossa-producao"><HomeIcon text="Nossa Produção"></HomeIcon></Link> 
         <Link href="/nossas-receitas"><HomeIcon text="Nossas Receitas"></HomeIcon></Link> 
          </div>
      </div>
    </main>
  );
}