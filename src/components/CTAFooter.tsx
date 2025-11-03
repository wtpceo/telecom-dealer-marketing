'use client';

import { useState } from 'react';

export default function CTAFooter() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    storeType: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', phone: '', storeType: '', message: '' });

        // 3초 후 상태 초기화
        setTimeout(() => setSubmitStatus('idle'), 3000);
      } else {
        setSubmitStatus('error');
        console.error('Form submission error:', data.error);

        // 3초 후 상태 초기화
        setTimeout(() => setSubmitStatus('idle'), 3000);
      }
    } catch (error) {
      setSubmitStatus('error');
      console.error('Network error:', error);

      // 3초 후 상태 초기화
      setTimeout(() => setSubmitStatus('idle'), 3000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="relative py-20 md:py-32 bg-gradient-to-br from-navy-primary to-navy-secondary overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-orange-primary rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-12">
        {/* CTA Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            함께 성장하겠습니다
          </h2>
          <p className="text-xl text-gray-200 mb-8">
            지금 바로 무료 상담을 신청하세요
            <br />
            <span className="text-orange-primary font-semibold">
              첫 상담은 무료입니다
            </span>
          </p>
        </div>

        {/* Contact Form */}
        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-2xl">
          {submitStatus === 'success' ? (
            <div className="text-center py-12">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-navy-primary mb-2">
                문의가 접수되었습니다
              </h3>
              <p className="text-foreground">
                빠른 시일 내에 연락드리겠습니다
              </p>
            </div>
          ) : submitStatus === 'error' ? (
            <div className="text-center py-12">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-4">
                <svg className="w-8 h-8 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-navy-primary mb-2">
                전송에 실패했습니다
              </h3>
              <p className="text-foreground mb-4">
                잠시 후 다시 시도해주시거나 전화로 문의해주세요
              </p>
              <button
                onClick={() => setSubmitStatus('idle')}
                className="px-6 py-2 bg-orange-primary text-white rounded-lg hover:bg-orange-600 transition-colors"
              >
                다시 시도
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-navy-primary mb-2">
                  이름 <span className="text-orange-primary">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-orange-primary focus:outline-none transition-colors"
                  placeholder="홍길동"
                />
              </div>

              {/* Phone */}
              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-navy-primary mb-2">
                  연락처 <span className="text-orange-primary">*</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-orange-primary focus:outline-none transition-colors"
                  placeholder="010-0000-0000"
                />
              </div>

              {/* Store Type */}
              <div>
                <label htmlFor="storeType" className="block text-sm font-semibold text-navy-primary mb-2">
                  매장 유형 <span className="text-orange-primary">*</span>
                </label>
                <select
                  id="storeType"
                  name="storeType"
                  required
                  value={formData.storeType}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-orange-primary focus:outline-none transition-colors"
                >
                  <option value="">선택해주세요</option>
                  <option value="offline">오프라인 대리점</option>
                  <option value="online">온라인 대리점</option>
                  <option value="multi">멀티점 운영</option>
                  <option value="other">기타</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-navy-primary mb-2">
                  문의 내용
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-orange-primary focus:outline-none transition-colors resize-none"
                  placeholder="상담받고 싶은 내용을 자유롭게 작성해주세요"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-8 py-4 bg-orange-primary text-white text-lg font-bold rounded-lg hover:bg-orange-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                {isSubmitting ? '전송 중...' : '무료 상담 신청하기'}
              </button>

              <p className="text-sm text-text-gray text-center">
                개인정보는 상담 목적으로만 사용되며, 안전하게 보호됩니다
              </p>
            </form>
          )}
        </div>

        {/* Quick Contact */}
        <div className="mt-12 grid md:grid-cols-2 gap-6 text-center">
          <a
            href="tel:1670-0704"
            className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300 border-2 border-white/20"
          >
            <svg className="w-8 h-8 text-orange-primary mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <div className="text-white font-semibold mb-1">전화 상담</div>
            <div className="text-gray-300 text-xl font-bold">1670-0704</div>
          </a>

          <a
            href="#"
            className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300 border-2 border-white/20"
          >
            <svg className="w-8 h-8 text-orange-primary mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
            <div className="text-white font-semibold mb-1">카카오톡 상담</div>
            <div className="text-gray-300">채팅으로 편하게</div>
          </a>
        </div>
      </div>

      {/* Footer */}
      <footer className="relative z-10 max-w-6xl mx-auto px-6 md:px-12 mt-20 pt-12 border-t border-white/20">
        <div className="text-center text-gray-300">
          <div className="mb-4">
            <h3 className="text-2xl font-bold text-white mb-2">WIZ THE PLANNING</h3>
            <p className="text-sm">휴대폰 대리점 마케팅 전문 파트너</p>
          </div>
          <div className="text-sm space-y-1 mb-6">
            <p>사업자등록번호: 668-81-00391</p>
            <p>이메일: contact@wiztheplanning.com</p>
            <p>주소: 서울시 금천구 디지털로 178 가산 퍼블릭 A동 2518-2519호</p>
          </div>
          <div className="text-xs text-gray-400">
            <p>&copy; 2024 WIZ THE PLANNING. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </section>
  );
}
