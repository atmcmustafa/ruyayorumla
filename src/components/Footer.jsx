import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import { FaLinkedinIn, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  const [ref1, inView1] = useInView({ triggerOnce: true, threshold: 0.1 });
  return (
    <>
      <motion.footer
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: inView1 ? 1 : 0, y: inView1 ? 0 : 50 }}
        transition={{ duration: 0.3 }}
        ref={ref1}
        className="border-t border-gray-500 flex justify-center items-center text-center flex-col mx-auto w-full text-neutral-800 dark:text-neutral-300 my-auto  py-6 mt-24 lg:mt-56"
      >
        <div className="flex justify-center gap-9 text-xl">
          <Link
            className=" text-neutral-800 dark:text-neutral-200 hover:bg-black hover:text-blue-500"
            to={"https://twitter.com/mstfatmcc"}
          >
            <FaTwitter />
          </Link>
          <Link
            className=" text-neutral-800 dark:text-neutral-200 instagram-gradient rounded"
            to={"https://www.instagram.com/mstfatmcc/"}
          >
            <FaInstagram />
          </Link>
          <Link
            className=" text-neutral-800 dark:text-neutral-200 hover:bg-black hover:text-blue-500 "
            to={"https://www.linkedin.com/in/mustafa-atmaca-1787b0284/"}
          >
            <FaLinkedinIn />
          </Link>
          <Link
            className="text-neutral-800 dark:text-neutral-200 hover:bg-white hover:text-black rounded-full"
            to={"https://github.com/atmcmustafa"}
          >
            <FaGithub />
          </Link>
        </div>
        <div className="flex flex-col gap-6 mt-6">
          <Link to={"/sozlesme"} className="ml-2 hover:text-white duration-300">
            Gizlilik Sözleşmesi
          </Link>
          <div>
            <span className="mr-2">© 2024</span>
            <Link
              className=" hover:text-white duration-300"
              to={"https://atmcmustafa.vercel.app/"}
            >
              Mustafa Atmaca
            </Link>
          </div>
        </div>
      </motion.footer>
    </>
  );
};

export default Footer;
