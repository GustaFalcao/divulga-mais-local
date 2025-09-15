import { Card } from "@/components/ui/card";
import { MapPin, MessageCircle, Star, TrendingUp, Users, Shield } from "lucide-react";

const features = [
  {
    icon: MapPin,
    title: "Localização Inteligente",
    description: "Seus clientes encontram você facilmente através de busca por localização e categorias.",
    color: "text-brand-blue"
  },
  {
    icon: Star,
    title: "Sistema de Avaliações",
    description: "Receba feedback dos clientes e construa uma reputação sólida online.",
    color: "text-yellow-500"
  },
  {
    icon: MessageCircle,
    title: "Comentários e Reviews",
    description: "Interaja com seus clientes e responda suas dúvidas em tempo real.",
    color: "text-brand-green"
  },
  {
    icon: TrendingUp,
    title: "Analytics Detalhado",
    description: "Acompanhe visualizações, cliques e o crescimento do seu negócio.",
    color: "text-purple-600"
  },
  {
    icon: Users,
    title: "Perfil Completo",
    description: "Mostre todos os detalhes da sua empresa: horários, serviços, contatos e muito mais.",
    color: "text-brand-blue"
  },
  {
    icon: Shield,
    title: "Verificação de Empresas",
    description: "Seja uma empresa verificada e ganha mais credibilidade com seus clientes.",
    color: "text-brand-green"
  }
];

export const Features = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-brand-light-blue to-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-brand-navy mb-6">
            Tudo que sua empresa precisa
            <span className="block text-brand-blue">em um só lugar</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Ferramentas completas para divulgar, gerenciar e fazer sua microempresa crescer no mercado digital.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="p-8 border-0 shadow-card hover:shadow-brand transition-smooth hover:-translate-y-2 gradient-card"
            >
              <div className="flex flex-col items-center text-center">
                <div className={`w-16 h-16 rounded-2xl bg-white shadow-md flex items-center justify-center mb-6 ${feature.color}`}>
                  <feature.icon className="w-8 h-8" />
                </div>
                
                <h3 className="text-xl font-bold text-brand-navy mb-4">
                  {feature.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};