import Link from 'next/link';
import TacticsHub from '@/components/TacticsHub';

export default function Legends() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-green-900 via-green-800 to-green-900">
      <nav className="mx-auto max-w-7xl px-6 pt-4">
        <Link
          href="/"
          className="rounded-lg border border-violet-300 px-4 py-2 text-sm font-bold text-violet-100"
        >
          ← Squad builder
        </Link>
      </nav>
      <TacticsHub />
    </main>
  );
}
