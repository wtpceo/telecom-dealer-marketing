# 이메일 설정 가이드

무료 상담 신청 폼에서 제출된 내용이 `ceo@wiztheplanning.com`으로 이메일로 전송됩니다.

## 📧 Resend 이메일 서비스 설정

### 1. Resend 계정 생성 및 API 키 발급

1. [Resend 웹사이트](https://resend.com)에 접속
2. 무료 계정 가입 (월 3,000통 무료)
3. [API Keys 페이지](https://resend.com/api-keys)에서 API 키 생성
4. API 키 복사 (형식: `re_xxxxxxxxxx`)

### 2. 환경 변수 설정

프로젝트 루트 폴더에 `.env.local` 파일을 생성하고 아래 내용 추가:

```bash
RESEND_API_KEY=re_your_actual_api_key_here
```

**중요**: `.env.local` 파일은 Git에 커밋되지 않으며, 발급받은 실제 API 키로 교체해야 합니다.

### 3. 도메인 인증 (선택사항, 프로덕션 환경)

Resend 무료 플랜에서는 `onboarding@resend.dev` 발신자 주소를 사용합니다.
자체 도메인을 사용하려면:

1. Resend 대시보드에서 도메인 추가
2. DNS 레코드 설정 (MX, TXT, DKIM)
3. 도메인 인증 완료 후 `src/app/api/contact/route.ts` 파일 수정:

```typescript
from: 'WIZ THE PLANNING <noreply@wiztheplanning.com>',
```

### 4. 개발 서버 재시작

환경 변수를 추가한 후 개발 서버를 재시작합니다:

```bash
npm run dev
```

## 📬 이메일 템플릿

현재 이메일은 다음 정보를 포함합니다:

- **고객 정보**: 이름, 연락처, 매장 유형
- **문의 내용**: 고객이 작성한 메시지
- **접수 시간**: 한국 시간대 기준 자동 기록
- **전문적인 HTML 디자인**: 회사 브랜드 컬러 적용

## 🔧 문제 해결

### API 키 오류
- `.env.local` 파일이 프로젝트 루트에 있는지 확인
- API 키가 `re_`로 시작하는지 확인
- 개발 서버를 재시작했는지 확인

### 이메일이 전송되지 않음
1. Resend 대시보드에서 API 키가 활성화되어 있는지 확인
2. 브라우저 콘솔에서 에러 메시지 확인
3. 서버 로그 확인 (`npm run dev` 실행 중인 터미널)

### 월 무료 한도 초과
- Resend 무료 플랜: 월 3,000통
- 한도 초과 시 유료 플랜으로 업그레이드 필요

## 📊 이메일 발송 현황 확인

Resend 대시보드에서 실시간으로 확인 가능:
- 발송 성공/실패 내역
- 이메일 내용 미리보기
- 발송 통계 및 분석

## 🚀 프로덕션 배포

Vercel 등의 호스팅 서비스에 배포 시 환경 변수 설정:

1. 프로젝트 설정 → Environment Variables
2. `RESEND_API_KEY` 추가
3. Production 환경에 적용
4. 재배포

---

**문의**: 설정 중 문제가 발생하면 [Resend 문서](https://resend.com/docs)를 참고하세요.
