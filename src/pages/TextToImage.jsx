import { useState } from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import { FaInfoCircle } from "react-icons/fa";
const TextToImage = () => {
  const [prompt, setPrompt] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage("");
    try {
      const response = await fetch(
        "https://latest-image-generation.vercel.app/api/generate-image",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ prompt }),
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      setImageUrl(data.imageUrl);
    } catch (error) {
      console.error("Yanıt alınırken bir hata oluştu:", error);
      setErrorMessage(
        "Resim oluşturulurken bir hata oluştu. Lütfen tekrar deneyin."
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
        <title>Rüyayı Resime Dönüştür</title>
      </Helmet>
      <div className="px-6 md:px-0 ">
        <div className="gradient-blue-bg -z-10 "></div>

        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="container mx-auto my-10"
        >
          <motion.h2
            variants={item}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl  mb-2"
          >
            Rüyaya Göre Resim Oluşturma Aracına Hoşgeldin!
          </motion.h2>
          <motion.p
            variants={item}
            transition={{ delay: 0.3 }}
            className="text-sm md:text-lg text-gray-400 mb-2 "
          >
            Gördüğün rüyayı hatırladığın kadarıyla anlat, resimleyelim.
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
              onChange={(e) => setPrompt(e.target.value)}
              value={prompt}
              placeholder="Bir şeyler yazın..."
              cols="30"
              rows="10"
              className="w-full gradient-border-blue  bg-transparent outline-none p-4 mt-2 rounded resize-none"
            ></textarea>
            {loading ? (
              <motion.button
                disabled
                variants={item}
                transition={{ delay: 0.5 }}
                type="submit"
                className="gradient-blue-btn mt-6 tracking-wide mx-auto md:mx-0 !flex gap-4 w-full md:w-auto justify-center"
              >
                <span className="btn-loader"></span>
                <span>Oluşturuluyor</span>
              </motion.button>
            ) : (
              <motion.button
                variants={item}
                transition={{ delay: 0.5 }}
                type="submit"
                className="gradient-blue-btn mt-6 tracking-wide mx-auto md:mx-0 w-full md:w-auto justify-center"
              >
                Gönder
              </motion.button>
            )}
          </motion.form>

          {imageUrl && (
            <>
              <h2 className="text-2xl  my-6">
                Gördüğün rüya buna mı benziyor?
              </h2>

              <img
                className="w-full  h-full max-h-96 md:max-h-[600px] object-cover rounded-xl"
                src={imageUrl}
                alt="Oluşturulan Resim"
              />
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

export default TextToImage;
