'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';
import { Testimonial } from '@/types/portfolio';
import { getMediaUrl } from '@/lib/api';

interface TestimonialsSectionProps {
  testimonials: Testimonial[];
}

export default function TestimonialsSection({ testimonials }: TestimonialsSectionProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1); // 1 = forward, -1 = backward
  const [isPaused, setIsPaused] = useState(false);

  const total = testimonials ? testimonials.length : 0;

  const nextSlide = useCallback(() => {
    if (total === 0) return;
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % total);
  }, [total]);

  const prevSlide = useCallback(() => {
    if (total === 0) return;
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  }, [total]);

  const goToSlide = (idx: number) => {
    if (idx === currentIndex) return;
    setDirection(idx > currentIndex ? 1 : -1);
    setCurrentIndex(idx);
  };

  // Auto-play timer (slides every 5 seconds, pauses on hover)
  useEffect(() => {
    if (total <= 1 || isPaused) return;

    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [total, isPaused, nextSlide]);

  if (!testimonials || testimonials.length === 0) {
    return null; // Do not render section if there are no approved testimonials yet
  }

  const currentItem = testimonials[currentIndex];
  const avatarUrl = currentItem.image ? getMediaUrl(currentItem.image) : null;
  const initials = currentItem.name
    ? currentItem.name
        .split(' ')
        .map((n) => n[0])
        .join('')
        .substring(0, 2)
        .toUpperCase()
    : 'CL';

  const itemRating = Math.min(Math.max(currentItem.rating || 5, 1), 5);

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 90 : -90,
      opacity: 0,
      scale: 0.97,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -90 : 90,
      opacity: 0,
      scale: 0.97,
    }),
  };


  return (
    <section id="testimonials" className="py-24 relative overflow-hidden border-t border-slate-800/60">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-mono font-semibold uppercase tracking-widest text-indigo-400 bg-indigo-500/10 border border-indigo-500/20 px-3.5 py-1.5 rounded-full">
            Client Endorsements
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-indigo-100 to-slate-300 tracking-tight mt-4">
            What My Clients Say
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Carousel Container */}
        <div
          className="relative min-h-[380px] sm:min-h-[340px]"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <AnimatePresence custom={direction} mode="wait">
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="w-full bg-slate-900/80 backdrop-blur-xl border border-slate-800 hover:border-indigo-500/40 rounded-3xl p-8 sm:p-12 shadow-2xl shadow-indigo-950/20 relative min-h-[340px] flex flex-col justify-between"
            >
              {/* Background Decorative Quote */}
              <div className="absolute top-6 right-8 text-indigo-500/10 pointer-events-none">
                <Quote className="w-20 h-20" />
              </div>

              <div className="relative z-10">
                {/* Dynamic Star Rating Display */}
                <div className="flex items-center gap-1.5 mb-6">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className={`w-5 h-5 ${
                        star <= itemRating
                          ? 'fill-amber-400 text-amber-400'
                          : 'fill-slate-800 text-slate-700'
                      }`}
                    />
                  ))}
                  <span className="ml-2 text-xs font-semibold text-amber-400/90 font-mono">
                    {itemRating}.0 / 5.0
                  </span>
                </div>

                {/* Comment Text */}
                <blockquote className="text-slate-200 text-lg sm:text-xl md:text-2xl font-normal leading-relaxed italic mb-8">
                  &ldquo;{currentItem.comment}&rdquo;
                </blockquote>
              </div>

              {/* Author Info & Control Bar */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pt-6 border-t border-slate-800/80 relative z-10">
                {/* Author Profile */}
                <div className="flex items-center gap-4">
                  {avatarUrl ? (
                    <img
                      src={avatarUrl}
                      alt={currentItem.name}
                      className="w-14 h-14 rounded-full object-cover border-2 border-indigo-500/50 shadow-md shadow-indigo-500/20"
                    />
                  ) : (
                    <div className="w-14 h-14 rounded-full bg-gradient-to-tr from-indigo-600 to-purple-600 flex items-center justify-center font-bold text-white text-base shadow-lg shadow-indigo-500/20">
                      {initials}
                    </div>
                  )}

                  <div>
                    <h3 className="font-bold text-white text-lg group-hover:text-indigo-300 transition-colors">
                      {currentItem.name}
                    </h3>
                    <p className="text-sm text-slate-400 font-medium">{currentItem.title}</p>
                  </div>
                </div>

                {/* Prev / Next Arrows */}
                {total > 1 && (
                  <div className="flex items-center gap-3">
                    <button
                      onClick={prevSlide}
                      aria-label="Previous testimonial"
                      className="p-3 rounded-2xl bg-slate-800/80 hover:bg-indigo-600/30 border border-slate-700 hover:border-indigo-500/50 text-slate-300 hover:text-white transition-all active:scale-95 shadow-md"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>

                    <span className="text-xs font-mono text-slate-400 px-1">
                      {currentIndex + 1} / {total}
                    </span>

                    <button
                      onClick={nextSlide}
                      aria-label="Next testimonial"
                      className="p-3 rounded-2xl bg-slate-800/80 hover:bg-indigo-600/30 border border-slate-700 hover:border-indigo-500/50 text-slate-300 hover:text-white transition-all active:scale-95 shadow-md"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </div>
                )}
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Indicator Dots */}
          {total > 1 && (
            <div className="flex justify-center items-center gap-2.5 mt-8">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => goToSlide(idx)}
                  aria-label={`Go to slide ${idx + 1}`}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    idx === currentIndex
                      ? 'w-8 bg-gradient-to-r from-indigo-500 to-purple-500 shadow-md shadow-indigo-500/40'
                      : 'w-2.5 bg-slate-700 hover:bg-slate-500'
                  }`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
