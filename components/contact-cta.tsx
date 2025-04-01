import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Phone, MessageSquare } from "lucide-react";

export default function ContactCta() {
  return (
    <section className="py-16 bg-brand-100">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-black">
              Ready to Fix Your Electrical Issues?
            </h2>
            <p className="max-w-[700px] text-gray-700 md:text-xl">
              Contact us today for expert auto electrical services at
              competitive prices.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <Button
              asChild
              size="lg"
              variant="default"
              className="bg-brand-600 hover:bg-brand-700 text-black"
            >
              <Link href="tel:02089118048">
                <Phone className="mr-2 h-5 w-5" />
                Call Us Now
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="bg-transparent border-gray-700 text-gray-700 hover:bg-gray-100"
            >
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
    </section>
  );
}
