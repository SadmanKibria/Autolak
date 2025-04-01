import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Battery,
  Car,
  Wrench,
  Cpu,
  Gauge,
  Shield,
  PenToolIcon as Tool,
  AlertTriangle,
  Lightbulb,
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Phone, MessageSquare } from "lucide-react";

export default function ServicesPage() {
  const services = [
    {
      title: "Starter Motor Repairs",
      description: "Expert diagnosis and repair of all starter motor issues.",
      icon: <Car className="h-10 w-10 text-brand-600" />,
      featured: true,
    },
    {
      title: "Alternator Services",
      description: "Testing, repair and replacement of alternators.",
      icon: <Battery className="h-10 w-10 text-brand-600" />,
      featured: true,
    },
    {
      title: "Electrical Diagnostics",
      description: "Advanced diagnostics for complex electrical issues.",
      icon: <Cpu className="h-10 w-10 text-brand-600" />,
    },
    {
      title: "Battery Services",
      description: "Battery testing, charging, and replacement services.",
      icon: <Gauge className="h-10 w-10 text-brand-600" />,
    },
    {
      title: "Wiring Repairs",
      description: "Repair of damaged wiring and electrical components.",
      icon: <Wrench className="h-10 w-10 text-brand-600" />,
    },
    {
      title: "Preventative Maintenance",
      description: "Regular electrical system checks to prevent breakdowns.",
      icon: <Shield className="h-10 w-10 text-brand-600" />,
    },
    {
      title: "Lighting System Repairs",
      description: "Diagnosis and repair of all vehicle lighting issues.",
      icon: <Lightbulb className="h-10 w-10 text-brand-600" />,
    },
    {
      title: "Warning Light Diagnostics",
      description: "Expert diagnosis of dashboard warning lights.",
      icon: <AlertTriangle className="h-10 w-10 text-brand-600" />,
    },
    {
      title: "General Auto Repairs",
      description: "Additional mechanical and electrical repair services.",
      icon: <Tool className="h-10 w-10 text-brand-600" />,
    },
  ];

  return (
    <div className="container mx-auto py-12 px-4 md:px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold tracking-tight mb-6">Our Services</h1>

        <div className="bg-brand-50 border-l-4 border-brand-500 p-6 mb-8">
          <h2 className="text-2xl font-bold mb-2">
            Auto Electrical Specialists
          </h2>
          <p className="text-lg">
            At Autolak, we specialize in auto electrical systems, with
            particular expertise in starter motors and alternators. Our skilled
            technicians provide reliable, efficient service at competitive
            prices.
          </p>
        </div>

        <div className="bg-brand-50 p-6 rounded-lg border-l-4 border-l-brand-500 mb-8">
          <h3 className="text-xl font-bold mb-2">
            Need Auto Electrical Services?
          </h3>
          <p className="mb-2">Call us today to book an appointment:</p>
          <div className="flex gap-4 flex-wrap">
            <Link
              href="tel:02089118048"
              className="font-bold text-brand-700 hover:underline"
            >
              020 8911 8048
            </Link>
            <Link
              href="tel:02085143637"
              className="font-bold text-brand-700 hover:underline"
            >
              020 8514 3637
            </Link>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {services.map((service, index) => (
            <Card
              key={index}
              className={`border hover:shadow-md transition-all ${
                service.featured
                  ? "border-l-4 border-l-brand-500 bg-brand-50"
                  : ""
              }`}
            >
              <CardHeader className="pb-2">
                <div className="mb-2">{service.icon}</div>
                <CardTitle className="text-lg">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-gray-50 p-6 rounded-lg mb-12">
          <h2 className="text-2xl font-semibold mb-4">Our Process</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <div className="flex items-center gap-2 mb-2">
                <span className="flex-shrink-0 flex items-center justify-center w-6 h-6 rounded-full bg-brand-500 text-white font-bold text-sm">
                  1
                </span>
                <h3 className="font-medium">Thorough Diagnosis</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                Comprehensive assessment to identify the root cause.
              </p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <div className="flex items-center gap-2 mb-2">
                <span className="flex-shrink-0 flex items-center justify-center w-6 h-6 rounded-full bg-brand-500 text-white font-bold text-sm">
                  2
                </span>
                <h3 className="font-medium">Transparent Quote</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                Clear, detailed quote with no hidden costs.
              </p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <div className="flex items-center gap-2 mb-2">
                <span className="flex-shrink-0 flex items-center justify-center w-6 h-6 rounded-full bg-brand-500 text-white font-bold text-sm">
                  3
                </span>
                <h3 className="font-medium">Expert Repair</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                Skilled technicians using quality parts and best practices.
              </p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <div className="flex items-center gap-2 mb-2">
                <span className="flex-shrink-0 flex items-center justify-center w-6 h-6 rounded-full bg-brand-500 text-white font-bold text-sm">
                  4
                </span>
                <h3 className="font-medium">Quality Assurance</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                Thorough testing before returning your vehicle.
              </p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-2xl font-semibold mb-6">
            Ready to get your electrical issues fixed?
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-brand-600 hover:bg-brand-700 text-black"
            >
              <Link href="tel:02089118048">
                <Phone className="mr-2 h-5 w-5" />
                Call Us Now
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link
                href="https://wa.me/447700900123"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageSquare className="mr-2 h-5 w-5" />
                WhatsApp Us
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
