import { Button } from "@/components/ui/button";
import { ArrowRight, Star, Users, MapPin } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 gradient-hero opacity-90" />
      
      {/* Background Image */}
      <div className="absolute inset-0 opacity-20">
        <img 
          src={heroImage} 
          alt="Microempresas conectadas digitalmente"
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-20 text-center text-white">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full px-4 py-2 mb-8 transition-bounce hover:scale-105">
            <Star className="w-4 h-4 text-yellow-300 fill-yellow-300" />
            <span className="text-sm font-medium">Plataforma #1 para Microempresas</span>
          </div>
          
          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Divulgue sua
            <span className="block gradient-text bg-gradient-to-r from-yellow-300 to-white bg-clip-text text-transparent">
              microempresa
            </span>
            de forma inteligente
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto">
            Conecte-se com clientes locais, receba avaliações e aumente sua visibilidade 
            com a plataforma que faz sua empresa ser encontrada.
          </p>
          
          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-8 mb-10 text-white/90">
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5" />
              <span className="font-semibold">+10.000 empresas</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5" />
              <span className="font-semibold">+500 cidades</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5 fill-yellow-300 text-yellow-300" />
              <span className="font-semibold">4.8/5 avaliação</span>
            </div>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-white text-brand-blue hover:bg-white/90 shadow-glow transition-smooth font-semibold px-8 py-6 text-lg"
            >
              Cadastrar minha empresa
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm font-semibold px-8 py-6 text-lg"
            >
              Buscar empresas
            </Button>
          </div>
        </div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full backdrop-blur-sm animate-pulse" />
      <div className="absolute bottom-20 right-10 w-16 h-16 bg-white/10 rounded-full backdrop-blur-sm animate-pulse delay-300" />
      <div className="absolute top-1/3 right-20 w-12 h-12 bg-white/10 rounded-full backdrop-blur-sm animate-pulse delay-700" />
    </section>
  );
};