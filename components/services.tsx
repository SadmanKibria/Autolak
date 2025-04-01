import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Battery, Car, Cpu, Zap } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Services() {
  const services = [
    {
      title: "Starter Motor Repairs",
      description: "Expert diagnosis and repair of all starter motor issues",
      icon: <Car className="h-10 w-10 text-brand-600" />,
      featured: true,
    },
    {
      title: "Alternator Services",
      description: "Testing, repair and replacement of alternators",
      icon: <Battery className="h-10 w-10 text-brand-600" />,
      featured: true,
    },
    {
      title: "Electrical Diagnostics",
      description: "Advanced diagnostics for complex electrical problems",
      icon: <Cpu className="h-10 w-10 text-brand-600" />,
    },
    {
      title: "Battery Services",
      description:
        "Testing, charging and replacement of all types of car batteries",
      icon: <Zap className="h-10 w-10 text-brand-600" />,
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Our Services
            </h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl">
              We specialize in{" "}
              <span className="font-semibold text-brand-700">
                auto electrical systems
              </span>
              , with particular expertise in{" "}
              <span className="font-semibold text-brand-700">
                starter motors and alternators
              </span>
              .
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {services.map((service, index) => (
            <Card
              key={index}
              className={`border hover:border-brand-400 transition-colors ${
                service.featured ? "border-l-4 border-l-brand-500" : ""
              }`}
            >
              <CardHeader>
                <div className="mb-2">{service.icon}</div>
                <CardTitle>{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="flex justify-center mt-12">
          <Button
            asChild
            className="bg-brand-600 hover:bg-brand-700 text-black"
          >
            <Link href="/services">View All Services</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
