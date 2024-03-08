import { motion } from "framer-motion";
import Button from "../components/Button";
import ruyaGorsellestirme from "/ruya-gorsellestirme.webp";
import ruya1 from "/ruya-1.webp";
import { useInView } from "react-intersection-observer";
import { Helmet } from "react-helmet";

const Home = () => {
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

  const [ref1, inView1] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [ref2, inView2] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [ref3, inView3] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <>
      <Helmet>
        <title>Ana Sayfa</title>
      </Helmet>
      <div className="px-6 md:px-0">
        <div className="h-[550px] lg:h-[840px] relative">
          <div className="absolute h-full w-full bg-black/60"></div>
          <motion.div
            variants={container}
            initial="hidden"
            animate="visible"
            className="absolute max-w-4xl mx-auto  inset-0 flex justify-center flex-col"
          >
            <motion.h2
              variants={item}
              transition={{ delay: 0.1 }}
              className="text-2xl lg:text-3xl text-center mb-2"
            >
              GERÇEKLERİ ÖĞRENMEK İSTEMİYOR MUSUN?
            </motion.h2>
            <motion.p
              variants={item}
              transition={{ delay: 0.2 }}
              className="text-base lg:text-lg text-gray-300 text-center"
            >
              Rüyaların gizemli dünyasına adım atın ve içsel keşif yolculuğunuza
              başlayın. Gerçeklerin ötesindeki bilinmeyene doğru bir yolculuğa
              çıkın ve kendi iç dünyanızın derinliklerinde kaybolun. Geçmişin
              sırlarını keşfedin, geleceğin ipuçlarını yakalayın ve şimdi,
              gerçekleri öğrenmek için hazır mısınız?
            </motion.p>
            <motion.div
              variants={item}
              transition={{ delay: 0.3 }}
              className="flex mx-auto flex-col sm:flex-row gap-3 md:gap-8 mt-6"
            >
              <motion.div variants={item} transition={{ delay: 0.4 }}>
                <Button
                  color={"bg-[#4A266A] hover:bg-[#4A266A]/70"}
                  to={"/ruyayorumla"}
                >
                  Rüya Yorumla
                </Button>
              </motion.div>
              <motion.div variants={item} transition={{ delay: 0.4 }}>
                <Button
                  color={"bg-[#224E6D] hover:bg-[#224E6D]/70"}
                  to={"/generateImage"}
                >
                  Rüyayı Resme Çevir
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
          <img
            src="https://images.unsplash.com/photo-1707581786096-2f89a6b9a63d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="hero_background"
            className="w-full h-full object-cover md:object-fill"
          />
        </div>
        <div className="container mx-auto mt-24" ref={ref1}>
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: inView1 ? 1 : 0, y: inView1 ? 0 : 50 }}
            transition={{ duration: 0.3 }}
            className="text-center text-2xl lg:text-3xl mb-2"
          >
            Geleceğinizi Yorumlayın: Profesyonel Fal ve Rüya Analizi Hizmet
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: inView1 ? 1 : 0, y: inView1 ? 0 : 50 }}
            transition={{ duration: 0.4 }}
            className="text-gray-400 indent-8 text-center md:text-start "
          >
            Hayatın karmaşasında yolunuzu bulmak bazen zor olabilir. Ancak
            bazen, cevaplar rüyalarınızın derinliklerinde ve kartların gizemli
            dilinde saklıdır. Biz, profesyonel fal ve rüya yorumlama uzmanları
            olarak, size içsel rehberliği sunuyoruz. Rüyalarınızın ve
            kaderinizin gizemli sembollerini çözmek için yanınızdayız.
            Geleceğinizi aydınlatmak ve hayatınızın yönünü belirlemek için bize
            katılın. Siz de bugün, içsel keşif yolculuğunuza başlayın ve gerçek
            potansiyelinizi keşfedin.
          </motion.p>
          <div
            className="flex flex-col-reverse md:flex-row text-center md:text-start mt-24 w-full gap-24"
            ref={ref2}
          >
            <div className="w-full">
              <motion.h2
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: inView2 ? 1 : 0, y: inView2 ? 0 : 50 }}
                transition={{ duration: 0.4 }}
                className=" text-2xl lg:text-3xl mb-2"
              >
                Rüyaların Sırrını Çözmek İster Misiniz
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: inView2 ? 1 : 0, y: inView2 ? 0 : 50 }}
                transition={{ duration: 0.5 }}
                className="text-gray-400 indent-8 mb-4"
              >
                Hayatınızın gizemli yolculuğunda, rüyalarınız size rehberlik
                edebilir. Gecenin karanlığında yıldızlar gibi parlayan rüyalar,
                içsel dünyanızın kapılarını aralar ve derin bir keşif fırsatı
                sunar. Bizimle birlikte rüyaların dilini öğrenin, sembollerin
                sırrını çözün ve kendi kaderinizin yönlendiricisi olun. Fal ve
                rüya yorumlama geleneğinde derinlemesine bir yolculuğa çıkmaya
                hazır mısınız?
              </motion.p>
              <Button
                color={"bg-[#4A266A] hover:bg-[#4A266A]/70"}
                to={"/ruyayorumla"}
              >
                Rüya Yorumla
              </Button>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: inView2 ? 1 : 0, y: inView2 ? 0 : 50 }}
              transition={{ duration: 0.3 }}
              className="w-full"
            >
              <img
                alt="Rüya Görseli"
                src={ruya1}
                loading="lazy"
                className="h-96 object-cover w-full flex-1 rounded"
              />
            </motion.div>
          </div>
          <div
            className="flex flex-col-reverse text-center md:text-start md:flex-row-reverse  mt-24 w-full gap-24"
            ref={ref3}
          >
            <div className="w-full">
              <motion.h2
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: inView3 ? 1 : 0, y: inView3 ? 0 : 50 }}
                transition={{ duration: 0.3 }}
                className=" text-2xl lg:text-3xl mb-2"
              >
                Rüyaların Renkli Dünyası: Sembollerle Yolculuk
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: inView3 ? 1 : 0, y: inView3 ? 0 : 50 }}
                transition={{ duration: 0.3 }}
                className="text-gray-400 indent-8 mb-4"
              >
                Hayatımızın derinliklerinde gizlenmiş olan mesajları keşfetmek
                için rüyalarımızı kullanabiliriz. Rüyalar, bilinçaltımızın
                diliyle bize rehberlik eder, gizli düşüncelerimizi ve
                duygularımızı ortaya çıkarır. Rüyalarınızın sembollerini
                anlamak, içsel keşif yolculuğunuzda size büyük bir yardımcı
                olabilir. Bizimle birlikte rüyaların renkli dünyasına adım atın,
                sembollerin dilini çözün ve kendinizi derinlemesine bir içsel
                keşif yolculuğuna çıkarın.
              </motion.p>
              <Button
                color={"bg-[#224E6D] hover:bg-[#224E6D]/70"}
                to={"/generateImage"}
              >
                Rüyayı Resme Çevir
              </Button>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: inView3 ? 1 : 0, y: inView3 ? 0 : 50 }}
              transition={{ duration: 0.3 }}
              className="w-full"
            >
              <img
                alt="Rüya Görselleştirme"
                src={ruyaGorsellestirme}
                loading="lazy"
                className="h-96 object-cover w-full flex-1 rounded"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
