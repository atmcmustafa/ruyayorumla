import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
const Sozlesme = () => {
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
        <title>Gizlilik Sözleşmesi</title>
      </Helmet>
      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="container mx-auto px-6 md:px-0"
      >
        <div className="mb-3">
          <motion.h2
            variants={item}
            transition={{ delay: 0.1 }}
            className="text-xl mb-1"
          >
            Gizlilik Politikası
          </motion.h2>
          <motion.p
            variants={item}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-sm"
          >
            Bu gizlilik politikası, ruyagorselle.com web sitesinin (bundan sonra
            "biz", "bizim" veya "web sitesi" olarak anılacaktır)
            kullanıcılarının gizliliğini korumak için tasarlanmıştır. Bu
            politika, web sitesinin kullanımı sırasında toplanan kişisel
            bilgilerin türlerini, nasıl kullanıldıklarını ve korunduklarını
            açıklar.
          </motion.p>
        </div>
        <div className="mb-3">
          <motion.h2
            variants={item}
            transition={{ delay: 0.3 }}
            className="text-xl mb-1"
          >
            Kullanıcı Bilgileri
          </motion.h2>
          <motion.p
            variants={item}
            transition={{ delay: 0.4 }}
            className="text-gray-400 text-sm"
          >
            Web sitemizi ziyaret ettiğinizde, IP adresiniz, tarayıcı türü,
            internet servis sağlayıcısı (ISP), çıkış sayfaları ve tarih/saat
            damgaları gibi standart internet günlüğü bilgileri otomatik olarak
            toplanır. Bu bilgiler, web sitesinin kullanımını analiz etmek,
            içeriği iyileştirmek ve kullanıcı deneyimini kişiselleştirmek için
            kullanılır.
          </motion.p>
        </div>
        <div className="mb-3">
          <motion.h2
            variants={item}
            transition={{ delay: 0.5 }}
            className="text-xl mb-1"
          >
            Rüya Sonuçları ve OpenAI API Kullanımı
          </motion.h2>
          <motion.p
            variants={item}
            transition={{ delay: 0.6 }}
            className="text-gray-400 text-sm"
          >
            Web sitemizde sunulan rüya yorumları ve rüya görselleştirme
            sonuçları yalnızca eğlence ve bilgi amaçlıdır. Bu sonuçlar, OpenAI
            API'si kullanılarak oluşturulmuş olabilir ve doğruluğu garanti
            edilmemektedir. Rüya yorumları ve rüya görselleri sonuçlarına
            dayanarak alınan kararların sorumluluğu tamamen kullanıcıya aittir.
          </motion.p>
        </div>
        <div className="mb-3">
          <motion.h2
            variants={item}
            transition={{ delay: 0.7 }}
            className="text-xl mb-1"
          >
            Çerezler
          </motion.h2>
          <motion.p
            variants={item}
            transition={{ delay: 0.8 }}
            className="text-gray-400 text-sm"
          >
            Web sitemiz, kullanıcı deneyimini geliştirmek ve web sitesini daha
            etkili hale getirmek için çerezleri kullanır. Çerezler, kullanıcı
            tercihlerini hatırlamak ve ziyaret edilen sayfaları takip etmek için
            kullanılır. Kullanıcılar çerezleri kabul etmek veya reddetmek için
            tarayıcı ayarlarını değiştirebilirler. Ancak, bazı özelliklerin
            doğru şekilde çalışmayabileceğini unutmayın.
          </motion.p>
        </div>
        <div className="mb-3">
          <motion.h2
            variants={item}
            transition={{ delay: 0.9 }}
            className="text-xl mb-1"
          >
            Üçüncü Taraf Bağlantıları
          </motion.h2>
          <motion.p
            variants={item}
            transition={{ delay: 1 }}
            className="text-gray-400 text-sm"
          >
            Web sitemiz, üçüncü taraf web sitelerine bağlantılar içerebilir. Bu
            bağlantılar, farklı gizlilik politikalarına sahip olabilir. Bu
            nedenle, üçüncü taraf sitelerin gizlilik uygulamalarını incelemenizi
            öneririz. Bizim kontrolümüz dışındaki web sitelerinin içeriği veya
            uygulamaları için sorumluluk kabul etmiyoruz.
          </motion.p>
        </div>
        <div className="mb-3">
          <motion.h2
            variants={item}
            transition={{ delay: 1.1 }}
            className="text-xl mb-1"
          >
            Gizlilik Politikası Değişiklikleri
          </motion.h2>
          <motion.p
            variants={item}
            transition={{ delay: 1.2 }}
            className="text-gray-400 text-sm"
          >
            Bu gizlilik politikası, gerektiğinde güncellenebilir veya
            değiştirilebilir. Herhangi bir güncelleme veya değişiklik
            yayımlandığında, bu sayfa üzerinden kullanıcılarımıza bilgi
            verilecektir. Lütfen bu sayfayı düzenli olarak ziyaret ederek
            güncellemeleri takip edin.
          </motion.p>
        </div>
        <div className="mb-3 ">
          <motion.h2
            variants={item}
            transition={{ delay: 1.3 }}
            className="text-xl mb-1"
          >
            İletişim
          </motion.h2>
          <motion.p
            variants={item}
            transition={{ delay: 1.4 }}
            className="text-gray-400 text-sm"
          >
            Gizlilik politikamızla ilgili herhangi bir sorunuz veya endişeniz
            varsa, lütfen bize{" "}
            <Link to={"/iletisim"} className="text-white mr-1">
              iletişim formu
            </Link>
            üzerinden ulaşın.
          </motion.p>
        </div>
        <div className="mb-3 mt-8">
          <motion.h2
            variants={item}
            transition={{ delay: 1.5 }}
            className="text-xl"
          >
            Son güncelleme: [03/03/2024]
          </motion.h2>
        </div>
      </motion.div>
    </>
  );
};

export default Sozlesme;
