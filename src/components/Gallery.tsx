import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import Autoplay from "embla-carousel-autoplay";

const Gallery = () => {
  const images = [
    "/galeria/midia_1.jpg",
    "/galeria/midia_2.jpg",
    "/galeria/midia_3.jpg",
    "/galeria/midia_4.jpg",
    "/galeria/midia_6.jpg",
    "/galeria/midia_7.jpg",
    "/galeria/midia_8.jpg",
    "/galeria/midia_9.jpg",
    "/galeria/midia_10.jpg",
    "/galeria/midia_11.jpg",
    "/galeria/midia_12.jpg",
    "/galeria/midia_13.jpg",
    "/galeria/midia_14.jpg",
    "/galeria/midia_15.jpg",
    "/galeria/midia_16.jpg",
    "/galeria/midia_17.jpg",
    "/galeria/midia_18.jpg",
    "/galeria/midia_19.jpg",
    "/galeria/midia_20.jpg",
    "/galeria/midia_21.jpg",
    "/galeria/midia_22.jpg",
    "/galeria/midia_23.jpg",
    "/galeria/midia_24.jpg",
    "/galeria/midia_25.jpg",
  ];

  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: false, stopOnMouseEnter: false })
  );

  return (
    <section id="gallery" className="py-12 sm:py-16 lg:py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-10 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3 sm:mb-4">Galeria</h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
            Confira alguns dos nossos trabalhos e equipamentos
          </p>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[plugin.current]}
          className="w-full max-w-6xl mx-auto"
        >
          <CarouselContent className="-ml-2 sm:-ml-4">
            {images.map((image, index) => (
              <CarouselItem key={index} className="pl-2 sm:pl-4 basis-full sm:basis-1/2 lg:basis-1/3">
                <div className="p-1 sm:p-1">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Card className="cursor-pointer hover:shadow-lg transition-shadow">
                        <CardContent className="flex aspect-square items-center justify-center p-0 overflow-hidden rounded-lg">
                          <img
                            src={image}
                            alt={`Galeria imagem ${index + 1}`}
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                            loading="lazy"
                          />
                        </CardContent>
                      </Card>
                    </DialogTrigger>
                    <DialogContent className="max-w-[95vw] sm:max-w-4xl w-full p-2 sm:p-4 border-0">
                      <img
                        src={image}
                        alt={`Galeria imagem ${index + 1} expandida`}
                        className="w-full h-auto rounded-lg"
                      />
                    </DialogContent>
                  </Dialog>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden sm:flex -left-12 lg:-left-16" />
          <CarouselNext className="hidden sm:flex -right-12 lg:-right-16" />
        </Carousel>
      </div>
    </section>
  );
};

export default Gallery;
