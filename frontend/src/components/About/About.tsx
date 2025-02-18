"use client";

import { useInView } from '@/hooks/useInView';
import { 
  FaReact,
  FaJava,
  FaGithub
} from 'react-icons/fa';
import {
  SiTypescript,
  SiNextdotjs,
  SiGo
} from 'react-icons/si';

export function About() {
  const { ref, isInView } = useInView();

  return (
    <section className="relative min-h-screen bg-[var(--bg-primary)] flex items-center justify-center">
      <div className="container-custom max-w-6xl">
        <div 
          ref={ref}
          className={`block-bg p-12 md:p-16 lg:p-20 backdrop-blur-sm border-4 border-[var(--block-border)] 
            transition-all duration-1000 transform
            ${isInView 
              ? 'opacity-100 translate-y-0 blur-0' 
              : 'opacity-0 translate-y-10 blur-sm'
            }`}
        >
          <h2 
            className={`text-5xl lg:text-6xl xl:text-7xl font-bold bg-gradient-to-r 
              from-[var(--text-primary)] to-[var(--accent)] bg-clip-text 
              text-transparent mb-12 text-center transition-all duration-1000 delay-200
              ${isInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}
          >
            Обо мне
          </h2>

          <div className={`space-y-8 text-xl lg:text-2xl text-gray-400 max-w-4xl mx-auto font-medium
            transition-all duration-1000 delay-400
            ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          >
            <p>
              Привет! Меня зовут Георгий, и я фуллстек TypeScript разработчик.
            </p>
            <p>
              В основном создаю сайты на React и Next.js и разрабатываю Discord ботов.
              Люблю экспериментировать с новыми технологиями и постоянно учиться чему-то новому.
            </p>
          </div>

          {/* Statistics */}
          <div className={`grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 mt-12 md:mt-16 max-w-4xl mx-auto
            transition-all duration-1000 delay-600
            ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          >
            <div className="text-center p-4 md:p-6 rounded-2xl border-2 border-[var(--block-border)] 
              bg-gradient-to-b from-[rgba(255,255,255,0.05)] to-transparent
              hover:border-[var(--accent)] transition-all duration-300">
              <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--accent)]">15+</h3>
              <p className="text-sm md:text-base lg:text-lg text-gray-400 mt-2 md:mt-3 font-medium">Проектов</p>
            </div>
            <div className="text-center p-4 md:p-6 rounded-2xl border-2 border-[var(--block-border)]
              bg-gradient-to-b from-[rgba(255,255,255,0.05)] to-transparent
              hover:border-[var(--accent)] transition-all duration-300">
              <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--accent)]">10+</h3>
              <p className="text-sm md:text-base lg:text-lg text-gray-400 mt-2 md:mt-3 font-medium">Discord ботов</p>
            </div>
            <div className="text-center p-4 md:p-6 rounded-2xl border-2 border-[var(--block-border)]
              bg-gradient-to-b from-[rgba(255,255,255,0.05)] to-transparent
              hover:border-[var(--accent)] transition-all duration-300">
              <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--accent)]">5+</h3>
              <p className="text-sm md:text-base lg:text-lg text-gray-400 mt-2 md:mt-3 font-medium">Open Source вкладов</p>
            </div>
          </div>

          {/* Skills Icons */}
          <div className={`mt-8 md:mt-16 flex flex-wrap gap-4 md:gap-8 justify-center
            transition-all duration-1000 delay-800
            ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          >
            {[
              { Icon: FaReact, name: 'React' },
              { Icon: SiNextdotjs, name: 'Next.js' },
              { Icon: SiTypescript, name: 'TypeScript' },
              { Icon: SiGo, name: 'Golang' },
              { Icon: FaGithub, name: 'GitHub' }
            ].map(({ Icon, name }) => (
              <div 
                key={name}
                className="flex flex-col items-center gap-2"
              >
                <span
                  className="p-4 rounded-xl text-base md:text-lg
                    backdrop-blur-sm border-2 border-[var(--block-border)]
                    hover:scale-110 hover:border-[var(--accent)] hover:bg-white hover:text-black
                    transition-all duration-300
                    bg-gradient-to-b from-[rgba(255,255,255,0.05)] to-transparent"
                >
                  <Icon className="w-8 h-8 md:w-10 md:h-10 transition-colors duration-300 group-hover:text-black" />
                </span>
                <span className="text-sm md:text-base text-gray-400">{name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 