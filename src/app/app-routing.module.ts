import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BaseLayoutComponent } from './layouts/base-layout/base-layout.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ProductPageComponent } from './pages/product-page/product-page.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { ProductManagementComponent } from './pages/admin/product-management/product-management.component';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { SignupComponent } from './pages/signup/signup.component';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [
  {
    path: "", component: BaseLayoutComponent, children: [
      { path: "", component: HomePageComponent },
      { path: "products", component: ProductPageComponent },
    ]
  },

  { path: "signup", component: SignupComponent },
  { path: "login", component: LoginComponent },

  {
    path: "admin", component: AdminLayoutComponent, children: [
      { path: "dashboard", component: DashboardComponent },
      { path: "product", component: ProductManagementComponent },
      { path: "product/add", component: ProductFormComponent },
      { path: "product/:id/update", component: ProductFormComponent },

    ]
  },
  { path: "**", component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
