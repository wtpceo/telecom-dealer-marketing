'use client';

import { motion } from 'framer-motion';
import AnimatedSection, { AnimatedCard } from './AnimatedSection';
import { useEffect, useState, useRef } from 'react';
import { useInView } from 'framer-motion';

export default function MarketOpportunity() {
  const stats = [
    { label: '오프라인 방문 구매', percentage: '45-50%', value: 50, color: 'bg-navy-primary', barColor: '#1B3B6F' },
    { label: '온라인 비교 후 구매', percentage: '30%', value: 30, color: 'bg-navy-secondary', barColor: '#2E5090' },
    { label: '성지폰 직접 구매', percentage: '15-20%', value: 17.5, color: 'bg-orange-primary', barColor: '#FF6B35' },
    { label: '지인 추천', percentage: '5%', value: 5, color: 'bg-text-gray', barColor: '#7F8C8D' },
  ];

  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle, #1B3B6F 1px, transparent 1px)',
          backgroundSize: '30px 30px'
        }} />
      </div>

      <div className="max-w-6xl mx-auto px-6 md:px-12 relative z-10">
        <AnimatedSection className="text-center mb-16">
          <motion.div
            className="inline-block px-4 py-2 bg-orange-primary/10 text-orange-primary rounded-full text-sm font-semibold mb-4"
            whileHover={{ scale: 1.05 }}
          >
            시장 분석
          </motion.div>
          <h2 className="text-3xl md:text-5xl font-bold text-navy-primary mb-6">
            왜 지금, 마케팅이 필요할까요?
          </h2>
          <p className="text-lg md:text-xl text-foreground max-w-3xl mx-auto">
            휴대폰 구매 고객의 행동 패턴이 변화하고 있습니다
          </p>
        </AnimatedSection>

        {/* Stats Grid with Animation */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => (
            <AnimatedStatCard key={index} stat={stat} index={index} />
          ))}
        </div>

        {/* Key Insight */}
        <AnimatedSection delay={0.4}>
          <motion.div
            className="bg-gradient-to-r from-orange-primary to-orange-600 rounded-2xl p-8 md:p-12 text-white shadow-xl relative overflow-hidden"
            whileHover={{ scale: 1.02, boxShadow: '0 25px 50px -12px rgba(255, 107, 53, 0.25)' }}
            transition={{ duration: 0.3 }}
          >
            {/* Animated Background Pattern */}
            <motion.div
              className="absolute inset-0 opacity-10"
              animate={{
                backgroundPosition: ['0% 0%', '100% 100%'],
              }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              style={{
                backgroundImage: 'linear-gradient(45deg, transparent 30%, white 30%, white 70%, transparent 70%)',
                backgroundSize: '100px 100px'
              }}
            />

            <div className="flex items-start gap-4 relative z-10">
              <motion.div
                className="flex-shrink-0"
                animate={{ rotate: [0, 10, 0], scale: [1, 1.1, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
              </motion.div>
              <div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                  핵심 인사이트
                </h3>
                <p className="text-lg md:text-xl leading-relaxed">
                  고객의 <strong className="text-white underline decoration-white/50">75% 이상이 온라인에서 정보를 검색</strong>합니다.
                  <br />
                  하지만 실제 구매는 <strong className="text-white underline decoration-white/50">신뢰할 수 있는 대리점</strong>에서 이루어집니다.
                </p>
                <motion.div
                  className="inline-block mt-6 px-6 py-3 bg-white/20 rounded-xl backdrop-blur-sm border border-white/30"
                  whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.3)' }}
                >
                  <span className="font-bold">→ 온라인 노출 + 오프라인 신뢰 = 성공적인 마케팅</span>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </AnimatedSection>
      </div>
    </section>
  );
}

function AnimatedStatCard({ stat, index }: { stat: any; index: number }) {
  const [count, setCount] = useState(0);
  const [width, setWidth] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const targetValue = parseFloat(stat.percentage);
      const duration = 2000;
      const steps = 60;
      const increment = targetValue / steps;
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= targetValue) {
          current = targetValue;
          clearInterval(timer);
        }
        setCount(current);
        setWidth(current);
      }, duration / steps);

      return () => clearInterval(timer);
    }
  }, [isInView, stat.percentage]);

  return (
    <AnimatedCard index={index} className="bg-white rounded-xl p-6 shadow-md relative overflow-hidden group">
      {/* Animated Progress Bar */}
      <motion.div
        className="h-2 rounded-full mb-4 relative overflow-hidden bg-gray-100"
      >
        <motion.div
          ref={ref}
          className="h-full rounded-full"
          style={{ backgroundColor: stat.barColor }}
          initial={{ width: 0 }}
          animate={{ width: isInView ? `${width}%` : 0 }}
          transition={{ duration: 2, ease: "easeOut" }}
        />
      </motion.div>

      {/* Percentage */}
      <div className="text-3xl font-bold text-navy-primary mb-2">
        {stat.percentage}
      </div>

      {/* Label */}
      <div className="text-sm text-text-gray font-medium">
        {stat.label}
      </div>

      {/* Hover Effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity"
        style={{ background: `linear-gradient(135deg, ${stat.barColor}, transparent)` }}
      />
    </AnimatedCard>
  );
}
