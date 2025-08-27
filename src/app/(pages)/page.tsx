"use client";
import { Tag } from "@/components/tag";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { HomeIcon } from "@/components/home-icon";
import Link from "next/link";


export default function Home() {
  return (
    <main className="container-wrapper">
      <div className="container flex flex-col gap-6">
        <Carousel>
          <CarouselContent>
            <CarouselItem></CarouselItem>
            <CarouselItem></CarouselItem>
            <CarouselPrevious/>
            <CarouselNext/>
          </CarouselContent>
        </Carousel>
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