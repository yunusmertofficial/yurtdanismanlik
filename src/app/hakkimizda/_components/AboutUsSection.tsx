import AnimatedSection from "@/components/AnimatedSection";
import React from "react";
import Image from "next/image";
import Container from "@/components/Container";

export default function AboutUsSection() {
  return (
    <AnimatedSection>
      <Container>
        <section className="grid gap-8 md:grid-cols-2 items-start py-16">
          {/* Metin Bölümü */}
          <header>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Yurt Danışmanlık:{" "}
              <span className="text-primary">
                Güvenilir ve Profesyonel Hizmet
              </span>
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Yurt Danışmanlık, Türkiye'de oturma izni, çalışma izni,
              vatandaşlık işlemleri, deport kaldırma, yurt dışı vize işlemleri,
              insani ikamet izni, evlilik işlemleri ve konsolosluk hizmetleri
              gibi alanlarda profesyonel danışmanlık sunan bir firmadır.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Uzman ekibimiz, göçmenlik ve yasal süreçlerde geniş deneyime
              sahiptir. Her başvurunun eksiksiz ve hatasız tamamlanmasını
              sağlamak için titizlikle çalışıyoruz. Danışmanlık hizmetlerimiz
              sayesinde süreçlerinizi hızlı, sorunsuz ve güvenilir bir şekilde
              yönetebilirsiniz.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Amacımız, Türkiye'de yaşamak veya çalışmak isteyen bireylere doğru
              bilgi ve rehberlik sunarak resmi işlemlerini kolaylaştırmaktır.
              Yasal prosedürlerde profesyonel destek alarak zamanınızı ve
              enerjinizi en verimli şekilde kullanabilirsiniz.
            </p>
          </header>

          {/* Görsel Bölümü */}
          <div className="flex justify-center items-center">
            <div className="relative w-full h-80 sm:h-96">
              <Image
                src="/images/hakkimizda/yurt-danismanlik.webp"
                alt="Yurt Danışmanlık Ofisi"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover rounded-lg shadow-md"
                priority
              />
            </div>
          </div>
        </section>
      </Container>
    </AnimatedSection>
  );
}
