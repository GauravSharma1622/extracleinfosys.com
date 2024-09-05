import { Component, OnInit } from '@angular/core';
import { NgxSmartModalService } from 'ngx-smart-modal';

@Component({
  selector: 'app-it-staffing',
  templateUrl: './it-staffing.component.html',
  styleUrls: ['./it-staffing.component.scss']
})
export class ItStaffingComponent implements OnInit {

  constructor(
    public ngxSmartModalService: NgxSmartModalService
  ) { }

  ngOnInit(): void { }

}
