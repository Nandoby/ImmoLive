import { Iimg } from "./Iproperty.interface";

interface IcardProperty {
  id?: number;
  slug?: string;
  statusState?: boolean;
  surfaceArea?: number;
  nbrooms?: number;
  city: string;
  postalCode?: number;
  isNew?: boolean;
  isFavorite: boolean;
  img?: Iimg;
  type?: string;
  price?: number;
}

export default IcardProperty;
