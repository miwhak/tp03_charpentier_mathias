import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-product-search',
  templateUrl: './product-search.component.html',
  styleUrls: ['./product-search.component.scss']
})
export class ProductSearchComponent {
  name = '';
  maxPrice: number | undefined;

  @Output() search = new EventEmitter<any>();

  searchProducts(): void {
    const filters: any = {};

    if (this.name) {
      filters.name = this.name;
    }

    if (this.maxPrice) {
      filters.price = { max: this.maxPrice };
    }

    this.search.emit(filters);
  }
}
