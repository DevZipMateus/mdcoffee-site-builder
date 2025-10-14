import { Button } from "@/components/ui/button";
import { Coffee, Wrench, Award } from "lucide-react";
import heroBackground from "@/assets/hero-bg.jpg";
const Hero = () => {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/5535988596255", "_blank");
  };
  return <section id="hero" className="min-h-screen flex items-center pt-16 sm:pt-20 relative bg-cover bg-no-repeat" style={{
    backgroundImage: `url(${heroBackground})`,
    backgroundPosition: 'center 30%'
  }}>
      {/* Overlay escuro para garantir legibilidade */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/70 to-black/60"></div>
      
      <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-20 relative z-10">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="space-y-4 sm:space-y-6">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight drop-shadow-lg">
              MD Coffee Machines
            </h1>
            <h2 className="text-xl sm:text-2xl lg:text-3xl text-white/90 font-light drop-shadow-md">
              Soluções premium em máquinas de café espresso e manutenção especializada
            </h2>
            <p className="text-base sm:text-lg text-white/80 drop-shadow-md">
              Para melhor extração do seu café espresso e manutenção do seu equipamento
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 sm:pt-4">
              <Button size="lg" onClick={handleWhatsAppClick} className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold w-full sm:w-auto">
                Fale conosco
              </Button>
              <Button size="lg" variant="outline" onClick={() => document.getElementById("services")?.scrollIntoView({
              behavior: "smooth"
            })} className="border-white/60 text-white hover:border-white bg-stone-950 hover:bg-stone-800 w-full sm:w-auto">
                Nossos serviços
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:gap-6">
            <div className="bg-white/95 backdrop-blur-sm p-4 sm:p-6 rounded-lg border border-white/20 shadow-lg hover:shadow-xl transition-shadow">
              <Coffee className="w-10 h-10 sm:w-12 sm:h-12 text-primary mb-3 sm:mb-4" />
              <h3 className="text-lg sm:text-xl font-semibold mb-2 text-foreground">Máquinas de qualidade</h3>
              <p className="text-sm sm:text-base text-muted-foreground">
                Equipamentos modernos e eficientes para o melhor café espresso
              </p>
            </div>
            <div className="bg-white/95 backdrop-blur-sm p-4 sm:p-6 rounded-lg border border-white/20 shadow-lg hover:shadow-xl transition-shadow">
              <Wrench className="w-10 h-10 sm:w-12 sm:h-12 text-primary mb-3 sm:mb-4" />
              <h3 className="text-lg sm:text-xl font-semibold mb-2 text-foreground">Manutenção especializada</h3>
              <p className="text-sm sm:text-base text-muted-foreground">
                Assistência técnica profissional para garantir o funcionamento perfeito
              </p>
            </div>
            <div className="bg-white/95 backdrop-blur-sm p-4 sm:p-6 rounded-lg border border-white/20 shadow-lg hover:shadow-xl transition-shadow">
              <Award className="w-10 h-10 sm:w-12 sm:h-12 text-primary mb-3 sm:mb-4" />
              <h3 className="text-lg sm:text-xl font-semibold mb-2 text-foreground">Excelência comprovada</h3>
              <p className="text-sm sm:text-base text-muted-foreground">
                Atendimento premium para cafeterias, padarias e empresas
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;