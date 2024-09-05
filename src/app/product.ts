export interface Product {
    id: number;
    title: string;
    currencyType: string;
    oldPrice: number;
    currentPrice: number;
    shortDesc: string;
    sku: string;
    slug: string;
    availability: boolean;
    image: string;
    vendor: string;
    type: string;
    sale: string;
    hot: string;
    quantity: number;
}