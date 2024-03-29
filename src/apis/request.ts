import { ManagedCountries, ManagedLanguages } from "@/infrastructure";

export interface LanguageParams {
  language: ManagedLanguages;
}

export interface CountryParams {
  language: ManagedCountries;
}

export interface PaginationParams {
  page: number;
}
