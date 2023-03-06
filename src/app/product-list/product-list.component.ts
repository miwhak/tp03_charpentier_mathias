import { Component, OnInit } from '@angular/core';

import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  products: any[] = [];
  filteredProducts: any[] = [];
  searchFilters: any = {};

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe(products => {
      this.products = products;
      this.filteredProducts = products;
    });
  }

  filterProducts(filters: any): void {
    let filteredProducts = this.products;

    if (filters.name) {
      filteredProducts = filteredProducts.filter((product) =>
        product.name.toLowerCase().includes(filters.name.toLowerCase())
      );
    }

    if (filters.price?.max) {
      filteredProducts = filteredProducts.filter(
        (product) => product.price <= filters.price.max
      );
    }

    this.filteredProducts = filteredProducts;
  }
}