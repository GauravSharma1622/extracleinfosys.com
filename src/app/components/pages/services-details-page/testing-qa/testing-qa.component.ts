import { Component } from '@angular/core';
import { NgxSmartModalService } from 'ngx-smart-modal';

@Component({
  selector: 'app-testing-qa',
  templateUrl: './testing-qa.component.html',
  styleUrls: ['./testing-qa.component.scss']
})
export class TestingQAComponent {

  constructor(
    public ngxSmartModalService: NgxSmartModalService
  ) { }

  ngOnInit(): void { }

}
