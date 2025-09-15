import { Button } from "@/components/ui/button";
import { Search, Menu } from "lucide-react";
import logoImage from "@/assets/divulgamais-logo.png";

export const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-white/20 shadow-sm">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img 
              src={logoImage} 
              alt="DivulgaMais Logo"
              className="w-10 h-10 object-contain"
            />
            <span className="text-2xl font-bold text-brand-navy">DivulgaMais</span>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#como-funciona" className="text-brand-navy hover:text-brand-blue transition-smooth font-medium">
              Como funciona
            </a>
            <a href="#vantagens" className="text-brand-navy hover:text-brand-blue transition-smooth font-medium">
              Vantagens
            </a>
            <a href="#precos" className="text-brand-navy hover:text-brand-blue transition-smooth font-medium">
              Preços
            </a>
            <a href="#contato" className="text-brand-navy hover:text-brand-blue transition-smooth font-medium">
              Contato
            </a>
          </nav>
          
          {/* Action Buttons */}
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm" className="hidden md:flex items-center gap-2 text-brand-navy hover:text-brand-blue">
              <Search className="w-4 h-4" />
              Buscar empresas
            </Button>
            
            <Button size="sm" className="gradient-brand text-white hover:opacity-90 font-medium">
              Cadastrar empresa
            </Button>
            
            {/* Mobile Menu */}
            <Button variant="ghost" size="sm" className="md:hidden">
              <Menu className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};