import { Clock, Wrench, Award, ShieldCheck, Smile, Zap } from "lucide-react";

export default function WhyChooseUs() {
  const reasons = [
    {
      title: "Specialized expertise",
      description: "Expert knowledge in auto electrical systems",
      icon: <Award className="h-8 w-8 text-brand-600" />,
    },
    {
      title: "Competitive pricing",
      description: "Fair and transparent pricing for all services",
      icon: <ShieldCheck className="h-8 w-8 text-brand-600" />,
    },
    {
      title: "Quick turnaround",
      description: "Efficient service to get you back on the road",
      icon: <Clock className="h-8 w-8 text-brand-600" />,
    },
    {
      title: "Quality parts",
      description: "Using only reliable parts and components",
      icon: <Wrench className="h-8 w-8 text-brand-600" />,
    },
    {
      title: "Professional service",
      description: "Friendly, knowledgeable staff ready to help",
      icon: <Smile className="h-8 w-8 text-brand-600" />,
    },
    {
      title: "Guaranteed work",
      description: "12-month warranty on all repairs",
      icon: <Zap className="h-8 w-8 text-brand-600" />,
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold tracking-tighter mb-8">
            Why Choose Autolak?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {reasons.map((reason, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center bg-white p-5 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="bg-brand-50 p-3 rounded-full mb-3">
                  {reason.icon}
                </div>
                <h3 className="font-semibold text-lg mb-1">{reason.title}</h3>
                <p className="text-muted-foreground">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
