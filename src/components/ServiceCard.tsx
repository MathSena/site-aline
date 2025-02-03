import Image from 'next/image'

interface ServiceCardProps {
  title: string
  description: string
  image: string
  price: string
  highlight?: boolean
  features?: string[]
}

export default function ServiceCard({
  title,
  description,
  image,
  price,
  highlight = false,
  features
}: ServiceCardProps) {
  return (
    <div
      className={`group relative bg-white rounded-2xl overflow-hidden transition-all duration-500 
      ${
        highlight
          ? 'ring-2 ring-accent shadow-accent/20'
          : 'hover:ring-1 ring-gray-200'
      } 
      shadow-lg hover:shadow-2xl`}
    >
      <div className="aspect-[4/3] relative">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent" />
      </div>

      <div className="absolute bottom-0 w-full p-6">
        <div className="bg-black/40 backdrop-blur-sm rounded-xl p-4 transform transition-all duration-500 translate-y-0">
          <div className="flex justify-between items-center mb-3">
            <h3 className="text-xl font-bold text-white">{title}</h3>
            <span className="bg-accent px-3 py-1 rounded-full text-sm font-medium text-white">
              {price}
            </span>
          </div>

          <p className="text-gray-100 text-sm mb-4 line-clamp-2 group-hover:line-clamp-none transition-all duration-300">
            {description}
          </p>

          {features && (
            <ul className="space-y-2 mb-4">
              {features.map((feature, index) => (
                <li
                  key={index}
                  className="flex items-center gap-2 text-sm text-gray-100"
                >
                  <svg
                    className="w-4 h-4 text-accent flex-shrink-0"
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
                  {feature}
                </li>
              ))}
            </ul>
          )}

          <a
            href={`https://wa.me/SEUNUMERO?text=Olá! Gostaria de saber mais sobre o serviço de ${title}`}
            className="inline-flex items-center gap-2 bg-white hover:bg-gray-50 text-gray-900 px-4 py-2 rounded-full text-sm font-medium transition-colors w-full justify-center"
          >
            Agendar Horário
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
    </div>
  )
}
