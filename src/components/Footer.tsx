import { MapPin, Phone, Mail, Facebook, Instagram, Linkedin } from "lucide-react";
import logoImage from "@/assets/divulgamais-logo.png";

export const Footer = () => {
  return (
    <footer className="bg-brand-navy text-white pt-16 pb-8">
      <div className="container mx-auto px-6">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <img 
                src={logoImage} 
                alt="DivulgaMais Logo"
                className="w-10 h-10 object-contain filter brightness-0 invert"
              />
              <span className="text-2xl font-bold">DivulgaMais</span>
            </div>
            
            <p className="text-white/80 mb-6 max-w-md leading-relaxed">
              A plataforma que conecta microempresas aos seus clientes, oferecendo 
              visibilidade digital e ferramentas completas para o crescimento do seu negócio.
            </p>
            
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-smooth">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-smooth">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-smooth">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          {/* Links Column */}
          <div>
            <h4 className="font-bold text-lg mb-6">Links Úteis</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-white/80 hover:text-white transition-smooth">Como funciona</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-smooth">Vantagens</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-smooth">Preços</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-smooth">Cadastrar empresa</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-smooth">Buscar empresas</a></li>
            </ul>
          </div>
          
          {/* Contact Column */}
          <div>
            <h4 className="font-bold text-lg mb-6">Contato</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-brand-green" />
                <span className="text-white/80">São Paulo, SP</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-brand-green" />
                <span className="text-white/80">(11) 99999-9999</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-brand-green" />
                <span className="text-white/80">contato@divulgamais.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Footer */}
        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/60 text-sm">
              © 2024 DivulgaMais. Todos os direitos reservados.
            </p>
            
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-white/60 hover:text-white transition-smooth">
                Termos de Uso
              </a>
              <a href="#" className="text-white/60 hover:text-white transition-smooth">
                Política de Privacidade
              </a>
              <a href="#" className="text-white/60 hover:text-white transition-smooth">
                Suporte
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};