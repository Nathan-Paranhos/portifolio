import React from 'react';
import { GraduationCap, Calendar } from 'lucide-react';

const Education = () => {
  const educationItems = [
    {
      institution: 'Universidade Estácio',
      degree: 'Graduação em Engenharia de Software',
      period: '2025 – 2028',
      status: 'Em andamento',
      description: 'Foco em desenvolvimento de software, arquitetura de sistemas e metodologias ágeis.'
    },
    {
      institution: 'FAACG',
      degree: 'Técnico em Tecnologia da Informação',
      period: '2021 – 2022',
      status: 'Concluído',
      description: 'Formação técnica em desenvolvimento, redes e sistemas de informação.'
    },
    {
      institution: 'FAACG',
      degree: 'Ensino Médio',
      period: '2020 – 2022',
      status: 'Concluído',
      description: 'Formação básica com foco em exatas e tecnologia.'
    }
  ];

  return (
    <section id="education" className="py-20 bg-gray-900/80 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Formação Acadêmica
          </h2>
          <div className="w-20 h-1 bg-[#AED6F1] mx-auto rounded-full"></div>
        </div>

        <div className="space-y-8">
          {educationItems.map((item, index) => (
            <div
              key={index}
              className="bg-gray-700/80 rounded-2xl p-6 border border-gray-600 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div className="flex items-start space-x-4 mb-4 md:mb-0">
                  <div className="w-12 h-12 bg-[#AED6F1] rounded-xl flex items-center justify-center flex-shrink-0">
                    <GraduationCap className="w-6 h-6 text-white" />
                  </div>
                  
                  <div className="flex-grow">
                    <h3 className="text-xl font-bold text-white mb-1">
                      {item.degree}
                    </h3>
                    <p className="text-[#AED6F1] font-semibold mb-2">
                      {item.institution}
                    </p>
                    <p className="text-gray-300 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
                
                <div className="flex flex-col items-end text-right">
                  <div className="flex items-center space-x-2 text-gray-400 mb-2">
                    <Calendar className="w-4 h-4" />
                    <span className="font-medium">{item.period}</span>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    item.status === 'Em andamento' 
                      ? 'bg-[#AED6F1]/20 text-[#AED6F1]' 
                      : 'bg-green-800/60 text-green-300'
                  }`}>
                    {item.status}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;