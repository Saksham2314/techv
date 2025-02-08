export default function CardComponent({ icon, title, description }) {
  return (
    <div
      className="bg-white rounded-lg p-6 flex flex-col items-center text-center 
                 transform transition-transform duration-300 ease-in-out 
                 drop-shadow-[0_4px_6px_rgba(39,93,99,0.5)] 
                 hover:drop-shadow-[0_6px_8px_rgba(39,93,99,0.7)] 
                 hover:scale-105"
    >
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-lg font-bold text-gray-800">{title}</h3>
      <p className="mt-2 text-gray-600">{description}</p>
    </div>
  );
}
