import { Component, inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { ProductDetailsComponent } from "../product-details/product-details.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products',
  standalone: true,
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
  imports: [RouterLink, ProductDetailsComponent, CommonModule]
})
export class ProductsComponent implements OnInit {

  public listProducts: any[] = [];
  private _apiService: any = inject(ApiService);
  public loading: boolean = false;

  ngOnInit() {
    this.getAllProducts();
  }

  private getAllProducts() {
    this._apiService.getAllProducts().subscribe((data: any) => {
      this.listProducts = data;
      this.loading = true;
    })
  }
}
