import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ColorCubeListComponent } from './color-cube-list/color-cube-list.component';
import { ColorManagementComponent } from './color-management/color-management.component';

const routes: Routes = [
  {
    path: 'list',
    component: ColorCubeListComponent
  },
  {
    path: 'add-color',
    component: ColorManagementComponent
  },
  {
    path: 'colors/:id',
    component: ColorManagementComponent
  },
  {
    path: '**',
    redirectTo: 'list'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
