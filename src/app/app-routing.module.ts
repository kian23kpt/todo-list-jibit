import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/guards';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () =>
      import('./feature/modules/auth.module').then((m) => m.AuthModule),
  },
  {
    canActivate: [AuthGuard],
    path: 'panel',
    loadChildren: () =>
      import('./feature/modules/panel.module').then((m) => m.PanelModule),
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
