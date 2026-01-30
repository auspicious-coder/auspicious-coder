import { Facebook, Twitter, Linkedin, Github, Mail, Phone, MapPin } from "lucide-react";
import { footerData } from "../../data/footerData";

const iconMap = { Facebook, Twitter, Linkedin, Github };

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { company, quickLinks, services, contact, policies } = footerData;

  return (
<footer className="bg-gradient-to-b from-gray-900 to-gray-950 text-white pt-16 pb-8">
  <div className="container-custom">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

      {/* Company Info */}
      <div>
        <div className="flex items-center space-x-3 mb-6">
          <div className="w-12 h-12 bg-gradient-to-r from-primary-600 to-accent rounded-xl flex items-center justify-center shadow-lg">
            <span className="text-white font-bold text-2xl">
              {company.acronym}
            </span>
          </div>
          <span className="text-2xl font-bold">{company.name}</span>
        </div>

        <p className="text-gray-400 mb-6 leading-relaxed">
          {company.description}
        </p>

        <div className="flex space-x-4">
          {company.socialLinks.map(({ name, url, icon }) => {
            const Icon = iconMap[icon];
            return (
              <a
                key={name}
                href={url}
                aria-label={name}
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center 
                hover:bg-primary-600 hover:scale-110 transition-all duration-300"
              >
                <Icon size={18} />
              </a>
            );
          })}
        </div>
      </div>

      {/* Quick Links */}
      <div>
        <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
        <ul className="space-y-3">
          {quickLinks.map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase().replace(" ", "-")}`}
                className="text-gray-400 hover:text-primary-400 transition-colors"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Services */}
      <div>
        <h3 className="text-lg font-semibold mb-6">Services</h3>
        <ul className="space-y-3">
          {services.map((service) => (
            <li key={service}>
              <a
                href="#"
                className="text-gray-400 hover:text-primary-400 transition-colors"
              >
                {service}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Contact Info */}
      <div>
        <h3 className="text-lg font-semibold mb-6">Contact Us</h3>
        <div className="space-y-4">

          <div className="flex items-start space-x-3">
            <MapPin className="w-5 h-5 text-primary-400 mt-1" />
            <span className="text-gray-400 whitespace-pre-line">
              {contact.address}
            </span>
          </div>

          <div className="flex items-start space-x-3">
            <Phone className="w-5 h-5 text-primary-400 mt-1" />
            <div className="flex flex-col space-y-1">
              {contact.phone.map((number) => (
                <a
                  key={number}
                  href={`tel:${number.replace(/\s/g, "")}`}
                  className="text-gray-400 hover:text-primary-400 transition-colors"
                >
                  {number}
                </a>
              ))}
            </div>
          </div>

          <div className="flex items-start space-x-3">
            <Mail className="w-5 h-5 text-primary-400 mt-1" />
            <a
              href={`mailto:${contact.email}`}
              className="text-gray-400 hover:text-primary-400 transition-colors break-all"
            >
              {contact.email}
            </a>
          </div>

        </div>
      </div>

    </div>

    {/* Bottom Bar */}
    <div className="border-t border-gray-800 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
      <p className="text-gray-500 text-sm">
        © {currentYear} {company.name}. All rights reserved.
      </p>

      <div className="flex space-x-6 mt-4 md:mt-0">
        {policies.map(({ name, url }) => (
          <a
            key={name}
            href={url}
            className="text-gray-400 hover:text-white transition-colors text-sm"
          >
            {name}
          </a>
        ))}
      </div>
    </div>
  </div>
</footer>

  );
};

export default Footer;
