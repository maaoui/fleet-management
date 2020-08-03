import {Component, OnInit} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Fleet Management';

  constructor(private translateService: TranslateService) {
  }

  ngOnInit(): void {
    navigator.language !== 'en' ?
      this.translateService.use('en') :
      this.translateService.use(navigator.language);
  }

}
