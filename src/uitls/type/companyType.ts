export interface IServices {
  id: number;
  created_at: number;
  name: string;
  slug: string;
  decription: string;
  price: number;
  images: Images;
  feature_id: IFeatures[];
  categories: ICategoryService;
}
export interface IFeatures {
  id: number;
  created_at: number;
  name: string;
  services_id: IServices[];
}

export interface ICategoryService {
  id: number;
  created_at: number;
  name: string;
  slug: string;
  services_id: number;
  services: IServices;
}

interface Images {
  access: string;
  path: string;
  name: string;
  type: string;
  size: number;
  mime: string;
  meta: {
    width: number;
    height: number;
  };
  url: string;
}
