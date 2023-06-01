import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Task } from 'src/app/core/models';
import { RestService } from 'src/app/core/services/rest.service';
import * as uuid from 'uuid';

@Component({
  selector: 'app-add-task-dialog',
  templateUrl: './add-task-dialog.component.html',
  styleUrls: ['./add-task-dialog.component.scss'],
})
export class AddTaskDialogComponent {
  priorities: Task.priority[] = [
    { value: 'high', color: 'red' },
    { value: 'medium', color: 'orange' },
    { value: 'low', color: 'green' },
  ];

  form = this._fb.nonNullable.group({
    id: '',
    title: '',
    description: '',
    dueDate: '',
    priority: '',
    creationTime: '',
    status: 1
  });

  constructor(
    private _fb: FormBuilder,
    public dialogRef: MatDialogRef<AddTaskDialogComponent>,
    private _restService: RestService
  ) {}

  addTask() {
    this.form.get('id')?.setValue(uuid.v4());

    let creationTime = new Date().toISOString();
    this.form.get('creationTime')?.setValue(creationTime);
    
    this._restService.addTask(this.form.value).subscribe(()=>{
      this.dialogRef.close();
    });
  }

  close(): void {
    this.dialogRef.close();
  }
}
