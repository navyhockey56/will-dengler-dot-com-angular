import { Component, OnInit } from '@angular/core';

import { MessageService } from '../../_services/message.service';

@Component({
  selector: 'app-app-nav',
  templateUrl: './app-nav.component.html',
  styleUrls: ['./app-nav.component.css']
})
export class AppNavComponent implements OnInit {

  burgerClass = "navbar-burger burger";
  menuClass = "navbar-menu";
  private activeMenu = false;

  constructor(
    private messageService: MessageService
  ) { }

  ngOnInit() {
  }

  loggedIn(): boolean {
    return this.messageService.loggedIn();
  }

  menuClicked(): void {
    if (!this.activeMenu) {
      this.activeMenu = true;
      this.burgerClass = "navbar-burger burger is-active";
      this.menuClass = "navbar-menu is-active";
    } else {
      this.activeMenu = false;
      this.burgerClass = "navbar-burger burger";
      this.menuClass = "navbar-menu";
    }
  }

}
