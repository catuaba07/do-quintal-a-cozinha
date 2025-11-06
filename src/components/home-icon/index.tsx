import Image from "next/image";

interface HomeIconProps {
  title: string;
  illustrationSrc: string;
}



export function HomeIcon({title, illustrationSrc}: HomeIconProps) {
  return (
    <div className="">
      <Image src={illustrationSrc} alt={title} width={112} height={112} />
       {title}
    </div>
  )
}
