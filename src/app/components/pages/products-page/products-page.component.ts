import { Component, OnInit } from '@angular/core';
import { NotifierService } from 'angular-notifier';
import { CartService } from '../../../cart.service';
import { HttpClient } from "@angular/common/http";
import { Product } from 'src/app/product';

@Component({
    selector: 'app-products-page',
    templateUrl: './products-page.component.html',
    styleUrls: ['./products-page.component.scss']
})
export class ProductsPageComponent implements OnInit {

    private readonly notifier: NotifierService;

    constructor(
        notifierService: NotifierService,
        private cartService: CartService,
        private httpClient: HttpClient
    ) {
        this.notifier = notifierService;
    }

    products: any = [];

    ngOnInit(){
        this.httpClient.get("assets/data/products.json").subscribe(data =>{
            this.products = data;
        });
    }

    addToCart(product: Product) {
        this.cartService.addToCart(product);
        this.notifier.notify('success', 'Your product added to the cart!');
    }

    currentPage : any;
    onPageChange(page: number) {
        this.currentPage = page;
        window.scrollTo(0, 0);
    }

}