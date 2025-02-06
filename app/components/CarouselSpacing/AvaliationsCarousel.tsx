import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { FaStar } from "react-icons/fa";

const reviews = [
  {
    id: 1,
    name: "Sandra",
    review:
      "O atendimento foi excepcional! Amanda conseguiu me ajudar me ajudar com os problemas que tenho e as unhas duraram uma vida, ja marquei a volta.",
    rating: 5,
  },
  {
    id: 2,
    name: "Eduarda",
    review: "Profissional extremamente atenciosa. Me senti acolhida e as explicações foram muito claras.",
    rating: 5,
  },
  {
    id: 3,
    name: "Sofia",
    review: "Gostei bastante do atendimento e do serviço.",
    rating: 4,
  },
  {
    id: 4,
    name: "Beatriz",
    review:
      "Serviço de alta qualidade, profissional competente e muito gentil, adorei o cafezin que tomamos antes.",
    rating: 5,
  },
  {
    id: 5,
    name: "Giseli",
    review: "Muito bom! Amanda é dedicada e atenciosa, recomendo super.",
    rating: 5,
  },
];

export function AvaliationsCarousel() {
  return (
    <Carousel className="w-full max-w-xs">
      <CarouselContent>
        {reviews.map((review) => (
          <CarouselItem key={review.id}>
            <div className="p-1">
              <Card>
                <CardContent className="flex flex-col items-center justify-center p-6">
                  <h3 className="text-xl font-semibold">{review.name}</h3>
                  <p className="text-gray-600 mt-2">{review.review}</p>
                  <div className="flex mt-4">
                    {Array.from({ length: 5 }, (_, i) => (
                      <FaStar
                        key={i}
                        className={`h-5 w-5 ${
                          i < review.rating ? "text-yellow-400" : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="hidden sm:block" />
      <CarouselNext className="hidden sm:block" />
    </Carousel>
  );
}
