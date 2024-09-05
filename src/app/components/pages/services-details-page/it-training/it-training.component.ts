import { Component } from '@angular/core';
import { NgxSmartModalService } from 'ngx-smart-modal';

@Component({
  selector: 'app-it-training',
  templateUrl: './it-training.component.html',
  styleUrls: ['./it-training.component.scss']
})
export class ItTrainingComponent {

  constructor(
    public ngxSmartModalService: NgxSmartModalService
  ) { }

  ngOnInit(): void { }

}
