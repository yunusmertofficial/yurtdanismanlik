import Breadcrumb from "@/components/Breadcrumb";
import { Metadata } from "next";
import StatisticsAndAchievements from "./_components/StatisticsAndAchievements";
import AboutUsSection from "./_components/AboutUsSection";

export const metadata: Metadata = {
  title: "Hakkımızda | Yurt Danışmanlık - Güvenilir Danışmanlık Hizmetleri",
  description:
    "Yurt Danışmanlık olarak, oturma izni, çalışma izni, vatandaşlık ve diğer yasal işlemlerde uzman ekibimizle hizmet veriyoruz. Kuruluşumuz, deneyimli danışman kadromuz ve başarılı projelerimizle sektörde güvenilir bir referans oluşturmaktadır.",
};

export default function About() {
  const breadcrumbs = [
    { href: "/", label: "Anasayfa" },
    { href: "/hakkimizda", label: "Hakkımızda" },
  ];

  return (
    <main className="mb-10">
      <Breadcrumb
        breadcrumbs={breadcrumbs}
        title="Hakkımızda"
        image={{ url: "/images/hakkimizda/banner.webp" }}
        description="Uzman ekibimiz, yılların deneyimi ve başarılarıyla hizmet vermektedir."
      />
      <AboutUsSection />
      <StatisticsAndAchievements />
    </main>
  );
}
