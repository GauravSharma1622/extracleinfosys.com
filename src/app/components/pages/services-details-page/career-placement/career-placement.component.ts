import { Component } from '@angular/core';
import { NgxSmartModalService } from 'ngx-smart-modal';

@Component({
  selector: 'app-career-placement',
  templateUrl: './career-placement.component.html',
  styleUrls: ['./career-placement.component.scss']
})
export class CareerPlacementComponent {

  constructor(
    public ngxSmartModalService: NgxSmartModalService
  ) { }

  ngOnInit(): void { }

}
