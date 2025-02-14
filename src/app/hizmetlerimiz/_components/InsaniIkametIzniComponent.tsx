import { FaUsers } from "react-icons/fa";

const InsaniIkametIzniComponent = () => {
  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="p-6 rounded-lg border border-gray-200 shadow-sm bg-white">
        <h2 className="text-3xl font-bold text-primary mb-4">
          {`İnsani İkamet İzni ile Türkiye'de Güvence Altına Alın!`}
        </h2>
        <p className="text-gray-700">
          {`Özel durumlar nedeniyle Türkiye’de kalması gereken bireyler için
          hazırlanan insani ikamet izni başvuru sürecinde, tüm belgelerinizin
          eksiksiz ve doğru şekilde hazırlanmasını sağlıyor, süreci hızlı ve
          güvenilir bir şekilde yönetiyoruz.`}
        </p>
      </div>

      {/* Kimler Başvurabilir? */}
      <div className="p-6 rounded-lg border border-gray-200 shadow-sm bg-white">
        <h3 className="text-2xl font-semibold text-primary mb-4 flex items-center gap-2">
          <FaUsers className="h-6 w-6 text-primary" />
          Kimler İnsani İkamet Başvurusu Yapabilir?
        </h3>
        <ul className="list-disc pl-5 text-gray-800 space-y-2">
          <li>{`İnsani sebeplerle Türkiye’de kalması gereken bireyler`}</li>
          <li>{`Sağlık veya ailevi nedenlerle destek arayanlar`}</li>
          <li>Zorunlu durumlarda ikamet iznine ihtiyaç duyanlar</li>
          <li>Siyasi, insani veya sosyal nedenlerle başvuru yapanlar</li>
        </ul>
      </div>

      {/* Süreç Adımları */}
      <div className="p-6 rounded-lg border border-gray-200 shadow-sm bg-white">
        <h3 className="text-2xl font-semibold text-primary mb-4">
          İkamet Başvuru Süreç Adımları
        </h3>
        <ol className="list-decimal pl-5 text-gray-800 space-y-2">
          <li>{`Başvuru dosyasının hazırlanması`}</li>
          <li>{`Gerekli belgelerin toplanması`}</li>
          <li>{`Resmi kurumlara başvurunun yapılması`}</li>
          <li>{`Sürecin düzenli takibi ve sonuçlandırılması`}</li>
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
              title: "Pasaport",
              desc: "Geçerli pasaport veya seyahat belgesi",
            },
            {
              title: "Başvuru Formu",
              desc: "Eksiksiz doldurulmuş ikamet izni formu",
            },
            {
              title: "Fotoğraf",
              desc: "Son 6 ay içinde çekilmiş biyometrik fotoğraflar",
            },
            {
              title: "Sağlık Raporu",
              desc: "Güncel sağlık raporu ve sigorta bilgileri",
            },
            {
              title: "Aile İlişkileri Belgesi",
              desc: "Nüfus kayıt örneği veya aile ilişkilerini gösteren belgeler",
            },
            {
              title: "Ek Destekleyici Belgeler",
              desc: "İhtiyaç halinde ek belgeler (ör. sabıka kaydı, maddi durum belgesi)",
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
          📞 0 549 565 6868 | 📧 rahimdarilmaz@gmail.com
          <br />⌚ Pazartesi-Cumartesi 09:00-18:00
        </p>
        <button className="bg-primary text-white px-6 py-3 rounded-full hover:opacity-90 transition">
          Ücretsiz Danışmanlık Al
        </button>
      </div>
    </div>
  );
};

export default InsaniIkametIzniComponent;
