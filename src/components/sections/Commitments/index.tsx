import { FaClock, FaShieldAlt, FaUsers } from "react-icons/fa";
import Card from "./Card";

// Kartlar için TypeScript tipi
interface CardData {
  icon: React.ReactNode;
  title: string;
  description: React.ReactNode; // Hem string hem de JSX öğesi destekler
}

const Commitments: React.FC = () => {
  const cards: CardData[] = [
    {
      icon: <FaClock />,
      title: "Mesai Saatleri",
      description: (
        <div>
          <p>
            <strong>Pazartesi - Cuma:</strong> 08.30 - 18.00
          </p>
          <p>
            <strong>Cumartesi:</strong> 10.00 - 15.00
          </p>
          <p>
            <strong>Pazar:</strong> Kapalı
          </p>
        </div>
      ),
    },
    {
      icon: <FaShieldAlt />,
      title: "Garantili Hizmet",
      description:
        "Uzman ekibimizle, tüm danışmanlık süreçlerinizde güvenilir ve garantili hizmet sunuyoruz.",
    },
    {
      icon: <FaUsers />,
      title: "10.000+ Mutlu Müşteri",
      description:
        "Yılların tecrübesiyle, 10.000’den fazla mutlu müşteriye hizmet verdik.",
    },
  ];

  return (
    <section
      className="relative w-full max-w-screen-xl mx-auto bottom-20 grid grid-cols-1 gap-6 
     lg:grid-cols-3 px-4"
      aria-label="Taahhütler"
    >
      {cards.map((card, index) => (
        <Card
          key={index}
          icon={card.icon}
          title={card.title}
          description={card.description}
        />
      ))}
    </section>
  );
};

export default Commitments;
