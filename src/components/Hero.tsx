import React from 'react';
import { Github, Linkedin, Phone, Download } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-800 via-[#AED6F1]/10 to-gray-900 pt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-20">
        <div className="animate-fade-in-up">
          <div className="w-48 h-48 mx-auto mb-8 rounded-full shadow-xl overflow-hidden">
            <img 
              src="/img/Bal.jpg" 
              alt="Nathan Silva" 
              className="w-full h-full object-cover"
            />
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
            Nathan Silva
          </h1>
          
          <h2 className="text-xl sm:text-2xl text-[#AED6F1] font-semibold mb-6">
            Estudante de Engenharia de Software
          </h2>
          
          <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-12 leading-relaxed">
            Experiência em desenvolvimento fullstack (JavaScript, Node.js, Firebase), 
            criação de APIs, automações, RPA e sistemas ERP/CRM. Perfil orientado a resultados, 
            com foco em eficiência, escalabilidade e inovação.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <a
              href="https://github.com/Nathan-Paranhos"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 bg-gray-700/80 hover:bg-[#AED6F1]/20 border border-gray-600 hover:border-[#AED6F1] px-6 py-3 rounded-full transition-all duration-300 shadow-md hover:shadow-lg group"
            >
              <Github className="w-5 h-5 text-gray-300 group-hover:text-[#AED6F1] transition-colors duration-200" />
              <span className="text-gray-200 group-hover:text-white font-medium">GitHub</span>
            </a>
            
            <a
              href="https://www.linkedin.com/in/nathan-ps-/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 bg-gray-700/80 hover:bg-[#AED6F1]/20 border border-gray-600 hover:border-[#AED6F1] px-6 py-3 rounded-full transition-all duration-300 shadow-md hover:shadow-lg group"
            >
              <Linkedin className="w-5 h-5 text-gray-300 group-hover:text-[#AED6F1] transition-colors duration-200" />
              <span className="text-gray-200 group-hover:text-white font-medium">LinkedIn</span>
            </a>
            
            <a
              href="https://wa.me/5511996961151"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 bg-[#AED6F1] hover:bg-[#85C1E9] text-white px-6 py-3 rounded-full transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105"
            >
              <Phone className="w-5 h-5" />
              <span className="font-medium">WhatsApp</span>
            </a>
            
            <a
              href="/pdf/Curriculo.pdf"
              download="Curriculo_Nathan_Silva.pdf"
              className="flex items-center space-x-2 bg-gray-600 hover:bg-gray-500 text-white px-6 py-3 rounded-full transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105"
            >
              <Download className="w-5 h-5" />
              <span className="font-medium">Currículo</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;