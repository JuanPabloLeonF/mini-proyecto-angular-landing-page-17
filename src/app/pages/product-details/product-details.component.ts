import { Component, inject, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent implements OnInit {

  public product: any = {};
  private _apiService: any = inject(ApiService);
  private _router: any = inject(ActivatedRoute);
  public loading: boolean = false;

  ngOnInit() {
    this._router.params.subscribe((params: any) => {
      this.getProductById(params.id);
    })
  }

  public getProductById(id: number) {
    this._apiService.getProductById(id).subscribe((data: any) => {
      this.product = data;
      this.loading = true;
    })
  }
}
