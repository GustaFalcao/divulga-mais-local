import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { UserPlus, Building2, Star, TrendingUp } from "lucide-react";

const steps = [
  {
    step: "01",
    icon: UserPlus,
    title: "Cadastre sua empresa",
    description: "Crie seu perfil em minutos com informações completas sobre seu negócio, horários e localização.",
  },
  {
    step: "02", 
    icon: Building2,
    title: "Complete seu perfil",
    description: "Adicione fotos, descrição dos serviços, formas de pagamento e todos os detalhes importantes.",
  },
  {
    step: "03",
    icon: Star,
    title: "Receba avaliações",
    description: "Clientes encontram você e deixam comentários e avaliações sobre seus produtos e serviços.",
  },
  {
    step: "04",
    icon: TrendingUp,
    title: "Cresça seu negócio",
    description: "Acompanhe métricas, responda clientes e veja sua empresa crescer com mais visibilidade.",
  }
];

export const HowItWorks = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-brand-navy mb-6">
            Como funciona o
            <span className="block gradient-brand bg-clip-text text-transparent">DivulgaMais</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Em poucos passos sua empresa estará online e recebendo novos clientes todos os dias.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {steps.map((step, index) => (
            <Card key={index} className="p-8 text-center border-0 shadow-card hover:shadow-brand transition-smooth relative overflow-hidden">
              {/* Step Number */}
              <div className="absolute -top-4 -right-4 w-16 h-16 gradient-brand rounded-full flex items-center justify-center">
                <span className="text-2xl font-bold text-white">{step.step}</span>
              </div>
              
              {/* Icon */}
              <div className="w-16 h-16 mx-auto mb-6 bg-brand-light-blue rounded-2xl flex items-center justify-center">
                <step.icon className="w-8 h-8 text-brand-blue" />
              </div>
              
              {/* Content */}
              <h3 className="text-xl font-bold text-brand-navy mb-4">
                {step.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
                {step.description}
              </p>
              
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-brand-blue to-brand-green opacity-30" />
              )}
            </Card>
          ))}
        </div>
        
        <div className="text-center">
          <Button size="lg" className="gradient-brand text-white hover:opacity-90 shadow-brand font-semibold px-8 py-6 text-lg">
            Começar agora gratuitamente
          </Button>
        </div>
      </div>
    </section>
  );
};