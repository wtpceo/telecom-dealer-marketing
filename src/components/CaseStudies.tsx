export default function CaseStudies() {
  const successCase = {
    title: '성공 사례',
    subtitle: '체계적인 마케팅으로 성장한 A 대리점',
    results: [
      {
        label: '월 방문 고객',
        before: '50명',
        after: '130명',
        increase: '+160%',
      },
      {
        label: '개통 건수',
        before: '20건',
        after: '52건',
        increase: '+160%',
      },
      {
        label: '광고 ROI',
        before: '150%',
        after: '420%',
        increase: '+180%',
      },
    ],
    actions: [
      '네이버 플레이스 최적화 및 키워드 광고 집행',
      '블로그 콘텐츠 정기 발행 (주 2-3회)',
      '지역 타겟 SNS 광고로 신규 고객 유입',
      '고객 후기 관리 및 리뷰 이벤트 진행',
    ],
  };

  const failureCase = {
    title: '개선 필요 사례',
    subtitle: '무계획적 광고로 손해를 본 B 대리점',
    problems: [
      {
        issue: '무분별한 광고 집행',
        result: '월 300만원 광고비 지출, 개통 5건 증가',
      },
      {
        issue: '타겟팅 미흡',
        result: '관심 없는 고객층에게 노출, 전환율 0.5%',
      },
      {
        issue: '성과 분석 부재',
        result: '어떤 광고가 효과적인지 파악 불가',
      },
      {
        issue: '일관성 없는 운영',
        result: '간헐적 광고로 브랜드 인지도 형성 실패',
      },
    ],
  };

  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-navy-primary mb-6">
            실제 성과를 만든 사례
          </h2>
          <p className="text-lg md:text-xl text-foreground">
            데이터로 증명된 마케팅 효과
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Success Case */}
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 border-2 border-green-200 shadow-lg">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-green-900">
                  {successCase.title}
                </h3>
                <p className="text-green-700">{successCase.subtitle}</p>
              </div>
            </div>

            {/* Results */}
            <div className="grid grid-cols-3 gap-4 mb-6">
              {successCase.results.map((result, index) => (
                <div key={index} className="bg-white rounded-lg p-4 text-center">
                  <div className="text-xs text-gray-600 mb-1">{result.label}</div>
                  <div className="text-sm text-gray-500 line-through mb-1">
                    {result.before}
                  </div>
                  <div className="text-xl font-bold text-green-600 mb-1">
                    {result.after}
                  </div>
                  <div className="text-xs font-semibold text-green-500">
                    {result.increase}
                  </div>
                </div>
              ))}
            </div>

            {/* Actions */}
            <div className="space-y-3">
              <div className="font-semibold text-green-900 mb-3">주요 실행 내용</div>
              {successCase.actions.map((action, index) => (
                <div key={index} className="flex items-start gap-2 bg-white rounded-lg p-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-xs font-bold">
                    {index + 1}
                  </span>
                  <span className="text-sm text-gray-700">{action}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Failure Case */}
          <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl p-8 border-2 border-red-200 shadow-lg">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-red-900">
                  {failureCase.title}
                </h3>
                <p className="text-red-700">{failureCase.subtitle}</p>
              </div>
            </div>

            {/* Problems */}
            <div className="space-y-4">
              {failureCase.problems.map((problem, index) => (
                <div key={index} className="bg-white rounded-lg p-4 border-l-4 border-red-500">
                  <div className="font-semibold text-red-900 mb-2">
                    {problem.issue}
                  </div>
                  <div className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-sm text-gray-700">{problem.result}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Lesson */}
            <div className="mt-6 bg-gradient-to-r from-orange-100 to-red-100 rounded-lg p-4">
              <div className="font-semibold text-orange-900 mb-2">
                💡 교훈
              </div>
              <p className="text-sm text-gray-700">
                광고비를 쓰는 것보다 <strong>어떻게</strong> 쓰는지가 중요합니다.
                전문가의 전략적 접근이 필요합니다.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
