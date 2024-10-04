import { Component, Input, OnInit } from '@angular/core';
import { TaskService , Task } from '../task.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  tasks: Task[]=[];
   selection!: Task;
 buttonText = 'Submit'

 totalTasks: number=0;
 completedTasks: number= 0;
 upComingTasks: number=0


  constructor(private readonly data:TaskService) { }

  ngOnInit(): void {
  
      this.data.getAllTask().subscribe(resp=>{
       this.tasks=[...resp];
       this.calculateTasksSumary();
       })
  };

  calculateTasksSumary():void{
    const now=new Date();

    this.totalTasks= this.tasks.length;

    this.completedTasks=this.tasks.filter(task=> task.status ==='complete').length

     this.upComingTasks= this.tasks.filter(task=>{ 
      const dueDate= new Date(task.dueDate);
      return dueDate>now  && (dueDate.getTime() -now.getTime()) <= 7*24*60*60*1000;
     }).length
   }

  addNewtask(newTask: {title: string, description: string , status: string, dueDate: Date}): void{
    const task: Task = {
      title: newTask.title,
      description: newTask.description,
      status: newTask.status,
      dueDate: newTask.dueDate,
      prioriti: "low",
      createAt: new Date(),
      updateAt: new Date(),
      assignedUser: "defaultUser"
    };
    
    this.data.addTask(task).subscribe(rep => {
      this.tasks.push(rep);

      this.calculateTasksSumary()
    });
  }
  
  updateTask(task: Task) {

    if (!task.id) {
      console.error('Task ID is undefined or missing!');
      return;
    }
  this.data.updateTask(task).subscribe(repu=>{
    const arrayT=this.tasks.filter(value=>
      value.id !== task.id)
      this.tasks=[...arrayT, task] ;
      this.calculateTasksSumary()
   })

  }


  deleteTask(id:any){ 
    if(confirm("Are you Sure")){
    this.data.deleteTask(id).subscribe(rep=>{
     const arrayt=  this.tasks.filter(value=>{
      value.id!== id
      })
      this.tasks=[...arrayt]
     }

    )
  }
}


  onClicked(task:Task):void{ 
    this.selection=task
  }

/*
  onClear():void { 
    this.selection={ 
      id: -1,
      title: ''
    };
  };*/

}
