import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { Task } from 'src/app/core/models';
import { RestService } from 'src/app/core/services/rest.service';
import * as uuid from 'uuid';

@Component({
  selector: 'app-task-dialog',
  templateUrl: './task-dialog.component.html',
  styleUrls: ['./task-dialog.component.scss'],
})
export class TaskDialogComponent implements OnInit {
  editMode = false;

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
    status: 1,
  });

  constructor(
    private _fb: FormBuilder,
    public dialogRef: MatDialogRef<TaskDialogComponent>,
    private _restService: RestService,
    @Inject(MAT_DIALOG_DATA) public taskData: Task.model,
    private _toastr: ToastrService
  ) {}

  ngOnInit(): void {
    if (this.taskData) {
      this.editMode = true;
      this.form.patchValue(this.taskData);
    }
  }

  submitForm() {
    if (this.editMode) {
      const id = this.form.get('id')?.value || '';
      this._restService.editTask(this.form.value, id).subscribe(() => {
        this.dialogRef.close();
        this._toastr.success('Task Edited Successfully')
      });
    } else {
      this.form.get('id')?.setValue(uuid.v4());

      let creationTime = new Date().toISOString();
      this.form.get('creationTime')?.setValue(creationTime);

      this._restService.addTask(this.form.value).subscribe(() => {
        this.dialogRef.close();
        this._toastr.success('Task Added Successfully')
      });
    }
  }

  close(): void {
    this.dialogRef.close();
  }
}
