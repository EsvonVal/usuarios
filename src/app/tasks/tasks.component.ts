import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Task } from '../task.service';

@Component({
  selector: 'app-tasks',
  template: `
    <ul class="list-group">
      <li 
        class="list-group-item d-flex justify-content-between align-items-center mt-1" 
        (click)="onTaskClicked(task)" 
        [ngClass]="{'active': task?.id === selection?.id}"
      >
        <div>
          <h5 class="mb-1">{{ task.title }}</h5>
          <p class="mb-1">{{ task.description }}</p>
          <small class="text-muted">{{ task.status }} - {{ task.dueDate | date: 'shortDate' }}</small>
        </div>
        <button 
          *ngIf="task?.id === selection?.id" 
          type="button" 
          class="btn btn-danger"  
          (click)="onTaskDelete(task.id)"
        >
          Eliminar
        </button>
      </li>
    </ul>
  `,
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  @Input() task!: Task;
  @Input() selection!: Task;
  @Output() taskClickedEvent = new EventEmitter<Task>();
  @Output() taskDeleteEvent = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  onTaskClicked(task: Task): void {
    this.taskClickedEvent.emit(task);
  }

  onTaskDelete(id: any): void { 
    this.taskDeleteEvent.emit(id);
  }
}
