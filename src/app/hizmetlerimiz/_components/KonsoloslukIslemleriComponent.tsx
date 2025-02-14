import { FaUsers } from "react-icons/fa";

const KonsoloslukIslemleriComponent = () => {
  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="p-6 rounded-lg border border-gray-200 shadow-sm bg-white">
        <h2 className="text-3xl font-bold text-primary mb-4">
          Konsolosluk İşlemleri Danışmanlığı ile Sorunsuz İşlemler!
        </h2>
        <p className="text-gray-700">
          Yabancı uyruklu bireylerin konsolosluk işlemlerinde profesyonel destek
          alarak, başvuru sürecinde zaman kaybetmeden tüm resmi işlemlerinizi
          sorunsuz şekilde tamamlayın.
        </p>
      </div>

      {/* Kimler Başvurabilir? */}
      <div className="p-6 rounded-lg border border-gray-200 shadow-sm bg-white">
        <h3 className="text-2xl font-semibold text-primary mb-4 flex items-center gap-2">
          <FaUsers className="h-6 w-6 text-primary" />
          Kimler Konsolosluk İşlemlerine Başvurabilir?
        </h3>
        <ul className="list-disc pl-5 text-gray-800 space-y-2">
          <li>Yabancı uyruklu bireyler</li>
          <li>Konsolosluk işlemleri için belge ve randevu desteği arayanlar</li>
          <li>Pasaport, vize ve diğer resmi belgelerde destek isteyenler</li>
        </ul>
      </div>

      {/* İşlem Süreç Adımları */}
      <div className="p-6 rounded-lg border border-gray-200 shadow-sm bg-white">
        <h3 className="text-2xl font-semibold text-primary mb-4">
          Konsolosluk İşlemleri Süreç Adımları
        </h3>
        <ol className="list-decimal pl-5 text-gray-800 space-y-2">
          <li>Gerekli belgelerin hazırlanması</li>
          <li>Başvuru formunun doldurulması</li>
          <li>Randevu alınması ve başvurunun yapılması</li>
          <li>İşlemlerin takip edilmesi ve sonuçlandırılması</li>
        </ol>
      </div>

      {/* Gerekli Belgeler */}
      <div className="p-6 rounded-lg border border-gray-200 shadow-sm bg-white">
        <h3 className="text-2xl font-semibold text-primary mb-4 flex items-center gap-2">
          📋 Gerekli Belgeler
        </h3>
        <div className="grid md:grid-cols-2 gap-4">
          {[
            {
              title: "Pasaport Fotokopisi",
              desc: "Geçerli pasaportunuzun fotokopisi",
            },
            {
              title: "Başvuru Formu",
              desc: "Eksiksiz doldurulmuş konsolosluk başvuru formu",
            },
            {
              title: "Biyometrik Fotoğraf",
              desc: "Son 6 ay içinde çekilmiş fotoğraflar",
            },
            {
              title: "Randevu Dekontu",
              desc: "Alınan randevunun dekontu",
            },
            {
              title: "Vize/İzin Belgeleri",
              desc: "Mevcut vize veya izin belgeleriniz",
            },
            {
              title: "Ek Belgeler",
              desc: "Durumunuza göre ek destekleyici belgeler",
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
        <button className="bg-primary text-white px-6 py-3 rounded-full hover:opacity-90 transition">
          Ücretsiz Danışmanlık Al
        </button>
      </div>
    </div>
  );
};

export default KonsoloslukIslemleriComponent;
