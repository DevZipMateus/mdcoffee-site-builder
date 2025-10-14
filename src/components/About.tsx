import { Target, Eye, Heart } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Sobre nós
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Nascemos da paixão por café e do compromisso com a excelência em cada projeto
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-card p-8 rounded-xl border border-border shadow-sm hover:shadow-lg transition-all">
            <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
              <Eye className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Visão</h3>
            <p className="text-muted-foreground leading-relaxed">
              Ser referência nacional em soluções de café expresso e máquinas automáticas, reconhecida pela qualidade, inovação e excelência no atendimento ao cliente.
            </p>
          </div>

          <div className="bg-card p-8 rounded-xl border border-border shadow-sm hover:shadow-lg transition-all">
            <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
              <Target className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Missão</h3>
            <p className="text-muted-foreground leading-relaxed">
              Oferecer experiências únicas de café por meio de máquinas modernas, eficientes e sustentáveis, garantindo sabor, praticidade e satisfação a cada xícara.
            </p>
          </div>

          <div className="bg-card p-8 rounded-xl border border-border shadow-sm hover:shadow-lg transition-all">
            <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
              <Heart className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Valores</h3>
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

        <div className="bg-card p-8 rounded-xl border border-border shadow-sm">
          <h3 className="text-2xl font-bold mb-4 text-center">Nossa história</h3>
          <p className="text-muted-foreground leading-relaxed text-center max-w-4xl mx-auto">
            A MD Coffee Machines surgiu a partir de outra empresa em que trabalhávamos, e com o apoio dos empresários Nelmo e Arthur, construímos uma nova trajetória dedicada exclusivamente ao universo do café espresso. Hoje, atendemos cafeterias, padarias e empresas do ramo de café com equipamentos de ponta e serviços especializados.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
