import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isNavVisible: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  openNav() {
    this.isNavVisible = !this.isNavVisible;
  }

  closeNav() {
    this.isNavVisible = !this.isNavVisible;
  }
}
