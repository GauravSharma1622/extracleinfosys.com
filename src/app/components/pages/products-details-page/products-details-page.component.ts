import { Observable } from 'rxjs';
import { Product } from 'src/app/product';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NotifierService } from 'angular-notifier';
import { CartService } from '../../../cart.service';

@Component({
    selector: 'app-products-details-page',
    templateUrl: './products-details-page.component.html',
    styleUrls: ['./products-details-page.component.scss']
})
export class ProductsDetailsPageComponent implements OnInit {

    private readonly notifier: NotifierService;
    public slug: any;
    public data: any;

    constructor(
        private route: ActivatedRoute,
        private http: HttpClient,
        private cartService: CartService,
        notifierService: NotifierService
    ) {
        this.route.params.subscribe((param: any) => {
            this.getJSON().subscribe((products) => {
                this.data = products.find(
                    (product: any) => product.slug === param.slug
                );
            });
        });
        this.notifier = notifierService;
    }

    public getJSON(): Observable<any> {
        return this.http.get('assets/data/products.json');
    }

    ngOnInit() {}

    addToCart(product: Product, quantity: number) {
        this.cartService.addToCart(product, quantity);
        this.notifier.notify('success', 'Your product added to the cart!');
    }

    // Input Counter
    inputnumber = 1;
    plus() {
        this.inputnumber = this.inputnumber + 1;
    }
    minus() {
        this.inputnumber != 1;
        {
            this.inputnumber = this.inputnumber - 1;
        }
    }

}