export default function PainPoints() {
  const painPoints = [
    {
      title: '신규 고객 유입 감소',
      description: '예전처럼 손님이 오지 않고, 매출이 정체되어 있어요',
    },
    {
      title: '온라인 경쟁 심화',
      description: '성지폰, 온라인 대리점과 경쟁이 너무 치열해요',
    },
    {
      title: '광고비 부담',
      description: '광고는 해야 하는데 비용 대비 효과가 불확실해요',
    },
    {
      title: '마케팅 노하우 부족',
      description: '온라인 마케팅을 어떻게 시작해야 할지 모르겠어요',
    },
    {
      title: '단순 방문 고객 감소',
      description: '지나가다 들어오는 고객이 점점 줄어들고 있어요',
    },
  ];

  const solutions = [
    '지역 기반 타겟 마케팅으로 우리 동네 고객 집중 공략',
    '검색 최적화로 온라인에서 먼저 발견되는 대리점 만들기',
    '데이터 분석 기반 광고 운영으로 ROI 극대화',
    '전문가의 체계적인 마케팅 전략 수립 및 실행',
    '온라인 노출 강화로 신규 고객 유입 증대',
  ];

  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-navy-primary mb-6">
            이런 고민, 공감하시나요?
          </h2>
          <p className="text-lg md:text-xl text-foreground">
            많은 대리점 점주님들이 같은 고민을 하고 계십니다
          </p>
        </div>

        {/* Pain Points Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {painPoints.map((point, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border-l-4 border-orange-primary"
            >
              <h3 className="text-xl font-bold text-navy-primary mb-3">
                {point.title}
              </h3>
              <p className="text-foreground leading-relaxed">
                {point.description}
              </p>
            </div>
          ))}
        </div>

        {/* Solutions Box */}
        <div className="bg-gradient-to-br from-navy-primary to-navy-secondary rounded-2xl p-8 md:p-12 text-white shadow-xl">
          <div className="flex items-center gap-3 mb-6">
            <svg
              className="w-8 h-8 text-orange-primary"
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
            <h3 className="text-2xl md:text-3xl font-bold">
              우리가 함께 해결해드립니다
            </h3>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {solutions.map((solution, index) => (
              <div
                key={index}
                className="flex items-start gap-3 bg-white/10 backdrop-blur-sm rounded-lg p-4"
              >
                <svg
                  className="w-6 h-6 text-orange-primary flex-shrink-0 mt-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <p className="text-base md:text-lg leading-relaxed">
                  {solution}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
