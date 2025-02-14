import Link from "next/link";
import { FaUsers } from "react-icons/fa";

const EvlilikIslemleriComponent = () => {
  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="p-6 rounded-lg border border-gray-200 shadow-sm bg-white">
        <h2 className="text-3xl font-bold text-primary mb-4">
          Evlilik İşlemleri Danışmanlığı ile Hayatınıza Yeni Bir Adım!
        </h2>
        <p className="text-gray-700">
          Türkiye’de evlenmek isteyenler için profesyonel evlilik işlemleri
          danışmanlığımız ile tüm resmi süreçleri eksiksiz ve hızlı bir şekilde
          yönetiyoruz.
        </p>
      </div>

      {/* Kimler Başvurabilir? */}
      <div className="p-6 rounded-lg border border-gray-200 shadow-sm bg-white">
        <h3 className="text-2xl font-semibold text-primary mb-4 flex items-center gap-2">
          <FaUsers className="h-6 w-6 text-primary" />
          Kimler Evlilik İşlemleri Danışmanlığına Başvurabilir?
        </h3>
        <ul className="list-disc pl-5 text-gray-800 space-y-2">
          <li>Evlilik işlemlerini kendi başına yönetemeyen çiftler</li>
          <li>Resmi süreçlerde profesyonel destek arayanlar</li>
          <li>Uluslararası evliliklerde belgelerin düzenlenmesi gerekenler</li>
          <li>Hızlı ve sorunsuz evlilik işlemleri isteyenler</li>
        </ul>
      </div>

      {/* Süreç Adımları */}
      <div className="p-6 rounded-lg border border-gray-200 shadow-sm bg-white">
        <h3 className="text-2xl font-semibold text-primary mb-4">
          Evlilik İşlemleri Süreç Adımları
        </h3>
        <ol className="list-decimal pl-5 text-gray-800 space-y-2">
          <li>Başvuru dosyasının hazırlanması</li>
          <li>Gerekli belgelerin toplanması</li>
          <li>Resmi kurumlara başvurunun yapılması</li>
          <li>Randevu alınması ve evlilik işlemlerinin gerçekleştirilmesi</li>
          <li>Süreç takibi ve sonuçlandırılması</li>
        </ol>
      </div>

      {/* Gerekli Belgeler */}
      <div className="p-6 rounded-lg border border-gray-200 shadow-sm bg-white">
        <h3 className="text-2xl font-semibold text-primary mb-4 flex items-center gap-2">
          📋 Gerekli Belgeler
        </h3>
        <div className="grid md:grid-cols-2 gap-4">
          {[
            { title: "Nüfus Kayıt Örneği", desc: "Güncel nüfus kayıt örneği" },
            { title: "Sağlık Raporu", desc: "Güncel sağlık raporu" },
            { title: "Evlenme Beyanı", desc: "Hazırlanmış evlenme beyanı" },
            { title: "Adli Sicil Kaydı", desc: "Temiz adli sicil belgesi" },
            { title: "Fotoğraflar", desc: "Çiftin biyometrik fotoğrafları" },
            { title: "İkametgah Belgesi", desc: "Geçerli ikametgah belgesi" },
            {
              title: "Doğum Belgesi (Apostilli)",
              desc: "Başvuru için gereken evraklardan biri",
            },
            {
              title: "Bekarlık Belgesi (Apostilli)",
              desc: "Yabancıdan istenilecek olan evrak",
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
          Hemen Başvurun!
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

export default EvlilikIslemleriComponent;
