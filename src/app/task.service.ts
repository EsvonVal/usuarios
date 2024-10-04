import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
export interface Task{ 
  id?: number;
  title: string,
  description: string,
  dueDate: Date,
  status: string,
  prioriti: string,
  createAt:Date,
  updateAt: Date,
  assignedUser: string

}


@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private readonly Api ="https://back-task-app-3d0f812edc8b.herokuapp.com/"

  constructor(private readonly http:HttpClient) { }

  getAllTask():Observable<Task[]>{ 
    return this.http.get<Task[]>(this.Api + "api/tasks")
  };

  addTask(task:Task):Observable<Task>{
    const body= task
  return this.http.post<Task>(this.Api+"api/tasks", body)
   }

updateTask(task:Task):Observable<any>{ 
  const body= {title: task.title}
  return this.http.put<void>(`${this.Api+"api/tasks"}/${task.id}`, body )
}

deleteTask(id: string): Observable<void>{
  return this.http.delete<void>(`${this.Api+"api/tasks"}/${id}`)
 }

}
