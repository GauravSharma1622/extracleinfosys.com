import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-community',
    templateUrl: './community.component.html',
    styleUrls: ['./community.component.scss']
})
export class CommunityComponent implements OnInit {

    constructor(
        public router: Router
    ) { }

    ngOnInit(): void {}

}