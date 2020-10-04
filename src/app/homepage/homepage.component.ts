import {Component, OnInit, ViewChild} from '@angular/core';
import {Router} from '@angular/router';
import {DataService} from '../_httpservices/data.service';
import {Note} from '../_model/note';
import {MatDialog} from '@angular/material/dialog';
import {InputDialogWindowComponent} from '../input-dialog-window/input-dialog-window.component';
import {del} from 'selenium-webdriver/http';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})

export class HomepageComponent implements OnInit {

  img = 'https://banner2.cleanpng.com/20180516/zq/kisspng-computer-icons-google-account-icon-design-login-5afc02dab4a218.0950785215264652427399.jpg';
  cards: Note[];
  inputName = '';
  inputDescription = '';


  constructor(
    private dialog: MatDialog,
    private routhome: Router,
    private dataservice: DataService
  ) {
  }

  ngOnInit(): void {
    this.getCards();
  }

  closeUser() {
    sessionStorage.clear();
    // window.location.reload();
    this.routhome.navigate(['login']);

  }

  getCards() {
    const user = JSON.parse(sessionStorage.getItem('Login'));

    this.dataservice.getCards(user.email).subscribe(response => {

      this.cards = response;
    });
  }

  openDialog(card?: Note ) {

    const dialog = this.dialog.open(InputDialogWindowComponent, {
      data: card,
      hasBackdrop: false

    });
    dialog.afterClosed().subscribe(responce => {

      if (responce === 'OK') {
        this.getCards();
      }


    });

  }

  delCard(card?: Note) {

       this.dataservice.delCards(card.id).subscribe( responce => {
         console.log('del', responce );
         if (responce === 200){
           this.getCards();
         }
      });
  }
}

