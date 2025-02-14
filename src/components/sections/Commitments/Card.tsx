interface CardProps {
  icon: React.ReactNode;
  title: string;
  description: React.ReactNode; // Hem string hem de JSX öğesi destekler
}

const Card: React.FC<CardProps> = ({ icon, title, description }) => {
  return (
    <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
      <div className="text-4xl text-primary mb-4">{icon}</div>
      <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
      <div className="mt-2 text-gray-600 text-center">{description}</div>
    </div>
  );
};

export default Card;
