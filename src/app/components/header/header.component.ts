import { Component, OnDestroy } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { NavService } from '../../services/nav.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnDestroy {

  showNavbar: boolean = true;
  subscripition: Subscription;

  constructor(private translateService: TranslateService, private navService: NavService) {

    this.translateService.setDefaultLang('en')

    this.subscripition = this.navService.showNavbar.subscribe((value: any) => {
      this.showNavbar = value
    })

  }

  switchLanguage(language: string) {

    this.translateService.use(language)

  }

  ngOnDestroy(): void {
    this.subscripition.unsubscribe()
  }


}
