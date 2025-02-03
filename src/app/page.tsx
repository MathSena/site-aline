import ServiceCard from '../../src/components/ServiceCard'

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center">
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/60 z-10" />
        <div className="absolute inset-0">
          <img
            src="/hero-background.jpg"
            alt="Background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-4 relative z-20">
          <div className="max-w-4xl">
            <span className="text-accent font-medium tracking-[0.2em] mb-6 block">
              SOBRANCELHAS E CÍLIOS | EMBU DAS ARTES
            </span>
            <h1 className="text-6xl md:text-7xl font-bold text-white mb-8 leading-tight">
              Transformando vidas através da{' '}
              <span className="text-accent">beleza natural</span>
            </h1>
            <p className="text-xl text-gray-200 mb-12 leading-relaxed max-w-2xl">
              Especialista em Reconstrução e criadora do método Recover Brows®.
              <span className="block mt-2 text-accent">
                ✨ 9 anos de experiência
              </span>
            </p>
            <div className="flex flex-wrap gap-6">
              <a
                href="https://wa.me/SEUNUMERO"
                className="bg-accent hover:bg-white text-black px-10 py-4 rounded-full font-medium transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-3"
              >
                Agendar Consulta
                <svg
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </a>
              <a
                href="#servicos"
                className="border border-accent/30 text-white hover:border-accent hover:text-accent px-10 py-4 rounded-full font-medium transition-all duration-300"
              >
                Conhecer Serviços
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-black py-12 border-t border-accent/10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-black/50 rounded-2xl backdrop-blur-sm border border-accent/5">
              <span className="text-4xl font-bold text-accent block mb-2">
                9+
              </span>
              <span className="text-gray-300">Anos de Experiência</span>
            </div>
            <div className="text-center p-6 bg-black/50 rounded-2xl backdrop-blur-sm border border-accent/5">
              <span className="text-4xl font-bold text-accent block mb-2">
                2k+
              </span>
              <span className="text-gray-300">Clientes Satisfeitas</span>
            </div>
            <div className="text-center p-6 bg-black/50 rounded-2xl backdrop-blur-sm border border-accent/5">
              <span className="text-4xl font-bold text-accent block mb-2">
                15+
              </span>
              <span className="text-gray-300">Certificações</span>
            </div>
            <div className="text-center p-6 bg-black/50 rounded-2xl backdrop-blur-sm border border-accent/5">
              <span className="text-4xl font-bold text-accent block mb-2">
                5k+
              </span>
              <span className="text-gray-300">Procedimentos</span>
            </div>
          </div>
        </div>
      </section>

      {/* Serviços Section */}
      <section
        id="servicos"
        className="py-20 bg-gradient-to-b from-black to-gray-900"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-accent tracking-[0.2em] text-sm font-medium">
              NOSSOS SERVIÇOS
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">
              Tratamentos Exclusivos
            </h2>
            <div className="w-24 h-0.5 bg-accent mx-auto"></div>
            <p className="text-gray-300 mt-6 max-w-2xl mx-auto">
              Descubra nossos serviços especializados, desenvolvidos para
              realçar sua beleza natural com técnicas exclusivas e resultados
              duradouros.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ServiceCard
              title="Recover Brows®"
              description="Método exclusivo de reconstrução total para sobrancelhas danificadas. Recupere a autoestima com resultados naturais."
              price="Consultar valor"
              image="/recover-brows.png"
              highlight={true}
            />
            <ServiceCard
              title="Design de Sobrancelhas"
              description="Design personalizado que valoriza sua beleza natural e harmoniza com suas características."
              price="A partir de R$ XX"
              image="/design-sobrancelhas.png"
            />
            <ServiceCard
              title="Extensão de Cílios"
              description="Realce seu olhar com cílios volumosos e naturais. Técnicas modernas para resultados duradouros."
              price="A partir de R$ XX"
              image="/extensao-cilios.png"
            />
            <ServiceCard
              title="Lash Lifting"
              description="Tratamento que nutre, hidrata e fortalece seus cílios naturais, proporcionando curvatura e alongamento sem extensões."
              price="A partir de R$ XX"
              image="/lash.jpg"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-accent/5" />
        <div className="container mx-auto px-4 relative">
          <div className="bg-gradient-to-r from-black/95 to-black/90 p-12 rounded-3xl border border-accent/10 backdrop-blur-sm">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Pronta para transformar seu olhar?
              </h2>
              <p className="text-gray-300 mb-8">
                Agende sua consulta e descubra como podemos realçar sua beleza
                natural.
              </p>
              <a
                href="https://wa.me/SEUNUMERO"
                className="bg-accent hover:bg-white text-black px-10 py-4 rounded-full font-medium inline-flex items-center gap-3 transition-all duration-300 transform hover:scale-105"
              >
                Agendar Consulta
                <svg
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
