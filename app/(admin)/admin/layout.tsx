import { Sidebar } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-stone-100 flex">
      {/* Sidebar Simples */}
      <aside className="w-64 bg-stone-900 text-stone-300 hidden md:flex flex-col">
        <div className="p-6 border-b border-stone-800">
          <span className="font-serif text-xl text-white font-bold">Admin Panel</span>
        </div>
        
        <nav className="flex-1 p-4 space-y-2">
          <Link href="/admin/dashboard" className="block px-4 py-2 rounded hover:bg-stone-800 text-stone-200">
            Dashboard
          </Link>
          <Link href="/admin/posts" className="block px-4 py-2 rounded hover:bg-stone-800 text-stone-200">
            Postagens
          </Link>
          <Link href="/" target="_blank" className="block px-4 py-2 rounded hover:bg-stone-800 text-stone-400 mt-8 text-sm border border-stone-800">
            Ver Site Online ↗
          </Link>
        </nav>

        <div className="p-4 border-t border-stone-800">
          <form action="/auth/signout" method="post">
             <Button variant="ghost" className="w-full justify-start text-red-400 hover:text-red-300 hover:bg-stone-800">
               Sair do Sistema
             </Button>
          </form>
        </div>
      </aside>

      {/* Conteúdo Principal */}
      <main className="flex-1 p-8 overflow-y-auto">
        {children}
      </main>
    </div>
  );
}
