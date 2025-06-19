import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-green-600 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-7 flex justify-between items-center">
        <h1 className="text-3xl font-bold">
          <Link href="/">Sistema de Gerenciamento</Link>
        </h1>

        <nav className="space-x-6">
          <Link href="/" className="hover:underline text-2xl">
            Início
          </Link>
          <Link href="/Operadores" className="hover:underline text-2xl">
            Operadores
          </Link>
          <Link href="/Maquinas" className="hover:underline text-2xl">
            Máquinas
          </Link>
        </nav>
      </div>
    </header>
  );
}