import { Link } from "next-view-transitions";
import { Instagram, Facebook, X } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full text-black py-8 border-t border-gray-700">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-black">Sobre</h3>
            <p className="mt-2 text-sm">
              Conectamos pessoas e ideias em eventos incríveis. Participe e nos diga como foi sua experiência!
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-black">Links Rápidos</h3>
            <ul className="mt-2 space-y-2">
              <li>
                <Link href="/" className="hover:text-black">Página Inicial</Link>
              </li>
              <li>
                <Link href="/eventos" className="hover:text-black">Eventos</Link>
              </li>
              <li>
                <a href="/faq" className="hover:text-black">FAQ</a>
              </li>
              <li>
                <a href="/contato" className="hover:text-black">Contato</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-black">Nos siga</h3>
            <div className="flex space-x-4 mt-2">
              <a 
                href="https://github.com/"
                className="text-gray-400 hover:text-gray-600"
              >
                <Instagram size={16} />
              </a >
              <a 
                href="https://twitter.com"
                className="text-gray-400 hover:text-gray-600"
              >
                <X size={16} />
              </a >
              <a  href="/email" className="text-gray-400 hover:text-gray-600">
                <Facebook size={16} />
              </a >
            </div>
          </div>
        </div>

        <div className=" mt-6 pt-4 text-center text-sm">
          © {new Date().getFullYear()} EventoFacil. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}
