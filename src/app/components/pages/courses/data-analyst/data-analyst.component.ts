import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-data-analyst',
  templateUrl: './data-analyst.component.html',
  styleUrls: ['./data-analyst.component.scss']
})
export class DataAnalystComponent {

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
