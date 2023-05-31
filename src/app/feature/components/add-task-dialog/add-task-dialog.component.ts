import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Task } from 'src/app/core/models';

@Component({
  selector: 'app-add-task-dialog',
  templateUrl: './add-task-dialog.component.html',
  styleUrls: ['./add-task-dialog.component.scss']
})
export class AddTaskDialogComponent {
  priorities: Task.priority[] = [
    {value: 'urgency', viewValue: 'Urgency', color:'red'},
    {value: 'importance', viewValue: 'Importance', color:'orange'},
    {value: 'regular', viewValue: 'Regular', color:'green'},
  ];

  constructor(
    public dialogRef: MatDialogRef<AddTaskDialogComponent>,
  ) {}
 
  close(): void {
    this.dialogRef.close();
  }
}
