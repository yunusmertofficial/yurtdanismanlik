import Link from "next/link";
import { FaUniversity } from "react-icons/fa";

const UniversiteKayitComponent = () => {
  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="p-6 rounded-lg border border-gray-200 shadow-sm bg-white">
        <h2 className="text-3xl font-bold text-primary mb-4">
          Üniversite Kayıt İşlemleri Danışmanlığı ile Geleceğine Yön Ver!
        </h2>
        <p className="text-gray-700">
          {`Türkiye'deki üniversitelerde eğitim almak isteyen yabancı öğrenciler
          için başvuru, kabul ve kayıt süreçlerinde profesyonel destek
          sağlıyoruz.`}
        </p>
      </div>

      {/* Kimler Başvurabilir? */}
      <div className="p-6 rounded-lg border border-gray-200 shadow-sm bg-white">
        <h3 className="text-2xl font-semibold text-primary mb-4 flex items-center gap-2">
          <FaUniversity className="h-6 w-6 text-primary" />
          Kimler Başvurabilir?
        </h3>
        <ul className="list-disc pl-5 text-gray-800 space-y-2">
          <li>Yurt dışından Türkiye’de eğitim almak isteyen öğrenciler</li>
          <li>YÖS sınavına hazırlanan bireyler</li>
          <li>Üniversite başvuru süreci hakkında bilgi ve destek arayanlar</li>
        </ul>
      </div>

      {/* Süreç Adımları */}
      <div className="p-6 rounded-lg border border-gray-200 shadow-sm bg-white">
        <h3 className="text-2xl font-semibold text-primary mb-4">
          Kayıt Süreci Adımları
        </h3>
        <ol className="list-decimal pl-5 text-gray-800 space-y-2">
          <li>Uygun üniversitelerin ve bölümlerin belirlenmesi</li>
          <li>Gerekli belgelerin hazırlanması</li>
          <li>Online veya doğrudan başvuru işlemlerinin yapılması</li>
          <li>Başvuru sonucu takibi ve kabul mektubu alınması</li>
          <li>Kayıt işlemlerinin tamamlanması ve destek</li>
        </ol>
      </div>

      {/* Gerekli Belgeler */}
      <div className="p-6 rounded-lg border border-gray-200 shadow-sm bg-white">
        <h3 className="text-2xl font-semibold text-primary mb-4">
          📋 Gerekli Belgeler
        </h3>
        <div className="grid md:grid-cols-2 gap-4">
          {[
            {
              title: "Pasaport",
              desc: "Geçerli bir pasaport fotokopisi",
            },
            {
              title: "Lise Diploması",
              desc: "Yeminli tercümesi ile birlikte lise mezuniyet belgesi",
            },
            {
              title: "Transkript",
              desc: "Not döküm belgesi (lise dönemi)",
            },
            {
              title: "Dil Yeterlilik Belgesi",
              desc: "Varsa TOEFL, IELTS veya Türkçe yeterlilik belgesi",
            },
            {
              title: "Fotoğraf",
              desc: "Biyometrik vesikalık fotoğraf",
            },
          ].map((doc, idx) => (
            <div
              key={idx}
              className="p-4 rounded-lg border-l-4 border-primary shadow-sm"
            >
              <h4 className="font-semibold text-primary">{doc.title}</h4>
              <p className="text-gray-700 text-sm mt-1">{doc.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="p-6 rounded-lg text-center border-2 border-dashed border-gray-200 shadow-sm bg-white">
        <h3 className="text-2xl font-bold text-primary mb-3">
          Kayıt Sürecini Hemen Başlat!
        </h3>
        <p className="text-gray-700 mb-4">
          📞 0 549 565 6868 | 📧 yurtdanismanlikk@gmail.com
          <br />⌚ Pazartesi-Cumartesi 09:00-18:00
        </p>
        <Link
          href="https://wa.me/905495656868"
          passHref
          aria-label="WhatsApp"
          className="bg-primary text-white px-6 py-3 rounded-full hover:opacity-90 transition"
        >
          Ücretsiz Danışmanlık Al
        </Link>
      </div>
    </div>
  );
};

export default UniversiteKayitComponent;
