import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import { Metadata } from "next";
import CalismaIzniComponent from "../_components/CalismaIzniComponent";
import OturmaIzniComponent from "../_components/OturmaIzniComponent";
import VatandaslikComponent from "../_components/VatandaslikComponent";
import DeportKaldirmaComponent from "../_components/DeportKaldirmaComponent";
import YurtDisiVizeIslemleriComponent from "../_components/YurtDisiVizeIslemleriComponent";
import InsaniIkametIzniComponent from "../_components/InsaniIkametIzniComponent";
import EvlilikIslemleriComponent from "../_components/EvlilikIslemleriComponent";
import KonsoloslukIslemleriComponent from "../_components/KonsoloslukIslemleriComponent";

const services = [
  {
    metadata: {
      slug: "oturma-izni-danismanligi",
      title: "Oturma İzni Danışmanlığı",
      description:
        "Türkiye'de uzun süre kalmak isteyenlere profesyonel destek sağlıyoruz.",
      image: "/images/hizmetlerimiz/oturma-izni.jpg",
    },
    component: OturmaIzniComponent,
  },
  {
    metadata: {
      slug: "calisma-izni-danismanligi",
      title: "Çalışma İzni Danışmanlığı",
      description:
        "Türkiye'de çalışmak isteyen yabancı uyruklular için izin sürecini yönetiyoruz.",
      image: "/images/hizmetlerimiz/calisma-izni.jpg",
    },
    component: CalismaIzniComponent,
  },
  {
    metadata: {
      slug: "vatandaslik-danismanligi",
      title: "Vatandaşlık Danışmanlığı",
      description:
        "Türk vatandaşlığına geçiş sürecinizi uzman ekibimizle hızlandırıyoruz.",
      image: "/images/hizmetlerimiz/vatandaslik.jpg",
    },
    component: VatandaslikComponent,
  },
  {
    metadata: {
      slug: "deport-kaldirma-danismanligi",
      title: "Deport Kaldırma Danışmanlığı",
      description:
        "Sınır dışı (deport) kararlarına karşı hukuki destek sağlıyoruz.",
      image: "/images/hizmetlerimiz/deport.jpg",
    },
    component: DeportKaldirmaComponent,
  },
  {
    metadata: {
      slug: "yurt-disi-vize-islemleri",
      title: "Yurt Dışı Vize İşlemleri",
      description:
        "Yurt dışına çıkış yapmak isteyenler için vize başvurularında rehberlik sağlıyoruz.",
      image: "/images/hizmetlerimiz/vize.jpg",
    },
    component: YurtDisiVizeIslemleriComponent,
  },
  {
    metadata: {
      slug: "insani-ikamet-izni",
      title: "İnsani İkamet İzni",
      description:
        "Özel durumlardan dolayı Türkiye'de kalması gereken bireylere destek sağlıyoruz.",
      image: "/images/hizmetlerimiz/oturma-izni.jpg",
    },
    component: InsaniIkametIzniComponent,
  },
  {
    metadata: {
      slug: "evlilik-islemleri",
      title: "Evlilik İşlemleri",
      description:
        "Türkiye’de evlenmek isteyenler için tüm resmi süreçleri yönetiyoruz.",
      image: "/images/hizmetlerimiz/evlilik.jpg",
    },
    component: EvlilikIslemleriComponent,
  },
  {
    metadata: {
      slug: "konsolosluk-islemleri",
      title: "Konsolosluk İşlemleri",
      description:
        "Yabancı uyruklu bireylerin konsolosluk işlemlerinde danışmanlık sağlıyoruz.",
      image: "/images/hizmetlerimiz/konsolosluk.jpg",
    },
    component: KonsoloslukIslemleriComponent,
  },
];

export async function generateStaticParams() {
  return services.map((service) => ({ slug: service.metadata.slug }));
}

// 🔹 **SEO için Metadata oluşturuyoruz.**
export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const query = await params;
  const service = services.find((s) => s.metadata.slug === query.slug);
  if (!service) return notFound();
  return {
    title: `${service.metadata.title} | Yurt Danışmanlık`,
    description: service.metadata.description,
  };
}

export default async function ServicePage({
  params,
}: {
  params: { slug: string };
}) {
  const query = await params;
  const service = services.find((s) => s.metadata.slug === query.slug);
  if (!service) return notFound();

  const { metadata, component: ServiceComponent } = service;

  const breadcrumbs = [
    { label: "Anasayfa", href: "/" },
    { label: "Hizmetlerimiz", href: "/hizmetlerimiz" },
    { label: metadata.title, href: `/hizmetlerimiz/${metadata.slug}` },
  ];

  return (
    <section>
      <Breadcrumb
        title={metadata.title}
        breadcrumbs={breadcrumbs}
        image={{
          url: "/images/hizmetlerimiz/banner.jpg",
        }}
      />
      <main className="container mx-auto py-10 px-6 lg:px-20">
        <section className="flex flex-col md:flex-row gap-10 items-center">
          <div className="md:w-1/2">
            <h1 className="text-4xl font-bold text-primary">
              {metadata.title}
            </h1>
            <p className="text-foreground mt-4">{metadata.description}</p>
          </div>
          <div className="relative w-full h-80 md:w-1/2 rounded-lg overflow-hidden">
            <Image
              src={metadata.image}
              alt={metadata.title}
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
        </section>

        <section className="mt-10">
          <ServiceComponent />
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-semibold text-foreground mb-4">
            Diğer Hizmetlerimiz
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {services
              .filter((s) => s.metadata.slug !== metadata.slug)
              .map((s) => (
                <Link
                  key={s.metadata.slug}
                  href={`/hizmetlerimiz/${s.metadata.slug}`}
                  className="p-4 bg-secondary hover:bg-muted rounded-lg transition text-foreground"
                >
                  {s.metadata.title}
                </Link>
              ))}
          </div>
        </section>
      </main>
    </section>
  );
}
