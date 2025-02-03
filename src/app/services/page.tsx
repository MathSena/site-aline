import Image from 'next/image'
import ServiceCard from '@/components/ServiceCard'

const services = [
  {
    title: 'Recover Brows',
    description:
      'Técnica exclusiva de reconstrução para sobrancelhas danificadas. Recupere a beleza natural com resultados duradouros. Ideal para quem sofreu com procedimentos mal realizados ou tem falhas naturais.',
    image: '/design-sobrancelhas.png',
    price: 'R$ 150',
    highlight: true,
    fullDescription: [
      'Avaliação personalizada do caso',
      'Reconstrução total da sobrancelha',
      'Correção de assimetrias',
      'Durabilidade de até 40 dias',
      'Produtos premium importados'
    ]
  },
  {
    title: 'Design de Sobrancelhas',
    description:
      'Design personalizado que valoriza suas características naturais, realçando a harmonia do seu rosto. Técnica exclusiva de design que respeita seu formato natural.',
    image: '/design-sobrancelhas.png',
    price: 'R$ 120',
    fullDescription: [
      'Análise da geometria facial',
      'Design personalizado',
      'Coloração profissional',
      'Acabamento perfeito',
      'Hidratação pós-procedimento'
    ]
  },
  {
    title: 'Extensão de Cílios',
    description:
      'Cílios perfeitos e naturais para um olhar marcante. Técnicas modernas com máximo conforto e durabilidade. Fios premium e aplicação fio a fio.',
    image: '/extensao-cilios.png',
    price: 'R$ 180',
    fullDescription: [
      'Aplicação fio a fio',
      'Cílios de seda premium',
      'Durabilidade de até 4 semanas',
      'Personalização do volume',
      'Manutenção inclusa'
    ]
  }
]

export default function ServicesPage() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-6xl">
      <section className="text-center mb-16">
        <span className="text-accent font-medium mb-4 block">
          Nossos Serviços
        </span>
        <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-6">
          Transforme seu olhar
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Conheça nossos serviços especializados em sobrancelhas e cílios,
          desenvolvidos para realçar sua beleza natural.
        </p>
      </section>

      <div className="grid md:grid-cols-3 gap-8 mb-20">
        {services.map(service => (
          <ServiceCard key={service.title} {...service} />
        ))}
      </div>

      {services.map((service, index) => (
        <section
          key={service.title}
          className={`py-16 ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}
        >
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className={`${index % 2 === 1 ? 'md:order-2' : ''}`}>
                <h2 className="text-3xl font-bold mb-4">{service.title}</h2>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-3">
                  {service.fullDescription.map(item => (
                    <li key={item} className="flex items-center gap-3">
                      <svg
                        className="w-5 h-5 text-accent"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8">
                  <a
                    href={`https://wa.me/SEUNUMERO?text=Olá! Gostaria de saber mais sobre ${service.title}`}
                    className="inline-flex items-center gap-2 bg-accent hover:bg-accent/90 text-white px-6 py-3 rounded-full font-medium transition-colors"
                  >
                    Agendar {service.title}
                    <svg
                      className="w-4 h-4"
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
              <div
                className={`relative h-[400px] rounded-2xl overflow-hidden ${
                  index % 2 === 1 ? 'md:order-1' : ''
                }`}
              >
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </section>
      ))}

      <section className="py-16 text-center">
        <h2 className="text-3xl font-bold mb-8">Dúvidas Frequentes</h2>
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="font-semibold mb-2">
              Quanto tempo dura cada procedimento?
            </h3>
            <p className="text-gray-600">
              O tempo varia de acordo com o serviço. Design de sobrancelhas leva
              cerca de 40 minutos, enquanto extensão de cílios pode levar até 2
              horas.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="font-semibold mb-2">Preciso fazer manutenção?</h3>
            <p className="text-gray-600">
              Sim, recomendamos manutenção a cada 15-20 dias para extensão de
              cílios e 30 dias para sobrancelhas.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
