import Link from "next/link";
import { PlusCircle, FileText, MonitorPlay, Newspaper } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { prisma } from "@/lib/prisma"; // Certifique-se que o prisma está configurado

export default async function DashboardPage() {
  // Busca os dados reais do banco
  const projects = await prisma.project.findMany({
    orderBy: { createdAt: 'desc' }
  });

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-serif text-stone-900">Dashboard</h1>
          <p className="text-stone-500">Gerencie o conteúdo do portfólio.</p>
        </div>
        <Button asChild className="bg-teal-600 hover:bg-teal-700">
          <Link href="/admin/posts/new">
            <PlusCircle className="mr-2 h-4 w-4" /> Novo Projeto
          </Link>
        </Button>
      </div>

      {/* Cards de Resumo */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-stone-500">Total de Projetos</CardTitle>
            <FileText className="h-4 w-4 text-stone-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{projects.length}</div>
          </CardContent>
        </Card>
        {/* Você pode adicionar mais cards de estatísticas aqui depois */}
      </div>

      {/* Lista de Projetos Recentes */}
      <Card>
        <CardHeader>
          <CardTitle>Projetos Recentes</CardTitle>
        </CardHeader>
        <CardContent>
          {projects.length === 0 ? (
            <div className="text-center py-10 text-stone-400">
              Nenhum projeto cadastrado ainda.
            </div>
          ) : (
            <div className="space-y-4">
              {projects.map((project) => (
                <div key={project.id} className="flex items-center justify-between p-4 border rounded hover:bg-stone-50">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-stone-200 rounded flex items-center justify-center">
                       {project.category === 'VIDEO' ? <MonitorPlay size={16}/> : <Newspaper size={16}/>}
                    </div>
                    <div>
                      <p className="font-medium">{project.title}</p>
                      <p className="text-xs text-stone-500">{project.category} • {project.date.toLocaleDateString()}</p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm" asChild>
                    <Link href={`/admin/posts/${project.id}/edit`}>Editar</Link>
                  </Button>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
