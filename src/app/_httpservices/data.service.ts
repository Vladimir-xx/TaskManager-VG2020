import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Note} from '../_model/note';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  api_path = 'http://localhost:3000/api';


  constructor(private http: HttpClient) {
  }

  // Получить все Заметки по имкени пользователя

  getCards(username: string) {
    return this.http.get<Note[]>(`${this.api_path}/users/${username}/notes`);
  }

  addCards(addPost: Note) {

    return this.http.post<Note>(`${this.api_path}/users/${'wowa-x@mail.ru'}/notes`, addPost);

  }
}
