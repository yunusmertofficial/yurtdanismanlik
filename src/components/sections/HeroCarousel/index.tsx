"use client";
import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useHotkeys } from "react-hotkeys-hook";
import { range } from "@/utils/range";
import Thumbnail from "./ThumbnailComponent";
import Link from "next/link";
import React from "react";
import Container from "@/components/Container";

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 0,
      public_id: "1",
      format: "jpg",
      title: "HAYATA DAİR İHTİYAÇLARINIZ İÇİN",
      description: "Yurt danışmanlık her zaman sizinle.",
    },
    {
      id: 1,
      public_id: "2",
      format: "jpg",
      title: "OTURMA İZNİ DANIŞMANLIĞI",
      description:
        "Oturma iznine Özgür Danışmanlık ile Formalitelerle Uğraşmadan Sahip Olun!",
    },
    {
      id: 2,
      public_id: "3",
      format: "jpg",
      title: "VATANDAŞLIK HİZMETLERİ DANIŞMANLIĞI",
      description:
        "Yurt Danışmanlık Profesyonel Ekibiyle Türk Vatandaşlığı Başvuru Sürecinde Sizlerin Yanında",
    },
  ];

  const nextSlide = useCallback(() => {
    const newIndex = (currentSlide + 1) % slides.length;
    setCurrentSlide(newIndex);
  }, [currentSlide, slides.length]);

  const prevSlideHandler = () => {
    const newIndex = (currentSlide - 1 + slides.length) % slides.length;
    setCurrentSlide(newIndex);
  };

  // Slider 5 saniyede bir geçiş yapacak
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [nextSlide]);

  const filteredImages = slides?.filter((img) =>
    range(currentSlide - 15, currentSlide + 15).includes(img.id)
  );

  const changePhotoId = (id: number) => {
    setCurrentSlide(id);
  };

  useHotkeys(
    "ArrowRight",
    () => {
      nextSlide();
    },
    [currentSlide]
  );

  useHotkeys(
    "ArrowLeft",
    () => {
      prevSlideHandler();
    },
    [currentSlide]
  );
  const slide = slides[currentSlide];

  return (
    <section
      className="relative w-full h-[75vh] overflow-hidden flex items-center"
      aria-label="Yurt Danışmanlık"
    >
      <Image
        src={`/images/carousel/${slide.public_id}.${slide.format}`}
        alt={slide.title}
        key={slide.id}
        fill
        style={{ objectFit: "cover" }}
        priority
        className="animate-fadeIn"
      />

      {/* Karanlıklaştırma Katmanı */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* İçerik */}
      <Container>
        <div className="relative z-10 flex flex-col items-start justify-center h-full text-white">
          <React.Fragment key={slide.id}>
            <h1 className="text-4xl md:text-5xl font-bold pr-2 animate-slideIn">
              {slide.title}
            </h1>

            <p className="mt-4 text-lg md:text-xl pr-2 animate-slideIn">
              {slide.description}
            </p>
          </React.Fragment>
          <div className="mt-4 flex space-x-4">
            <Link
              href="/hizmetler"
              aria-label="Hizmetlerimiz"
              className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium transition duration-300 transform hover:scale-105 hover:shadow-xl"
            >
              Hizmetlerimiz
            </Link>
            <Link
              href="tel:+905495656868"
              aria-label="heemen ara"
              className="px-6 py-3 bg-secondary text-secondary-foreground rounded-lg font-medium transition duration-300 transform hover:scale-105 hover:shadow-xl"
            >
              Hemen Ara
            </Link>
          </div>
        </div>
      </Container>
      <button
        className="absolute top-1/2 left-0 z-2 hidden md:flex items-center justify-center px-4 transform -translate-y-1/2 hover:scale-110 transition-transform duration-300"
        onClick={prevSlideHandler}
        aria-label="Önceki Slide"
      >
        <span className="inline-flex items-center justify-center w-10 h-10 bg-white/30 rounded-full">
          <FaChevronLeft className="text-white" size={20} />
        </span>
      </button>
      <button
        className="absolute top-1/2 right-0 z-2 hidden md:flex items-center justify-center px-4 transform -translate-y-1/2 hover:scale-110 transition-transform duration-300"
        onClick={nextSlide}
        aria-label="Sonraki Slide"
      >
        <span className="inline-flex items-center justify-center w-10 h-10 bg-white/30 rounded-full">
          <FaChevronRight className="text-white" size={20} />
        </span>
      </button>

      <Thumbnail
        totalImageLength={slides.length}
        filteredImages={filteredImages.map((img) => ({
          id: img.id,
          public_id: img.public_id,
          format: img.format,
          alt: img.title,
        }))}
        index={currentSlide}
        changePhotoId={changePhotoId}
      />
    </section>
  );
};

export default HeroCarousel;
