import '@fortawesome/fontawesome-free/css/all.min.css';
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Portfolio() {
  const [displayedText, setDisplayedText] = useState("");
  const fullText = "Hi, I’m Hugo Debiez — I code delightful web experiences.";
  const [bonfireLit, setBonfireLit] = useState(false);
  const bonfireRef = React.useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setBonfireLit(true);
    }, { threshold: 0.9 });
    if (bonfireRef.current) observer.observe(bonfireRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayedText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) clearInterval(interval);
    }, 60);
    return () => clearInterval(interval);
  }, []);

  const experiences = [
    { role: "Cuisinier", company: "Les Frères de la Côte", location: "Québec", period: "2023-2025", tasks: ["Gestion des priorités dans un environnement dynamique", "Mise en place et organisation de la production", "Esprit d'équipe et rigueur dans l'exécution"] },
    { role: "Barman", company: "L’hirondelle", location: "Beaulieu", period: "2023", tasks: ["Service client et gestion des rushs", "Réactivité et adaptabilité face à l’imprévu", "Encadrement ponctuel et coordination de l’équipe"] },
    { role: "Employé polyvalent", company: "Spar", location: "Cagnes-sur-Mer", period: "2019-2021", tasks: ["Réceptions de commandes et mise rayons", "Accueil et service à la clientèle", "Préparation des commandes aux fruits et légumes"] },
    { role: "Surveillant", company: "Collège Raoul Dufy", location: "Nice", period: "2015-2018", tasks: ["Gestion d’élèves et maintien d’un cadre sécurisant", "Sens des responsabilités et autorité bienveillante", "Maintient de la relation parent-prof-direction de l’établissement"] }
  ];

  const education = [
    { degree: "Architecte de Systèmes d'Information (RNCP38114)", school: "Epitech", period: "2025-2028", details: ["Gestion des priorités dans un environnement dynamique", "Mise en place et organisation de la production", "Esprit d'équipe et rigueur dans l'exécution"] },
    { degree: "BTS Management Commercial Opérationnel", school: "UFIP", period: "2021", details: [] },
    { degree: "Baccalauréat Économique & Social", school: "Lycée Mélinée & Missak Manouchian", period: "2015", details: ["Mention Assez-bien"] }
  ];

  const skills = { technical: ["Algorithmie", "C", "Python", "Git", "HTML/CSS"], soft: ["Organisation", "Capacité d’apprentissage", "Travail en équipe", "Gestion du stress", "Adaptabilité", "Professionnalisme"] };
  const languages = ["Français (Natif)", "Anglais (Bilingue)", "Espagnol (Notions)"];
  const interests = ["Lecture (Philo/Roman/Mangas)", "Sport (full-contact, volley)", "Jeux vidéo"];

  return (
    <div className="min-h-screen bg-[#1a1510] text-amber-200 font-serif antialiased">
      <header className="fixed w-full bg-[#161b22]/90 backdrop-blur z-40 border-b border-[#1f2937] shadow-sm">
        <div className="max-w-6xl mx-auto px-6 py-4 flex flex-col items-center justify-center gap-3 text-center">
          <span className="text-xl font-bold text-amber-400">Hugo Debiez</span>
          <nav className="flex gap-6 items-center text-sm justify-center">
            <a href="https://github.com/Hugo0410?tab=repositories" target="_blank" rel="noopener noreferrer" className="hover:text-amber-400">GitHub</a>
            <a href="https://www.linkedin.com/in/hugo-debiez-étudiant-développeur-junior" target="_blank" rel="noopener noreferrer" className="hover:text-amber-400">LinkedIn</a>
            <a href="#about" className="hover:text-amber-400">About</a>
            <a href="#experience" className="hover:text-amber-400">Experience</a>
            <a href="#education" className="hover:text-amber-400">Education</a>
            <a href="#skills" className="hover:text-amber-400">Skills</a>
            <a href="#contact" className="px-4 py-2 bg-amber-600 text-white rounded-md shadow hover:bg-amber-700">Contact</a>
          </nav>
        </div>
      </header>

      <main id="about" className="pt-28 relative overflow-hidden">
        {/* Ember Particles */}
        {/* Downward guiding ember */}
        <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 z-10 w-2 h-2 bg-amber-400 rounded-full opacity-80 animate-bounce"
             style={{ animation: "ember-fall 5s ease-in-out infinite" }} />
        <style>{`
          @keyframes ember-fall {
            0% { transform: translate(-50%, -120vh); opacity: 0; }
            10% { opacity: 1; }
            100% { transform: translate(-50%, 100vh); opacity: 0; }
          }
        `}</style>
        <div className="pointer-events-none absolute inset-0 z-0 animate-[float_6s_linear_infinite]">
          {/* Upward floating embers */}
        <style>{`
          @keyframes ember-rise {
            0% { transform: translateY(0); opacity: 0; }
            10% { opacity: 1; }
            100% { transform: translateY(-200vh); opacity: 0; }
          }
        `}</style>
        {Array.from({ length: 40 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-amber-500/70 rounded-full opacity-70"
              style={{ bottom: 0, left: `${Math.random() * 100}%`, animation: `ember-rise ${4 + Math.random() * 4}s linear infinite`, animationDelay: `${Math.random() * 4}s` }}
            />
          ))}
        </div>
        {/* Hero Section */}
        <section className="w-full min-h-screen flex flex-col justify-center items-center text-center px-6 py-20">
          <div className="flex flex-col items-center justify-center w-full">
            <p className="text-amber-400 font-medium mb-2">// Développement & Programmation</p>
            <h1 className="text-3xl md:text-5xl font-extrabold leading-tight text-amber-200">
              <span className="text-amber-400">{displayedText}</span>
              <span className="animate-pulse text-amber-500">|</span>
            </h1>
            <p className="mt-6 text-gray-400 max-w-2xl">Curieux, rigoureux et doté d’une capacité d’adaptation, je cherche à développer mes compétences techniques à travers une alternance en programmation. Mon expérience diversifiée m’apporte des qualités transverses : organisation, réactivité et esprit d’équipe.</p>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="text-center max-w-6xl mx-auto px-6 py-20">
          <h2 className="text-2xl font-bold text-amber-300 mb-8">Expériences Professionnelles</h2>
          <div className="space-y-6">
            {experiences.map((exp, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.2 }} className="bg-[#161b22] border border-amber-900/30 rounded-xl p-6 shadow">
                <h3 className="font-semibold text-amber-300">{exp.role}</h3>
                <span className="text-sm text-gray-400">{exp.company} | {exp.location} | {exp.period}</span>
                <ul className="mt-2 list-disc list-inside text-gray-400">
                  {exp.tasks.map((task, idx) => <li key={idx}>{task}</li>)}
                </ul>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="text-center max-w-6xl mx-auto px-6 py-20">
          <h2 className="text-2xl font-bold text-amber-300 mb-8">Formations</h2>
          <div className="space-y-6">
            {education.map((edu, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.2 }} className="bg-[#161b22] border border-amber-900/30 rounded-xl p-6 shadow">
                <h3 className="font-semibold text-amber-300">{edu.degree}</h3>
                <span className="text-sm text-gray-400">{edu.school} | {edu.period}</span>
                {edu.details.length > 0 && (
                  <ul className="mt-2 list-disc list-inside text-gray-400">
                    {edu.details.map((d, idx) => <li key={idx}>{d}</li>)}
                  </ul>
                )}
              </motion.div>
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="text-center max-w-6xl mx-auto px-6 py-20">
          <h2 className="text-2xl font-bold text-amber-300 mb-8">Compétences</h2>
          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <h3 className="font-semibold text-amber-300 mb-2">Techniques</h3>
              <ul className="list-disc list-inside text-gray-400">
                {skills.technical.map((skill, i) => <li key={i}>{skill}</li>)}
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-amber-300 mb-2">Transverses</h3>
              <ul className="list-disc list-inside text-gray-400">
                {skills.soft.map((skill, i) => <li key={i}>{skill}</li>)}
              </ul>
            </div>
          </div>

          <div className="mt-10 grid md:grid-cols-2 gap-10">
            <div>
              <h3 className="font-semibold text-amber-300 mb-2">Langues</h3>
              <ul className="list-disc list-inside text-gray-400">
                {languages.map((lang, i) => <li key={i}>{lang}</li>)}
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-amber-300 mb-2">Centres d’intérêt</h3>
              <ul className="list-disc list-inside text-gray-400">
                {interests.map((item, i) => <li key={i}>{item}</li>)}
              </ul>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="text-center max-w-6xl mx-auto px-6 py-20">
          <h2 className="text-2xl font-bold text-amber-300 mb-8">Contact</h2>
          <p className="text-gray-400 mb-6">📧 Hugo.debiez@epitech.eu — 📞 07 82 12 10 69 — 🚗 Permis B (véhiculé)</p>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="mailto:Hugo.debiez@epitech.eu"
            className="inline-block px-6 py-3 bg-amber-600 text-white rounded-lg shadow hover:bg-amber-700"
          >
            Me contacter
          </motion.a>
        </section>

        {/* Bonfire at bottom with glow + flicker */}
        {/* Local keyframes for bonfire effects */}
<style>{`
  @keyframes bonfire-flicker { 
    0%, 100% { transform: translateY(0) scale(1); filter: brightness(1); }
    50% { transform: translateY(-1px) scale(1.05); filter: brightness(1.2); }
  }

  @keyframes bonfire-glow {
    0%, 100% { opacity: .35; }
    50% { opacity: .65; }
  }
`}</style>

        <div className="w-full flex justify-center py-12">
          <div className="relative" ref={bonfireRef}>
            {/* Audio for bonfire lit */}
            {bonfireLit && (
              <audio autoPlay>
                <source src="/bonfire-sound.mp3" type="audio/mpeg" />
              </audio>
            )}
            {/* Glow auras */}
            <div className="absolute left-1/2 -translate-x-1/2 bottom-4 w-56 h-24 rounded-full bg-amber-500/30 blur-2xl" />
            <div className="absolute left-1/2 -translate-x-1/2 bottom-8 w-80 h-32 rounded-full bg-amber-400/20 blur-3xl" />
            {/* Ash ring */}
            <div className="absolute left-1/2 -translate-x-1/2 bottom-0 w-36 h-6 rounded-full bg-black/40 blur-xl shadow-[0_0_15px_rgba(255,150,0,0.4)]" />

            

            {/* Social squares next to bonfire */}
            <a href="#" target="_blank" rel="noopener noreferrer"
              className="absolute right-full mr-20 top-1/2 -translate-y-1/2 w-14 h-14 bg-[#0f0d0a] border border-amber-600/40 rounded-lg flex items-center justify-center text-amber-400 hover:text-white hover:border-amber-400 transition">
              <i className='fab fa-github text-2xl'></i>
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer"
              className="absolute left-full ml-20 top-1/2 -translate-y-1/2 w-14 h-14 bg-[#0f0d0a] border border-amber-600/40 rounded-lg flex items-center justify-center text-amber-400 hover:text-white hover:border-amber-400 transition">
              <i className='fab fa-linkedin text-2xl'></i>
            </a>

            {/* The bonfire */}
            
            <img src="/bonfire.gif" alt="Bonfire" className="relative z-10 w-24 h-24 md:w-28 md:h-28 object-contain drop-shadow-[0_0_10px_rgba(255,170,0,0.75)]" style={{ animation: 'bonfire-flicker 1.4s ease-in-out infinite' }} />

            
          </div>
        </div>

            <footer className="border-t border-amber-900/30 mt-8">
              <div className="max-w-6xl mx-auto px-6 py-8 text-sm text-gray-500 text-center">
                © {new Date().getFullYear()} Hugo Debiez — Coded with ❤️ in React
              </div>
            </footer>
          </main>
        </div>
      );
    }
