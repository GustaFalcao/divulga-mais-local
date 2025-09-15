import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, CheckCircle, Zap } from "lucide-react";

export const CTA = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <Card className="relative overflow-hidden border-0 shadow-brand p-12 md:p-16 text-center gradient-hero">
          {/* Background Elements */}
          <div className="absolute top-0 left-0 w-32 h-32 bg-white/10 rounded-full -translate-x-16 -translate-y-16" />
          <div className="absolute bottom-0 right-0 w-40 h-40 bg-white/10 rounded-full translate-x-20 translate-y-20" />
          <div className="absolute top-1/2 left-10 w-24 h-24 bg-white/5 rounded-full" />
          
          {/* Content */}
          <div className="relative z-10 max-w-4xl mx-auto text-white">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full px-6 py-3 mb-8">
              <Zap className="w-5 h-5 text-yellow-300" />
              <span className="font-semibold">Cadastro 100% Gratuito</span>
            </div>
            
            {/* Headline */}
            <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Pronto para fazer sua empresa
              <span className="block text-yellow-300">decolar?</span>
            </h2>
            
            {/* Subtitle */}
            <p className="text-xl md:text-2xl mb-10 text-white/90 max-w-3xl mx-auto">
              Junte-se a milhares de empreendedores que já estão crescendo com o DivulgaMais. 
              Comece hoje mesmo, é gratuito!
            </p>
            
            {/* Benefits List */}
            <div className="flex flex-wrap justify-center gap-6 mb-10">
              {[
                "Cadastro em 5 minutos",
                "Sem mensalidades",
                "Suporte especializado",
                "Ferramentas completas"
              ].map((benefit, index) => (
                <div key={index} className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                  <CheckCircle className="w-4 h-4 text-green-300" />
                  <span className="font-medium">{benefit}</span>
                </div>
              ))}
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                size="lg" 
                className="bg-white text-brand-blue hover:bg-white/90 shadow-glow font-bold px-10 py-6 text-lg"
              >
                Começar gratuitamente
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              
              <Button 
                size="lg" 
                variant="ghost" 
                className="text-white hover:bg-white/10 font-bold px-10 py-6 text-lg"
              >
                Falar com especialista
              </Button>
            </div>
            
            {/* Trust indicators */}
            <div className="mt-10 pt-10 border-t border-white/20">
              <p className="text-white/70 mb-4">Empresas que já confiam no DivulgaMais:</p>
              <div className="flex justify-center items-center gap-8 text-white/60 text-sm">
                <span>+10.000 empresas cadastradas</span>
                <span>•</span>
                <span>+500 cidades atendidas</span>
                <span>•</span>
                <span>4.8★ de avaliação</span>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};