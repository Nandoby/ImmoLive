export interface Iproperty{
    id?:number;
    title?:string;
    price?:number;
    nbrooms?:number;
    description?:string;
    city:string;
    postalCode?:number;
    address?:string;
    type?:string;
    img?:Iimg;
    createAt?:Date;
    isNew?:boolean;
    statusState?:boolean;
    surfaceArea?:number;
    isFavorite:boolean;
    slug?:string;
}


export interface Iimg {
    id?:number;
    path?:string;
}