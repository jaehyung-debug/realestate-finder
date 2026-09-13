import { analyzeProperty } from "./engine";
import type { Property } from "./types";

export const rawProperties: Property[] = [
  { id:1,address:"대전 유성구 봉명동 120-8",sido:"대전",sigungu:"유성구",dong:"봉명동",type:"근린생활시설",askingPrice:720000000,estimatedValue:915000000,landArea:75,grossArea:130,deposit:50000000,monthlyRent:4800000,normalRent:5500000,vacancyRate:5,operatingCost:7000000,capRate:5.5,appraisalValue:900000000,ltv:65,interestRate:4.2,acquisitionCost:35000000,repairCost:10000000,builtYear:1998,zoning:"일반상업지역",status:"가격하락",priceDrop:10,lat:36.354,lng:127.344},
  { id:2,address:"세종 나성동 763",sido:"세종",sigungu:"세종시",dong:"나성동",type:"상가주택",askingPrice:1180000000,estimatedValue:1470000000,landArea:93,grossArea:188,deposit:80000000,monthlyRent:7200000,normalRent:8100000,vacancyRate:4,operatingCost:11000000,capRate:5.2,appraisalValue:1400000000,ltv:62,interestRate:4.1,acquisitionCost:57000000,repairCost:8000000,builtYear:2013,zoning:"준주거지역",status:"신규",lat:36.486,lng:127.262},
  { id:3,address:"대전 중구 대흥동 452-3",sido:"대전",sigungu:"중구",dong:"대흥동",type:"꼬마빌딩",askingPrice:640000000,estimatedValue:772000000,landArea:61,grossArea:106,deposit:30000000,monthlyRent:4350000,normalRent:4900000,vacancyRate:7,operatingCost:6200000,capRate:5.7,appraisalValue:750000000,ltv:65,interestRate:4.3,acquisitionCost:31000000,repairCost:15000000,builtYear:2002,zoning:"일반상업지역",status:"신규",lat:36.324,lng:127.427},
  { id:4,address:"대전 대덕구 오정동 61-5",sido:"대전",sigungu:"대덕구",dong:"오정동",type:"창고",askingPrice:930000000,estimatedValue:1050000000,landArea:182,grossArea:145,deposit:40000000,monthlyRent:5900000,normalRent:6400000,vacancyRate:3,operatingCost:8500000,capRate:5.6,appraisalValue:1000000000,ltv:60,interestRate:4.4,acquisitionCost:45000000,repairCost:20000000,builtYear:2008,zoning:"준공업지역",status:"일반",lat:36.359,lng:127.409},
  { id:5,address:"세종 조치원읍 원리 12-4",sido:"세종",sigungu:"세종시",dong:"조치원읍",type:"상가",askingPrice:510000000,estimatedValue:590000000,landArea:54,grossArea:87,deposit:25000000,monthlyRent:3200000,normalRent:3700000,vacancyRate:8,operatingCost:5000000,capRate:5.8,appraisalValue:570000000,ltv:60,interestRate:4.5,acquisitionCost:25000000,repairCost:7000000,builtYear:1996,zoning:"일반상업지역",status:"가격하락",priceDrop:6.5,lat:36.601,lng:127.299},
];

export const properties = rawProperties.map(analyzeProperty);
