import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
    selector: 'app-case-studies-details-page',
    templateUrl: './case-studies-details-page.component.html',
    styleUrls: ['./case-studies-details-page.component.scss']
})
export class CaseStudiesDetailsPageComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {}

    portfolioDetailsImageSlides: OwlOptions = {
		nav: false,
		margin: 25,
		loop: true,
		dots: false,
		center: true,
		autoplay: true,
		autoplayHoverPause: true,
		navText: [
			"<i class='flaticon-left-arrow-line-symbol'></i>",
			"<i class='flaticon-right-arrow-angle'></i>",
		],
		responsive: {
			0: {
				items: 1
			},
			576: {
				items: 2
			},
			768: {
				items: 2
			},
			992: {
				items: 2
			},
			1200: {
				items: 2
			}
		}
    }

}