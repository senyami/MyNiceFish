import {Component, OnInit} from '@angular/core';
import {User} from './user/model/user-model';
import {TranslateService} from 'ng2-translate';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  public currentUser: User;

  constructor(public translate: TranslateService) {
      console.log("constructor");
  }

  ngOnInit() {
    console.log("ngOnInit");



    this.translate.addLangs(["zh", "en"]);
    this.translate.setDefaultLang('zh');
    const browserLang = this.translate.getBrowserLang();
    console.log("检测到的浏览器语言>" + browserLang);
    this.translate.use(browserLang.match(/zh|en/) ? browserLang : 'zh');
  }

  public toggle(): void {

  }
}
