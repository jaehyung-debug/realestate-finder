import type { Analysis, Property } from "./types";

const safePercent = (part: number, total: number) => total > 0 ? part / total * 100 : 0;

export function analyzeProperty(property: Property): Analysis {
  const annualRent = property.monthlyRent * 12;
  const noi = annualRent * (1 - property.vacancyRate / 100) - property.operatingCost;
  const grossYield = safePercent(annualRent, property.askingPrice);
  const noiYield = safePercent(noi, property.askingPrice);
  const incomeValue = property.capRate > 0 ? noi / (property.capRate / 100) : 0;
  const discountRate = safePercent(property.estimatedValue - property.askingPrice, property.estimatedValue);
  const loanAmount = property.appraisalValue * property.ltv / 100;
  const requiredEquity = Math.max(0, property.askingPrice + property.acquisitionCost + property.repairCost - loanAmount - property.deposit);
  const annualInterest = loanAmount * property.interestRate / 100;
  const cashFlow = noi - annualInterest;
  const cashOnCash = safePercent(cashFlow, requiredEquity);
  const dscr = annualInterest > 0 ? noi / annualInterest : 0;
  const valueUp = Math.max(0, (property.normalRent - property.monthlyRent) * 12 / (property.capRate / 100));
  const score = Math.round(Math.min(100,
    Math.min(20, discountRate * .9) + Math.min(15, noiYield * 2) +
    Math.min(15, safePercent(property.estimatedValue, property.askingPrice) / 8) +
    Math.min(15, cashOnCash) + Math.min(15, dscr * 8) +
    Math.max(0, 10 - property.vacancyRate / 2) + (property.builtYear >= 2000 ? 10 : 7)
  ));
  const grade = score >= 90 ? "S" : score >= 80 ? "A" : score >= 70 ? "B" : score >= 60 ? "C" : "제외";
  return { ...property, annualRent, noi, grossYield, noiYield, incomeValue, discountRate, loanAmount, requiredEquity, annualInterest, cashFlow, cashOnCash, dscr, valueUp, score, grade };
}

export const formatEok = (value: number) => `${(value / 100_000_000).toFixed(value % 100_000_000 === 0 ? 0 : 2)}억`;
export const formatMan = (value: number) => `${Math.round(value / 10_000).toLocaleString("ko-KR")}만원`;
export const formatPyeong = (value: number) => `${value.toFixed(0)}평 · ${(value * 3.3058).toFixed(0)}㎡`;
export const formatPercent = (value: number) => `${value.toFixed(1)}%`;
