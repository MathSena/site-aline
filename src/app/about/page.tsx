import Image from 'next/image'

export default function About() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-8">
        <div className="max-w-7xl mx-auto">
          {/* Sobre */}
          <div className="grid lg:grid-cols-2 gap-20 items-center mb-32">
            <div className="space-y-8">
              <div className="space-y-6">
                <span className="inline-block bg-accent/10 text-accent px-6 py-3 rounded-full text-sm font-semibold tracking-wider">
                  SOBRE MIM
                </span>
                <h1 className="font-serif text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                  Transformando olhares e autoestima
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed max-w-3xl">
                  Sou Aline Dantas, especialista em sobrancelhas e cílios. Há 9
                  anos, dedico minha vida a transformar olhares e resgatar a
                  autoestima através de técnicas exclusivas e tratamentos
                  personalizados.
                </p>
              </div>

              <div className="grid grid-cols-3 gap-8">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <h3 className="text-4xl font-bold text-accent mb-2">
                      {stat.value}
                    </h3>
                    <p className="text-gray-600 font-medium">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative aspect-square rounded-3xl overflow-hidden shadow-xl">
              <Image
                src="/aline-profile.png"
                alt="Aline Dantas"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>

          {/* Diferenciais */}
          <div className="space-y-6 text-center mb-20">
            <span className="inline-block bg-accent/10 text-accent px-6 py-3 rounded-full text-sm font-semibold tracking-wider">
              DIFERENCIAIS
            </span>
            <h2 className="font-serif text-4xl font-bold text-gray-900">
              Por que escolher nosso trabalho
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-gray-50 p-8 rounded-3xl hover:bg-white hover:shadow-xl transition-all duration-300 ease-in-out transform hover:scale-105"
              >
                <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center mb-6">
                  <span className="text-accent text-3xl">{feature.icon}</span>
                </div>
                <h3 className="font-serif text-xl text-gray-900 font-semibold mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

const stats = [
  { value: '9+', label: 'Anos de Experiência' },
  { value: '2k+', label: 'Clientes Atendidas' },
  { value: '15+', label: 'Certificações' }
]

const features = [
  {
    icon: '✨',
    title: 'Método Exclusivo',
    description:
      'Criadora do método Recover Brows® para reconstrução de sobrancelhas.'
  },
  {
    icon: '💝',
    title: 'Atendimento Personalizado',
    description:
      'Cada cliente recebe um tratamento único, baseado em suas características.'
  },
  {
    icon: '🎯',
    title: 'Resultados Comprovados',
    description: 'Milhares de clientes satisfeitas com resultados duradouros.'
  }
]
