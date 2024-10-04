import { Component, Input, OnInit, Output } from '@angular/core';
import { Task } from '../task.service';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-new-item',
  templateUrl: './new-item.component.html',
  styleUrls: ['./new-item.component.css']
})
export class NewItemComponent implements OnInit {
  @Input() selection!: Task
  title!: string;
  description!: string;
  status!: string
  dueDate!: Date
 @Output() newItemEvent = new EventEmitter <{title: string, description: string , status: string, dueDate: Date}>()
 @Output() updateTaskEvent = new EventEmitter<Task>()
  constructor() { }

  ngOnInit(): void {
    if (this.selection) {
      this.title = this.selection.title;
      this.description = this.selection.description;
      this.status = this.selection.status;
      this.dueDate = this.selection.dueDate;
    }
  }


  onAddNewTask() {
   
     if (this.title && this.description && this.status && this.dueDate) {
     
      const newTask = {
        title: this.title,
        description: this.description,
        status: this.status,
        dueDate: new Date(this.dueDate)
      }
      // Emitir el nuevo task al componente padre
      this.newItemEvent.emit(newTask);
      
      // Limpiar los campos
      this.title = '';
      this.description = '';
      this.status='';
      
    } 
  };


  onUpdateItem(task: Task, changes:{title:string, description: string , status: string, dueDate:Date}) {
      const updatedTask: Task = { 
        ...task,
        title: changes.title,       // Actualizamos el título
        description: changes.description ,
        status: changes.status,
        dueDate: new Date(changes.dueDate)// Actualizamos la descripción
      };
      
      this.updateTaskEvent.emit(updatedTask); 
  }
  
}