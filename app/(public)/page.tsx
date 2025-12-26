import Link from "next/link";
import { 
  Newspaper, 
  MonitorPlay, 
  FileText, 
  ArrowRight, 
  Linkedin, 
  Mail, 
  MapPin,
  Download
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

export default function Home() {
  // Dados baseados no PDF da Naiara
  const profile = {
    name: "Naiara Leonor",
    role: "Jornalista | Produtora Cultural | Fotógrafa",
    about: "Profissional da comunicação com mais de uma década de experiência. Atuo na interseção entre jornalismo, gestão cultural e fotografia. Minha trajetória é marcada pela versatilidade: da assessoria de imprensa governamental à produção de eventos culturais no SESI-SP. Busco contar histórias que conectam pessoas.",
    location: "São José dos Campos - SP",
    email: "naiara.leonor@gmail.com",
    linkedin: "https://linkedin.com/in/naiara-leonor"
  };

  const categories = [
    {
      title: "Reportagens Online",
      description: "Artigos, coberturas políticas e culturais publicadas em portais como Olhar Direto e sites institucionais.",
      icon: <Newspaper className="w-6 h-6 text-teal-700" />,
      href: "/portfolio/online",
      borderColor: "hover:border-teal-500/50"
    },
    {
      title: "Reportagens Digitalizadas",
      description: "Acervo de matérias impressas, revistas e jornais físicos digitalizados (Revista Olhar Conceito e outros).",
      icon: <FileText className="w-6 h-6 text-indigo-700" />,
      href: "/portfolio/impresso",
      borderColor: "hover:border-indigo-500/50"
    },
    {
      title: "Vídeos e Produções",
      description: "Produção audiovisual, roteiros para TV, documentários e coberturas em vídeo.",
      icon: <MonitorPlay className="w-6 h-6 text-rose-700" />,
      href: "/portfolio/videos",
      borderColor: "hover:border-rose-500/50"
    }
  ];

  return (
    <main className="min-h-screen bg-stone-50 text-stone-800 font-sans selection:bg-teal-100 pb-20">
      
      {/* --- HERO SECTION (SOBRE MIM) --- */}
      <section className="bg-white border-b border-stone-200">
        <div className="max-w-6xl mx-auto px-6 py-20 md:py-28 grid md:grid-cols-12 gap-12 items-center">
          
          {/* Coluna de Texto */}
          <div className="md:col-span-7 space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div className="space-y-3">
              <span className="inline-block py-1 px-3 bg-teal-50 text-teal-800 text-xs font-bold tracking-widest uppercase rounded-sm border border-teal-100">
                Portfólio Profissional
              </span>
              <h1 className="text-5xl md:text-7xl font-serif font-medium text-stone-900 leading-tight">
                {profile.name}
              </h1>
              <p className="text-xl md:text-2xl text-stone-500 font-light">{profile.role}</p>
            </div>

            <div className="prose prose-stone prose-lg text-stone-600 border-l-4 border-teal-500 pl-6 leading-relaxed">
              {profile.about}
            </div>

            {/* Botões de Ação */}
            <div className="flex flex-wrap gap-4 pt-4">
              <Button asChild className="bg-stone-900 hover:bg-teal-700 transition-all shadow-lg hover:shadow-teal-900/20">
                <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">
                  <Linkedin className="mr-2 w-4 h-4" /> LinkedIn
                </a>
              </Button>
              
              <Button variant="outline" asChild className="border-stone-300 hover:bg-stone-100 hover:text-stone-900">
                <a href="/curriculo_naiara_leonor.pdf" download>
                  <Download className="mr-2 w-4 h-4" /> Baixar Currículo
                </a>
              </Button>
            </div>

            {/* Rodapé do Hero (Infos de contato) */}
            <div className="flex flex-wrap gap-6 text-sm text-stone-400 font-medium pt-8 border-t border-stone-100">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-teal-500" /> {profile.location}
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-teal-500" /> {profile.email}
              </div>
            </div>
          </div>

          {/* Coluna da Foto */}
          <div className="md:col-span-5 relative group hidden md:block">
            <div className="aspect-[3/4] bg-stone-200 rounded-sm shadow-2xl relative overflow-hidden border-[8px] border-white transform rotate-2 transition-transform duration-500 group-hover:rotate-0">
               {/* Substitua pela imagem real: <Image src="/foto.jpg" ... /> */}
               <div className="absolute inset-0 bg-stone-300 flex flex-col items-center justify-center text-stone-500">
                 <span className="font-serif italic text-2xl">Foto de Perfil</span>
                 <span className="text-sm mt-2 opacity-60">Adicione em public/foto.jpg</span>
               </div>
            </div>
            {/* Elemento decorativo atrás */}
            <div className="absolute -z-10 top-12 -right-4 w-full h-full border-2 border-teal-500/30 rounded-sm"></div>
          </div>
        </div>
      </section>

      {/* --- NAVEGAÇÃO DO PORTFÓLIO (CARDS SHADCN) --- */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl font-serif text-stone-900">Explore o Acervo</h2>
          <p className="text-stone-500 max-w-2xl mx-auto">
            Selecione uma das categorias abaixo para navegar pelas reportagens, materiais impressos e produções audiovisuais.
          </p>
          <div className="w-12 h-1 bg-teal-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {categories.map((cat, idx) => (
            <Link key={idx} href={cat.href} className="block h-full">
              <Card className={`h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border-t-4 border-t-transparent ${cat.borderColor} group`}>
                <CardHeader>
                  <div className="w-12 h-12 bg-stone-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-white group-hover:shadow-md transition-all">
                    {cat.icon}
                  </div>
                  <CardTitle className="font-serif text-xl group-hover:text-teal-800 transition-colors">
                    {cat.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    {cat.description}
                  </CardDescription>
                </CardContent>
                <CardFooter className="mt-auto pt-6">
                  <div className="text-sm font-bold text-stone-400 group-hover:text-teal-600 flex items-center gap-2 transition-colors">
                    Ver Projetos <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </CardFooter>
              </Card>
            </Link>
          ))}
        </div>
      </section>

    </main>
  );
}
