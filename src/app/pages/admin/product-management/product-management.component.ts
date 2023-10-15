import { Component } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { IProduct } from 'src/app/interfaces/product';
import { ProductService } from 'src/app/servives/product.service';

@Component({
  selector: 'app-product-management',
  templateUrl: './product-management.component.html',
  styleUrls: ['./product-management.component.css']
})
export class ProductManagementComponent {
  products!: IProduct[]
  constructor(
    private productServite: ProductService
  ) {

  }
  async ngOnInit() {
    try {
      this.products = await lastValueFrom(this.productServite.getAll())
    } catch (error) {

    }
  }

  async remove(id: number) {
    const cofirm = window.confirm("Bạn có chắc chắn muốn xóa không")
    if (!cofirm) return
    try {
      await lastValueFrom(this.productServite.remove(id))
      this.products = this.products.filter(item => item.id !== id)
      alert("Xóa thành công")
    } catch (error) {

    }
  }
}
