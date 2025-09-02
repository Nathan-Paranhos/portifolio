import React from 'react';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      company: 'Fagron Tech',
      position: 'Software Support',
      period: 'Atual',
      location: 'Jundiaí, SP',
      status: 'current',
      responsibilities: [
        'Líder de Implantação ERP',
        'Banco de Dados (Firebird)',
        'Kanban',
        'Monday',
        'Dynamics 365',
        'Microsoft Project',
        'Power Automate',
        'SharePoint',
        'Gestão de Projetos',
        'Configuração e Homologação de Equipamentos',
        'Mapeamento e Padronização de Processos e Documentações',
        'Automação de Processos',
        'Azure DevOps'
      ]
    },
    {
      company: 'Abrylar Imóveis',
      position: 'Assistente Administrativo',
      period: 'Ago. 2023 – Jan. 2025',
      location: 'Jundiaí, SP',
      status: 'past',
      responsibilities: [
        'Gestão de processos administrativos e documentação',
        'Automação de tarefas repetitivas e relatórios',
        'Suporte em sistemas de gestão imobiliária',
        'Atendimento ao cliente e organização de dados'
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-900/80 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Experiência Profissional
          </h2>
          <div className="w-20 h-1 bg-[#AED6F1] mx-auto rounded-full"></div>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-gray-700/80 rounded-2xl p-8 shadow-lg border border-gray-600 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                <div className="flex items-start space-x-4 mb-4 lg:mb-0">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${
                    exp.status === 'current' ? 'bg-[#AED6F1]' : 'bg-gray-400'
                  }`}>
                    <Briefcase className="w-6 h-6 text-white" />
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1">
                      {exp.position}
                    </h3>
                    <p className="text-[#AED6F1] font-semibold text-lg mb-2">
                      {exp.company}
                    </p>
                  </div>
                </div>
                
                <div className="flex flex-col items-start lg:items-end text-left lg:text-right">
                  <div className="flex items-center space-x-2 text-gray-400 mb-2">
                    <Calendar className="w-4 h-4" />
                    <span className="font-medium">{exp.period}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-400">
                    <MapPin className="w-4 h-4" />
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>
              
              <div className="border-l-4 border-[#AED6F1] pl-6">
                <ul className="space-y-3">
                  {exp.responsibilities.map((responsibility, respIndex) => (
                    <li
                      key={respIndex}
                      className="text-gray-300 leading-relaxed flex items-start"
                    >
                      <span className="w-2 h-2 bg-[#AED6F1] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      {responsibility}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;