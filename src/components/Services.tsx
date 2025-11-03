export default function Services() {
  const services = [
    '검색 최적화 (SEO/SA)',
    'SNS 광고 운영',
    '블로그/콘텐츠 마케팅',
    '랜딩페이지 제작',
    '데이터 분석 및 리포팅',
    '브랜딩 컨설팅',
  ];

  const differentiators = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      text: '휴대폰 대리점 업계 전문성',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      text: '데이터 기반 의사결정',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      text: '투명한 비용 및 성과 공유',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      text: '1:1 맞춤형 전략 수립',
    },
  ];

  const process = [
    {
      step: 1,
      title: '상담 및 분석',
      description: '현황 파악 및 목표 설정',
    },
    {
      step: 2,
      title: '전략 수립',
      description: '맞춤형 마케팅 전략 기획',
    },
    {
      step: 3,
      title: '실행 및 최적화',
      description: '캠페인 운영 및 개선',
    },
    {
      step: 4,
      title: '성과 분석',
      description: '정기 리포팅 및 피드백',
    },
  ];

  return (
    <section id="services" className="py-20 md:py-32 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-navy-primary mb-6">
            함께 만들어갈 성과
          </h2>
          <p className="text-lg md:text-xl text-foreground">
            체계적인 프로세스로 확실한 결과를 만듭니다
          </p>
        </div>

        {/* Services Grid */}
        <div className="bg-gradient-to-br from-navy-primary to-navy-secondary rounded-2xl p-8 md:p-12 mb-12 shadow-xl">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">
            제공 서비스
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-lg p-4 flex items-center gap-3 hover:bg-white/20 transition-all duration-300"
              >
                <div className="flex-shrink-0 w-8 h-8 bg-orange-primary rounded-full flex items-center justify-center text-white font-bold">
                  {index + 1}
                </div>
                <span className="text-white font-medium">{service}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Differentiators */}
        <div className="mb-12">
          <h3 className="text-2xl md:text-3xl font-bold text-navy-primary mb-8 text-center">
            우리의 차별화 포인트
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {differentiators.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 border-2 border-orange-primary/20 hover:border-orange-primary hover:shadow-lg transition-all duration-300 text-center"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-orange-primary/10 rounded-full text-orange-primary mb-4">
                  {item.icon}
                </div>
                <p className="text-navy-primary font-semibold">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Process */}
        <div>
          <h3 className="text-2xl md:text-3xl font-bold text-navy-primary mb-8 text-center">
            진행 프로세스
          </h3>
          <div className="relative">
            {/* Process Line */}
            <div className="hidden lg:block absolute top-12 left-0 right-0 h-1 bg-gradient-to-r from-navy-primary via-orange-primary to-navy-secondary" />

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
              {process.map((item) => (
                <div key={item.step} className="text-center">
                  <div className="relative inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-navy-primary to-navy-secondary rounded-full text-white font-bold text-3xl mb-4 shadow-lg">
                    <span className="relative z-10">{item.step}</span>
                    <div className="absolute inset-0 bg-orange-primary rounded-full animate-ping opacity-20" />
                  </div>
                  <h4 className="text-xl font-bold text-navy-primary mb-2">
                    {item.title}
                  </h4>
                  <p className="text-foreground">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
