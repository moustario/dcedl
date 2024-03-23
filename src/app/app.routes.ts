import { Routes } from '@angular/router';
import { ColorPickingComponent } from './color-picking/color-picking.component';

export const routes: Routes = [
  {
    path: 'color-picking',
    component: ColorPickingComponent
  },
  {
    path: '**',
    redirectTo: 'color-picking'
  }
];
