import { FaInstagram, FaWhatsapp, FaFacebook } from 'react-icons/fa'

const Footer: React.FC = () => (
  <footer className="bg-black text-white">
    <div className="container mx-auto px-6 py-12">
      <div className="grid md:grid-cols-3 gap-12 text-center md:text-left">
        <div className="space-y-4">
          <h3 className="font-sans text-2xl text-white font-semibold">
            Aline Dantas
          </h3>
          <p className="text-gray-300 font-medium">
            Transformando olhares e resgatando autoestima com técnicas
            exclusivas de sobrancelhas e cílios.
          </p>
        </div>

        <div className="space-y-4">
          <h3 className="font-sans text-2xl text-white  font-semibold">
            Contato
          </h3>
          <p className="text-gray-300 font-medium">📍 Embu das Artes, SP</p>
          <p className="text-gray-300 font-medium">📱 (xx) xxxx-xxxx</p>
        </div>

        <div className="space-y-4">
          <h3 className="font-sans text-2xl text-white font-semibold">
            Redes Sociais
          </h3>
          <div className="flex justify-center md:justify-start gap-6">
            <a
              href="https://instagram.com/alinedantas.estetica"
              className="text-gold hover:text-white transition duration-300 font-medium"
              aria-label="Instagram"
            >
              <FaInstagram className="text-3xl" />
            </a>
            <a
              href="https://wa.me/xxxyyyzzzz" // Substitua com o número real
              className="text-gold hover:text-white transition duration-300 font-medium"
              aria-label="WhatsApp"
            >
              <FaWhatsapp className="text-3xl" />
            </a>
            <a
              href="https://facebook.com/alinedantas.estetica"
              className="text-gold hover:text-white transition duration-300 font-medium"
              aria-label="Facebook"
            >
              <FaFacebook className="text-3xl" />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-600 mt-12 pt-8 text-center text-gray-300">
        <p className="!text-white font-medium">
          © {new Date().getFullYear()} Aline Dantas. Todos os direitos
          reservados.
        </p>
      </div>
    </div>
  </footer>
)

export default Footer
