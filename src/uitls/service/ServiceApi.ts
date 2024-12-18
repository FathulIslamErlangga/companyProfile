import { ICategoryService, IServices } from "../type/companyType";
import { FetchApi } from "./Api";

const BASE_URL = "https://x8ki-letl-twmt.n7.xano.io/api:llrD0G6l";

export const fetchService = async (): Promise<IServices[]> => {
  return FetchApi(`${BASE_URL}/services`);
};
export const fetchCategory = async (): Promise<ICategoryService[]> => {
  return FetchApi(`${BASE_URL}/categories`);
};
