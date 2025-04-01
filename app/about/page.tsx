import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Phone, MessageSquare } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="container mx-auto py-12 px-4 md:px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold tracking-tight mb-6">
          About Autolak
        </h1>

        <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
          <div>
            <Image
              src="/placeholder.svg?height=400&width=600"
              alt="Autolak Garage"
              width={600}
              height={400}
              className="rounded-lg shadow-md"
            />
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
            <p className="text-muted-foreground mb-4">
              Autolak Ltd was established with a simple mission: to provide
              honest, reliable auto electrical services at fair prices. For over
              15 years, our team of skilled technicians has been serving the
              Ilford community with dedication and expertise.
            </p>
            <p className="text-muted-foreground mb-4">
              What started as a small garage has grown into a trusted name in
              auto electrical repairs, known for our specialized knowledge in{" "}
              <span className="font-semibold text-brand-700">
                starter motors and alternators
              </span>{" "}
              and commitment to customer satisfaction.
            </p>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Our Approach</h2>
          <p className="text-muted-foreground mb-4">
            At Autolak, we believe in transparency and quality. We take the time
            to explain the issues with your vehicle and provide clear, upfront
            pricing. Our technicians are continuously trained on the latest
            automotive technologies to ensure we can handle even the most
            complex electrical problems.
          </p>
          <p className="text-muted-foreground mb-4">
            We pride ourselves on quick turnaround times without compromising on
            quality, helping you get back on the road as soon as possible.
          </p>
        </div>

        <div className="text-center mt-12">
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
