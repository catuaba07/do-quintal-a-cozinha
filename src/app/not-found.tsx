import Link from "next/link";

export default function NotFound() {
  return (
    <div className="text-center space-y-6">
      <div className="text-7xl float">🔍</div>

      <h1 className="text-4xl font-bold">404 - Página não encontrada</h1>
      <p className="text-lg text-gray-600">
        Oops! Parece que você se perdeu no caminho.
      </p>

      <Link
        href="/"
        className="inline-block mt-4 px-6 py-3 bg-purple-500 text-white rounded-xl shadow hover:bg-purple-700 transition-colors"
      >
        Voltar para a página inicial
      </Link>
    </div>
  );
}
