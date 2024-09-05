import { Component } from '@angular/core';
import { NgxSmartModalService } from 'ngx-smart-modal';

@Component({
  selector: 'app-development-services',
  templateUrl: './development-services.component.html',
  styleUrls: ['./development-services.component.scss']
})
export class DevelopmentServicesComponent {

  constructor(
    public ngxSmartModalService: NgxSmartModalService
  ) { }

  ngOnInit(): void { }

}
