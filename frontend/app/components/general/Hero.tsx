"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import {Link} from "next-view-transitions";
import { cn } from "../../lib/utils";
import { Button } from "../ui/button";

export default function Hero() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="pt-20 sm:pt-24 md:pt-32 pb-12 sm:pb-16 md:pb-20 px-4 sm:px-6"
    >
      <div className="container mx-auto max-w-6xl">
        <div className="mx-auto w-fit sm:mx-0 sm:w-auto sm:inline-block sm:text-center px-4 py-1 rounded-full bg-green-100 text-green-600 text-xs sm:text-sm font-medium mb-4 sm:mb-6">
          Convide. Confirme. Conecte.
        </div>
        <div className="flex flex-col lg:flex-row items-center">
          <div className="w-full lg:w-1/2 mb-10 lg:mb-0 lg:pr-8 xl:pr-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center lg:text-left"
            >
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold md:leading-15 text-gray-900 mb-4 sm:mb-6">
                Organize <span className="text-blue-500">Eventos Pequenos</span>{" "}
                sem Complicação
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 sm:mb-8">
                Uma plataforma simples e intuitiva para criar e gerenciar
                eventos gratuitos. Convide amigos, acompanhe confirmações de
                presença e organize contribuições de forma prática!
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center lg:justify-start">
                <Button
                  asChild
                  size="lg"
                  className="w-full text-white sm:w-auto rounded-full bg-blue-500 hover:bg-blue-600 px-6 sm:px-8"
                >
                  <Link href="/">
                    Criar Evento
                    <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto hover:bg-green-100 hover:text-green-800 rounded-full border-gray-200"
                >
                  <Link href="/">Saiba Mais</Link>
                </Button>
              </div>
            </motion.div>
          </div>

          <div className="w-full lg:w-1/2 px-4 sm:px-8 lg:px-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative rounded-2xl overflow-hidden shadow-xl"
            >
              {/* GENERATED BY IA */}
              <div className="aspect-[4/3] bg-gradient-to-br from-blue-600 to-green-300 rounded-2xl overflow-hidden relative">
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_50%_120%,white,transparent_70%)]"></div>
                <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] opacity-10"></div>

                {/* Event-themed grid elements - 6 blocks on mobile, 9 on larger screens */}
                <div className="absolute inset-0 grid grid-cols-2 sm:grid-cols-3 grid-rows-3 gap-2 sm:gap-4 p-3 sm:p-6">
                  {Array(9)
                    .fill(0)
                    .map((_, i) => {
                      // Event dashboard elements
                      const isAttendanceChart = i === 1;
                      const isMapView = i === 5;
                      const isEventMetric = i === 0 || i === 3;
                      const isEventCard = i === 4;
                      const isConfirmationRate = i === 6;
                      const isGuestList = i === 2;
                      const isWeatherWidget = i === 7;
                      const isTimelineList = i === 8;

                      // Hide elements 7, 8 on mobile (show only first 6)
                      const hiddenOnMobile = i >= 6;

                      return (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.3, delay: 0.3 + i * 0.1 }}
                          className={cn(
                            "glass rounded-lg sm:rounded-xl flex flex-col overflow-hidden backdrop-blur-sm border border-white/10",
                            hiddenOnMobile ? "hidden sm:flex" : "flex",
                            isEventCard
                              ? "col-span-1 row-span-1 bg-white/20 border-white/30 shadow-lg"
                              : isAttendanceChart
                              ? "bg-gradient-to-br from-blue-500/30 to-blue-600/30 shadow-md"
                              : isMapView
                              ? "bg-white/10 shadow-md"
                              : isEventMetric
                              ? "bg-gradient-to-br from-purple-500/20 to-purple-600/20 shadow-md"
                              : isConfirmationRate
                              ? "bg-gradient-to-br from-green-500/20 to-green-600/20 shadow-md"
                              : "bg-white/10 shadow-md"
                          )}
                        >
                          {isEventMetric && (
                            <div className="w-full h-full p-2 flex flex-col justify-center">
                              <div className="text-white/80 text-[8px] sm:text-xs mb-1 font-medium flex items-center">
                                {i === 0 ? (
                                  <>
                                    <svg className="w-2.5 h-2.5 mr-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                      <path d="M17 8C17 10.7614 14.7614 13 12 13C9.23858 13 7 10.7614 7 8C7 5.23858 9.23858 3 12 3C14.7614 3 17 5.23858 17 8Z" fill="currentColor"/>
                                      <path d="M12 14C7.58172 14 4 17.5817 4 22H20C20 17.5817 16.4183 14 12 14Z" fill="currentColor"/>
                                    </svg>
                                    CONVIDADOS
                                  </>
                                ) : (
                                  <>
                                    <svg className="w-2.5 h-2.5 mr-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                      <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                    CONFIRMADOS
                                  </>
                                )}
                              </div>
                              <div className="text-white font-bold text-sm sm:text-base">
                                {i === 0 ? "32 pessoas" : "24 pessoas"}
                              </div>
                              <div className="text-green-300 text-[8px] sm:text-xs flex items-center font-medium">
                                {i === 0 ? "+5 novos" : "75% confirmação"}{" "}
                                <span className="ml-1">↑</span>
                              </div>
                            </div>
                          )}

                          {isConfirmationRate && (
                            <div className="w-full h-full p-2 flex flex-col justify-center">
                              <div className="text-white/80 text-[8px] sm:text-xs mb-1 font-medium flex items-center">
                                <svg className="w-2.5 h-2.5 mr-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M16 8V16M12 11V16M8 14V16M6 20H18C19.1046 20 20 19.1046 20 18V6C20 4.89543 19.1046 4 18 4H6C4.89543 4 4 4.89543 4 6V18C4 19.1046 4.89543 20 6 20Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                                TAXA DE RESPOSTA
                              </div>
                              <div className="text-white font-bold text-sm sm:text-base flex items-center">
                                87,3%
                                <div className="ml-2 w-12 h-2 bg-white/20 rounded-full overflow-hidden">
                                  <div className="h-full bg-green-400 rounded-full" style={{width: "87.3%"}}></div>
                                </div>
                              </div>
                              <div className="text-green-300 text-[8px] sm:text-xs flex items-center font-medium">
                                +12,5% <span className="ml-1">↑</span>
                              </div>
                            </div>
                          )}

                          {isEventCard && (
                            <div className="w-full h-full p-2 flex flex-col justify-center">
                              <div className="text-white/80 text-[8px] sm:text-xs font-medium flex items-center">
                                <svg className="w-2.5 h-2.5 mr-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M12 8V12L15 15M3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                                DATA E HORA
                              </div>
                              <div className="text-white font-bold text-sm sm:text-base mt-1">
                                Sáb, 15 Jun
                              </div>
                              <div className="text-blue-300 text-[8px] sm:text-xs flex items-center font-medium">
                                19:00 - 23:00
                              </div>
                            </div>
                          )}

                          {isAttendanceChart && (
                            <div className="w-full h-full p-1 sm:p-2">
                              <div className="text-white/80 text-[8px] mb-1 font-medium flex items-center">
                                <svg className="w-2.5 h-2.5 mr-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M8 13V17M16 11V17M12 7V17M7.8 21H16.2C17.8802 21 18.7202 21 19.362 20.673C19.9265 20.3854 20.3854 19.9265 20.673 19.362C21 18.7202 21 17.8802 21 16.2V7.8C21 6.11984 21 5.27976 20.673 4.63803C20.3854 4.07354 19.9265 3.6146 19.362 3.32698C18.7202 3 17.8802 3 16.2 3H7.8C6.11984 3 5.27976 3 4.63803 3.32698C4.07354 3.6146 3.6146 4.07354 3.32698 4.63803C3 5.27976 3 6.11984 3 7.8V16.2C3 17.8802 3 18.7202 3.32698 19.362C3.6146 19.9265 4.07354 20.3854 4.63803 20.673C5.27976 21 6.11984 21 7.8 21Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                                CONFIRMAÇÕES
                              </div>
                              <div className="w-full h-3/4 flex items-end space-x-[2px] sm:space-x-1">
                                {[4, 6, 5, 7, 9, 8, 10].map((h, idx) => (
                                  <div
                                    key={idx}
                                    className="flex flex-col items-center flex-1"
                                  >
                                    <div
                                      className="w-full bg-gradient-to-t from-blue-500 to-blue-300 rounded-t-sm"
                                      style={{ height: `${h * 8}%` }}
                                    ></div>
                                    <div className="text-white/80 text-[6px] mt-1">
                                      {["Seg", "Ter", "Qua", "Qui", "Sex", "Sáb", "Dom"][idx]}
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}

                          {/* {isMapView && (
                            <div className="w-full h-full p-1 sm:p-2 relative">
                              <div className="text-white/80 text-[8px] mb-1 font-medium flex items-center">
                                <svg className="w-2.5 h-2.5 mr-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                  <path d="M12 22C16 18 20 14.4183 20 10C20 5.58172 16.4183 2 12 2C7.58172 2 4 5.58172 4 10C4 14.4183 8 18 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                                LOCALIZAÇÃO
                              </div>
                              <div className="absolute inset-4 top-6 rounded-lg overflow-hidden">
                                <div className="w-full h-full bg-[url('/images/map-preview.jpg')] bg-cover bg-center">
                                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/30 to-transparent"></div>
                                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-blue-500 rounded-full border-2 border-white shadow-lg pulse-animation"></div>
                                </div>
                              </div>
                              <div className="absolute bottom-2 left-2 text-white text-[6px] sm:text-[8px] font-medium bg-black/30 px-1 py-0.5 rounded">
                                Casa do João • 2.5km
                              </div>
                            </div>
                          )} */}

                          {isGuestList && (
                            <div className="w-full h-full p-1 sm:p-2">
                              <div className="text-white/80 text-[8px] mb-1 font-medium flex items-center">
                                <svg className="w-2.5 h-2.5 mr-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M17 20H22V18C22 16.3431 20.6569 15 19 15C18.0444 15 17.1931 15.4468 16.6438 16.1429M17 20H7M17 20V18C17 17.3438 16.8736 16.717 16.6438 16.1429M7 20H2V18C2 16.3431 3.34315 15 5 15C5.95561 15 6.80686 15.4468 7.35625 16.1429M7 20V18C7 17.3438 7.12642 16.717 7.35625 16.1429M7.35625 16.1429C8.0935 14.301 9.89482 13 12 13C14.1052 13 15.9065 14.301 16.6438 16.1429M15 7C15 8.65685 13.6569 10 12 10C10.3431 10 9 8.65685 9 7C9 5.34315 10.3431 4 12 4C13.6569 4 15 5.34315 15 7ZM21 10C21 11.1046 20.1046 12 19 12C17.8954 12 17 11.1046 17 10C17 8.89543 17.8954 8 19 8C20.1046 8 21 8.89543 21 10ZM7 10C7 11.1046 6.10457 12 5 12C3.89543 12 3 11.1046 3 10C3 8.89543 3.89543 8 5 8C6.10457 8 7 8.89543 7 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                                CONVIDADOS
                              </div>
                              <div className="flex -space-x-1.5 overflow-hidden mt-1">
                                {['João', 'Maria', 'Pedro', 'Ana', 'Lucas'].map((name, idx) => (
                                  <div
                                    key={idx}
                                    className="inline-block h-5 w-5 rounded-full ring-1 ring-white flex items-center justify-center text-[6px] font-medium text-white"
                                    style={{
                                      background: `linear-gradient(45deg, ${['#60A5FA', '#F472B6', '#4ADE80', '#A78BFA', '#FBBF24'][idx % 5]}, ${['#3B82F6', '#EC4899', '#22C55E', '#8B5CF6', '#F59E0B'][idx % 5]})`
                                    }}
                                  >
                                    {name[0]}
                                  </div>
                                ))}
                                <div className="inline-block h-5 w-5 rounded-full bg-gray-700 text-[6px] text-white flex items-center justify-center ring-1 ring-white">
                                  +27
                                </div>
                              </div>
                              <div className="mt-1.5 flex flex-wrap gap-1">
                                {['Família', 'Amigos', 'Trabalho'].map((tag, idx) => (
                                  <span key={idx} className="inline-flex items-center rounded-full bg-white/10 px-1.5 py-0.5 text-[6px] font-medium text-white">
                                    {tag}
                                  </span>
                                ))}
                              </div>
                            </div>
                          )}

                          {isMapView && (
                            <div className="w-full h-full p-1 sm:p-2 relative">
                              <div className="text-white/80 text-[8px] mb-1 font-medium flex items-center">
                                <svg className="w-2.5 h-2.5 mr-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                  <path d="M12 22C16 18 20 14.4183 20 10C20 5.58172 16.4183 2 12 2C7.58172 2 4 5.58172 4 10C4 14.4183 8 18 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                                LOCALIZAÇÃO
                              </div>
                              <div className="absolute inset-4 top-6 rounded-lg overflow-hidden shadow-lg">
                                <div className="w-full h-full bg-gradient-to-br from-gray-200/80 to-gray-300/80 relative">
                                  {/* Mapa estilizado */}
                                  <div className="absolute inset-0">
                                    <svg className="w-full h-full" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                                      {/* Grade de fundo */}
                                      <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                                        <path d="M 10 0 L 0 0 0 10" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="0.5"/>
                                      </pattern>
                                      <rect width="100" height="100" fill="url(#grid)" />

                                      {/* Ruas principais */}
                                      <path d="M20,50 L80,50" stroke="rgba(255,255,255,0.9)" strokeWidth="2" />
                                      <path d="M50,20 L50,80" stroke="rgba(255,255,255,0.9)" strokeWidth="2" />

                                      {/* Ruas secundárias */}
                                      <path d="M20,30 L80,30" stroke="rgba(255,255,255,0.9)" strokeWidth="1" />
                                      <path d="M20,70 L80,70" stroke="rgba(255,255,255,0.3)" strokeWidth="1" />
                                      <path d="M30,20 L30,80" stroke="rgba(255,255,255,0.9)" strokeWidth="1" />
                                      <path d="M70,20 L70,80" stroke="rgba(255,255,255,0.3)" strokeWidth="1" />

                                      {/* Quadras/Blocos */}
                                      <rect x="30" y="30" width="20" height="20" fill="rgba(255,255,255,0.1)" stroke="rgba(255,255,255,0.2)" />
                                      <rect x="50" y="30" width="20" height="20" fill="rgba(255,255,246,0.3)" stroke="rgba(255,255,255,0.4)" />
                                      <rect x="30" y="50" width="20" height="20" fill="rgba(255,255,255,0.1)" stroke="rgba(255,255,255,0.2)" />
                                      <rect x="50" y="50" width="20" height="20" fill="rgba(255,255,255,0.1)" stroke="rgba(255,255,255,0.2)" />

                                      {/* Casa destacada */}
                                      <rect x="55" y="35" width="10" height="10" fill="rgba(255,255,255,0.6)" stroke="rgba(255,255,255,0.8)" strokeWidth="1" />

                                      {/* Ícone de casa */}
                                      <path d="M57,42 L57,39 L63,39 L63,42 L57,42 Z" fill="white" />
                                      <path d="M56,39 L60,36 L64,39 L56,39 Z" fill="white" />
                                    </svg>
                                  </div>

                                  {/* Marcador com animação de pulso */}
                                  <div className="absolute top-[20%] left-[30%] transform -translate-x-1/2 -translate-y-1/2">
                                    <div className="w-6 h-6 flex items-center justify-center">
                                      <div className="absolute w-6 h-6 bg-blue-500/20 rounded-full animate-ping"></div>
                                      <div className="absolute w-4 h-4 bg-blue-500/40 rounded-full animate-pulse"></div>
                                      <div className="relative w-3 h-3 bg-blue-500 rounded-full border-2 border-white shadow-lg"></div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="absolute bottom-2 left-2 right-2 text-white text-[6px] sm:text-[8px] font-medium bg-black/40 px-1.5 py-0.5 rounded flex items-center justify-between">
                                <span className="flex items-center">
                                  <svg className="w-2 h-2 mr-0.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M3 21h18v-3H3v3zm3-3h12v-2H6v2zm15-4H3c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1h18c.55 0 1-.45 1-1v-4c0-.55-.45-1-1-1zm1-7H5c-1.1 0-2 .9-2 2v1h20v-1c0-1.1-.9-2-2-2zM12 5c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z" fill="currentColor"/>
                                  </svg>
                                  Casa do João
                                </span>
                                <span className="text-blue-300">2.5km</span>
                              </div>
                            </div>
                          )}

                          {isWeatherWidget && (
                            <div className="w-full h-full p-1 sm:p-2 flex flex-col">
                              <div className="text-white/80 text-[8px] mb-1 font-medium flex items-center">
                                <svg className="w-2.5 h-2.5 mr-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M12 3V5M5.63607 5.63604L7.05029 7.05025M3 12H5M5.63607 18.364L7.05029 16.9497M12 19V21M16.9497 16.9497L18.364 18.364M19 12H21M16.9497 7.05025L18.364 5.63604M18 12C18 15.3137 15.3137 18 12 18C8.68629 18 6 15.3137 6 12C6 8.68629 8.68629 6 12 6C15.3137 6 18 8.68629 18 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                                CLIMA
                              </div>
                              <div className="flex-1 flex items-center justify-center">
                                <div className="text-center">
                                  <div className="text-yellow-300 text-lg">☀️</div>
                                  <div className="text-white font-bold text-[10px]">25°C</div>
                                  <div className="text-white/70 text-[6px]">Sáb, 15 Jun</div>
                                </div>
                              </div>
                            </div>
                          )}

                          {isTimelineList && (
                            <div className="w-full h-full p-1 sm:p-2">
                              <div className="text-white/80 text-[8px] mb-1 font-medium flex items-center">
                                <svg className="w-2.5 h-2.5 mr-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                                CALENDÁRIO
                              </div>
                              <div className="w-full flex flex-col mt-1">
                                <div className="grid grid-cols-7 gap-0.5 bg-gray-500/10 rounded-sm p-0.5">
                                  {['D','S','T','Q','Q','S','S'].map((day, idx) => (
                                    <div key={idx} className="text-[5px] text-white/60 text-center">{day}</div>
                                  ))}
                                  {Array(31).fill(0).map((_, idx) => {
                                    const isToday = idx + 1 === 15;
                                    const isPast = idx + 1 < 15;
                                    return (
                                      <div
                                        key={idx}
                                        className={`text-[6px] h-2.5 flex items-center justify-center rounded-sm ${
                                          isToday
                                            ? 'bg-blue-500 text-white font-bold'
                                            : isPast
                                              ? 'text-white/40'
                                              : 'text-white/80'
                                        }`}
                                      >
                                        {idx + 1 <= 30 ? idx + 1 : ''}
                                      </div>
                                    );
                                  })}
                                </div>
                                <div className="mt-1 text-[6px] text-white flex items-center">
                                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mr-1"></div>
                                  <span>Evento: 15 de Junho</span>
                                </div>
                              </div>
                            </div>
                          )}
                        </motion.div>
                      );
                    })}
                </div>
              </div>
                  {/* END GENERATED BY IA */}
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
