import Image from "next/image";
import Link from "next/link";

function Header() {
  return (
    <header className="flex p-5 justify-between sticky top-0 z-50 bg-white shadow-md">
      {/* Left */}
      <div className="flex space-x-2 items-center">
        <Image
          src="https://aleph-m-2.s3.amazonaws.com/aleph-logo.png"
          alt="logo"
          height={30}
          width={30}
        />
        <div>
          <h1 className="font-bold">Aleph Image Generator</h1>
          <h2 className="text-xs">
            Powered by Dalle2, ChatGPT & Microsoft Azure
          </h2>
        </div>
      </div>
      {/* Right */}
      <div className="flex text-xs md:text-base divide-x items-center text-gray-500">
        <Link href="/" className="px-2 font-light text-right">
          About
        </Link>
        <Link href="/" className="px-2 font-light text-right">
          Github Repo
        </Link>
      </div>
    </header>
  );
}

export default Header;
