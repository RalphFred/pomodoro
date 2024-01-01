
export default function Clock() {
  return(
    <div className="w-[400px] h-[400px] rounded-full my-8 border-8 border-beige flex flex-col justify-center items-center">
      <h1 className="font-bold text-8xl text-slate-200 mb-6">25:00</h1>

      <button className="font-semibold text-slate-200 text-xl tracking-[.75rem]">START</button>
    </div>
  )
}