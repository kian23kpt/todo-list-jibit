import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PanelMainPageComponent } from '../pages';
import { RouterModule, Routes } from '@angular/router';
import { WidgetModule } from 'src/app/widget/widget.module';
import { AddTaskDialogComponent } from '../components';

const routes: Routes = [
  {
    path: '',
    component: PanelMainPageComponent,
  },
];

@NgModule({
  declarations: [PanelMainPageComponent, AddTaskDialogComponent],
  imports: [CommonModule, RouterModule.forChild(routes), WidgetModule],
})
export class PanelModule {}
