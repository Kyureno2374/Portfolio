"use client";

import { useState, useEffect } from 'react';
import { format, addHours } from 'date-fns';
import { useInView } from '@/hooks/useInView';
import type { WeatherData } from '@/types/weather';
import { ru } from 'date-fns/locale';

export function InfoBlocks() {
  const { ref, isInView } = useInView();
  const [time, setTime] = useState(new Date());
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      // Получаем текущее время в UTC
      const now = new Date();
      const utc = new Date(now.getTime() + now.getTimezoneOffset() * 60000);
      // Добавляем 2 часа для UTC+2
      const utcPlus2 = addHours(utc, 2);
      setTime(utcPlus2);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await fetch('http://localhost:8080/api/weather/current');
        const data = await response.json();
        setWeather(data);
      } catch (error) {
        console.error('Error fetching weather:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
    const interval = setInterval(fetchWeather, 300000); // Обновляем каждые 5 минут

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative py-16 bg-[var(--bg-primary)] flex items-center justify-center min-h-[50vh]">
      <div className="container-custom max-w-6xl">
        <div 
          ref={ref}
          className={`grid grid-cols-1 md:grid-cols-3 gap-6 transition-all duration-1000
            ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          {/* Time Block */}
          <div className="block-bg p-8 md:p-10 backdrop-blur-sm
            text-center transition-all duration-300 transform-gpu hover:scale-[1.02] hover:shadow-2xl
            bg-gradient-to-b from-[var(--block-bg)] to-[#1a1a1a] relative overflow-hidden
            will-change-transform">
            <div className="relative z-10">
              <h3 className="text-xl text-gray-400 mb-3 font-light tracking-wider">Времени в моем городе</h3>
              <p className="text-4xl font-bold text-[var(--text-primary)] tracking-widest">
                {format(time, 'HH:mm:ss')}
              </p>
              <p className="text-gray-400 mt-2 font-light">UTC +2</p>
            </div>
          </div>

          {/* Date Block */}
          <div className="block-bg p-8 md:p-10 backdrop-blur-sm
            text-center transition-all duration-300 transform-gpu hover:scale-[1.02] hover:shadow-2xl
            bg-gradient-to-b from-[var(--block-bg)] to-[#1a1a1a] relative overflow-hidden
            will-change-transform">
            <div className="relative z-10">
              <h3 className="text-xl text-gray-400 mb-3 font-light tracking-wider">Сегодня</h3>
              <p className="text-4xl font-bold text-[var(--text-primary)] capitalize">
                {format(time, 'dd MMMM', { locale: ru })}
              </p>
              <p className="text-gray-400 mt-2 font-light">{format(time, 'yyyy')}</p>
            </div>
          </div>

          {/* Weather Block */}
          <div className="block-bg p-8 md:p-10 backdrop-blur-sm
            text-center transition-all duration-300 transform-gpu hover:scale-[1.02] hover:shadow-2xl
            bg-gradient-to-b from-[var(--block-bg)] to-[#1a1a1a] relative overflow-hidden
            will-change-transform">
            <div className="relative z-10">
              <h3 className="text-xl text-gray-400 mb-3 font-light tracking-wider">Погода</h3>
              {loading ? (
                <p className="text-4xl font-bold text-[var(--text-primary)]">Загрузка...</p>
              ) : weather ? (
                <>
                  <p className="text-4xl font-bold text-[var(--text-primary)]">
                    {Math.round(weather.temperature)}°C
                  </p>
                  <p className="text-gray-400 mt-2 font-light">{weather.condition}</p>
                </>
              ) : (
                <p className="text-4xl font-bold text-[var(--text-primary)]">Скоро будет</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}