import { Component, OnInit } from '@angular/core';
import {faCoffee, faHome} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {


  faCoffee = faCoffee;
  faHome = faHome;

  constructor() { }

  ngOnInit(): void {
  }

}
