# RealFinder

한국의 상업용·수익형 부동산을 데이터로 분석해 저평가 후보를 찾는 웹 애플리케이션입니다.

## 이용 방법

RealFinder는 설치형 프로그램이 아닙니다. 배포된 **웹사이트 URL에 브라우저로 접속**하여 사용합니다.

현재 저장소는 Vercel 배포를 기준으로 구성되어 있으며, 운영 환경에서는 GitHub의 기본 브랜치에 반영된 변경 사항이 Vercel을 통해 자동 배포됩니다.

## MVP 기능

- 투자 현황 대시보드와 핵심 KPI
- 상세 조건을 지원하는 매물 검색 및 정렬
- 매물별 가치·수익·금융 상세 분석
- 등급 중심 지도 검색
- 관심매물 저장
- 매물 직접 등록 및 자동 분석
- LTV·금리·보증금을 반영한 대출 계산기
- 저평가율, NOI, 필요 자기자본, Cash-on-Cash, DSCR, Value-Up 계산

## 시스템 구성

- **Web:** Next.js, React, TypeScript
- **Hosting:** Vercel
- **Database:** Supabase PostgreSQL (연동 예정)
- **현재 데이터:** 실제 API로 교체할 수 있도록 분리된 Mock Data

## 개발 및 배포

개발자는 변경 사항을 GitHub에 반영하고 Vercel의 Git Integration을 통해 Preview 및 Production 배포를 관리합니다. 환경 변수와 Supabase 연결 정보는 Vercel 프로젝트 설정에서 관리하며 저장소에 비밀 값을 커밋하지 않습니다.
