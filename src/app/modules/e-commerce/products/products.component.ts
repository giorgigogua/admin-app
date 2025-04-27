import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {

  users: any = [
    {
      name: 'Wireless Headphones',
      category: 'Electronics',
      price: '$99.99,',
      stock: 'In Stock',
      rating: 5,
      img: 'https://yevgenysim-turkey.github.io/dashbrd/assets/img/products/gaming-laptop.jpg'
    },
    {
      name: 'Wireless Headphones',
      category: 'Electronics',
      price: '$99.99,',
      stock: 'Out of Stock',
      rating: 3,
      img: 'https://yevgenysim-turkey.github.io/dashbrd/assets/img/products/smart-watch.jpg'
    }
  ]

}
