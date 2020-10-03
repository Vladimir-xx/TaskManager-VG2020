import { Component, OnInit } from '@angular/core';
import {DataService} from '../_httpservices/data.service';
import {Note} from '../_model/note';

@Component({
  selector: 'app-input-dialog-window',
  templateUrl: './input-dialog-window.component.html',
  styleUrls: ['./input-dialog-window.component.css']
})
export class InputDialogWindowComponent implements OnInit {

  constructor(private dataservice: DataService) { }
  inputName = '';
  inputDescription = '';
  closedModal = false;
  addCards(){

      const addPost = new Note();
      addPost.name = this.inputName
      addPost.description = this.inputDescription;

      this.dataservice.addCards(addPost).subscribe( responce => {
        console.log('responce ', responce);
        if (responce == 200){
          console.log(this.closedModal = true)
        }
      });
  }

  ngOnInit(): void {
  }

}
