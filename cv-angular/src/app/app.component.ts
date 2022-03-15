import { ChangeDetectorRef, Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import {MediaMatcher} from '@angular/cdk/layout';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isDarkTheme=false;
  langValue = false;
  mobileQuery: MediaQueryList;
  private _mobileQueryListener: () => void;
  constructor(public translate:TranslateService, changeDetectorRef: ChangeDetectorRef, media: MediaMatcher){
    this.mobileQuery = media.matchMedia('(max-width: 500px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }
  changeLanguage(){
    this.langValue=!this.langValue
    if (this.langValue) this.translate.use('ru')
    else this.translate.use('en')
  }
}
