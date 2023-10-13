import { Component, Input } from '@angular/core';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  standalone: true,
  imports: [MatButtonModule, MatMenuModule, MatToolbarModule, MatIconModule, RouterModule],

})
export class NavbarComponent {
  constructor() {
    this.getNavbarColor();
  }
  @Input() toolbarColor: string;

  logOut() {

  }

  setNavbarColor(navbarColor: string) {
    localStorage.setItem('navbarColor', navbarColor);
    this.getNavbarColor();
  }

  getNavbarColor() {
    let localStorageColor = localStorage.getItem('navbarColor');
    if (localStorageColor) {
      this.toolbarColor = localStorageColor;
    } else {
      this.toolbarColor = 'primary';
      localStorage.setItem('navbarColor', 'primary');
    }
  }
}
