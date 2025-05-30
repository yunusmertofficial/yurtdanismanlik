interface LinkItem {
  id: number;
  label: string;
  href: string;
  items: SubLinkItem[];
}

interface SubLinkItem {
  id: number;
  label: string;
  href: string;
}

export const links: LinkItem[] = [
  {
    id: 1,
    label: "Anasayfa",
    href: "/",
    items: [],
  },
  {
    id: 2,
    label: "Hakkımızda",
    href: "/hakkimizda",
    items: [],
  },
  {
    id: 3,
    label: "Hizmetlerimiz",
    href: "/hizmetlerimiz",
    items: [
      {
        id: 1,
        label: "Oturma İzni Danışmanlığı",
        href: "/hizmetlerimiz/oturma-izni-danismanligi",
      },
      {
        id: 2,
        label: "Çalışma İzni Danışmanlığı",
        href: "/hizmetlerimiz/calisma-izni-danismanligi",
      },
      {
        id: 3,
        label: "Vatandaşlık Danışmanlığı",
        href: "/hizmetlerimiz/vatandaslik-danismanligi",
      },
      {
        id: 4,
        label: "Deport Kaldırma Danışmanlığı",
        href: "/hizmetlerimiz/deport-kaldirma-danismanligi",
      },
      {
        id: 5,
        label: "Yurt Dışı Vize İşlemleri",
        href: "/hizmetlerimiz/yurt-disi-vize-islemleri",
      },
      {
        id: 6,
        label: "İnsani İkamet İzni",
        href: "/hizmetlerimiz/insani-ikamet-izni",
      },
      {
        id: 7,
        label: "Evlilik İşlemleri",
        href: "/hizmetlerimiz/evlilik-islemleri",
      },
      {
        id: 8,
        label: "Konsolosluk İşlemleri",
        href: "/hizmetlerimiz/konsolosluk-islemleri",
      },
      {
        id: 9,
        label: "Üniversite Kayıt İşlemleri",
        href: "/hizmetlerimiz/universite-kayit-islemleri",
      },
    ],
  },
  {
    id: 6,
    label: "İletişim",
    href: "/iletisim",
    items: [],
  },
];
