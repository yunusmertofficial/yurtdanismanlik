"use client";
import React from "react";
import Container from "@/components/Container";
import FaqSummary from "@/components/FaqSummary";
import AnimatedSection from "@/components/AnimatedSection";

const FaqSummarySection = () => {
  const faqs = [
    {
      question: "Türkiye’de oturma izni almak için hangi belgeler gereklidir?",
      answer:
        "Oturma izni başvurusu için pasaport, biyometrik fotoğraf, sağlık sigortası poliçesi, gelir beyanı ve konaklama belgesi gibi evraklar gereklidir. Danışmanlık hizmetimizle başvuru sürecinizi eksiksiz yönetiyoruz.",
    },
    {
      question: "Çalışma izni başvurusu ne kadar sürede sonuçlanır?",
      answer:
        "Çalışma izni başvuruları genellikle 30-60 gün içinde sonuçlanır. Süreç, başvurunun yapıldığı sektöre ve ilgili kurumların yoğunluğuna bağlı olarak değişebilir.",
    },
    {
      question: "Türk vatandaşlığına başvurmak için şartlar nelerdir?",
      answer:
        "Türk vatandaşlığı için Türkiye’de en az 5 yıl ikamet etmek, belirli bir yatırım yapmak veya bir Türk vatandaşı ile evlenmek gibi çeşitli şartlar bulunmaktadır. Başvuru sürecinizde size rehberlik ediyoruz.",
    },
    {
      question:
        "Vize ihlali yaptım, Türkiye’ye tekrar nasıl giriş yapabilirim?",
      answer:
        "Vize ihlali nedeniyle giriş yasağı almışsanız, belirli prosedürleri takip ederek tekrar giriş yapabilirsiniz. Çıkış-giriş hizmetimiz ile sürecinizi hızlı ve sorunsuz bir şekilde yönetiyoruz.",
    },
    {
      question: "Deport kaldırma işlemi nasıl yapılır?",
      answer:
        "Deport kararının kaldırılması için gerekli başvuruları yaparak hukuki destek sağlıyoruz. Gerekli belgeler ve itiraz süreci hakkında detaylı bilgi almak için bizimle iletişime geçin.",
    },
    {
      question: "Özel sağlık sigortası zorunlu mu?",
      answer:
        "Türkiye’de ikamet izni alacak yabancıların özel sağlık sigortası yaptırması zorunludur. Uygun fiyatlı sağlık sigortası poliçeleri için hizmet sunuyoruz.",
    },
  ];

  return (
    <AnimatedSection>
      <section className="py-16" aria-labelledby="faq-heading">
        <Container>
          <div className="grid gap-8 md:grid-cols-2 items-start">
            {/* Sol Sütun (Başlık ve Açıklama) */}
            <header>
              <h2
                id="faq-heading"
                className="text-3xl md:text-4xl font-bold text-foreground mb-4"
              >
                {`Sıkça Sorulan Sorular`} <br className="hidden lg:block" />
                <span className="text-primary">{`Yurt Danışmanlık`}</span>{" "}
                Hizmetleri
              </h2>
              <p className="text-muted-foreground mb-6 text-base md:text-lg">
                {`Türkiye'de oturma izni, çalışma izni, vatandaşlık başvurusu ve
                diğer resmi işlemler hakkında en çok sorulan soruların
                cevaplarını burada bulabilirsiniz.`}
              </p>
              <p className="text-muted-foreground mb-6 text-base md:text-lg">
                {`Size en uygun danışmanlık hizmetini almak için bizimle iletişime
                geçin. Uzman ekibimiz, başvuru süreçlerinizde size rehberlik
                edecektir.`}
              </p>
            </header>

            <FaqSummary faqs={faqs} />
          </div>
        </Container>
      </section>
    </AnimatedSection>
  );
};

export default FaqSummarySection;
