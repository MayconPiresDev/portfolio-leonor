"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { LockKeyhole } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Label } from "@/components/ui/label";

export default function LoginPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);

    // TODO: Aqui entra a integração com Supabase Auth depois
    // Por enquanto, apenas simula um delay e redireciona
    setTimeout(() => {
      setLoading(false);
      // router.push("/admin/dashboard"); // Descomente quando criar o dashboard
      alert("Login simulado com sucesso!");
    }, 1500);
  }

  return (
    <div className="min-h-screen bg-stone-100 flex items-center justify-center p-4">
      <Card className="w-full max-w-md shadow-xl border-stone-200 bg-white">
        <CardHeader className="space-y-1 text-center">
          <div className="mx-auto w-12 h-12 bg-teal-50 text-teal-600 rounded-full flex items-center justify-center mb-4">
            <LockKeyhole className="w-6 h-6" />
          </div>
          <CardTitle className="text-2xl font-serif text-stone-900">Acesso Restrito</CardTitle>
          <CardDescription>
            Digite suas credenciais para gerenciar o portfólio.
          </CardDescription>
        </CardHeader>
        
        <form onSubmit={handleLogin}>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input 
                id="email" 
                type="email" 
                placeholder="naiara@exemplo.com" 
                className="border-stone-200 focus:ring-teal-500"
                required
              />
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="password">Senha</Label>
              </div>
              <Input 
                id="password" 
                type="password" 
                className="border-stone-200 focus:ring-teal-500"
                required 
              />
            </div>
          </CardContent>
          
          <CardFooter>
            <Button 
              type="submit" 
              className="w-full bg-stone-900 hover:bg-teal-700 transition-colors"
              disabled={loading}
            >
              {loading ? "Entrando..." : "Acessar Painel"}
            </Button>
          </CardFooter>
        </form>
      </Card>
      
      <div className="absolute bottom-6 text-center text-xs text-stone-400">
        &copy; 2025 Naiara Leonor Portfólio. Admin System.
      </div>
    </div>
  );
}
