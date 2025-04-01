import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Phone, MessageSquare } from "lucide-react";

export default function FaqPage() {
  const faqs = [
    {
      question: "What are the signs of a failing starter motor?",
      answer:
        "Common signs include clicking sounds when turning the key, the engine not cranking, intermittent starting issues, or grinding noises during startup. If you notice any of these symptoms, it's best to have your vehicle checked promptly to prevent being stranded.",
    },
    {
      question: "How long does an alternator typically last?",
      answer:
        "Most alternators last between 80,000 to 150,000 miles (7-10 years), but this can vary based on driving conditions, vehicle type, and electrical load. Regular electrical system checks can help identify potential issues before they lead to a breakdown.",
    },
    {
      question: "Can you repair my vehicle the same day?",
      answer:
        "In many cases, yes. Simple repairs like battery replacements or basic electrical fixes can often be completed within a few hours. More complex issues might require parts ordering or additional diagnostic time. We always aim to provide a clear timeframe when you bring in your vehicle.",
    },
    {
      question: "How often should I replace my car battery?",
      answer:
        "Car batteries typically last 3-5 years, depending on usage patterns, climate, and the vehicle's electrical demands. We recommend having your battery tested annually after it's 2 years old to monitor its condition and prevent unexpected failures.",
    },
    {
      question: "Do you work on hybrid or electric vehicles?",
      answer:
        "Yes, our technicians are trained to work on hybrid and electric vehicle electrical systems. We have the specialized equipment and knowledge required to safely diagnose and repair these advanced vehicles.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept all major credit and debit cards, cash, and bank transfers. Payment is typically required upon completion of the work.",
    },
    {
      question: "Do I need an appointment or can I just drop in?",
      answer:
        "While we do accommodate drop-ins when possible, we recommend booking an appointment to ensure we can see you promptly. For urgent issues, please call us directly and we'll do our best to fit you in as soon as possible.",
    },
  ];

  return (
    <div className="container mx-auto py-12 px-4 md:px-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold tracking-tight mb-6">
          Frequently Asked Questions
        </h1>
        <p className="text-xl text-muted-foreground mb-12">
          Find answers to common questions about our services and auto
          electrical systems.
        </p>

        <Accordion type="single" collapsible className="mb-12">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="text-center">
          <h2 className="text-2xl font-semibold mb-6">Still have questions?</h2>
          <p className="text-muted-foreground mb-6">
            Our team is ready to help with any other questions you might have
            about our services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              className="bg-brand-600 hover:bg-brand-700 text-black"
            >
              <Link href="tel:+02089118048">
                <Phone className="mr-2 h-5 w-5" />
                Call Us Now
              </Link>
            </Button>
            <Button asChild variant="outline">
              <Link
                href="https://wa.me/447549388887"
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
