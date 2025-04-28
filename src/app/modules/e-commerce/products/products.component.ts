import { Component, OnInit } from '@angular/core';
import { ProductListService } from '../../../services/product-list.service';
import { FormControl } from '@angular/forms';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
  providers: [ProductListService]
})
export class ProductsComponent implements OnInit {

  productList: any[] = []

  filterData: string = '';
  searchControl: FormControl = new FormControl('');
  selectedStatus: string = '';
  stock: any[] = []

  constructor(private productListService: ProductListService) {

    this.productListService.getAll().subscribe((data) => {
      this.productList = data
    })

  }


  ngOnInit(): void {
    this.searchControl.valueChanges.pipe(
      switchMap((filterData) => this.productListService.getFilteredProduct(filterData))
    ).subscribe((data) => {
      this.productList = data;
    });

    this.productListService.getStatuses().subscribe((stock: string[]) => {
      this.stock = stock;
    });
  }

  onStatusChange(status: string): void {
    this.selectedStatus = status;
    this.fetchItems();
  }

  private fetchItems(): void {
    this.productListService.getProduct(this.selectedStatus).subscribe((data: any[]) => {
      this.productList = data;
    });
  }




}
