import Image from 'next/image'

const courses = [
  {
    title: 'Recover Brows® Master',
    description: 'Aprenda a técnica exclusiva de reconstrução de sobrancelhas.',
    duration: '16 horas',
    level: 'Avançado',
    includes: [
      'Material didático completo',
      'Kit profissional',
      'Certificado',
      'Suporte pós-curso'
    ],
    image: '/curso-recover-brows.jpg'
  },
  {
    title: 'Design Expert',
    description: 'Domine as técnicas avançadas de design de sobrancelhas.',
    duration: '12 horas',
    level: 'Intermediário',
    includes: [
      'Apostila digital',
      'Certificado',
      'Prática em modelos',
      'Mentoria individual'
    ],
    image: '/curso-design.jpg'
  }
]

export default function CoursesPage() {
  return (
    <div className="bg-black min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-accent font-medium tracking-wider">
              FORMAÇÃO PROFISSIONAL
            </span>
            <h1 className="text-5xl font-bold text-white mt-4 mb-6">
              Cursos Profissionalizantes
            </h1>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Aprenda com quem tem 9 anos de experiência no mercado. Metodologia
              exclusiva e suporte completo para sua formação.
            </p>
          </div>
        </div>
      </section>

      {/* Cursos */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {courses.map(course => (
              <div
                key={course.title}
                className="bg-gray-900 rounded-2xl overflow-hidden border border-accent/20 hover:border-accent transition-colors duration-300"
              >
                <div className="relative h-64">
                  <Image
                    src={course.image}
                    alt={course.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-white mb-4">
                    {course.title}
                  </h3>
                  <p className="text-gray-300 mb-6">{course.description}</p>

                  <div className="flex gap-4 mb-6">
                    <span className="bg-accent/10 text-accent px-4 py-1 rounded-full text-sm">
                      {course.duration}
                    </span>
                    <span className="bg-accent/10 text-accent px-4 py-1 rounded-full text-sm">
                      {course.level}
                    </span>
                  </div>

                  <div className="mb-8">
                    <h4 className="text-white font-semibold mb-3">
                      O que inclui:
                    </h4>
                    <ul className="space-y-2">
                      {course.includes.map(item => (
                        <li
                          key={item}
                          className="text-gray-300 flex items-center gap-2"
                        >
                          <span className="text-accent">✓</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <a
                    href={`https://wa.me/SEUNUMERO?text=Olá! Gostaria de saber mais sobre o curso ${course.title}`}
                    className="inline-block bg-accent text-black px-8 py-3 rounded-full font-semibold hover:bg-white transition-colors duration-300"
                  >
                    Saiba mais
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Diferenciais */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-white font-semibold mb-2">
                Metodologia Exclusiva
              </h3>
              <p className="text-gray-300">
                Aprenda técnicas desenvolvidas e aperfeiçoadas ao longo de 9
                anos
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💎</span>
              </div>
              <h3 className="text-white font-semibold mb-2">
                Turmas Limitadas
              </h3>
              <p className="text-gray-300">
                Atendimento personalizado e acompanhamento individual
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🚀</span>
              </div>
              <h3 className="text-white font-semibold mb-2">
                Suporte Contínuo
              </h3>
              <p className="text-gray-300">
                Mentoria e acompanhamento após a conclusão do curso
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
