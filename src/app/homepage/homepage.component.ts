import {Component, OnInit, ViewChild} from '@angular/core';
import {MatMenuTrigger} from '@angular/material/menu';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})

export class HomepageComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
  }

  closeUser() {
    sessionStorage.clear();
    window.location.reload();

  }
}
