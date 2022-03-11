import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isDarkTheme=false;
  langValue = false;
  constructor(public translate:TranslateService){
  }
  changeLanguage(){
    this.langValue=!this.langValue
    if (this.langValue) this.translate.use('ru')
    else this.translate.use('en')
  }
}
