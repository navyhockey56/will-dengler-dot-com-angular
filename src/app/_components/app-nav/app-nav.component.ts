import { Component, OnInit } from '@angular/core';
import { MessageService } from '../../_services/message.service';

@Component({
  selector: 'app-app-nav',
  templateUrl: './app-nav.component.html',
  styleUrls: ['./app-nav.component.css']
})
export class AppNavComponent implements OnInit {

  // Sets the class on the navbar burger icon
  burgerClass: string;
  // Sets the class on the mobile navbar dropdown menu
  menuClass: string;
  // Keeps track of whether the mobile navbar menu is opened
  private activeMenu: boolean = false;

  constructor(
    private messageService: MessageService
  ) { }

  ngOnInit() {
    this.burgerClass = "navbar-burger burger";
    this.menuClass = "navbar-menu";
  }

  /**
    Checks if I'm currently logged into the site
  */
  loggedIn(): boolean {
    return this.messageService.loggedIn();
  }

  /**
    Toggles the navbar menu open/closed.
  */
  menuClicked(): void {
    if (!this.activeMenu) {
      this.openMenu();
    } else {
      this.collapseMenu();
    }
  }

  /**
    Opens the navbar menu (for mobile device viewing).
  */
  openMenu(): void {
    this.activeMenu = true;
    this.burgerClass = "navbar-burger burger is-active";
    this.menuClass = "navbar-menu is-active";
  }

  /**
    Closes the navbar menu (for mobile device viewing)
  */
  collapseMenu(): void {
    this.activeMenu = false;
    this.burgerClass = "navbar-burger burger";
    this.menuClass = "navbar-menu";
  }

}
