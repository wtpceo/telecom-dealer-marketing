export default function OnlineStrategy() {
  const strategies = [
    {
      number: '01',
      title: '검색 노출 최적화',
      items: [
        '네이버/구글 SEO 최적화',
        '키워드 기반 블로그 콘텐츠 제작',
        '검색 광고(SA) 운영 및 최적화',
      ],
    },
    {
      number: '02',
      title: '전환율 향상',
      items: [
        '랜딩페이지 제작 및 최적화',
        '상담 문의 프로세스 간소화',
        'A/B 테스트를 통한 지속적 개선',
      ],
    },
    {
      number: '03',
      title: '데이터 기반 광고',
      items: [
        '타겟 고객 분석 및 세분화',
        'SNS 광고(페이스북/인스타그램) 운영',
        '실시간 성과 분석 및 최적화',
      ],
    },
    {
      number: '04',
      title: '브랜딩 강화',
      items: [
        '차별화된 콘텐츠 마케팅',
        '고객 리뷰 및 후기 관리',
        '전문성 있는 정보 제공',
      ],
    },
  ];

  return (
    <section className="py-20 md:py-32 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-navy-primary/10 text-navy-primary rounded-full text-sm font-semibold mb-4">
            온라인 대리점 특화
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-navy-primary mb-6">
            온라인 대리점을 위한 전략
          </h2>
          <p className="text-lg md:text-xl text-foreground">
            클릭부터 개통까지 전환율을 높이는 방법
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {strategies.map((strategy, index) => (
            <div
              key={index}
              className="relative bg-white rounded-2xl p-8 border-2 border-gray-100 hover:border-navy-primary hover:shadow-2xl transition-all duration-300 group"
            >
              {/* Number Badge */}
              <div className="absolute -top-6 -left-6 w-16 h-16 bg-gradient-to-br from-navy-primary to-navy-secondary rounded-xl flex items-center justify-center text-white font-bold text-2xl shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                {strategy.number}
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-navy-primary mb-6 mt-4">
                {strategy.title}
              </h3>

              {/* Items */}
              <ul className="space-y-4">
                {strategy.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <svg
                      className="w-6 h-6 text-navy-primary flex-shrink-0 mt-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span className="text-foreground leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
