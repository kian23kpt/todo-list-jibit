import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Auth, Task } from '../models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RestService {
  private _baseUrl = 'http://localhost:3000/';

  constructor(private _http: HttpClient) {}

  getAllTasks(): Observable<Task.model[]> {
    return this._http.get<Task.model[]>(
      this._baseUrl + 'tasks?_sort=dueDate&_order=aesc'
    );
  }

  addTask(data: Task.model | any) {
    return this._http.post(this._baseUrl + 'tasks', data);
  }

  removeTask(id: string) {
    return this._http.delete(this._baseUrl + 'tasks/' + id);
  }

  editTask(data: Task.model | any, id: string) {
    return this._http.patch(this._baseUrl + 'tasks/' + id, data);
  }

  done(id: string) {
    return this._http.patch(this._baseUrl + 'tasks/' + id, { status: 2 });
  }

  signin(): Observable<Auth.user[]> {
    return this._http.get<Auth.user[]>(this._baseUrl + 'users');
  }

  signup(data: Auth.user | any) {
    return this._http.post(this._baseUrl + 'users', data);
  }
}
