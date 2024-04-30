import { useState } from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import { FaInfoCircle } from "react-icons/fa";

const RuyaYorumla = () => {
  const [input, setInput] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage("");
    try {
      const res = await fetch(
        "https://server-latest2.vercel.app/api/interpret-dream",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ input }),
        }
      );

      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }

      const data = await res.json();

      setResponse(data.response);
    } catch (error) {
      console.error("Yanıt alınırken bir hata oluştu:", error);
      setErrorMessage(
        "Rüya yorumlanırken bir hata oluştu. Lütfen tekrar deneyin.",
        error
      );
    } finally {
      setLoading(false);
    }
  };

  // framer motion
  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <>
      <Helmet>
        <title>Rüyayı Yorumla</title>
      </Helmet>
      <div className="px-6 md:px-0 ">
        <div className="gradient -z-10"></div>
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="container mx-auto my-8"
        >
          <motion.h2
            variants={item}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl mb-2"
          >
            Rüya Yorumlama Aracına Hoşgeldin!
          </motion.h2>
          <motion.p
            variants={item}
            transition={{ delay: 0.3 }}
            className="text-sm md:text-lg text-gray-400 mb-2 "
          >
            Gördüğün rüyayı hatırladığın kadarıyla anlat, yorumlayalım.
          </motion.p>
          <motion.p
            variants={item}
            transition={{ delay: 0.35 }}
            className=" mb-2 flex items-center gap-2 bg-yellow-500 text-xs md:text-sm text-black w-fit p-1 rounded "
          >
            <FaInfoCircle />
            Kullanılan servisten dolayı cevap süreleri uzun sürebilmektedir.
          </motion.p>
          <motion.form
            variants={item}
            transition={{ delay: 0.4 }}
            onSubmit={handleSubmit}
          >
            <textarea
              onChange={(e) => setInput(e.target.value)}
              value={input}
              placeholder="Bir şeyler yazın..."
              name=""
              id=""
              cols="30"
              rows="10"
              className="w-full bg-transparent gradient-border-purple outline-none p-4 mt-2 rounded resize-none"
            ></textarea>
            {loading ? (
              <motion.button
                disabled
                variants={item}
                transition={{ delay: 0.5 }}
                type="submit"
                className="gradient-purple-btn mt-6 tracking-wide mx-auto md:mx-0 !flex gap-4 w-full md:w-auto justify-center"
              >
                <span className="btn-loader"></span>
                <span>Yorumlanıyor</span>
              </motion.button>
            ) : (
              <motion.button
                variants={item}
                transition={{ delay: 0.5 }}
                type="submit"
                className="gradient-purple-btn mt-6 tracking-wide mx-auto md:mx-0 w-full md:w-auto justify-center"
              >
                Gönder
              </motion.button>
            )}
          </motion.form>

          {response && (
            <>
              <h2 className="text-2xl  mb-2 mt-8">
                İşte rüyanın anlamı burada!
              </h2>
              <div className="bg-slate-900 p-4 mt-2 rounded ">{response}</div>
            </>
          )}

          {errorMessage && (
            <div className="text-red-500 bg-white rounded p-4 font-bold mt-4">
              {errorMessage}
            </div>
          )}
        </motion.div>
      </div>
    </>
  );
};

export default RuyaYorumla;
