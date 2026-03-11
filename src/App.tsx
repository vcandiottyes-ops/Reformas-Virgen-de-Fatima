/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { 
  Phone, 
  MessageCircle, 
  MapPin, 
  Clock, 
  CheckCircle2, 
  ArrowRight, 
  Home, 
  ChefHat, 
  Bath, 
  Layout, 
  HardHat, 
  Star, 
  ChevronDown,
  Calculator,
  X,
  Menu
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const WHATSAPP_NUMBER = "627628074";
const CONTACT_WHATSAPP = "604334352";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [showCatalog, setShowCatalog] = useState(false);
  const [formData, setFormData] = useState({
    nombre: '',
    telefono: '',
    email: '',
    tipo: 'Reforma integral',
    mensaje: ''
  });

  const catalogProjects = [
    {
      img: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,fit=crop/A0xv9GRk6JIboWkx/fachada4copy1-Yan0QlJbWoTK8pRz.jpeg",
      title: "RESTAURACIONES DE FACHADA",
      desc: "La fachada presentaba un deterioro avanzado y fue objeto de intervención municipal. Tras una rehabilitación integral, se recuperó por completo su funcionalidad y estética, recibiendo reconocimiento por parte del Ayuntamiento. Santa Coloma de Cervello."
    },
    {
      img: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,fit=crop/A0xv9GRk6JIboWkx/1000249669-Y4LP9Belg8ioNqLz.jpg",
      title: "RESTAURACIONES DE FACHADA",
      desc: "Fachada con años sin intervención, completamente remodelada, combinando el carácter original del edificio con un diseño actualizado, adaptado al gusto de los propietarios y desarrollado con nuestras propuestas técnicas y creativas. Sant Vicenç dels Horts"
    },
    {
      img: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,fit=crop/A0xv9GRk6JIboWkx/1000310830-A85Mz1XzqyCBJaaM.jpg",
      title: "RESTAURACIONES DE FACHADA",
      desc: "Una fachada de base tradicional, renovada mediante un desarrollo moderno, ajustado a las necesidades funcionales, estéticas y económicas de sus propietarios, optimizando tanto la reparación como el resultado final. Cornellà"
    },
    {
      img: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,fit=crop/A0xv9GRk6JIboWkx/1000310802-AQEeq2oqD3iBWELn.jpg",
      title: "RESTAURACIONES DE FACHADA",
      desc: "Esta intervención de fachada se realizó con especial cuidado en la conservación de los elementos originales y el respeto por la estética del edificio, logrando un resultado de alta calidad. Sant Vicenç dels Horts"
    },
    {
      img: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,fit=crop/A0xv9GRk6JIboWkx/piscina1-YbN4Lp1DNVSV9jDj.jpeg",
      title: "RESTAURACION Y CONSTRUCCION",
      desc: "Se realizó la adaptación del terreno para la instalación de una piscina versátil, considerando criterios de topografía, drenaje y accesibilidad, diseñada a medida para optimizar el uso familiar y el confort estival. Castelldefels"
    },
    {
      img: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,fit=crop/A0xv9GRk6JIboWkx/7-8pw8v36oDMbWLRhL.jpeg",
      title: "Soluciones Cerámicas y Paisajismo",
      desc: "Ejecución de pavimentación exterior y muretes perimetrales en ladrillo visto tradicional. El proyecto destaca por la integración técnica de soleras niveladas con la preservación de arbolado de gran porte, optimizando la sombra natural y la durabilidad estructural mediante materiales de alta resistencia a la intemperie. Av. les planes 2"
    },
    {
      img: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,fit=crop/A0xv9GRk6JIboWkx/2-Bj3UO82vsSrhTEiN.jpeg",
      title: "REFORMA BAÑO",
      desc: "Se sustituyó la bañera por un plato de ducha de piedra, diseñado para adaptarse rectangularmente a las necesidades del usuario. Las paredes se revistieron con un material de piedra ergonómico, pensado para proporcionar comodidad y alivio en espalda y pies. Sant Boi"
    },
    {
      img: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,fit=crop/A0xv9GRk6JIboWkx/4-jKDoRQMHKhBtkxFw.jpeg",
      title: "RESTAURAR PARED",
      desc: "Se llevó a cabo la reforma de las paredes blancas y de la losa que sostiene la estatua de Cristo, garantizando la conservación estructural y estética del conjunto. Iglesia San Vicenç, Horts"
    }
  ];

  const extraImages = [
    "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,fit=crop/A0xv9GRk6JIboWkx/1000249667-AE07WjnPR6FKgJgk.jpg",
    "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,fit=crop/A0xv9GRk6JIboWkx/1000249655-ALp2WZ48JzTe9zw1.jpg",
    "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,fit=crop/A0xv9GRk6JIboWkx/reforma-integral-AMqDE9kZ0jcyzBOV.jpg",
    "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,fit=crop/A0xv9GRk6JIboWkx/1000304329-YbN4g03a9qT57v73.jpg"
  ];

  useEffect(() => {
    const timer = setTimeout(() => setShowPopup(true), 5000);
    return () => clearTimeout(timer);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `*Nueva Solicitud de Presupuesto*%0A%0A*Nombre:* ${formData.nombre}%0A*Teléfono:* ${formData.telefono}%0A*Email:* ${formData.email}%0A*Tipo:* ${formData.tipo}%0A*Mensaje:* ${formData.mensaje}`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, '_blank');
  };

  const navLinks = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Servicios', href: '#servicios' },
    { name: 'Por qué nosotros', href: '#experiencia' },
    { name: 'Proceso', href: '#proceso' },
    { name: 'Contacto', href: '#contacto' },
  ];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-24">
            <div className="flex items-center">
              <img 
                src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=768,fit=crop,q=95/A0xv9GRk6JIboWkx/lvsf-logo-YD0EoQb1NWtl87kM.png" 
                alt="Logo Reformas Linda Vista" 
                className="h-20 w-auto"
                referrerPolicy="no-referrer"
              />
            </div>
            
            {/* Desktop Nav */}
            <nav className="hidden md:flex space-x-8 items-center">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  className={`text-slate-600 hover:text-accent transition-colors ${link.name === 'Por qué nosotros' ? 'font-bold text-lg bg-slate-100 px-3 py-1 rounded-lg' : 'font-medium'}`}
                >
                  {link.name}
                </a>
              ))}
            </nav>

            <div className="hidden md:flex items-center space-x-4">
              <a 
                href={`tel:${CONTACT_WHATSAPP}`} 
                className="flex items-center text-slate-700 font-semibold"
              >
                <Phone className="w-4 h-4 mr-2 text-accent" />
                604 33 43 52
              </a>
              <a href="#contacto" className="btn-primary py-2 px-6 text-sm">
                Presupuesto Gratis
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-slate-700">
                {isMenuOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-b border-slate-200 overflow-hidden"
            >
              <div className="px-4 pt-2 pb-6 space-y-1">
                {navLinks.map((link) => (
                  <a 
                    key={link.name} 
                    href={link.href} 
                    onClick={() => setIsMenuOpen(false)}
                    className="block px-3 py-2 text-base font-medium text-slate-700 hover:text-accent"
                  >
                    {link.name}
                  </a>
                ))}
                <div className="pt-4 flex flex-col space-y-3">
                  <a href={`tel:${CONTACT_WHATSAPP}`} className="flex items-center px-3 text-slate-700">
                    <Phone className="w-4 h-4 mr-2 text-accent" />
                    604 33 43 52
                  </a>
                  <a href="#contacto" className="btn-primary text-center">
                    Presupuesto Gratis
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main>
        {/* Hero Section */}
        <section id="inicio" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img 
              src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=768,h=717,fit=crop/A0xv9GRk6JIboWkx/4-jKDoRQMHKhBtkxFw.jpeg" 
              alt="Reforma de lujo" 
              className="w-full h-full object-cover opacity-10"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-slate-50/50 to-slate-50"></div>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h1 className="text-5xl lg:text-7xl font-bold text-slate-900 leading-tight mb-2">
                  Tu reforma en manos de los <span className="text-accent">Expertos</span>
                </h1>
                <p className="text-2xl font-bold text-slate-800 mb-6">Todo bajo la Dirección, Supervisión y Experiencia de un Arquitecto con Más de 47 años transformando viviendas con profesionalidad y compromiso.</p>
                <p className="text-xl text-slate-600 mb-4 leading-relaxed">
                  Dinos <span className="font-bold text-xl text-slate-900">Qué</span> necesitas, <span className="font-bold text-xl text-slate-900">Cómo</span> lo imaginas y <span className="font-bold text-xl text-slate-900">Cuándo</span> quieres empezar y nosotros transformaremos tu vivienda/local en un espacio que imaginas (moderno, funcional y pensado para la comodidad de tu familia/clientes) nos encargamos de todo el proceso hasta el resultado final. <a href="#contacto" className="text-blue-600 hover:text-blue-800 font-bold underline">Haz clic</a>
                </p>

                <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="flex items-center text-sm text-slate-600">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 mr-2" /> Atención directa
                  </div>
                  <div className="flex items-center text-sm text-slate-600">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 mr-2" /> +47 años de experiencia
                  </div>
                  <div className="flex items-center text-sm text-slate-600">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 mr-2" /> Calidad garantizada
                  </div>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative"
              >
                <div className="rounded-3xl overflow-hidden shadow-2xl">
                  <img 
                    src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=768,h=717,fit=crop/A0xv9GRk6JIboWkx/4-jKDoRQMHKhBtkxFw.jpeg" 
                    alt="Arquitecto trabajando" 
                    className="w-full h-auto"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 glass-card p-6 rounded-2xl max-w-[200px]">
                  <p className="text-3xl font-bold text-accent">47+</p>
                  <p className="text-sm text-slate-600 font-medium">Años transformando hogares en Baix Llobregat</p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Connection Section */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-8">Imagina tu vivienda como siempre la has querido</h2>
            <p className="text-lg text-slate-600 mb-6">
              Tal vez quieres una cocina más moderna, un baño renovado o transformar completamente tu vivienda. Quizás necesitas más espacio, más luz o una mejor distribución.
            </p>
            <p className="text-2xl font-serif italic text-accent mb-8">
              "Sea cual sea tu idea... Nosotros la convertimos en realidad."
            </p>
            <p className="text-lg text-slate-600">
              Durante más de 47 años hemos ayudado a propietarios a transformar sus viviendas en espacios más cómodos, funcionales y duraderos.
            </p>
          </div>
        </section>

        {/* Why Choose Us */}
        <section id="experiencia" className="py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Experiencia que marca la diferencia</h2>
              <p className="text-slate-600 max-w-2xl mx-auto">Cuando realizas una reforma, necesitas profesionales con experiencia real y visión técnica.</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { title: 'Arquitecto al mando', desc: 'Atención directa y supervisión técnica por un arquitecto colegiado.', icon: <HardHat className="w-8 h-8" /> },
                { title: '47 Años de Trayectoria', desc: 'Casi medio siglo de conocimientos aplicados a tu proyecto.', icon: <Clock className="w-8 h-8" /> },
                { title: 'Soluciones Duraderas', desc: 'Materiales de primera y técnicas que garantizan longevidad.', icon: <CheckCircle2 className="w-8 h-8" /> },
                { title: 'Local y Cercano', desc: 'Especialistas en la normativa y estilo de Baix Llobregat.', icon: <MapPin className="w-8 h-8" /> },
              ].map((item, i) => (
                <div key={i} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-slate-100">
                  <div className="text-accent mb-4">{item.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services */}
        <section id="servicios" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Reformas integrales y proyectos de construcción</h2>
              <p className="text-slate-600">Realizamos todo tipo de proyectos adaptados a cada cliente.</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { title: 'Reformas Integrales', desc: 'Transformamos completamente tu casa o piso para adaptarlo a tu estilo de vida.', icon: <Home />, img: 'https://www.kuboreformas.com/wp-content/uploads/reforma-integral-de-vivienda.jpg' },
                { title: 'Reformas de Cocina', desc: 'Diseñamos cocinas modernas, funcionales y adaptadas a tu día a día.', icon: <ChefHat />, img: 'https://dottointeriorismo.com/wp-content/uploads/2021/04/reforma-piso-donosti-gunartea-24.jpg' },
                { title: 'Reformas de Baño', desc: 'Renovamos tu baño con soluciones prácticas, elegantes y duraderas.', icon: <Bath />, img: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&q=80&w=600' },
                { title: 'Redistribución', desc: 'Optimizamos tu vivienda para aprovechar mejor cada metro cuadrado.', icon: <Layout />, img: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&q=80&w=600' },
                { title: 'Albañilería y Estructuras', desc: 'Trabajos estructurales, tabiquería y pavimentos con 45 años de maestría.', icon: <HardHat />, img: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=800' },
                { title: 'Oficinas y Locales', desc: 'Transformamos tu espacio comercial en el entorno que imaginas.', icon: <Layout />, img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=600' },
              ].map((service, i) => (
                <div key={i} className="group rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300">
                  <div className="h-48 overflow-hidden">
                    <img src={service.img} alt={service.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" referrerPolicy="no-referrer" />
                  </div>
                  <div className="p-6">
                    <div className="text-accent mb-3">{service.icon}</div>
                    <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                    <p className="text-slate-600 text-sm">{service.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section id="proceso" className="py-20 bg-slate-700 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Así hacemos realidad tu reforma</h2>
              <p className="text-slate-400">Un proceso estructurado para tu tranquilidad.</p>
            </div>
            <div className="grid md:grid-cols-5 gap-8">
              {[
                { step: '01', title: 'Escuchamos', desc: 'Analizamos lo que necesitas y quieres conseguir.' },
                { step: '02', title: 'Diseñamos', desc: 'Creamos un proyecto adaptado a tu vivienda y presupuesto.' },
                { step: '03', title: 'Planificamos', desc: 'Organizamos cada fase para evitar retrasos.' },
                { step: '04', title: 'Ejecutamos', desc: 'Supervisión profesional durante toda la obra.' },
                { step: '05', title: 'Entrega', desc: 'Tu vivienda lista para disfrutar.' },
              ].map((item, i) => (
                <div key={i} className="relative">
                  <div className="text-5xl font-bold text-white/10 mb-4">{item.step}</div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-slate-400 text-sm">{item.desc}</p>
                  {i < 4 && <div className="hidden lg:block absolute top-8 -right-4 text-accent"><ArrowRight /></div>}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Lo que dicen nuestros clientes</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { name: 'María García', text: 'Una reforma excelente. Se nota la experiencia desde el primer momento. El arquitecto estuvo pendiente de cada detalle.' },
                { name: 'Joan Rovira', text: 'Muy profesionales. Nos asesoraron durante todo el proceso y cumplieron los plazos, algo difícil de encontrar hoy en día.' },
                { name: 'Carla Martínez', text: 'El resultado fue incluso mejor de lo que imaginábamos. La redistribución de espacios nos ha cambiado la vida.' },
              ].map((t, i) => (
                <div key={i} className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
                  <div className="flex text-yellow-400 mb-4">
                    {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                  </div>
                  <p className="text-slate-600 mb-6 italic">"{t.text}"</p>
                  <p className="font-bold">{t.name}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section id="contacto" className="py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16">
              <div>
                <h2 className="text-3xl font-bold mb-6">Comienza hoy tu Proyecto de Reforma</h2>
                <div className="text-lg text-slate-600 mb-8 space-y-4">
                  <p>
                    Cuéntanos qué necesitas, cómo imaginas tu espacio y cuándo te gustaría empezar.<br />
                    Nuestro equipo se encargará de todo el proceso de reforma, desde la planificación hasta el resultado final.
                  </p>
                  <p className="font-bold text-slate-900">
                    Tú imaginas el cambio. Nosotros lo hacemos realidad.
                  </p>
                </div>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-blue-100 p-3 rounded-lg text-accent mr-4">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="font-bold">Ubicación</p>
                      <p className="text-slate-600">Calle del Riu 87, San Vicente dels Horts, 08620, Barcelona</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-blue-100 p-3 rounded-lg text-accent mr-4">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="font-bold">Teléfono / WhatsApp</p>
                      <p className="text-slate-600">604 33 43 52</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-blue-100 p-3 rounded-lg text-accent mr-4">
                      <Clock className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="font-bold">Horario</p>
                      <p className="text-slate-600">Lunes a Viernes: 8 am - 3 pm<br />Sábados: 8 am - 2 pm</p>
                    </div>
                  </div>
                </div>

                <div className="mt-12 rounded-2xl overflow-hidden h-64 shadow-md">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2994.474681313674!2d2.0108!3d41.3917!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a4907777777777%3A0x7777777777777777!2sCarrer%20del%20Riu%2C%2087%2C%2008620%20Sant%20Vicen%C3%A7%20dels%20Horts%2C%20Barcelona!5e0!3m2!1ses!2ses!4v1710000000000!5m2!1ses!2ses" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen 
                    loading="lazy"
                  ></iframe>
                </div>
              </div>

              <div className="bg-white p-8 sm:p-12 rounded-3xl shadow-xl border border-slate-100">
                <h3 className="text-2xl font-bold mb-6">Solicitar presupuesto</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">Nombre</label>
                      <input 
                        type="text" 
                        name="nombre" 
                        required 
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all"
                        placeholder="Tu nombre"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">Teléfono</label>
                      <input 
                        type="tel" 
                        name="telefono" 
                        required 
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all"
                        placeholder="600 000 000"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Email</label>
                    <input 
                      type="email" 
                      name="email" 
                      required 
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all"
                      placeholder="tu@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Tipo de reforma</label>
                    <select 
                      name="tipo" 
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all bg-white"
                    >
                      <option>Reforma integral</option>
                      <option>Cocina</option>
                      <option>Baño</option>
                      <option>Local comercial</option>
                      <option>Otro</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Mensaje</label>
                    <textarea 
                      name="mensaje" 
                      rows={4} 
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all"
                      placeholder="Cuéntanos brevemente tu idea..."
                    ></textarea>
                  </div>
                  <button type="submit" className="w-full btn-primary py-4 text-lg">
                    Enviar solicitud por WhatsApp
                  </button>
                  <p className="text-xs text-slate-400 text-center mt-4">
                    Al enviar este formulario, aceptas que nos pongamos en contacto contigo para ofrecerte el presupuesto solicitado.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Local SEO Section */}
        <section className="py-12 bg-blue-50/50 border-t border-slate-100">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <p className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-6">Trabajamos en todo el Baix Llobregat</p>
            <div className="flex flex-wrap justify-center gap-4 text-slate-500 font-medium">
              <span>Cornellà</span> • <span>Sant Boi</span> • <span>Gavà</span> • <span>Viladecans</span> • <span>Castelldefels</span> • <span>Sant Feliu</span> • <span>Sant Vicenç dels Horts</span> • <span>Molins de Rei</span>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-slate-50">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">Preguntas Frecuentes</h2>
            <div className="space-y-4">
              {[
                { q: '¿Cuánto tiempo tarda una reforma integral?', a: 'Depende del tamaño de la vivienda, pero una reforma integral suele durar entre 2 y 4 meses. Nosotros planificamos cada fase para evitar retrasos innecesarios.' },
                { q: '¿El presupuesto tiene algún coste?', a: 'No, el primer presupuesto y la visita técnica son totalmente gratuitos y sin compromiso.' },
                { q: '¿Os encargáis de los permisos de obra?', a: 'Sí, como arquitectos nos encargamos de toda la gestión técnica y administrativa con el ayuntamiento correspondiente en Baix Llobregat.' },
                { q: '¿Qué garantía ofrecéis?', a: 'Ofrecemos garantía total sobre la ejecución de la obra y los materiales utilizados, respaldada por nuestra trayectoria de 47 años.' },
              ].map((faq, i) => (
                <details key={i} className="group bg-white rounded-xl border border-slate-200 p-6 [&_summary::-webkit-details-marker]:hidden">
                  <summary className="flex items-center justify-between cursor-pointer">
                    <h3 className="text-lg font-bold text-slate-900">{faq.q}</h3>
                    <ChevronDown className="w-5 h-5 text-slate-500 group-open:rotate-180 transition-transform" />
                  </summary>
                  <p className="mt-4 text-slate-600 leading-relaxed">{faq.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            <div>
              <img 
                src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=768,fit=crop,q=95/A0xv9GRk6JIboWkx/lvsf-logo-YD0EoQb1NWtl87kM.png" 
                alt="Logo Footer" 
                className="h-14 w-auto mb-6 brightness-0 invert"
                referrerPolicy="no-referrer"
              />
              <p className="text-slate-400 text-sm leading-relaxed">
                Reformas - Linda Vista Nuestra Señora de Fatima S.L.<br />
                Transformamos tu hogar y/o oficina comercial en el espacio que imaginas con la seguridad de 47 años de experiencia arquitectónica.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-6">Enlaces Rápidos</h4>
              <ul className="space-y-3 text-slate-400 text-sm">
                <li><a href="#inicio" className="hover:text-white transition-colors">Inicio</a></li>
                <li><a href="#servicios" className="hover:text-white transition-colors">Servicios</a></li>
                <li><a href="#contacto" className="hover:text-white transition-colors">Contacto</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-6">Contacto Directo</h4>
              <ul className="space-y-3 text-slate-400 text-sm">
                <li className="flex items-center"><Phone className="w-4 h-4 mr-2 text-accent" /> 604 33 43 52</li>
                <li className="flex items-center"><MessageCircle className="w-4 h-4 mr-2 text-accent" /> WhatsApp: 627 62 80 74</li>
                <li className="flex items-center"><MapPin className="w-4 h-4 mr-2 text-accent" /> Calle del Riu 87, San Vicente dels Horts</li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-white/10 text-center text-slate-500 text-xs">
            © {new Date().getFullYear()} Reformas Linda Vista Nuestra Señora de Fatima S.L. Todos los derechos reservados.
          </div>
        </div>
      </footer>

      {/* Floating Buttons */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end space-y-4">
        {/* Trabajos Realizados Button */}
        <button 
          onClick={() => setShowCatalog(true)}
          className="bg-slate-800 text-white px-6 py-4 rounded-full shadow-2xl hover:scale-110 transition-transform duration-300 flex items-center justify-center font-bold"
        >
          <Layout className="w-6 h-6 mr-2" />
          Trabajos Realizados
        </button>

        {/* Floating WhatsApp Button */}
        <a 
          href={`https://wa.me/${CONTACT_WHATSAPP}`} 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-whatsapp text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform duration-300 flex items-center justify-center group"
        >
          <MessageCircle className="w-8 h-8" />
          <span className="max-w-0 overflow-hidden group-hover:max-w-xs group-hover:ml-2 transition-all duration-500 whitespace-nowrap font-bold">
            ¿Hablamos por WhatsApp?
          </span>
        </a>
      </div>

      {/* Catalog Modal */}
      <AnimatePresence>
        {showCatalog && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-sm"
          >
            <motion.div 
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="bg-white rounded-3xl w-full max-w-5xl max-h-[90vh] overflow-hidden shadow-2xl flex flex-col"
            >
              <div className="p-6 border-b border-slate-100 flex justify-between items-center bg-slate-50">
                <h2 className="text-2xl font-bold text-slate-900">Proyectos Realizados</h2>
                <button 
                  onClick={() => setShowCatalog(false)}
                  className="p-2 hover:bg-slate-200 rounded-full transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              
              <div className="flex-1 overflow-y-auto p-6 space-y-12 custom-scrollbar">
                <div className="grid md:grid-cols-2 gap-8">
                  {catalogProjects.map((project, i) => (
                    <div key={i} className="group bg-slate-50 rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-md transition-all">
                      <div className="h-64 overflow-hidden">
                        <img 
                          src={project.img} 
                          alt={project.title} 
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                      <div className="p-6">
                        <h3 className="text-lg font-bold text-accent mb-3">{project.title}</h3>
                        <p className="text-slate-600 text-sm leading-relaxed">{project.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="pt-8 border-t border-slate-100">
                  <h3 className="text-xl font-bold text-slate-900 mb-8 text-center">más Proyectos Realizados</h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {extraImages.map((img, i) => (
                      <div key={i} className="aspect-square rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                        <img 
                          src={img} 
                          alt={`Proyecto extra ${i + 1}`} 
                          className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-4 border-t border-slate-100 bg-slate-50 text-center">
                <button 
                  onClick={() => setShowCatalog(false)}
                  className="btn-primary py-2 px-8"
                >
                  Cerrar Catálogo
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Window Popup */}
      <AnimatePresence>
        {showPopup && (
          <motion.div 
            drag
            dragMomentum={false}
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            className="fixed bottom-12 left-6 z-50 max-w-sm cursor-move"
          >
            <div className="bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden relative pointer-events-auto">
              <button 
                onClick={() => setShowPopup(false)}
                className="absolute top-2 right-2 p-1 bg-slate-100 rounded-full text-slate-500 hover:text-slate-800 z-10"
              >
                <X className="w-4 h-4" />
              </button>
              <div className="flex items-center p-4 bg-accent text-white">
                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white mr-3">
                  <img src="https://thumbs.dreamstime.com/b/silueta-de-arquitecto-con-planos-y-sombrero-duro-para-la-construcci%C3%B3n-ilustraci%C3%B3n-un-que-sostiene-lleva-muestra-su-disposici%C3%B3n-384357919.jpg" alt="Arquitecto" referrerPolicy="no-referrer" />
                </div>
                <div>
                  <p className="font-bold text-sm">Reformas Cerca de Ti</p>
                  <p className="text-xs opacity-80">Estamos en Baix Llobregat</p>
                </div>
              </div>
              <div className="p-4">
                <p className="text-sm text-slate-600 mb-4">
                  Hola, soy el Arquitecto de Reformas Linda Vista - Nuestra Virgen Señora de Fatima. ¿Estás buscando reformar tu casa/local en la zona? Te asesoro personalmente.
                </p>
                <a href="#contacto" onClick={() => setShowPopup(false)} className="block text-center bg-accent text-white py-2 rounded-lg text-sm font-bold hover:bg-blue-700 transition-colors">
                  Consultale al Arquitecto
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
