import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthenticationComponent } from '../pages';
import { WidgetModule } from 'src/app/widget/widget.module';

const routes: Routes = [
  {
    path: '',
    component: AuthenticationComponent,
  },
];
@NgModule({
  declarations: [AuthenticationComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    WidgetModule,
  ],
})
export class AuthModule {}
