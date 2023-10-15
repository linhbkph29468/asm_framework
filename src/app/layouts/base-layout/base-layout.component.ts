import { Component } from '@angular/core';
import { IProduct } from 'src/app/interfaces/product';
import { ProductService } from 'src/app/servives/product.service';

@Component({
  selector: 'app-base-layout',
  templateUrl: './base-layout.component.html',
  styleUrls: ['./base-layout.component.css']
})
export class BaseLayoutComponent {
  // products: string = '/products'; // ví dụ, có thể là một đường dẫn hoặc chuỗi bất kỳ
  products: IProduct[] = [];
  currentProduct!: IProduct;

  constructor(private productService: ProductService) {
    this.productService.getAll().subscribe({
      next: (data) => {
        this.products = data;
      },
      error: (error) => {
        console.log(error.message)
      }
    })
  }
}
