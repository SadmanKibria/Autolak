import Link from "next/link";
import { Facebook, Phone, MapPin, Clock } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-100 py-6 border-t">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex flex-wrap gap-6 justify-center md:justify-start">
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Phone className="h-4 w-4 text-brand-600" />
              <div>
                <p>020 8911 8048</p>
                <p>020 8514 3637</p>
              </div>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <MapPin className="h-4 w-4 text-brand-600" />
              <span>123 Garage Lane, Ilford, IG1 1AA</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Clock className="h-4 w-4 text-brand-600" />
              <span>Mon-Fri: 8AM-6PM | Sat: 9AM-4PM | Sun: Closed</span>
            </div>
          </div>

          <Link
            href="https://www.facebook.com/autolakyellowgarage"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-brand-600 transition-colors"
            aria-label="Facebook"
          >
            <Facebook className="h-5 w-5" />
          </Link>
        </div>

        <div className="mt-4 pt-4 border-t border-gray-200 text-center text-sm text-gray-600 flex flex-col md:flex-row justify-between items-center">
          <p>
            &copy; {new Date().getFullYear()} Autolak Ltd. All rights reserved.
          </p>
          <p className="mt-2 md:mt-0">
            Powered by{" "}
            <a
              href="https://www.sadmankibria.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-700 hover:underline"
            >
              Sadman Kibria
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
