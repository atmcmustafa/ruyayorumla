import { Link } from "react-router-dom";
import CardSection from "../components/CardSection";
import { motion } from "framer-motion";
const NewHome = () => {
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
    <div className="p-4 md:p-0 overflow-hidden">
      <div className="gradient -z-10"></div>
      <div
        id="pinContainer"
        className="section flex justify-center items-center mx-auto z-50 min-h-[calc(100vh-60px)]"
      >
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          id="slideContainer"
        >
          <motion.h2
            variants={item}
            transition={{ delay: 0.1 }}
            className="text-[32px] md:text-[40px] lg:text-[56px] font-bold leading-[120%]  md:max-w-3xl mx-auto text-center text-[#c9d3df]"
          >
            <span className="gradient-text font-bold">Rüyalarının</span>
            anlamını merak etmiyor musun?
          </motion.h2>
          <motion.p
            variants={item}
            transition={{ delay: 0.2 }}
            className="text-[#a2acbe] leading-[150%]   max-w-3xl text-xl lg:text-[28px] mt-[2em] text-center "
          >
            Rüyalarınızın gizemini çözün; bilinçaltınızın derinliklerine inin ve
            gerçek potansiyelinizi keşfetmek için bizimle yolculuğa çık.
          </motion.p>

          <Link to={"/ruyayorumla"}>
            <motion.button
              variants={item}
              transition={{ delay: 0.3 }}
              className="flex items-center justify-center mt-[2.5em] mx-auto button-bg font-bold hover:opacity-70 duration-300 z-50"
            >
              Hemen Başla
            </motion.button>
          </Link>
        </motion.div>
      </div>
      <div className=" gradient-blue rounded-full h-24 !w-96"></div>

      <CardSection
        flexDirection={"md:flex-row"}
        gradientTitleColor={"gradient-text"}
        gradientTitle={"Geleceğinizi"}
        title={"Yorumlayın: Profesyonel Rüya Yorumlama"}
        buttonColor={"gradient-purple-btn"}
        URL={"ruyayorumla"}
        text={
          "  Hayatın karmaşasında yolunuzu bulmak bazen zor olabilir. Ancak bazen, cevaplar rüyalarınızın derinliklerinde ve kartların gizemli dilinde saklıdır. Biz, profesyonel fal ve rüya yorumlama uzmanları olarak, size içsel rehberliği sunuyoruz. Rüyalarınızın ve kaderinizin gizemli sembollerini çözmek için yanınızdayız. Geleceğinizi aydınlatmak ve hayatınızın yönünü belirlemek için bize katılın. Siz de bugün, içsel keşif yolculuğunuza başlayın ve gerçek potansiyelinizi keşfedin."
        }
        imageUrl={
          "https://img.freepik.com/free-vector/woman-sitting-crescent-moon-with-closed-eyes-calm-person-having-good-deep-sleep-relaxing-resting-flat-vector-illustration-night-rem-sleep-cycle-wellbeing-concept_74855-25602.jpg?t=st=1714416285~exp=1714419885~hmac=01cea2a42c5a161ce9cbbe02e4122bdf64623bdd303181884ab64d590e987f72&w=1060"
        }
        gradientBottom={"gradient-indigo"}
      />

      <div className=" gradient-indigo rounded-full h-24 !w-96 "></div>
      <div className="relative">
        <CardSection
          flexDirection={"md:flex-row-reverse"}
          gradientTitleColor={"gradient-text-blue"}
          gradientTitle={"Rüyaların"}
          title={"Sırrını Çözmek İster Misiniz"}
          buttonColor={"gradient-blue-btn"}
          URL={"generateImage"}
          text={
            "  Hayatımızın derinliklerinde gizlenmiş olan mesajları keşfetmek için rüyalarımızı kullanabiliriz. Rüyalar, bilinçaltımızın diliyle bize rehberlik eder, gizli düşüncelerimizi ve duygularımızı ortaya çıkarır. Rüyalarınızın sembollerini anlamak, içsel keşif yolculuğunuzda size büyük bir yardımcı olabilir. Bizimle birlikte rüyaların renkli dünyasına adım atın, sembollerin dilini çözün ve kendinizi derinlemesine bir içsel keşif yolculuğuna çıkarın."
          }
          imageUrl={
            "https://img.freepik.com/free-photo/back-view-man-bridge_23-2149605408.jpg?t=st=1714416817~exp=1714420417~hmac=b19bef88127143ad5e1233904c4bada56ba4c4277b80ba3d917f746f909f5ea2&w=1380"
          }
          gradientBottom={"gradient-blue-bg"}
        />
        <div className=" gradient-blue-2 rounded-full h-24 !w-96 absolute md:!top-72"></div>
      </div>
    </div>
  );
};

export default NewHome;
