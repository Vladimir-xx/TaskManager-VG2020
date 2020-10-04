import {Component, Inject, OnInit} from '@angular/core';
import {DataService} from '../_httpservices/data.service';
import {Note} from '../_model/note';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-input-dialog-window',
  templateUrl: './input-dialog-window.component.html',
  styleUrls: ['./input-dialog-window.component.css']
})
export class InputDialogWindowComponent implements OnInit {

  constructor(
    private dataservice: DataService,
    public dialogRef: MatDialogRef<InputDialogWindowComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Note
  ) {
  }

  inputName = '';
  inputDescription = '';
  closedModal = false;

  addCards() {

    const addPost = new Note();
    addPost.name = this.inputName;
    addPost.description = this.inputDescription;

    this.dataservice.addCards(addPost).subscribe(
      responce => {

        this.dialogRef.close('OK');

      }, error => {
        console.log('error');
      });
  }

  editCard() {

    this.data.name = this.inputName;
    this.data.description = this.inputDescription;

    this.dataservice.editCards(this.data, this.data.id).subscribe(
      responce => {

        this.dialogRef.close('OK');

      }, error => {
        console.log('error');
      });
  }


  ngOnInit(): void {
    console.log(this.data);

    if (this.data) {
      this.inputName = this.data.name;
      this.inputDescription = this.data.description;
    }

  }


}
