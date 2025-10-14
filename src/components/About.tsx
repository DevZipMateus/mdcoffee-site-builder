import { Target, Eye, Heart } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-12 sm:py-16 lg:py-20 bg-secondary/20">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-10 sm:mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-3 sm:mb-4">
            Sobre nós
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
            Nascemos da paixão por café e do compromisso com a excelência em cada projeto
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-10 sm:mb-12 lg:mb-16">
          <div className="bg-card p-6 sm:p-8 rounded-xl border border-border shadow-sm hover:shadow-lg transition-all">
            <div className="bg-primary/10 w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mb-4 sm:mb-6">
              <Eye className="w-7 h-7 sm:w-8 sm:h-8 text-primary" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Visão</h3>
            <p className="text-muted-foreground leading-relaxed">
              Ser referência nacional em soluções de café expresso e máquinas automáticas, reconhecida pela qualidade, inovação e excelência no atendimento ao cliente.
            </p>
          </div>

          <div className="bg-card p-6 sm:p-8 rounded-xl border border-border shadow-sm hover:shadow-lg transition-all">
            <div className="bg-primary/10 w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mb-4 sm:mb-6">
              <Target className="w-7 h-7 sm:w-8 sm:h-8 text-primary" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Missão</h3>
            <p className="text-muted-foreground leading-relaxed">
              Oferecer experiências únicas de café por meio de máquinas modernas, eficientes e sustentáveis, garantindo sabor, praticidade e satisfação a cada xícara.
            </p>
          </div>

          <div className="bg-card p-6 sm:p-8 rounded-xl border border-border shadow-sm hover:shadow-lg transition-all sm:col-span-2 lg:col-span-1">
            <div className="bg-primary/10 w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mb-4 sm:mb-6">
              <Heart className="w-7 h-7 sm:w-8 sm:h-8 text-primary" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Valores</h3>
            <ul className="text-muted-foreground leading-relaxed space-y-2">
              <li>• Qualidade em tudo que fazemos</li>
              <li>• Inovação constante</li>
              <li>• Sustentabilidade</li>
              <li>• Transparência</li>
              <li>• Excelência no atendimento</li>
              <li>• Paixão por café</li>
            </ul>
          </div>
        </div>

        <div className="bg-card p-6 sm:p-8 rounded-xl border border-border shadow-sm">
          <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-center">Nossa história</h3>
          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed text-center max-w-4xl mx-auto">
            A MD Coffee Machines surgiu a partir de outra empresa em que trabalhávamos, e com o apoio dos empresários Nelmo e Arthur, construímos uma nova trajetória dedicada exclusivamente ao universo do café espresso. Hoje, atendemos cafeterias, padarias e empresas do ramo de café com equipamentos de ponta e serviços especializados.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
