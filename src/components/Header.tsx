'use client' // Adicione isso no topo do seu arquivo

import Link from 'next/link'
import { useState } from 'react'

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-black/95 backdrop-blur-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="no-underline">
            <h1 className="text-2xl font-bold text-white flex items-center gap-2">
              <img
                src="/aline-logo.jpg"
                alt="Logo"
                className="w-14 h-14 object-cover"
              />
            </h1>
          </Link>

          {/* Menu Desktop */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="text-white hover:text-accent no-underline font-medium text-sm tracking-wide transition-colors"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-white hover:text-accent no-underline font-medium text-sm tracking-wide transition-colors"
            >
              Sobre
            </Link>
            <Link
              href="/courses"
              className="text-white hover:text-accent no-underline font-medium text-sm tracking-wide transition-colors"
            >
              Cursos
            </Link>
            <Link
              href="/contact"
              className="text-white hover:text-accent no-underline font-medium text-sm tracking-wide transition-colors"
            >
              Contato
            </Link>
            <a
              href="https://wa.me/SEUNUMERO"
              className="bg-accent text-black px-6 py-2.5 rounded-full hover:bg-white transition-colors duration-300 text-sm font-semibold no-underline"
            >
              Agendar
            </a>
          </nav>

          {/* Menu Mobile */}
          <div className="md:hidden flex items-center">
            <button
              className="text-white text-2xl"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? '✖️' : '☰'}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`${
            isMenuOpen ? 'block' : 'hidden'
          } md:hidden absolute top-20 left-0 w-full bg-black/95 backdrop-blur-md py-6`}
        >
          <nav className="flex flex-col items-center space-y-6">
            <Link
              href="/"
              className="text-white hover:text-accent no-underline font-medium text-lg tracking-wide transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-white hover:text-accent no-underline font-medium text-lg tracking-wide transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Sobre
            </Link>
            <Link
              href="/courses"
              className="text-white hover:text-accent no-underline font-medium text-lg tracking-wide transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Cursos
            </Link>
            <Link
              href="/contact"
              className="text-white hover:text-accent no-underline font-medium text-lg tracking-wide transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contato
            </Link>
            <a
              href="https://wa.me/SEUNUMERO"
              className="bg-accent text-black px-6 py-2.5 rounded-full hover:bg-white transition-colors duration-300 text-sm font-semibold no-underline"
              onClick={() => setIsMenuOpen(false)}
            >
              Agendar
            </a>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header
