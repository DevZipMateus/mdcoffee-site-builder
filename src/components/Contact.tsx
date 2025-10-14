import { Mail, Phone, MapPin, Clock, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/5535988596255", "_blank");
  };

  const handleEmailClick = () => {
    window.location.href = "mailto:mdcoffeemachines@gmail.com";
  };

  const handleInstagramClick = () => {
    window.open("https://www.instagram.com/mdcoffeemachines?igsh=dG1vN3pvMXpydWN3", "_blank");
  };

  return (
    <section id="contact" className="py-12 sm:py-16 lg:py-20 bg-secondary/20">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-10 sm:mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-3 sm:mb-4">
            Entre em contato
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
            Estamos prontos para atender você e transformar o café do seu negócio
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
          <div className="space-y-4 sm:space-y-6">
            <div className="bg-card p-5 sm:p-6 rounded-xl border border-border shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="bg-primary/10 w-11 h-11 sm:w-12 sm:h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-base sm:text-lg mb-1 sm:mb-2">Telefone</h3>
                  <a
                    href="https://wa.me/5535988596255"
                    className="text-sm sm:text-base text-muted-foreground hover:text-primary transition-colors"
                  >
                    (35) 98859-6255
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-card p-5 sm:p-6 rounded-xl border border-border shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="bg-primary/10 w-11 h-11 sm:w-12 sm:h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                </div>
                <div className="min-w-0">
                  <h3 className="font-semibold text-base sm:text-lg mb-1 sm:mb-2">E-mail</h3>
                  <a
                    href="mailto:mdcoffeemachines@gmail.com"
                    className="text-sm sm:text-base text-muted-foreground hover:text-primary transition-colors break-all"
                  >
                    mdcoffeemachines@gmail.com
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-card p-5 sm:p-6 rounded-xl border border-border shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="bg-primary/10 w-11 h-11 sm:w-12 sm:h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-base sm:text-lg mb-1 sm:mb-2">Endereço</h3>
                  <p className="text-sm sm:text-base text-muted-foreground">
                    Rua Michel Mansur, 80
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-card p-5 sm:p-6 rounded-xl border border-border shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="bg-primary/10 w-11 h-11 sm:w-12 sm:h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-base sm:text-lg mb-1 sm:mb-2">Horário</h3>
                  <p className="text-sm sm:text-base text-muted-foreground">
                    Segunda a sexta: 8h às 18h
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-card p-5 sm:p-6 rounded-xl border border-border shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="bg-primary/10 w-11 h-11 sm:w-12 sm:h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Instagram className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-base sm:text-lg mb-1 sm:mb-2">Instagram</h3>
                  <a
                    href="https://www.instagram.com/mdcoffeemachines?igsh=dG1vN3pvMXpydWN3"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm sm:text-base text-muted-foreground hover:text-primary transition-colors"
                  >
                    @mdcoffeemachines
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-card p-6 sm:p-8 rounded-xl border border-border shadow-sm">
            <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Fale conosco</h3>
            <p className="text-sm sm:text-base text-muted-foreground mb-5 sm:mb-6 leading-relaxed">
              Entre em contato através do WhatsApp ou e-mail para solicitar um orçamento, tirar dúvidas ou agendar uma visita. Nossa equipe está pronta para atender você!
            </p>
            <div className="space-y-3 sm:space-y-4">
              <Button
                size="lg"
                onClick={handleWhatsAppClick}
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
              >
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                Chamar no WhatsApp
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={handleEmailClick}
                className="w-full border-primary/60 text-primary hover:bg-primary/10"
              >
                <Mail className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                Enviar e-mail
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={handleInstagramClick}
                className="w-full border-primary/60 text-primary hover:bg-primary/10"
              >
                <Instagram className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                Seguir no Instagram
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
