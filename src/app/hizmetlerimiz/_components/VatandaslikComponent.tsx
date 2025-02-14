import { FaUsers } from "react-icons/fa";

const VatandaslikComponent = () => {
  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="p-6 rounded-lg border border-gray-200 shadow-sm bg-white">
        <h2 className="text-3xl font-bold text-primary mb-4">
          Vatandaşlık Danışmanlığı ile Türk Vatandaşlığına Geçiş!
        </h2>
        <p className="text-gray-700">
          Türk vatandaşlığına geçiş sürecinizde profesyonel danışmanlık
          hizmetimiz ile belgelerinizin eksiksiz ve doğru şekilde hazırlanmasını
          sağlıyor, süreci hızlandırıyoruz.
        </p>
      </div>

      {/* Kimler Başvurabilir? */}
      <div className="p-6 rounded-lg border border-gray-200 shadow-sm bg-white">
        <h3 className="text-2xl font-semibold text-primary mb-4 flex items-center gap-2">
          <FaUsers className="h-6 w-6 text-primary" />
          Kimler Vatandaşlık Başvurusu Yapabilir?
        </h3>
        <ul className="list-disc pl-5 text-gray-800 space-y-2">
          <li>Yabancı uyruklu bireyler</li>
          <li>Türkiye’de uzun süre ikamet edenler</li>
          <li>Aile birleşimi kapsamında başvuru yapmak isteyenler</li>
          <li>Özel durumlarda vatandaşlığa geçiş talebinde bulunanlar</li>
        </ul>
      </div>

      {/* Vatandaşlık Süreç Adımları */}
      <div className="p-6 rounded-lg border border-gray-200 shadow-sm bg-white">
        <h3 className="text-2xl font-semibold text-primary mb-4">
          Vatandaşlık Başvuru Süreci Adımları
        </h3>
        <ol className="list-decimal pl-5 text-gray-800 space-y-2">
          <li>Gerekli belgelerin hazırlanması</li>
          <li>Başvuru dosyasının oluşturulması</li>
          <li>Resmi kurumlara başvurunun yapılması</li>
          <li>Değerlendirme süreci ve sonuç bildirimi</li>
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
              title: "Doğum Belgesi",
              desc: "Orijinal veya onaylı kopyası",
            },
            {
              title: "Pasaport",
              desc: "Geçerli pasaport fotokopisi",
            },
            {
              title: "İkamet Belgesi",
              desc: "Türkiye’deki ikamet belgesi",
            },
            {
              title: "Adli Sicil Kaydı",
              desc: "Temiz adli sicil belgesi",
            },
            {
              title: "Aile İlişkileri Belgesi",
              desc: "Nüfus kayıt örneği",
            },
            {
              title: "Sağlık Raporu",
              desc: "Sağlık durumunu gösteren rapor",
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

export default VatandaslikComponent;
