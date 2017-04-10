import { Routes, RouterModule } from '@angular/router';
import { TodoComponent } from './todo.component';

export const routes: Routes = [
  {
    path: 'todo',
    component: TodoComponent
  },
  {
    path: 'todo/:filter',
    component: TodoComponent
  },
  {
    path: 'todo',
    redirectTo: 'todo/ALL'
  }
];
export const routing = RouterModule.forChild(routes);