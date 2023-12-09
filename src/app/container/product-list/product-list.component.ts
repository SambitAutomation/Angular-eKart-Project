import { Component, Input } from '@angular/core';
import { Product } from '../../Models/Product';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  selectedProduct: Product;
  products = [
    {
      id: 1,
      name: "Nike React Infinity Run Flyknit",
      description: "Lorem Ipsum is simply au—y text of the printing and typesetting Irastry. Loren Ipsum has been the industry's standard",
      brand: "NIKE",
      gender: "MEN",
      category: "RUNNING",
      size: [7, 8, 9, 10],
      color: ["White", "Blue", "Black"],
      price: 160,
      discountPrice: 60,
      items_left: 3,
      is_in_inventory: true,
      ImageURL: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/e06c59cf-a906-4e67-a6bc-b8245da588a9/air-huarache-runner-shoes-6gNJ0g.png",
      slug: "nike-react-infinity-run-flyknit"
    },
    {
      id: 2,
      name: "Adidas React Infinity Run Flyknit",
      description: "Lorem Ipsum is simply au—y text of the printing and typesetting Irastry. Loren Ipsum has been the industry's standard",
      brand: "NIKE",
      gender: "MEN",
      category: "RUNNING",
      size: [7, 8, 9, 10],
      color: ["White", "Blue", "Black"],
      price: 160,
      items_left: 3,
      is_in_inventory: false,
      ImageURL: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/04e23e3d-e3ee-4830-8969-e757aef41911/jordan-max-aura-5-shoes-ZBZ4Pz.png",
      slug: "nike-react-infinity-run-flyknit"
    },
    {
      id: 3,
      name: "Adidas React Infinity Run Flyknit",
      description: "Lorem Ipsum is simply au—y text of the printing and typesetting Irastry. Loren Ipsum has been the industry's standard",
      brand: "NIKE",
      gender: "MEN",
      category: "RUNNING",
      size: [7, 8, 9, 10],
      color: ["White", "Blue", "Black"],
      price: 156,
      items_left: 3,
      is_in_inventory: true,
      ImageURL: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/d9968d11-0ae0-45eb-9139-20574892fcc4/air-trainer-1-shoes-ZLtGj0.png",
      slug: "nike-react-infinity-run-flyknit"
    },
    {
      id: 4,
      name: "Nike React Infinity Run Flyknit",
      description: "Lorem Ipsum is simply au—y text of the printing and typesetting Irastry. Loren Ipsum has been the industry's standard",
      brand: "NIKE",
      gender: "MEN",
      category: "RUNNING",
      size: [7, 8, 9, 10],
      color: ["White", "Blue", "Black"],
      price: 567,
      items_left: 3,
      is_in_inventory: true,
      ImageURL: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/eaf524f7-a9f7-4f70-a438-1b0480eb2540/court-vision-low-shoes-q0sr67.png",
      slug: "nike-react-infinity-run-flyknit"
    },
    {
      id: 5,
      name: "Nike React Infinity Run Flyknit",
      description: "Lorem Ipsum is simply au—y text of the printing and typesetting Irastry. Loren Ipsum has been the industry's standard",
      brand: "NIKE",
      gender: "MEN",
      category: "RUNNING",
      size: [7, 8, 9, 10],
      color: ["White", "Blue", "Black"],
      price: 676,
      items_left: 7,
      is_in_inventory: false,
      ImageURL: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/d9a3920e-d792-4d84-950f-9673c4333bef/revolution-7-road-running-shoes-Ws2ZGl.png",
      slug: "nike-react-infinity-run-flyknit"
    },
    {
      id: 6,
      name: "Adidas React Infinity Run Flyknit",
      description: "Lorem Ipsum is simply au—y text of the printing and typesetting Irastry. Loren Ipsum has been the industry's standard",
      brand: "NIKE",
      gender: "MEN",
      category: "RUNNING",
      size: [7, 8, 9, 10],
      color: ["White", "Blue", "Black"],
      price: 1460,
      items_left: 3,
      is_in_inventory: true,
      ImageURL: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/d3123e79-53e5-4a03-aa5b-fbc5c18b9bfd/air-jordan-1-low-shoes-459b4T.png",
      slug: "nike-react-infinity-run-flyknit"
    },
    {
      id: 7,
      name: "NikeNew React Infinity Run Flyknit",
      description: "Lorem Ipsum is simply au—y text of the printing and typesetting Irastry. Loren Ipsum has been the industry's standard",
      brand: "NIKE",
      gender: "MEN",
      category: "RUNNING",
      size: [7, 8, 9, 10],
      color: ["White", "Blue", "Black"],
      price: 513,
      items_left: 3,
      is_in_inventory: true,
      ImageURL: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/9a5d682b-04f3-405d-8aa0-401e8daedf81/zoom-vomero-5-shoes.png",
      slug: "nike-react-infinity-run-flyknit"
    }

  ]

  totalProductCount = this.products.length;
  totalProductInStock = this.products.filter( p => p.is_in_inventory === true).length;
  totalProductOutOfStock = this.products.filter( p => p.is_in_inventory === false).length;

  selectedFilterRadioButton: string = 'all';

  onFilterChnaged(value: string){
    this.selectedFilterRadioButton = value;
  }

  @Input()
  searchText: string = '';
}
