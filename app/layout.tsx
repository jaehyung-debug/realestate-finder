import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "RealFinder | 투자 대시보드",
  description: "데이터로 검증하는 상업용 부동산 투자 분석",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
