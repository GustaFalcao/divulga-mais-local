import { Card } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Maria Silva",
    business: "Padaria Doce Sabor",
    location: "São Paulo, SP",
    rating: 5,
    text: "O DivulgaMais transformou meu negócio! Agora recebo pedidos de toda a região e meus clientes me encontram facilmente. As avaliações melhoraram muito minha credibilidade.",
    avatar: "MS"
  },
  {
    name: "João Santos",
    business: "Oficina JS Mecânica",
    location: "Rio de Janeiro, RJ", 
    rating: 5,
    text: "Estava invisível no mercado digital. Com o DivulgaMais, minha oficina aparece nas buscas locais e consegui triplicar minha clientela em apenas 3 meses.",
    avatar: "JS"
  },
  {
    name: "Ana Costa",
    business: "Salão Beleza Pura",
    location: "Belo Horizonte, MG",
    rating: 5,
    text: "A plataforma é muito fácil de usar e as ferramentas de agendamento online revolucionaram meu atendimento. Recomendo para todos os empreendedores!",
    avatar: "AC"
  }
];

export const Testimonials = () => {
  return (
    <section className="py-24 gradient-hero">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Histórias de sucesso
            <span className="block text-yellow-300">de quem já cresceu</span>
          </h2>
          <p className="text-xl text-white/90">
            Veja como o DivulgaMais está transformando microempresas em todo o Brasil.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-8 bg-white/95 backdrop-blur-sm border-0 shadow-glow hover:shadow-brand transition-smooth hover:-translate-y-2">
              {/* Quote Icon */}
              <Quote className="w-8 h-8 text-brand-blue mb-4" />
              
              {/* Stars */}
              <div className="flex mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              
              {/* Testimonial Text */}
              <p className="text-gray-700 mb-6 leading-relaxed italic">
                "{testimonial.text}"
              </p>
              
              {/* Author Info */}
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-gradient-brand flex items-center justify-center text-white font-bold mr-4">
                  {testimonial.avatar}
                </div>
                <div>
                  <h4 className="font-bold text-brand-navy">{testimonial.name}</h4>
                  <p className="text-sm text-brand-blue font-medium">{testimonial.business}</p>
                  <p className="text-xs text-muted-foreground">{testimonial.location}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};