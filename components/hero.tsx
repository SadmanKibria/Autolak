import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Phone, MessageSquare } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white to-gray-50 py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                Expert Auto Electrician in Ilford
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Welcome to our renowned repair garage in Ilford, where
                exceptional service meets affordability.{" "}
                <span className="font-semibold text-brand-700">
                  We specialise in auto electrics, with expert focus on starters
                  and alternators.
                </span>
              </p>
            </div>

            <div className="flex flex-col gap-2 min-[400px]:flex-row">
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
          <div className="flex items-center justify-center">
            <div className="relative h-[300px] w-full md:h-[400px] lg:h-[500px]">
              <Image
                src="/placeholder.svg?height=500&width=500"
                alt="Autolak Yellow Garage"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>
    </section>
  );
}
