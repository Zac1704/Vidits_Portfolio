import Image from "next/image";

export default function Buttons({ ButtonName, src }) {
  return (
    <div className="cursor-pointer rounded-full p-[1px] bg-gradient-to-br from-white/80 via-white/40 to-white/60 shadow-[0_8px_32px_rgba(0,0,0,0.1)]">
      <div className="rounded-full bg-white/70 backdrop-blur-md shadow-[inset_0_4px_16px_rgba(0,0,0,0.15)]">
        <div className="flex items-center justify-center pt-[22px] py-5 px-12 space-x-3 relative">
          {/* Glass shine effect on top */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-b from-white/40 via-transparent to-transparent pointer-events-none"></div>

          <Image
            src={src}
            alt="Star icon"
            width={24}
            height={24}
            className="relative z-10"
          />
          <h2 className="uppercase text-2xl md:text-3xl font-black text-black tracking-wide relative z-10">
            {ButtonName}
          </h2>
        </div>
      </div>
    </div>
  );
}
