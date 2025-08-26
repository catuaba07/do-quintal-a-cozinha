
export function HomeIcon({text, caption}) {
  return (
    <div className="">
      <span className="h-[112px] w-[112px] mt-5 bg-red-600 rounded-full grid place-items-center"></span>
      <div className="h-4"></div>
      
      <span className="h-[35px] w-[150px] bg-purple-400/95 border border-dashed border-white rounded-sm grid place-items-center text-white text-sm font-medium">
       {text}
      </span>
    </div>
  )
}
