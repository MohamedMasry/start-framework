import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  @HostListener('window:scroll', ['$event'])

  navScroll() {
    let nav = document.querySelector('nav') as HTMLElement;
    if (window.scrollY > nav.clientHeight) {
      nav.classList.remove('py-4');
    } else {
      nav.classList.add('py-4');
    }
  }
}
