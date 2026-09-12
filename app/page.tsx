"use client";

import {
  ArrowDownIcon,
  ArrowRightIcon,
  Bars3Icon,
  BellIcon,
  BuildingOffice2Icon,
  CalculatorIcon,
  ChevronDownIcon,
  ClipboardDocumentCheckIcon,
  HeartIcon,
  HomeIcon,
  MagnifyingGlassIcon,
  MapIcon,
  MapPinIcon,
  PlusIcon,
  SparklesIcon,
} from "@heroicons/react/24/outline";
import { useMemo, useState } from "react";

type Property = {
  id: number; address: string; type: string; price: number; value: number; discount: number;
  land: number; floor: number; rent: number; noi: number; equity: number; score: number;
  grade: string; tag: string; added: string; bars: number[];
};

const properties: Property[] = [
  { id: 1, address: "대전 유성구 봉명동", type: "근린생활시설", price: 7.2, value: 9.05, discount: 20.4, land: 74, floor: 132, rent: 480, noi: 6.4, equity: 1.45, score: 84, grade: "A", tag: "가격하락", added: "오늘", bars: [38, 53, 46, 68, 61, 84] },
  { id: 2, address: "세종 나성동", type: "상가주택", price: 11.8, value: 14.7, discount: 19.7, land: 93, floor: 188, rent: 720, noi: 6.1, equity: 2.08, score: 88, grade: "A", tag: "TOP 저평가", added: "오늘", bars: [43, 56, 51, 67, 72, 88] },
  { id: 3, address: "대전 중구 대흥동", type: "꼬마빌딩", price: 6.4, value: 7.72, discount: 17.1, land: 61, floor: 106, rent: 435, noi: 6.8, equity: 1.12, score: 81, grade: "A", tag: "고수익", added: "1일 전", bars: [32, 45, 52, 59, 70, 81] },
];

const kpis = [
  { label: "오늘 신규매물", value: "37", unit: "건", note: "어제보다 12건 증가", tone: "blue", icon: SparklesIcon },
  { label: "저평가 후보", value: "8", unit: "건", note: "할인율 15% 이상", tone: "green", icon: CalculatorIcon },
  { label: "가격하락", value: "4", unit: "건", note: "평균 6.8% 하락", tone: "orange", icon: ArrowDownIcon },
  { label: "Score 80 이상", value: "3", unit: "건", note: "우선 검토 대상", tone: "purple", icon: ClipboardDocumentCheckIcon },
  { label: "관심매물", value: "12", unit: "건", note: "2건 상태 변경", tone: "red", icon: HeartIcon },
];

const nav = [
  ["대시보드", HomeIcon], ["매물 검색", MagnifyingGlassIcon], ["지도 탐색", MapIcon],
  ["관심 매물", HeartIcon], ["투자 분석", CalculatorIcon], ["임장 관리", ClipboardDocumentCheckIcon],
] as const;

export default function Dashboard() {
  const [activeNav, setActiveNav] = useState("대시보드");
  const [activeFilter, setActiveFilter] = useState("전체");
  const [favorites, setFavorites] = useState<number[]>([2]);
  const [query, setQuery] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  const shown = useMemo(() => properties.filter((p) =>
    (activeFilter === "전체" || p.tag === activeFilter) && p.address.includes(query)
  ), [activeFilter, query]);

  return (
    <div className="app-shell">
      <aside className={menuOpen ? "sidebar open" : "sidebar"}>
        <div className="brand"><div className="brand-mark"><BuildingOffice2Icon /></div><div><strong>RealFinder</strong><span>투자의 기준을 찾다</span></div></div>
        <nav className="nav-list">
          <p>MENU</p>
          {nav.map(([label, Icon]) => <button key={label} className={activeNav === label ? "active" : ""} onClick={() => { setActiveNav(label); setMenuOpen(false); }}><Icon /><span>{label}</span>{label === "관심 매물" && <b>12</b>}</button>)}
        </nav>
        <div className="side-tip"><SparklesIcon /><strong>새 매물을 등록해보세요</strong><p>핵심 투자 지표를<br />자동으로 계산해 드려요.</p><button><PlusIcon /> 매물 직접 등록</button></div>
        <div className="profile"><div className="avatar">김</div><div><strong>김투자</strong><span>개인 투자자</span></div><ChevronDownIcon /></div>
      </aside>

      <main>
        <header>
          <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)}><Bars3Icon /></button>
          <div className="search"><MagnifyingGlassIcon /><input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="지역, 주소로 매물을 검색하세요" /><kbd>⌘ K</kbd></div>
          <div className="header-actions"><button className="notification"><BellIcon /><i /></button><span /><button className="register"><PlusIcon /> 매물 등록</button></div>
        </header>

        <div className="content">
          <section className="welcome"><div><p>2026년 9월 12일 토요일</p><h1>좋은 아침이에요, 김투자님 <span>👋</span></h1><h2>오늘도 데이터로 좋은 기회를 찾아보세요.</h2></div><div className="region"><MapPinIcon /><div><span>관심 지역</span><strong>대전 · 세종</strong></div><ChevronDownIcon /></div></section>

          <section className="kpi-grid">
            {kpis.map(({ label, value, unit, note, tone, icon: Icon }) => <article className="kpi" key={label}><div className={`kpi-icon ${tone}`}><Icon /></div><div><p>{label}</p><strong>{value}<small>{unit}</small></strong><span className={tone === "orange" ? "orange-text" : ""}>{note}</span></div></article>)}
          </section>

          <section className="section-head"><div><h2>오늘의 추천 매물</h2><p>투자점수와 저평가 가능성을 종합해 선별했어요.</p></div><button>전체 매물 보기 <ArrowRightIcon /></button></section>
          <div className="filters">{["전체", "TOP 저평가", "가격하락", "고수익"].map((f) => <button key={f} onClick={() => setActiveFilter(f)} className={activeFilter === f ? "active" : ""}>{f}</button>)}</div>

          <section className="property-grid">
            {shown.map((p) => <article className="property-card" key={p.id}>
              <div className="card-top"><div><div className="badges"><span className="location">{p.address.split(" ").slice(0,2).join(" ")}</span><span className={`tag tag-${p.id}`}>{p.tag}</span></div><h3>{p.address.split(" ").slice(2).join(" ")} <small>{p.type}</small></h3><p><MapPinIcon /> {p.address} 120-8 · {p.added} 등록</p></div><button className={favorites.includes(p.id) ? "heart liked" : "heart"} onClick={() => setFavorites((v) => v.includes(p.id) ? v.filter(x => x !== p.id) : [...v, p.id])}><HeartIcon /></button></div>
              <div className="valuation"><div><span>매매가</span><strong>{p.price.toFixed(2)}억</strong></div><ArrowRightIcon /><div><span>추정 적정가</span><strong>{p.value.toFixed(2)}억</strong></div><div className="discount"><span>저평가율</span><strong>{p.discount}%</strong></div></div>
              <div className="metrics"><div><span>대지 / 연면적</span><strong>{p.land}평 <i>/</i> {p.floor}평</strong></div><div><span>월 임대료</span><strong>{p.rent}만원</strong></div><div><span>NOI 수익률</span><strong className="positive">{p.noi}%</strong></div><div><span>필요 자기자본</span><strong>{p.equity.toFixed(2)}억</strong></div></div>
              <div className="score"><div className={`grade grade-${p.grade}`}>{p.grade}</div><div className="score-info"><div><span>투자 Score</span><strong>{p.score}<small> / 100</small></strong></div><div className="bars">{p.bars.map((b,i) => <i key={i} style={{height: `${b}%`}} />)}</div></div></div>
              <div className="card-actions"><button>상세 분석</button><button><ClipboardDocumentCheckIcon /> 임장 등록</button></div>
            </article>)}
            {shown.length === 0 && <div className="empty">검색 조건에 맞는 매물이 없습니다.</div>}
          </section>

          <section className="bottom-grid"><article className="insight"><div className="insight-icon"><SparklesIcon /></div><div><span>REALFINDER INSIGHT</span><h3>봉명동 근린생활시설, 지금 살펴볼 이유</h3><p>최근 3개월 내 인근 유사 매물 대비 평당가가 <b>약 18% 낮고</b>, 임대 정상화 시 연간 NOI가 1,260만원 증가할 가능성이 있어요.</p><button>분석 리포트 보기 <ArrowRightIcon /></button></div></article><article className="market"><div><h3>관심지역 시장동향</h3><button>최근 3개월 <ChevronDownIcon /></button></div><div className="market-stat"><span>대전 상업용 평균 수익률</span><strong>5.8%</strong><small>+0.3%p</small></div><div className="trend"><span style={{height:"35%"}}/><span style={{height:"46%"}}/><span style={{height:"41%"}}/><span style={{height:"55%"}}/><span style={{height:"52%"}}/><span style={{height:"69%"}}/><span style={{height:"77%"}}/><span style={{height:"72%"}}/></div></article></section>
        </div>
      </main>
    </div>
  );
}
