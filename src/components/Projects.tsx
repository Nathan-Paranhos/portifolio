import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Grifo Vistorias API',
      description: 'Sistema completo de vistorias imobiliárias, multiempresa, portal web e app integrado com APIs robustas e interface responsiva.',
      technologies: ['JavaScript', 'Node.js', 'Firebase', 'API REST'],
      image: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=600',
      links: {
        live: 'https://grifo-api.onrender.com/api/docs/'
      }
    },
    {
      title: 'LaudoBot',
      description: 'Automação via WhatsApp para geração de laudos em PDF com RPA e Firebase, integrando múltiplas APIs e processamento automatizado.',
      technologies: ['Python', 'RPA', 'Firebase', 'WhatsApp API', 'PDF'],
      image: 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=600',
      status: 'Em andamento',
      links: {}
    },
    {
      title: 'Visionária Page',
      description: 'Desenvolvimento de landing pages responsivas e integração com sistemas de gestão, focando em conversão e experiência do usuário.',
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design'],
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600',
      links: {
        live: 'https://visionariavistorias.com.br/'
      }
    },
    {
      title: 'TCC com Arduino',
      description: 'Solução automatizada usando sensores e microcontroladores Arduino para monitoramento e controle de sistemas IoT.',
      technologies: ['Arduino', 'C++', 'IoT', 'Sensores', 'Automação'],
      image: 'https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?auto=compress&cs=tinysrgb&w=600',
      links: {
        github: 'https://github.com/Nathan-Paranhos'
      }
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-900/80 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Projetos
          </h2>
          <div className="w-20 h-1 bg-[#AED6F1] mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-700/80 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-600"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3">
                  {project.title}
                </h3>
                
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-[#AED6F1]/20 text-[#AED6F1] px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-4">
                  {project.links.live && (
                    <a
                      href={project.links.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 bg-[#AED6F1] hover:bg-[#85C1E9] text-white px-4 py-2 rounded-lg transition-all duration-200 transform hover:scale-105"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>Ver projeto</span>
                    </a>
                  )}
                  
                  {project.links.github && (
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 border border-gray-500 hover:border-[#AED6F1] text-gray-300 hover:text-[#AED6F1] px-4 py-2 rounded-lg transition-all duration-200"
                    >
                      <Github className="w-4 h-4" />
                      <span>GitHub</span>
                    </a>
                  )}
                  
                  {project.status && (
                    <div className="flex items-center space-x-2 bg-yellow-600/20 border border-yellow-500 text-yellow-400 px-4 py-2 rounded-lg">
                      <span className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></span>
                      <span>{project.status}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;