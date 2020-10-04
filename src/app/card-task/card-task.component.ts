import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {Note} from '../_model/note';


@Component({
  selector: 'app-card-task',
  templateUrl: './card-task.component.html',
  styleUrls: ['./card-task.component.css']
})
export class CardTaskComponent implements OnInit {

  today: number = Date.now();
  panelOpenState = false;

  @Input() card: Note; // Card task
  @Output() clickEdit = new EventEmitter();
  @Output() clickDel = new EventEmitter();


  constructor() {
  }

  ngOnInit(): void {
    console.log(this.card + 'проекты готовые');
  }

  edit() {
    this.clickEdit.emit();
  }


  delete() {
    this.clickDel.emit();


  }
}
