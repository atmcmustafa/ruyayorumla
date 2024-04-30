import { Link } from "react-router-dom";
import Button from "./Button";
import logo from "/interpret.png";
import { FaBars } from "react-icons/fa";
import { useState } from "react";

const Header = () => {
  const [toggle, setToggle] = useState(false);

  console.log(toggle);
  return (
    <header className="px-6 md:px-0 flex justify-between items-center relative h-[60px] border-b border-[#262230] backdrop-filter">
      <div className="flex items-center  container mx-auto justify-between">
        <Link to={"/"}>
          <img
            alt="Logo"
            src={logo}
            width={144}
            height={144}
            className="rounded-full"
          />
        </Link>
        <nav className=" items-center gap-8 md:flex hidden">
          <Link
            to={"/ruyayorumla"}
            className="text-white text-lg opacity-80 hover:opacity-100 duration-300"
          >
            Yorumla
          </Link>
          <Link
            to={"/generateImage"}
            className="text-white text-lg opacity-80 hover:opacity-100 duration-300"
          >
            Resime Çevir
          </Link>
        </nav>
      </div>

      <FaBars
        className="md:hidden cursor-pointer z-30"
        onClick={() => setToggle((prev) => !prev)}
        size={30}
      />
      {/* mobile menu */}

      {/* backdrop */}
      {toggle && (
        <div
          onClick={() => setToggle(false)}
          className=" min-h-screen max-h-screen min-w-screen duration-300 bg-black/50 fixed z-10 inset-0"
        ></div>
      )}
      {/* backdrop */}

      <div
        className={`w-64 min-h-dvh bg-black fixed opacity-100 duration-300 top-0 z-20 flex flex-col justify-between  overflow-hidden  h-full
         ${toggle ? " left-0 " : " -left-[999px] "}`}
      >
        <nav className="flex flex-col items-center gap-8  mt-24 ">
          <Link to={"/"} className="" onClick={() => setToggle(false)}>
            <img
              alt="Logo"
              src={logo}
              width={144}
              height={144}
              className="rounded-full"
            />
          </Link>

          <Link to={"/ruyayorumla"}>
            <button
              onClick={() => setToggle(false)}
              className={`gradient-purple-btn w-48 max-w-48 w-full mt-6 tracking-wide mx-auto md:mx-0`}
            >
              Yorumla
            </button>
          </Link>

          <Link to={"/generateImage"}>
            <button
              onClick={() => setToggle(false)}
              className={`gradient-blue-btn max-w-48 w-full mt-6 tracking-wide mx-auto md:mx-0`}
            >
              Görselleştir
            </button>
          </Link>

          <Button
            onClick={() => setToggle(false)}
            color={
              "border hover:bg-[#224E6D] w-48 max-w-48 w-full h-[54px] mt-6"
            }
            to={"/iletisim"}
          >
            İletişim
          </Button>
        </nav>
        <div>
          <div className="w-full p-4 text-center text-neutral-800 dark:text-neutral-400">
            <Link
              className="text-neutral-800 dark:text-neutral-400 ml-2"
              onClick={() => setToggle(false)}
              to={"/sozlesme"}
            >
              Gizlilik Sözleşmesi
            </Link>
          </div>
          <div className="w-full p-4 text-center  bottom-0 left-0 text-neutral-800 dark:text-neutral-400">
            © 2024
            <a
              className="text-neutral-800 dark:text-neutral-400 ml-2"
              target="_blank"
              href="https://atmcmustafa.vercel.app/"
            >
              Mustafa Atmaca
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
