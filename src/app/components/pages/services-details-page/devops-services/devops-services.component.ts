import { Component } from '@angular/core';
import { NgxSmartModalService } from 'ngx-smart-modal';

@Component({
  selector: 'app-devops-services',
  templateUrl: './devops-services.component.html',
  styleUrls: ['./devops-services.component.scss']
})
export class DevopsServicesComponent {

  constructor(
    public ngxSmartModalService: NgxSmartModalService
  ) { }

  ngOnInit(): void { }
}
