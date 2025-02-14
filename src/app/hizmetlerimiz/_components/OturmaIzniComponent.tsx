import Link from "next/link";
import { FaCheckCircle, FaUsers } from "react-icons/fa";

const OturmaIzniComponent = () => {
  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="p-6 rounded-lg border border-gray-200 shadow-sm bg-white">
        <h2 className="text-3xl font-bold text-primary mb-4">
          {`🛂 Oturma İzni ile Türkiye'de Resmi Olarak Yaşayın!`}
        </h2>
        <p className="text-gray-700">
          Türkiye’de <strong className="text-primary">90 günden fazla</strong>{" "}
          kalmak isteyen yabancı uyruklular için{" "}
          <span className="font-semibold text-primary">ikamet izni</span> almak
          zorunludur. Profesyonel danışmanlık hizmetimiz ile sürecinizi
          <span className="underline"> yasal</span> ve{" "}
          <span className="underline"> hızlı</span> şekilde tamamlayın.
        </p>
      </div>

      {/* Kimler Başvurabilir? */}
      <div className="p-6 rounded-lg border border-gray-200 shadow-sm bg-white">
        <h3 className="text-2xl font-semibold text-primary mb-4 flex items-center gap-2">
          <FaUsers className="h-6 w-6 text-primary" />
          Kimler Oturma İzni Başvurusu Yapabilir?
        </h3>
        <ul className="grid md:grid-cols-2 gap-4 text-gray-800">
          {[
            "🏢 Türkiye'de yatırım yapmak isteyenler",
            "💼 Çalışma/iş kurma planı olanlar",
            "🎓 Öğrenci olarak eğitim alacaklar",
            "👨👩👧👦 Aile birleşimi ile ikamet etmek isteyenler",
            "🕊️ İnsani sebeplerle bulunmak zorunda olanlar",
          ].map((item, idx) => (
            <li
              key={idx}
              className="flex items-start gap-2 p-3 rounded-md shadow-sm border border-gray-100"
            >
              <FaCheckCircle className="text-primary mt-1 flex-shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
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
              desc: "Son 6 ay içinde çekilmiş 2 adet biyometrik fotoğraf",
            },
            {
              title: "Sigorta",
              desc: "Türkiye'de geçerli sağlık sigortası",
            },
            {
              title: "Gelir Beyanı",
              desc: "Aylık asgari ücretin 1.5 katı gelir kanıtı",
            },
            {
              title: "Konaklama",
              desc: "Türkiye'deki ikamet adresi bilgileri",
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

      {/* Red Sebepleri */}
      <div className="p-6 rounded-lg border border-gray-200 shadow-sm bg-white">
        <h3 className="text-2xl font-semibold text-destructive mb-4">
          ❗ Oturma İzni Red Nedenleri
        </h3>
        <div className="space-y-3">
          {[
            "❌ Eksik veya yanlış belge sunumu",
            "❌ Yasa dışı faaliyet şüphesi",
            "❌ Sahte belge kullanımı tespiti",
            "❌ Güvenlik tehdidi oluşturma",
            "❌ Önceki ikamet ihlalleri",
          ].map((reason, idx) => (
            <div
              key={idx}
              className="flex items-center gap-2 p-3 rounded-md border border-gray-100"
            >
              <span className="text-destructive">{reason}</span>
            </div>
          ))}
        </div>
        <p className="mt-4 text-destructive font-medium">
          ⚠️ Başvurunuzun reddedilmemesi için profesyonel destek almanızı
          öneririz!
        </p>
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

export default OturmaIzniComponent;
