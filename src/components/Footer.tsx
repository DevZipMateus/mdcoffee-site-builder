import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-10">
          {/* Logo e Descrição */}
          <div className="space-y-4 sm:col-span-2 lg:col-span-1">
            <img
              src="/logo.png"
              alt="MD Coffee Machines"
              className="h-10 sm:h-12 w-auto"
            />
            <p className="text-white/80 text-sm sm:text-base max-w-xs">
              Soluções premium em máquinas de café espresso e manutenção especializada.
            </p>
          </div>

          {/* Links Rápidos */}
          <div className="space-y-3 sm:space-y-4">
            <h3 className="font-semibold text-base sm:text-lg">Links Rápidos</h3>
            <ul className="space-y-2 text-sm sm:text-base">
              <li>
                <a href="#about" className="text-white/80 hover:text-white transition-colors">
                  Sobre Nós
                </a>
              </li>
              <li>
                <a href="#services" className="text-white/80 hover:text-white transition-colors">
                  Serviços
                </a>
              </li>
              <li>
                <a href="#gallery" className="text-white/80 hover:text-white transition-colors">
                  Galeria
                </a>
              </li>
              <li>
                <a href="#contact" className="text-white/80 hover:text-white transition-colors">
                  Contato
                </a>
              </li>
            </ul>
          </div>

          {/* Serviços */}
          <div className="space-y-3 sm:space-y-4">
            <h3 className="font-semibold text-base sm:text-lg">Serviços</h3>
            <ul className="space-y-2 text-sm sm:text-base text-white/80">
              <li>Venda de Máquinas</li>
              <li>Manutenção Especializada</li>
              <li>Consultoria Técnica</li>
              <li>Treinamento</li>
            </ul>
          </div>

          {/* Contato */}
          <div className="space-y-3 sm:space-y-4">
            <h3 className="font-semibold text-base sm:text-lg">Contato</h3>
            <ul className="space-y-3 text-sm sm:text-base">
              <li className="flex items-start gap-2 sm:gap-3 text-white/80 hover:text-white transition-colors">
                <Phone className="h-4 w-4 sm:h-5 sm:w-5 mt-0.5 flex-shrink-0" />
                <span className="break-all">(11) 98765-4321</span>
              </li>
              <li className="flex items-start gap-2 sm:gap-3 text-white/80 hover:text-white transition-colors">
                <Mail className="h-4 w-4 sm:h-5 sm:w-5 mt-0.5 flex-shrink-0" />
                <span className="break-all">contato@mdcoffee.com.br</span>
              </li>
              <li className="flex items-start gap-2 sm:gap-3 text-white/80">
                <MapPin className="h-4 w-4 sm:h-5 sm:w-5 mt-0.5 flex-shrink-0" />
                <span>São Paulo, SP - Brasil</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/20 mt-8 sm:mt-10 lg:mt-12 pt-6 sm:pt-8 text-center text-xs sm:text-sm text-white/60">
          <p>© {currentYear} MD Coffee Machines. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
