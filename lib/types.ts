export type PropertyType = "꼬마빌딩" | "상가" | "상가주택" | "근린생활시설" | "공장" | "창고";

export type Property = {
  id: number;
  address: string;
  sido: string;
  sigungu: string;
  dong: string;
  type: PropertyType;
  askingPrice: number;
  estimatedValue: number;
  landArea: number;
  grossArea: number;
  deposit: number;
  monthlyRent: number;
  normalRent: number;
  vacancyRate: number;
  operatingCost: number;
  capRate: number;
  appraisalValue: number;
  ltv: number;
  interestRate: number;
  acquisitionCost: number;
  repairCost: number;
  builtYear: number;
  zoning: string;
  status: "신규" | "가격하락" | "일반";
  priceDrop?: number;
  lat: number;
  lng: number;
};

export type Analysis = Property & {
  annualRent: number;
  noi: number;
  grossYield: number;
  noiYield: number;
  incomeValue: number;
  discountRate: number;
  loanAmount: number;
  requiredEquity: number;
  annualInterest: number;
  cashFlow: number;
  cashOnCash: number;
  dscr: number;
  valueUp: number;
  score: number;
  grade: "S" | "A" | "B" | "C" | "제외";
};
