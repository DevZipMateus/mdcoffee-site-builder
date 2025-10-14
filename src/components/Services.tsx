import { Coffee, Wrench, Users, Package } from "lucide-react";
import { Button } from "@/components/ui/button";

const Services = () => {
  const services = [
    {
      icon: Coffee,
      title: "Máquinas de café espresso",
      description: "Equipamentos automáticos de última geração para extrair o melhor do seu café, com tecnologia e eficiência.",
    },
    {
      icon: Wrench,
      title: "Manutenção especializada",
      description: "Assistência técnica profissional para garantir o funcionamento perfeito e prolongar a vida útil dos seus equipamentos.",
    },
    {
      icon: Users,
      title: "Consultoria personalizada",
      description: "Orientação completa para escolher a máquina ideal para o seu negócio e maximizar seus resultados.",
    },
    {
      icon: Package,
      title: "Soluções completas",
      description: "Desde a venda até a instalação e treinamento, oferecemos um serviço completo para o seu negócio.",
    },
  ];

  const handleWhatsAppClick = () => {
    window.open("https://wa.me/5535988596255", "_blank");
  };

  return (
    <section id="services" className="py-12 sm:py-16 lg:py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-10 sm:mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-3 sm:mb-4">
            Nossos serviços
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
            Soluções completas em equipamentos de café espresso para o seu negócio
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-10 sm:mb-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-card p-5 sm:p-6 rounded-xl border border-border shadow-sm hover:shadow-lg transition-all group"
            >
              <div className="bg-primary/10 w-12 h-12 sm:w-14 sm:h-14 rounded-lg flex items-center justify-center mb-3 sm:mb-4 group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-6 h-6 sm:w-7 sm:h-7 text-primary" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">{service.title}</h3>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 p-6 sm:p-8 rounded-xl text-center">
          <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">
            Atendemos cafeterias, padarias e empresas
          </h3>
          <p className="text-base sm:text-lg text-muted-foreground mb-5 sm:mb-6 max-w-2xl mx-auto px-4">
            Entre em contato e descubra como podemos transformar a experiência do café no seu negócio
          </p>
          <Button
            size="lg"
            onClick={handleWhatsAppClick}
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold w-full sm:w-auto"
          >
            Solicite um orçamento
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
