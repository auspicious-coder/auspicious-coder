import { FaWhatsapp } from "react-icons/fa"; // Official WhatsApp icon

const WhatsAppButton = () => {
  const phoneNumber = "919472971255"; // Your number with country code
  const preFilledMessage =
    "Hi%20Auspicious%20Coders,%20I%20visited%20your%20website%20and%20need%20help%20with%20a%20project.";

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${preFilledMessage}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 
                 bg-green-600 hover:bg-green-700 text-white rounded-full shadow-2xl 
                 hover:shadow-3xl transition-all duration-300 hover:scale-110 
                 animate-bounce-slow"
      aria-label="Chat on WhatsApp"
    >
      <FaWhatsapp size={28} /> {/* Official WhatsApp icon */}
    </a>
  );
};

export default WhatsAppButton;
