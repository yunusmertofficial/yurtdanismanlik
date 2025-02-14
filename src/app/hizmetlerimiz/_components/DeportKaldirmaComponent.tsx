import { FaCheckCircle, FaUsers } from "react-icons/fa";

const DeportKaldirmaComponent = () => {
  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="p-6 rounded-lg border border-gray-200 shadow-sm bg-white">
        <h2 className="text-3xl font-bold text-primary mb-4">
          Deport Kaldırma Danışmanlığı ile Haklarınızı Koruyun!
        </h2>
        <p className="text-gray-700">
          Sınır dışı (deport) kararı alan bireyler için hukuki destek ve
          danışmanlık hizmetimiz ile itiraz süreçlerinizi doğru ve etkili
          şekilde yönetiyor, haklarınızı yeniden kazanmanıza yardımcı oluyoruz.
        </p>
      </div>

      {/* Kimler Başvurabilir? */}
      <div className="p-6 rounded-lg border border-gray-200 shadow-sm bg-white">
        <h3 className="text-2xl font-semibold text-primary mb-4 flex items-center gap-2">
          <FaUsers className="h-6 w-6 text-primary" />
          Kimler Deport Kaldırma Danışmanlığına Başvurabilir?
        </h3>
        <ul className="list-disc pl-5 text-gray-800 space-y-2">
          <li>Sınır dışı kararı almış bireyler</li>
          <li>İtiraz sürecinde hukuki destek arayanlar</li>
          <li>Geçici veya kalıcı olarak deport edilenler</li>
          <li>Haklarını yeniden kazanmak isteyenler</li>
        </ul>
      </div>

      {/* Süreç Adımları */}
      <div className="p-6 rounded-lg border border-gray-200 shadow-sm bg-white">
        <h3 className="text-2xl font-semibold text-primary mb-4">
          Deport Kaldırma Süreç Adımları
        </h3>
        <ol className="list-decimal pl-5 text-gray-800 space-y-2">
          <li>Durumunuzun detaylı analizinin yapılması</li>
          <li>Gerekli belgelerin toplanması</li>
          <li>İtiraz dilekçesinin hazırlanması</li>
          <li>Resmi mercilere başvurunun yapılması</li>
          <li>Sürecin düzenli olarak takibi ve sonuçlandırılması</li>
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
              title: "Deport Kararı Belgesi",
              desc: "Sınır dışı kararınızın resmi belgesi",
            },
            {
              title: "Kimlik Belgeleri",
              desc: "Pasaport, kimlik kartı veya diğer kimlik belgeleri",
            },
            {
              title: "İkamet Bilgileri",
              desc: "Türkiye’de ikamet ettiğinizi gösteren belgeler",
            },
            {
              title: "Adli Sicil Kaydı",
              desc: "Temiz adli sicil belgesi",
            },
            {
              title: "Vize/İzin Belgeleri",
              desc: "Önceki vize veya çalışma izni belgeleriniz",
            },
            {
              title: "Ek Destekleyici Belgeler",
              desc: "Durumunuza göre ek belgeler (varsa)",
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

export default DeportKaldirmaComponent;
