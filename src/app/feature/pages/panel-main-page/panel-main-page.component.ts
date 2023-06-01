import { Component, OnInit } from '@angular/core';
import { AddTaskDialogComponent } from '../../components';
import { MatDialog } from '@angular/material/dialog';
import { RestService } from 'src/app/core/services/rest.service';
import { Task } from 'src/app/core/models';

@Component({
  selector: 'app-panel-main-page',
  templateUrl: './panel-main-page.component.html',
  styleUrls: ['./panel-main-page.component.scss'],
})
export class PanelMainPageComponent implements OnInit {
  panelOpenState = false;
  openTasks!: Task.model[];
  completedTasks!: Task.model[];

  constructor(private _dialog: MatDialog, private _restSrevice: RestService) {}

  ngOnInit(): void {
    this.getTasks();
  }

  getTasks() {
    this.openTasks = [];
    this.completedTasks = [];

    this._restSrevice.getAllTasks().subscribe((tasks) => {
      tasks.filter((task) => {
        if (task.status === 1) {
          this.openTasks.push(task);
        } else {
          this.completedTasks.push(task);
        }
      });
    });
  }

  openAddTaskDialog() {
    const dialogRef = this._dialog.open(AddTaskDialogComponent, {
      width: '400px',
    });
    dialogRef.afterClosed().subscribe((result) => {
      this.getTasks();
    });
  }

  removeTask(id: string) {
    this._restSrevice.removeTask(id).subscribe(() => {
      this.getTasks();
    });
  }

  done(id: string) {
    this._restSrevice.done(id).subscribe(() => {
      this.getTasks();
    });
  }
}
