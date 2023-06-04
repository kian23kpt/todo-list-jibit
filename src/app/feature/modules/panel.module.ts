import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartPageComponent, PanelMainPageComponent } from '../pages';
import { RouterModule, Routes } from '@angular/router';
import { WidgetModule } from 'src/app/widget/widget.module';
import { TaskDialogComponent, SidebarComponent } from '../components';
import { MainLayoutComponent } from '../layouts/main-layout/main-layout.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: '',
        component: PanelMainPageComponent,
      },
      {
        path: 'chart',
        component: ChartPageComponent,
      },
    ],
  },
];

@NgModule({
  declarations: [
    PanelMainPageComponent,
    TaskDialogComponent,
    SidebarComponent,
    MainLayoutComponent,
    ChartPageComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    WidgetModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class PanelModule {}
