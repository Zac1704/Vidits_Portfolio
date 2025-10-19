import Image from "next/image";

export default function Buttons({ ButtonName }) {
  return (
    <div className=" rounded-full ">
      <div className=" flex py-6.5 px-16 space-x-4 bg-[#D6D6D6]/30 rounded-full">
        <Image
          src="/Images/Button/star.svg"
          alt="Next.js logo"
          width={30}
          height={38}
        />
        <h2 className="uppercase text-[32px]">{ButtonName}</h2>
      </div>
    </div>
  );
}
