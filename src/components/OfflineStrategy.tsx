export default function OfflineStrategy() {
  const strategies = [
    {
      number: '01',
      title: '지역 기반 마케팅',
      items: [
        '네이버 플레이스 최적화 및 리뷰 관리',
        '동네 주민 타겟 SNS 광고',
        '지역 커뮤니티 및 맘카페 홍보',
      ],
    },
    {
      number: '02',
      title: '매장 신뢰도 강화',
      items: [
        '고객 후기 및 사례 콘텐츠 제작',
        '전문성 있는 블로그/유튜브 운영',
        '투명한 가격 정책 및 프로모션 안내',
      ],
    },
    {
      number: '03',
      title: '방문 유도 캠페인',
      items: [
        '매장 방문 이벤트 및 사은품 제공',
        '시즌별 특화 프로모션 기획',
        '오프라인 연계 쿠폰 및 할인 제공',
      ],
    },
    {
      number: '04',
      title: '고객 관계 관리',
      items: [
        '기존 고객 대상 재방문 이벤트',
        '생일/기념일 맞춤 프로모션',
        '지인 추천 리워드 프로그램',
      ],
    },
  ];

  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-orange-primary/10 text-orange-primary rounded-full text-sm font-semibold mb-4">
            오프라인 대리점 특화
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-navy-primary mb-6">
            오프라인 매장을 위한 전략
          </h2>
          <p className="text-lg md:text-xl text-foreground">
            발길이 끊긴 매장에 다시 고객을 불러오는 방법
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {strategies.map((strategy, index) => (
            <div
              key={index}
              className="relative bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border-2 border-gray-100 hover:border-orange-primary hover:shadow-2xl transition-all duration-300 group"
            >
              {/* Number Badge */}
              <div className="absolute -top-6 -left-6 w-16 h-16 bg-gradient-to-br from-orange-primary to-orange-600 rounded-xl flex items-center justify-center text-white font-bold text-2xl shadow-lg transform group-hover:scale-110 transition-transform duration-300">
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
                      className="w-6 h-6 text-orange-primary flex-shrink-0 mt-0.5"
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
