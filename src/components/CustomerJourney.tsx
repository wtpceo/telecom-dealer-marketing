export default function CustomerJourney() {
  const journeySteps = [
    {
      step: 1,
      title: '검색',
      description: '온라인에서 휴대폰 요금제, 기기 정보 검색',
      solution: '네이버/구글 검색 최적화, 블로그 마케팅',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      ),
    },
    {
      step: 2,
      title: '비교',
      description: '여러 대리점의 가격과 혜택 비교',
      solution: '차별화된 프로모션, 상세 페이지 제작',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
    },
    {
      step: 3,
      title: '문의',
      description: '전화, 카톡, 방문을 통한 상담 문의',
      solution: '빠른 응대 시스템, 카카오톡 채널 운영',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      ),
    },
    {
      step: 4,
      title: '구매',
      description: '개통 절차 진행 및 단말기 수령',
      solution: '간편한 개통 프로세스, 신뢰 구축',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
    },
    {
      step: 5,
      title: '재구매',
      description: '기기 변경, 지인 추천, 리뷰 작성',
      solution: '사후 관리, 리뷰 이벤트, 추천 프로그램',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      ),
    },
  ];

  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-navy-primary mb-6">
            고객은 이렇게 움직입니다
          </h2>
          <p className="text-lg md:text-xl text-foreground">
            각 단계마다 최적화된 마케팅 전략이 필요합니다
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
          {journeySteps.map((item) => (
            <div
              key={item.step}
              className="relative bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 border-2 border-gray-100 hover:border-orange-primary hover:shadow-xl transition-all duration-300"
            >
              {/* Step Number */}
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-navy-primary to-navy-secondary rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                {item.step}
              </div>

              {/* Icon */}
              <div className="text-orange-primary mb-4 mt-4">
                {item.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-navy-primary mb-3">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-foreground mb-4 leading-relaxed">
                {item.description}
              </p>

              {/* Solution */}
              <div className="pt-4 border-t border-gray-200">
                <div className="text-xs font-semibold text-orange-primary mb-2">
                  해결책
                </div>
                <p className="text-sm text-navy-primary font-medium">
                  {item.solution}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Arrow Flow for Desktop */}
        <div className="hidden lg:flex justify-center items-center gap-4 mt-8">
          {[1, 2, 3, 4].map((i) => (
            <svg
              key={i}
              className="w-8 h-8 text-orange-primary opacity-50"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          ))}
        </div>
      </div>
    </section>
  );
}
