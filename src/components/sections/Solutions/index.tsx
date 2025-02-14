"use client";
import React from "react";
import Image from "next/image";
import Container from "@/components/Container";
import AnimatedSection from "@/components/AnimatedSection";
import ButtonLink from "@/components/ButtonLink";
import {
  FaDoorOpen,
  FaGavel,
  FaHeartbeat,
  FaPassport,
  FaPlaneDeparture,
  FaUserShield,
  FaGlobe,
  FaHandHoldingHeart,
  FaHeart,
  FaUniversity,
} from "react-icons/fa";

const Hizmetler = () => {
  const solutions = [
    {
      title: "Oturma İzni Danışmanlığı",
      description:
        "Türkiye'de 90 günden fazla kalmak isteyen yabancı uyruklular için ikamet izni başvuru sürecinde profesyonel destek sağlıyoruz.",
      icon: <FaUserShield />,
      link: "/hizmetlerimiz/oturma-izni-danismanligi",
    },
    {
      title: "Çalışma İzni Danışmanlığı",
      description:
        "Türkiye'de yasal olarak çalışmak isteyen yabancı uyruklular için Çalışma ve Sosyal Güvenlik Bakanlığı'na başvuru sürecinizi yönetiyoruz.",
      icon: <FaPassport />,
      link: "/hizmetlerimiz/calisma-izni-danismanligi",
    },
    {
      title: "Vatandaşlık Danışmanlığı",
      description:
        "Türk vatandaşlığına geçiş sürecinizde, tüm resmi işlemler ve başvurular konusunda uzman ekibimizle yanınızdayız.",
      icon: <FaGavel />,
      link: "/hizmetlerimiz/vatandaslik-danismanligi",
    },
    {
      title: "Deport Kaldırma Danışmanlığı",
      description:
        "Sınır dışı (deport) kararı almış kişilerin Türkiye’ye giriş yapabilmesi için yasal destek sağlıyoruz.",
      icon: <FaDoorOpen />,
      link: "/hizmetlerimiz/deport-kaldirma-danismanligi",
    },
    {
      title: "Yurt Dışı Vize İşlemleri",
      description:
        "Türkiye’den yurt dışına seyahat etmek isteyenler için vize başvuru süreçlerini yönetiyoruz.",
      icon: <FaGlobe />,
      link: "/hizmetlerimiz/yurt-disi-vize-islemleri",
    },
    {
      title: "İnsani İkamet İzni",
      description:
        "Zorunlu insani sebeplerle Türkiye'de ikamet etmek isteyenlere yönelik özel ikamet izinleri için danışmanlık sunuyoruz.",
      icon: <FaHandHoldingHeart />,
      link: "/hizmetlerimiz/insani-ikamet-izni",
    },
    {
      title: "Evlilik İşlemleri",
      description:
        "Türkiye'de evlilik yapmak isteyen yabancılar için tüm resmi işlemlerin yürütülmesi konusunda rehberlik sağlıyoruz.",
      icon: <FaHeart />,
      link: "/hizmetlerimiz/evlilik-islemleri",
    },
    {
      title: "Konsolosluk İşlemleri",
      description:
        "Pasaport yenileme, noter onayları ve diğer konsolosluk işlemleriniz için danışmanlık sağlıyoruz.",
      icon: <FaUniversity />,
      link: "/hizmetlerimiz/konsolosluk-islemleri",
    },
  ];

  return (
    <AnimatedSection>
      <section
        className="py-16 animate-fadeIn bg-light"
        aria-labelledby="hizmetler-title"
      >
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative">
            {/* Sol Bölüm */}
            <div>
              <h2
                id="hizmetler-title"
                className="text-4xl font-bold text-foreground"
              >
                Yurt Danışmanlık{" "}
                <span className="text-primary">Hizmetleri</span>
              </h2>
              <p className="text-muted-foreground mt-4">
                Türkiye'de oturum, çalışma izni, vatandaşlık ve diğer resmi
                işlemleriniz için profesyonel danışmanlık hizmetleri sunuyoruz.
              </p>

              {/* Danışmanlık Hizmetleri Listesi */}
              <div className="mt-8 space-y-6">
                {solutions.map((solution, index) => (
                  <div key={index} className="flex items-center">
                    <div className="text-primary text-5xl mr-4">
                      {solution.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground">
                        {solution.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {solution.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <ButtonLink
                href="/hizmetlerimiz"
                text="Tüm detaylar"
                additionalClass="mt-8 text-left"
              />
            </div>

            {/* Sağ Bölüm - Resimler */}
            <div className="relative w-full h-[500px] md:h-[600px]">
              {/* Sol Alt Resim (Büyütüldü) */}
              <div className="absolute bottom-0 left-0 w-[65%] h-[80%]">
                <Image
                  src="/images/solutions/1.jpg"
                  alt="Danışmanlık Hizmetleri"
                  fill
                  style={{ objectFit: "cover" }}
                  className="rounded-lg shadow-md"
                />
              </div>
              {/* Sağ Üst Resim (Büyütüldü) */}
              <div className="absolute top-0 right-0 w-[65%] h-[80%]">
                <Image
                  src="/images/solutions/2.jpg"
                  alt="Yurt Danışmanlık Hizmetleri"
                  fill
                  style={{ objectFit: "cover" }}
                  className="rounded-lg shadow-md"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>
    </AnimatedSection>
  );
};

export default Hizmetler;
