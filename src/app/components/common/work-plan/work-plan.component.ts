import { Component, OnInit } from '@angular/core';
import { NgxSmartModalService } from 'ngx-smart-modal';

@Component({
    selector: 'app-work-plan',
    templateUrl: './work-plan.component.html',
    styleUrls: ['./work-plan.component.scss']
})
export class WorkPlanComponent implements OnInit {

    constructor(
        public ngxSmartModalService: NgxSmartModalService
    ) { }

    ngOnInit(): void {}

}