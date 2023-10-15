import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms'
import { IProduct } from 'src/app/interfaces/product';
import { async, lastValueFrom } from 'rxjs'
import { ProductService } from 'src/app/servives/product.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent {
  productForm = this.formBuilder.group({
    name: [''],
    price: [0],
    desc: [''],
    image: ['']
  });

  product!: IProduct;

  mode: "create" | "update" = "create";

  constructor(
    private router: ActivatedRoute,
    private formBuilder: FormBuilder,
    private productService: ProductService
  ) {

  }

  async ngOnInit() {
    const { id } = this.router.snapshot.params
    if (id) {
      this.product = await lastValueFrom(this.productService.getOne(id))
      this.productForm.patchValue(this.product)
      this.mode = "update"
    }
  }

  async onHandleSubmit() {
    // if (this.productForm.invalid) return;
    try {
      if (this.mode === "create") {
        await lastValueFrom(this.productService.add(this.productForm.value as IProduct))
        alert("Thêm sản phẩm thành công")
      } else {
        await lastValueFrom(this.productService.update({ ...this.product, ...this.productForm.value } as IProduct))
        alert("Cập nhật thành công")
      }
    } catch (error: any) {
      error.message = "Opps"
    }
  }
}
