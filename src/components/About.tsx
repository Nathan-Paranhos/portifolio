import React from 'react';
import { Target, Users, FileText, Award } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: Users,
      title: 'Liderança Técnica',
      description: 'Experiência em coordenação de equipes e projetos de desenvolvimento'
    },
    {
      icon: FileText,
      title: 'Documentação',
      description: 'Padronização de processos e documentação técnica detalhada'
    },
    {
      icon: Target,
      title: 'Metodologias Ágeis',
      description: 'Prática em Scrum, Kanban e gestão de projetos (PMBOK)'
    },
    {
      icon: Award,
      title: 'Qualidade de Software',
      description: 'Foco em testes de QA, integração de sistemas e automação'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-900/80 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Sobre mim
          </h2>
          <div className="w-20 h-1 bg-[#AED6F1] mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-300 leading-relaxed">
              Como estudante de Engenharia de Software com experiência prática em desenvolvimento, 
              tenho paixão por criar soluções tecnológicas que realmente fazem a diferença.
            </p>
            
            <p className="text-lg text-gray-300 leading-relaxed">
              Minha jornada inclui desenvolvimento fullstack, automação de processos e RPA, 
              sempre com foco em eficiência e escalabilidade. Trabalho com tecnologias modernas 
              como JavaScript, Node.js, Firebase e ferramentas de automação empresarial.
            </p>
            
            <p className="text-lg text-gray-300 leading-relaxed">
              Tenho experiência em sistemas como Dynamics 365, Monday.com, Microsoft Project, 
              Power Automate e SharePoint, além de dominar metodologias ágeis e gestão de projetos.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="bg-gray-700/80 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-600"
              >
                <div className="w-12 h-12 bg-[#AED6F1]/20 rounded-xl flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-[#AED6F1]" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;