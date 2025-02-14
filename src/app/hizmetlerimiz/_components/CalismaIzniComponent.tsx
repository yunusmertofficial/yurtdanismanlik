import { FaUsers } from "react-icons/fa";

const CalismaIzniComponent = () => {
  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="p-6 rounded-lg border border-gray-200 shadow-sm bg-white">
        <h2 className="text-3xl font-bold text-primary mb-4">
          Yabancı Personel Çalışma İzni Danışmanlığı
        </h2>
        <p className="text-gray-700">
          İşletmenizde çalışacak yabancı personelinizin çalışma izni
          süreçlerinde zaman kaybetmeyin! Profesyonel danışmanlık hizmetimiz ile
          başvurularınız eksiksiz hazırlanır, resmi işlemler hızla
          sonuçlandırılır ve yasal gereklilikler tam olarak yerine getirilir.
        </p>
      </div>

      {/* Neden Profesyonel Danışmanlık? */}
      <div className="p-6 rounded-lg border border-gray-200 shadow-sm bg-white">
        <h3 className="text-2xl font-semibold text-primary mb-4 flex items-center gap-2">
          <FaUsers className="h-6 w-6 text-primary" />
          Neden Profesyonel Çalışma İzni Danışmanlığı?
        </h3>
        <ul className="list-disc pl-5 text-gray-800 space-y-2">
          <li>Hukuki süreçlerde uzmanlık ve deneyim</li>
          <li>Belgelerin eksiksiz ve hatasız hazırlanması</li>
          <li>Hızlı başvuru süreci ve düzenli takip</li>
          <li>İşyeri ve çalışan uyumunun sağlanması</li>
        </ul>
      </div>

      {/* Süreç Adımları */}
      <div className="p-6 rounded-lg border border-gray-200 shadow-sm bg-white">
        <h3 className="text-2xl font-semibold text-primary mb-4">
          Çalışma İzni Süreç Adımları
        </h3>
        <ol className="list-decimal pl-5 text-gray-800 space-y-2">
          <li>Başvuru dosyasının hazırlanması</li>
          <li>Gerekli belgelerin temin edilmesi</li>
          <li>Resmi kurumlara başvurunun yapılması</li>
          <li>İzin sonucunun takip edilmesi ve bilgilendirme</li>
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
              title: "İşyeri Belgeleri",
              desc: "İşletmenizin resmi evrakları ve faaliyet belgesi",
            },
            {
              title: "Çalışma Sözleşmesi",
              desc: "Yabancı personel ile yapılan sözleşme fotokopileri",
            },
            {
              title: "Pasaport Fotokopisi",
              desc: "Çalışanın geçerli pasaportunun fotokopisi",
            },
            {
              title: "Nüfus Kayıt Örneği",
              desc: "Çalışanın nüfus bilgilerinin yer aldığı belge",
            },
            {
              title: "Sigorta Bilgileri",
              desc: "Geçerli sağlık ve iş sigortası belgeleri",
            },
            {
              title: "Eğitim Belgeleri",
              desc: "Çalışanın eğitim durumunu gösteren belgeler",
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
          📞 0 549 565 6868 | 📧 yurtdanismanlikk@gmail.com.
          <br />⌚ Pazartesi-Cumartesi 09:00-18:00
        </p>
        <button className="bg-primary text-white px-6 py-3 rounded-full hover:opacity-90 transition">
          Ücretsiz Danışmanlık Al
        </button>
      </div>
    </div>
  );
};

export default CalismaIzniComponent;
