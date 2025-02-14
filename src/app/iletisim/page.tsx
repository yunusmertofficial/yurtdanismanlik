import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import Breadcrumb from "@/components/Breadcrumb";
import { Metadata } from "next";
import Container from "@/components/Container";
import AnimatedSection from "@/components/AnimatedSection";

export const metadata: Metadata = {
  title:
    "İletişim | Yurt Danışmanlık - Oturma, Çalışma ve Vatandaşlık Danışmanlığı",
  description:
    "Yurt Danışmanlık ile iletişime geçin. Oturma izni, çalışma izni, vatandaşlık, deport kaldırma, yurt dışı vize işlemleri, insani ikamet izni ve evlilik işlemleri hakkında detaylı bilgi almak için bize ulaşabilirsiniz.",
};

export default function Contact() {
  const breadcrumbs = [
    { href: "/", label: "Anasayfa" },
    { href: "/iletisim", label: "İletişim" },
  ];

  return (
    <main className="mb-10">
      {/* Breadcrumb */}
      <Breadcrumb
        breadcrumbs={breadcrumbs}
        title="İletişim"
        image={{
          url: "/images/iletisim/banner.webp",
        }}
        description="Her türlü soru ve talepleriniz için bizimle iletişime geçin."
      />

      <AnimatedSection>
        <section className="py-16">
          <Container>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {/* Sol Sütun: İletişim Bilgileri */}
              <div>
                <h3 className="text-4xl font-bold text-foreground mb-6">
                  <span className="text-primary">Yurt Danışmanlık</span> ile
                  İletişime Geçin
                </h3>
                <p className="text-gray-600 mb-6">
                  Yurt Danışmanlık, Türkiye'de oturma izni, çalışma izni,
                  vatandaşlık başvuruları, deport kaldırma, yurt dışı vize
                  işlemleri, insani ikamet izni, evlilik ve konsolosluk
                  işlemleri gibi birçok alanda profesyonel danışmanlık hizmeti
                  sunmaktadır. Başvurularınızın sorunsuz ilerlemesi için uzman
                  ekibimizle yanınızdayız. Detaylı bilgi almak ve süreçlerinizi
                  hızlandırmak için bizimle iletişime geçin.
                </p>

                {/* İletişim Kartları */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Adres Kartı */}
                  <div className="p-6 bg-white shadow-md rounded-lg flex items-center space-x-4 hover:shadow-lg transition">
                    <FaMapMarkerAlt className="text-red-500 text-4xl" />
                    <div>
                      <h4 className="text-lg font-semibold">Adres</h4>
                      <p className="text-gray-600">
                        Osmanağa mahallesi vahapbey sok no 16 fırıncıoğlu iş
                        merkezi 3.kat 301 numara Kadıköy Istanbul
                      </p>
                    </div>
                  </div>

                  {/* Email Kartı */}
                  <div className="p-6 bg-white shadow-md rounded-lg flex items-center space-x-4 hover:shadow-lg transition">
                    <FaEnvelope className="text-blue-500 text-4xl" />
                    <div>
                      <h4 className="text-lg font-semibold">E-Posta</h4>
                      <a
                        href="mailto:rahimdarilmaz@gmail.com"
                        className="text-gray-600 underline"
                      >
                        rahimdarilmaz@gmail.com
                      </a>
                    </div>
                  </div>

                  {/* Telefon Kartı */}
                  <div className="p-6 bg-white shadow-md rounded-lg flex items-center space-x-4 hover:shadow-lg transition">
                    <FaPhone className="text-green-500 text-4xl" />
                    <div>
                      <h4 className="text-lg font-semibold">Telefon</h4>
                      <a
                        href="tel:+905495656868"
                        className="text-gray-600 underline"
                      >
                        +90 549 565 6868
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Sağ Sütun: Google Harita */}
              <div className="relative w-full h-80 rounded-lg overflow-hidden shadow-lg">
                <iframe
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  scrolling="no"
                  marginHeight={0}
                  marginWidth={0}
                  src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3011.551074261668!2d29.024948076039585!3d40.99131007135291!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDDCsDU5JzI4LjciTiAyOcKwMDEnMzkuMSJF!5e0!3m2!1str!2str!4v1739534893768!5m2!1str!2str"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </Container>
        </section>
      </AnimatedSection>
    </main>
  );
}
