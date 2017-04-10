// import { TodoComponent } from './todo/todo.component';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
// import { ModuleWithProviders } from '@angular/core';

export const routes: Routes = [
 {
    path: '',
    redirectTo: 'todo',
    pathMatch: 'full'
  },
  {
    path: 'todo',
    // component: TodoComponent
    redirectTo: 'todo'
  },
  {
    path: 'login',
    component: LoginComponent
  }
];

// export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
export const routing = RouterModule.forRoot(routes);