import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Studio",
  lastName: "Karir",
  name: `Studio Karir`,
  role: "Jasa Pembuatan Website Profesional",
  avatar: "/images/avatar.jpg",
  email: "studiokarir@gmail.com",
  location: "Asia/Jakarta",
  languages: ["English", "Bahasa"],
  locale: "id",
};

const newsletter: Newsletter = {
  display: false, 
  title: <>Berlangganan Info dari {person.name}</>,
  description: <>Dapatkan info terbaru seputar layanan pembuatan website kami.</>,
};

const social: Social = [
  {
    name: "Instagram",
    icon: "instagram",
    link: "https://www.instagram.com/studiokarir/",
    essential: true,
  },
  {
    name: "TikTok",
    icon: "tiktok",
    link: "https://www.tiktok.com/@studiokarir",
    essential: true,
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/",
    essential: true,
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
    essential: true,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name} – Jasa Pembuatan Website`,
  description: `Website resmi layanan ${person.role}`,
  headline: <>Membangun Kehadiran Digital Bisnis Anda</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">Studio Karir</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Layanan Website
        </Text>
      </Row>
    ),
    href: "/work",
  },
  subline: (
    <>
      Kami membantu Anda membuat <Text as="span" size="xl" weight="strong">Website Profesional</Text>, responsif, dan elegan untuk portofolio, toko online, hingga company profile.
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "Tentang Kami",
  title: `Tentang – ${person.name}`,
  description: `Mengenal lebih dekat layanan ${person.name}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Tentang Studio Karir",
    description: (
      <>
        Studio Karir berfokus pada layanan pembuatan website modern yang cepat, aman, dan mudah digunakan. Kami merancang solusi digital yang disesuaikan dengan kebutuhan bisnis, personal branding, maupun profil perusahaan Anda.
      </>
    ),
  },
  work: {
    display: true,
    title: "Layanan Kami",
    experiences: [
      {
        company: "Website Bisnis & Company Profile",
        timeframe: "Paket Profesional",
        role: "Meningkatkan Kredibilitas Usaha",
        achievements: [
          <>Desain modern yang merepresentasikan identitas perusahaan Anda secara profesional.</>,
          <>Dioptimasi agar responsif dan tampil sempurna di semua perangkat (HP, Tablet, Desktop).</>,
        ],
        images: [],
      },
      {
        company: "Website Portofolio & Personal",
        timeframe: "Paket Personal",
        role: "Tampil Menonjol di Era Digital",
        achievements: [
          <>Galeri interaktif untuk menampilkan karya, proyek, atau katalog produk Anda.</>,
          <>Performa website yang cepat dengan struktur rapi untuk memudahkan pengunjung.</>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: false,
    title: "Edukasi", // <- Tambahan agar tidak error
    institutions: [],
  },
  technical: {
    display: false,
    title: "Keahlian", // <- Tambahan agar tidak error
    skills: [],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Artikel",
  title: "Info & Tips Seputar Website...",
  description: `Baca artikel terbaru dari ${person.name}`,
};

const work: Work = {
  path: "/work",
  label: "Portofolio",
  title: `Portofolio Klien – ${person.name}`,
  description: `Hasil karya website dari ${person.name}`,
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Galeri",
  title: `Galeri Desain – ${person.name}`,
  description: `Dokumentasi hasil desain ${person.name}`,
  images: [],
};

export { person, social, newsletter, home, about, blog, work, gallery };
