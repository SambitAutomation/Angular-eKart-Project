export class Product{
    id: number;
    name: string;
    description: string;
    brand: string;
    gender: string;
    category: string;
    size: number[];
    color: string[];
    price: number;
    discountPrice?: number;
    items_left: number;
    is_in_inventory: boolean;
    ImageURL: string;
    slug: string;
}