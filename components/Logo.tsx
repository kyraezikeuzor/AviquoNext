import React from "react";
import Link from "next/link";

type LogoProps = {
  minimal?: true | false;
};

const Logo = ({ minimal = true }: LogoProps) => {
  return (
    <Link
      href="/"
      className={`flex items-center justify-center gap-2 font-semibold w-fit`}
    >
      <img
        src="https://www.revisiondojo.com/images/bloom-square.svg"
        className="w-10 lg:w-14"
      />
      {!minimal && <p className={`text-md md:text-lg lg:text-lg`}>Aviquo</p>}
    </Link>
  );
};

export default Logo;
