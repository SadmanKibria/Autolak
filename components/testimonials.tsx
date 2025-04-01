import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Star, ExternalLink } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Pavanjit Devsi",
      text: "I had an issue with my car and they fit me in straightaway and fixed the issue. It was the best price as I called 2 other garages. Highly recommend this!",
      rating: 5,
    },
    {
      name: "Jhangeer Khan",
      text: "Highly recommend autolak garage as these guys are professionals in the work they under take. Service was done with very reasonable price...",
      rating: 5,
    },
    {
      name: "Jaz Saund",
      text: "I've been coming to this garage for 10 years, and they have never let me down! Finding a trustworthy mechanic is hard, but Nav and his team consistently go above and beyond...",
      rating: 5,
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
              What Our Customers Say
            </h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl">
              Don't just take our word for it - hear from our satisfied
              customers.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="h-full">
              <CardContent className="pt-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${
                        i < testimonial.rating
                          ? "fill-brand-500 text-brand-500"
                          : "fill-muted text-muted-foreground"
                      }`}
                    />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4 min-h-[100px]">
                  "{testimonial.text}"
                </p>
              </CardContent>
              <CardFooter className="flex justify-between items-center">
                <div>
                  <p className="font-medium">{testimonial.name}</p>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Button asChild variant="outline" className="gap-2">
            <Link
              href="https://www.google.com/search?q=Autolak+The+Yellow+Garage+Reviews"
              target="_blank"
              rel="noopener noreferrer"
            >
              See All Google Reviews <ExternalLink className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
