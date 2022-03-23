import { Component, OnInit, Input } from '@angular/core';
//interface de task
import{task}from '../../task';
//base de datos de tasks
import{TASKS}from '../../mock-task'

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {
//atributo que recibe de tripo task que tienen la primer posicion del array de tasks
  @Input() task:task=TASKS[0];

  constructor() { }

  ngOnInit(): void {
  }

}
