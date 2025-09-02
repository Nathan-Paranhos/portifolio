import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, MessageCircle, Linkedin, Github } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const whatsappMessage = `Olá Nathan! Meu nome é ${formData.name}. ${formData.message}`;
    const whatsappUrl = `https://wa.me/5511996961151?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Phone,
      label: 'Telefone',
      value: '(11) 99696-1151',
      link: 'tel:+5511996961151'
    },
    {
      icon: Mail,
      label: 'Email',
      value: 'paranhoscontato.n@gmail.com',
      link: 'mailto:paranhoscontato.n@gmail.com'
    },
    {
      icon: MapPin,
      label: 'Localização',
      value: 'Jundiaí, SP',
      link: null
    }
  ];

  const socialLinks = [
    {
      icon: MessageCircle,
      label: 'WhatsApp',
      link: 'https://wa.me/5511996961151',
      color: 'bg-green-500'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      link: 'https://www.linkedin.com/in/nathan-ps-/',
      color: 'bg-blue-500'
    },
    {
      icon: Github,
      label: 'GitHub',
      link: 'https://github.com/Nathan-Paranhos',
      color: 'bg-gray-800'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gray-900/80 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Vamos conversar?
          </h2>
          <div className="w-20 h-1 bg-[#AED6F1] mx-auto rounded-full mb-4"></div>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Estou sempre aberto a novos projetos e oportunidades. Entre em contato!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">
                Informações de Contato
              </h3>
              
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-4 p-4 bg-gray-700/60 rounded-xl hover:bg-[#AED6F1]/10 transition-colors duration-200"
                  >
                    <div className="w-10 h-10 bg-[#AED6F1] rounded-lg flex items-center justify-center">
                      <info.icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400 font-medium">{info.label}</p>
                      {info.link ? (
                        <a
                          href={info.link}
                          className="text-gray-200 font-semibold hover:text-[#AED6F1] transition-colors duration-200"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-gray-200 font-semibold">{info.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-xl font-bold text-white mb-4">
                Redes Sociais
              </h3>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-12 h-12 ${social.color} rounded-xl flex items-center justify-center hover:scale-110 transition-transform duration-200 shadow-lg`}
                  >
                    <social.icon className="w-6 h-6 text-white" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-700/60 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-6">
              Enviar Mensagem
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Nome
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-500 rounded-xl focus:ring-2 focus:ring-[#AED6F1] focus:border-transparent transition-all duration-200 bg-gray-600/80 text-white placeholder-gray-400"
                  placeholder="Seu nome completo"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-500 rounded-xl focus:ring-2 focus:ring-[#AED6F1] focus:border-transparent transition-all duration-200 bg-gray-600/80 text-white placeholder-gray-400"
                  placeholder="seu@email.com"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Mensagem
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-500 rounded-xl focus:ring-2 focus:ring-[#AED6F1] focus:border-transparent transition-all duration-200 bg-gray-600/80 text-white placeholder-gray-400 resize-none"
                  placeholder="Descreva seu projeto ou oportunidade..."
                />
              </div>
              
              <button
                type="submit"
                className="w-full bg-[#AED6F1] hover:bg-[#85C1E9] text-white font-semibold py-3 px-6 rounded-xl transition-all duration-200 transform hover:scale-105 shadow-lg flex items-center justify-center space-x-2"
              >
                <Send className="w-5 h-5" />
                <span>Enviar via WhatsApp</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;