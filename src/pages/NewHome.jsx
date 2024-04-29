const NewHome = () => {
  return (
    <div className="p-4 md:p-0">
      <div className="gradient -z-10"></div>
      <div className="flex justify-center items-center mx-auto z-50 min-h-[calc(100vh-60px)]">
        <div>
          <h2 className="text-[32px] md:text-[40px] lg:text-[56px] font-bold leading-[120%]  md:max-w-3xl mx-auto text-center text-[#c9d3df]">
            <span className="gradient-text font-bold">Rüyalarının</span>
            anlamını merak etmiyor musun?
          </h2>
          <p className="text-[#a2acbe] leading-[150%]   max-w-3xl text-xl lg:text-[28px] mt-[2em] text-center ">
            Rüyaların gizemli dünyasına adım atın ve içsel keşif yolculuğunuza
            başlayın. Gerçeklerin ötesindeki bilinmeyene doğru bir yolculuğa
            çıkın ve kendi iç dünyanızın derinliklerinde
          </p>
          <button className="flex items-center justify-center mt-[2.5em] mx-auto button-bg font-bold hover:opacity-70 duration-300">
            Hemen Başla
          </button>
        </div>
      </div>
      <div className=" gradient-blue rounded-full h-24 !w-96"></div>
      <div className="container mx-auto flex gap-8   flex-col md:flex-row w-full">
        <div>
          <h1 className="text-[28px] md:text-[32px] lg:text-[40px] md:text-start">
            <span className="gradient-text font-bold !pl-0 ">Geleceğinizi</span>
            Yorumlayın: Profesyonel Fal
          </h1>
          <p className="mt-3 text-[#a2acbe] leading-[150%]    text-xl lg:text-[22px]   tracking-wide text-center md:text-start">
            Hayatın karmaşasında yolunuzu bulmak bazen zor olabilir. Ancak
            bazen, cevaplar rüyalarınızın derinliklerinde ve kartların gizemli
            dilinde saklıdır. Biz, profesyonel fal ve rüya yorumlama uzmanları
            olarak, size içsel rehberliği sunuyoruz. Rüyalarınızın ve
            kaderinizin gizemli sembollerini çözmek için yanınızdayız.
            Geleceğinizi aydınlatmak ve hayatınızın yönünü belirlemek için bize
            katılın. Siz de bugün, içsel keşif yolculuğunuza başlayın ve gerçek
            potansiyelinizi keşfedin.
          </p>
          <button className="gradient-purple-btn mt-6 tracking-wide mx-auto md:mx-0">
            Hemen Öğren
          </button>
        </div>
        <div className="h-72 md:h-auto max-h-72 md:max-h-96 w-full md:w-1/2 flex justify-start md:justify-end">
          <img
            className="h-full rounded-xl w-full object-cover"
            src="https://img.freepik.com/free-vector/woman-sitting-crescent-moon-with-closed-eyes-calm-person-having-good-deep-sleep-relaxing-resting-flat-vector-illustration-night-rem-sleep-cycle-wellbeing-concept_74855-25602.jpg?t=st=1714416285~exp=1714419885~hmac=01cea2a42c5a161ce9cbbe02e4122bdf64623bdd303181884ab64d590e987f72&w=1060"
            alt="photo1"
          />
        </div>
      </div>

      <div className="container mx-auto flex flex-col gap-8  md:flex-row-reverse w-full my-24 ">
        <div>
          <h1 className="text-[28px] md:text-[32px] lg:text-[40px]  md:text-start">
            <span className="gradient-text-blue font-bold !pl-0">
              Rüyaların
            </span>
            Sırrını Çözmek İster Misiniz
          </h1>
          <p className="mt-3 text-[#a2acbe] leading-[150%]    text-xl lg:text-[22px]   tracking-wide text-center md:text-start">
            Hayatımızın derinliklerinde gizlenmiş olan mesajları keşfetmek için
            rüyalarımızı kullanabiliriz. Rüyalar, bilinçaltımızın diliyle bize
            rehberlik eder, gizli düşüncelerimizi ve duygularımızı ortaya
            çıkarır. Rüyalarınızın sembollerini anlamak, içsel keşif
            yolculuğunuzda size büyük bir yardımcı olabilir. Bizimle birlikte
            rüyaların renkli dünyasına adım atın, sembollerin dilini çözün ve
            kendinizi derinlemesine bir içsel keşif yolculuğuna çıkarın.
          </p>
          <button className="gradient-blue-btn mt-6 tracking-wide mx-auto md:mx-0">
            Hemen Öğren
          </button>
        </div>
        <div className="h-72 md:h-auto max-h-72 md:max-h-96 w-full md:w-1/2 flex justify-start md:justify-end">
          <img
            className="h-full rounded-xl w-full object-cover"
            src="https://img.freepik.com/free-photo/back-view-man-bridge_23-2149605408.jpg?t=st=1714416817~exp=1714420417~hmac=b19bef88127143ad5e1233904c4bada56ba4c4277b80ba3d917f746f909f5ea2&w=1380"
            alt="photo1"
          />
        </div>
        <div className=" gradient-blue-2 rounded-full h-24 !w-96 fixed flex items-center justify-center !right-0"></div>
      </div>
      <div className=" gradient-blue-2 rounded-full h-24 !w-96 "></div>
    </div>
  );
};

export default NewHome;
