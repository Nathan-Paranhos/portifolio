import React, { useEffect, useRef, useState } from 'react';
import { Code, Database, Cog, Smartphone } from 'lucide-react';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const skillCategories = [
    {
      icon: Code,
      title: 'Linguagens & Frameworks',
      skills: [
        'JavaScript',
        'Node.js',
        'Angular',
        'Python',
        'HTML5/CSS3'
      ]
    },
    {
      icon: Database,
      title: 'Banco de Dados',
      skills: [
        'Firebase',
        'SQL',
        'MongoDB',
        'Firebird'
      ]
    },
    {
      icon: Cog,
      title: 'Ferramentas & Automação',
      skills: [
        'Power Automate',
        'Dynamics 365',
        'Azure DevOps',
        'RPA',
        'SharePoint',
        'Monday.com',
        'Microsoft Project'
      ]
    },
    {
      icon: Smartphone,
      title: 'Desenvolvimento',
      skills: [
        'APIs REST',
        'Responsive Design',
        'Clean Code',
        'SOLID',
        'Kanban',
        'Gestão de Projetos'
      ]
    }
  ];

  return (
    <section ref={sectionRef} id="skills" className={`skills-section py-20 bg-gray-900/80 backdrop-blur-sm ${isVisible ? 'visible' : ''}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Habilidades Técnicas
          </h2>
          <div className="w-20 h-1 bg-[#AED6F1] mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="bg-gray-700/80 rounded-2xl p-8 border border-gray-600 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-[#AED6F1] rounded-xl flex items-center justify-center mr-4">
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white">
                  {category.title}
                </h3>
              </div>

              <div className="grid grid-cols-1 gap-3">
                {category.skills.map((skill, skillIndex) => {
                  const animationDelay = (categoryIndex * category.skills.length + skillIndex) * 200;
                  
                  return (
                    <div
                      key={skillIndex}
                      className="skill-item relative bg-gray-600/80 rounded-xl px-3 py-2 sm:px-4 sm:py-3 border border-gray-500 hover:border-[#AED6F1] hover:shadow-md transition-all duration-200 group overflow-hidden cursor-pointer"
                      style={{
                        '--animation-delay': `${animationDelay}ms`
                      } as React.CSSProperties}
                    >
                      <div className="skill-wave absolute inset-0 rounded-xl overflow-hidden">
                        <div
                          className="wave-fill absolute inset-0 bg-gradient-to-r from-[#AED6F1]/20 via-[#85C1E9]/30 to-[#5DADE2]/20"
                        />
                        <div className="wave-shimmer absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent" />
                      </div>
                      <span className="relative z-10 text-gray-200 font-medium group-hover:text-[#AED6F1] transition-colors duration-200 text-sm sm:text-base">
                        {skill}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
};

export default Skills;