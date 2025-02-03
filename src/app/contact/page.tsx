export default function Contact() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <h1 className="text-4xl font-bold text-center bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-8">
            Entre em Contato
          </h1>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                  <span className="text-2xl">📍</span>
                </div>
                <div>
                  <h3 className="font-semibold">Localização</h3>
                  <p className="text-gray-600">Embu das Artes, SP</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                  <span className="text-2xl">📱</span>
                </div>
                <div>
                  <h3 className="font-semibold">WhatsApp</h3>
                  <a href="https://wa.me/SEUNUMERO" className="text-accent">
                    (xx) xxxx-xxxx
                  </a>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                  <span className="text-2xl">💌</span>
                </div>
                <div>
                  <h3 className="font-semibold">Instagram</h3>
                  <a
                    href="https://instagram.com/alinedantas.estetica"
                    className="text-accent"
                  >
                    @alinedantas.estetica
                  </a>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl">
              <iframe
                src="SUA_URL_DO_GOOGLE_MAPS"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
