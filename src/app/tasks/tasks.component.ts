import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Task } from '../task.service';

@Component({
  selector: 'app-tasks',
  template: `<ul class="list-group" >
  <li ngClass="list-group-item mt-1" 
  (click)="onTaskClicked(task)"  [ngClass]="{'active': task?.id === selection?.id} ">
   {{ task.title}}
   {{ task.description}}
   {{ task.status}}
   {{ task.dueDate}}
  <button *ngIf="task?.id === selection?.id" type="button" class="btn btn-danger float-end"  
  (click)="onTaskDelete(task.id)" 
  >Delete</button>
  </li>
    </ul> `,
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  @Input() task!: Task;
  @Input() selection!: Task
  @Output() taskClickedEvent = new EventEmitter<Task>()
  @Output() taskDeleteEvent = new EventEmitter<any>()
  constructor() { }

  ngOnInit(): void {
  }

  onTaskClicked(task: Task): void{
  this.taskClickedEvent.emit(task)
  };
  
  onTaskDelete(id:any): void{ 
    this.taskDeleteEvent.emit(id)
  }

}
