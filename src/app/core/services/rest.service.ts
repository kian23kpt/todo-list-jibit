import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Task } from '../models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RestService {
  private _baseUrl = 'http://localhost:3000/';

  constructor(private _http: HttpClient) {}

  getAllTasks(): Observable<Task.model[]> {
    return this._http.get<Task.model[]>(this._baseUrl + 'tasks');
  }

  addTask(data: any) {
    return this._http.post(this._baseUrl + 'tasks', data);
  }

  removeTask(id: string) {
    return this._http.delete(this._baseUrl + 'tasks/' + id);
  }

  editTask(data: Task.model, id: string) {
    return this._http.patch(this._baseUrl + 'tasks/' + id, data);
  }
  done(id: string) {
    return this._http.patch(this._baseUrl + 'tasks/' + id, { status: 2 });
  }
}
