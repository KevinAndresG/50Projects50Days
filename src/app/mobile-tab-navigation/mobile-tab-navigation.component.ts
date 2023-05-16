import { Component } from '@angular/core';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faHome, faBriefcase, faBookOpen, faUsers } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-mobile-tab-navigation',
  templateUrl: './mobile-tab-navigation.component.html',
  styleUrls: ['./mobile-tab-navigation.component.scss']
})
export class MobileTabNavigationComponent {
  faHome = faHome;
  faBriefcase = faBriefcase;
  faBookOpen = faBookOpen;
  faUsers = faUsers;
  active = 0;
  screens: string[] =
    [
      'https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1053&q=80',
      'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
      'https://images.unsplash.com/photo-1471107340929-a87cd0f5b5f3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1266&q=80',
      'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80'
    ];
  buttons: { title: string, icon: IconProp }[] = [
    { title: 'Home', icon: faHome },
    { title: 'Work', icon: faBriefcase },
    { title: 'Blog', icon: faBookOpen },
    { title: 'About Us', icon: faUsers },
  ];
  navBar(menu: number) {
    switch (menu) {
      case 0:
        this.active = menu;
        break;
      case 1:
        this.active = menu;
        break;
      case 2:
        this.active = menu;
        break;
      case 3:
        this.active = menu;
        break;
      default:
        break;
    }
  }
}
