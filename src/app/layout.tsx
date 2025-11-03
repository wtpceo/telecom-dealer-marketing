import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "휴대폰 대리점 마케팅 솔루션 | WIZ THE PLANNING",
  description: "휴대폰 대리점 특화 디지털 마케팅으로 신규 고객 유입 증가, 전환율 향상, 지속 가능한 성장을 지원합니다.",
  keywords: "휴대폰 대리점, 마케팅, 디지털 마케팅, 온라인 광고, 대리점 홍보",
  openGraph: {
    title: "휴대폰 대리점 마케팅 솔루션",
    description: "귀사의 성장을 위한 맞춤형 마케팅 솔루션",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <link
          rel="stylesheet"
          as="style"
          crossOrigin="anonymous"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css"
        />
      </head>
      <body className="antialiased" style={{ fontFamily: 'Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, sans-serif' }}>
        {children}
      </body>
    </html>
  );
}
