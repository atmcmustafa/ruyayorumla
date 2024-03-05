import { useState } from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
const TextToImage = () => {
  const [prompt, setPrompt] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const response = await fetch(
      "https://server-imagegeneration.onrender.com/api/generate-image",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt }),
      }
    );

    const data = await response.json();
    setImageUrl(data.imageUrl);
    setLoading(false);
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
      <div className="px-6 md:px-0">
        <div className="bg-sunlight relative ">
          <div className="absolute h-full w-full bg-black/60"></div>
        </div>
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="container mx-auto"
        >
          <motion.h2
            variants={item}
            transition={{ delay: 0.2 }}
            className="text-2xl  mb-2"
          >
            Rüyaya Göre Resim Oluşturma Aracına Hoşgeldin!
          </motion.h2>
          <motion.p
            variants={item}
            transition={{ delay: 0.3 }}
            className="text-lg text-gray-400 mb-2 "
          >
            Gördüğün rüyayı hatırladığın kadarıyla anlat, resimleyelim.
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
              name=""
              id=""
              cols="30"
              rows="10"
              className="w-full bg-slate-900 outline-none p-4 rounded resize-none"
            ></textarea>
            {loading ? (
              <motion.button
                disabled
                variants={item}
                transition={{ delay: 0.5 }}
                type="submit"
                className="h-10 w-full
             md:w-36 bg-[#224E6D] font-semibold rounded text-white flex gap-3 items-center justify-center mt-6 disabled:bg-[#224E80]/80 pointer-events-none "
              >
                <span className="btn-loader"></span>
                <span>Yorumlanıyor</span>
              </motion.button>
            ) : (
              <motion.button
                variants={item}
                transition={{ delay: 0.5 }}
                type="submit"
                className="h-10 w-full
             md:w-36 bg-[#224E6D] font-semibold rounded text-white flex items-center justify-center mt-6 "
              >
                Gönder
              </motion.button>
            )}
          </motion.form>
          {loading ? (
            <div className="w-full mx-auto flex items-center justify-center mt-8">
              <div className="loader"></div>
            </div>
          ) : (
            ""
          )}

          {imageUrl && (
            <>
              <h2 className="text-2xl  my-6">
                Gördüğün rüya buna mı benziyor?
              </h2>

              <img
                className="w-full  h-full"
                src={imageUrl}
                alt="Oluşturulan Resim"
              />
            </>
          )}
        </motion.div>
      </div>
    </>
  );
};

export default TextToImage;
