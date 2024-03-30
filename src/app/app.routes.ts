import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ProductsComponent } from './pages/products/products.component';
import { ProductDetailsComponent } from './pages/product-details/product-details.component';

export const routes: Routes = [
    {path: "home", component: HomeComponent},
    {path: "contact", component: ContactComponent},
    {path: "products", component: ProductsComponent},
    {path: "products/:id", component: ProductDetailsComponent},
    {path: "**", redirectTo: "home", pathMatch: "full"}
];
