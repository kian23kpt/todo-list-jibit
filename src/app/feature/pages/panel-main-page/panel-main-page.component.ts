import { Component } from '@angular/core';
import { AddTaskDialogComponent } from '../../components';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-panel-main-page',
  templateUrl: './panel-main-page.component.html',
  styleUrls: ['./panel-main-page.component.scss'],
})
export class PanelMainPageComponent {
  panelOpenState = false;

  constructor(private _dialog: MatDialog) {}

  openAddTaskDialog() {
    const dialogRef = this._dialog.open(AddTaskDialogComponent, {
      width: '300px',
    });

    // dialogRef.afterClosed().subscribe(result => {
    //   console.log('The dialog was closed');
    // });
  }
}
