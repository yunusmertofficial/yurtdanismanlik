import Image from "next/image";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import { Metadata } from "next";

const services = [
  {
    metadata: {
      slug: "oturma-izni-danismanligi",
      title: "Oturma İzni Danışmanlığı",
      description:
        "Türkiye'de uzun süre kalmak isteyenlere profesyonel destek sağlıyoruz.",
      image: "/images/hizmetlerimiz/oturma-izni.jpg",
    },
  },
  {
    metadata: {
      slug: "calisma-izni-danismanligi",
      title: "Çalışma İzni Danışmanlığı",
      description:
        "Türkiye'de çalışmak isteyen yabancı uyruklular için izin sürecini yönetiyoruz.",
      image: "/images/hizmetlerimiz/calisma-izni.jpg",
    },
  },
  {
    metadata: {
      slug: "vatandaslik-danismanligi",
      title: "Vatandaşlık Danışmanlığı",
      description:
        "Türk vatandaşlığına geçiş sürecinizi uzman ekibimizle hızlandırıyoruz.",
      image: "/images/hizmetlerimiz/vatandaslik.jpg",
    },
  },
  {
    metadata: {
      slug: "deport-kaldirma-danismanligi",
      title: "Deport Kaldırma Danışmanlığı",
      description:
        "Sınır dışı (deport) kararlarına karşı hukuki destek sağlıyoruz.",
      image: "/images/hizmetlerimiz/deport.jpg",
    },
  },
  {
    metadata: {
      slug: "yurt-disi-vize-islemleri",
      title: "Yurt Dışı Vize İşlemleri",
      description:
        "Yurt dışına çıkış yapmak isteyenler için vize başvurularında rehberlik sağlıyoruz.",
      image: "/images/hizmetlerimiz/vize.jpg",
    },
  },
  {
    metadata: {
      slug: "insani-ikamet-izni",
      title: "İnsani İkamet İzni",
      description:
        "Özel durumlardan dolayı Türkiye'de kalması gereken bireylere destek sağlıyoruz.",
      image: "/images/hizmetlerimiz/oturma-izni.jpg",
    },
  },
  {
    metadata: {
      slug: "evlilik-islemleri",
      title: "Evlilik İşlemleri",
      description:
        "Türkiye’de evlenmek isteyenler için tüm resmi süreçleri yönetiyoruz.",
      image: "/images/hizmetlerimiz/evlilik.jpg",
    },
  },
  {
    metadata: {
      slug: "konsolosluk-islemleri",
      title: "Konsolosluk İşlemleri",
      description:
        "Yabancı uyruklu bireylerin konsolosluk işlemlerinde danışmanlık sağlıyoruz.",
      image: "/images/hizmetlerimiz/konsolosluk.jpg",
    },
  },
];

export const metadata: Metadata = {
  title: "Hizmetlerimiz | Yurt Danışmanlık",
  description:
    "Türkiye'de oturma izni, çalışma izni, vatandaşlık, deport kaldırma, yurt dışı vize işlemleri, insani ikamet izni, evlilik işlemleri ve konsolosluk işlemleri gibi hizmetlerimizle ilgili detaylı bilgi edinin. Profesyonel danışmanlık hizmetlerimizle yasal işlemlerinizi hızlandırın.",
};

export default function HizmetlerPage() {
  return (
    <section>
      <Breadcrumb
        title="Hizmetlerimiz"
        breadcrumbs={[
          { label: "Anasayfa", href: "/" },
          { label: "Hizmetlerimiz", href: "/hizmetlerimiz" },
        ]}
        image={{
          url: "/images/hizmetlerimiz/banner.jpg",
        }}
      />
      <main className="container mx-auto py-10 px-6 lg:px-20">
        <h1 className="text-4xl font-bold text-primary mb-6">Hizmetlerimiz</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <Link
              key={service.metadata.slug}
              href={`/hizmetlerimiz/${service.metadata.slug}`}
              className="p-4 bg-secondary hover:bg-muted rounded-lg transition text-foreground"
            >
              <div className="relative w-full h-40 rounded-md overflow-hidden">
                <Image
                  src={service.metadata.image}
                  alt={service.metadata.title}
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              <h2 className="mt-4 text-xl font-semibold">
                {service.metadata.title}
              </h2>
              <p className="mt-2 text-sm">{service.metadata.description}</p>
            </Link>
          ))}
        </div>
      </main>
    </section>
  );
}
