import Image from "next/image";

import git from "@/public/git.svg";
import twitter from "@/public/twitter.svg";
import linkedin from "@/public/linkedin.svg";
import discord from "@/public/discord.svg";

export default function LoginHero() {
  return (
    <div className="absolute inset-0 grid grid-rows-3">
      <span className="skew-x-6 ml-16 mt-6 text-2xl font-bold text-white">
        LOGO
      </span>
      <span className="justify-self-center self-center text-7xl md:text-8xl lg:text-9xl font-bold text-white skew-x-6">
        Board.
      </span>
      <span className="justify-self-center self-center skew-x-6 flex gap-4 justify-center pl-[50px] w-full">
        <a href="#">
          <Image src={git} alt="git icon" height={40} width={40} />
        </a>
        <a href="#">
          <Image src={twitter} alt="twitter icon" height={40} width={40} />
        </a>
        <a href="#">
          <Image src={linkedin} alt="linkedin icon" height={40} width={40} />
        </a>
        <a href="#">
          <Image src={discord} alt="discord icon" height={40} width={40} />
        </a>
      </span>
    </div>
  );
}
