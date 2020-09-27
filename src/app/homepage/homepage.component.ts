import {Component, OnInit, ViewChild} from '@angular/core';
import {Router} from '@angular/router';
import {DataService} from '../_httpservices/data.service';
import {Note} from '../_model/note';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})

export class HomepageComponent implements OnInit {

  img = 'https://banner2.cleanpng.com/20180516/zq/kisspng-computer-icons-google-account-icon-design-login-5afc02dab4a218.0950785215264652427399.jpg';
  cards: Note[];
  da

  constructor(
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
      console.log('zaza', response);
       this.cards = response;
    });
  }
  addCards(){
    const name = 'хуйня';
    const text = 'gbplf[eq';
    const addPost = new Note();
    addPost.name = name;
    addPost.description = text;

    this.dataservice.addCards(addPost).subscribe( responce => {
      console.log('responce ', responce);
      this.getCards();
    })

  }
}

