import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, phone, storeType, message } = body;

    // 입력 검증
    if (!name || !phone || !storeType) {
      return NextResponse.json(
        { error: '필수 항목을 모두 입력해주세요.' },
        { status: 400 }
      );
    }

    // 매장 유형 한글 변환
    const storeTypeMap: { [key: string]: string } = {
      offline: '오프라인 대리점',
      online: '온라인 대리점',
      multi: '멀티점 운영',
      other: '기타',
    };

    const storeTypeKorean = storeTypeMap[storeType] || storeType;

    // 이메일 전송
    const { data, error } = await resend.emails.send({
      from: 'WIZ THE PLANNING <onboarding@resend.dev>',
      to: ['ceo@wiztheplanning.com'],
      subject: `[무료 상담 신청] ${name}님의 문의`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 10px;">
          <h2 style="color: #1B3B6F; border-bottom: 3px solid #FF6B35; padding-bottom: 10px;">새로운 무료 상담 신청</h2>

          <div style="margin: 20px 0;">
            <h3 style="color: #FF6B35; margin-bottom: 15px;">고객 정보</h3>
            <table style="width: 100%; border-collapse: collapse;">
              <tr style="border-bottom: 1px solid #e0e0e0;">
                <td style="padding: 12px; font-weight: bold; width: 120px; color: #555;">이름</td>
                <td style="padding: 12px;">${name}</td>
              </tr>
              <tr style="border-bottom: 1px solid #e0e0e0;">
                <td style="padding: 12px; font-weight: bold; color: #555;">연락처</td>
                <td style="padding: 12px;">${phone}</td>
              </tr>
              <tr style="border-bottom: 1px solid #e0e0e0;">
                <td style="padding: 12px; font-weight: bold; color: #555;">매장 유형</td>
                <td style="padding: 12px;">${storeTypeKorean}</td>
              </tr>
            </table>
          </div>

          ${message ? `
            <div style="margin: 20px 0;">
              <h3 style="color: #FF6B35; margin-bottom: 15px;">문의 내용</h3>
              <div style="background-color: #f5f5f5; padding: 15px; border-radius: 5px; border-left: 4px solid #FF6B35;">
                ${message.replace(/\n/g, '<br>')}
              </div>
            </div>
          ` : ''}

          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e0e0e0; font-size: 12px; color: #888;">
            <p>접수 시간: ${new Date().toLocaleString('ko-KR', { timeZone: 'Asia/Seoul' })}</p>
            <p style="margin-top: 10px;">이 메일은 WIZ THE PLANNING 홈페이지를 통해 자동으로 발송되었습니다.</p>
          </div>
        </div>
      `,
    });

    if (error) {
      console.error('Email sending error:', error);
      return NextResponse.json(
        { error: '이메일 전송에 실패했습니다. 잠시 후 다시 시도해주세요.' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { success: true, message: '문의가 성공적으로 접수되었습니다.', data },
      { status: 200 }
    );
  } catch (error) {
    console.error('API error:', error);
    return NextResponse.json(
      { error: '서버 오류가 발생했습니다. 잠시 후 다시 시도해주세요.' },
      { status: 500 }
    );
  }
}
