import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { TodoModule } from './todo/todo.module';

// import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
// import { InMemoryTodoDbService } from './todo/todo-data';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AuthService } from './core/auth.service';
import { routing } from './app.routes';


// import { TodoHeaderComponent } from './todo/todo-header/todo-header.component';
// import { TodoFooterComponent } from './todo/todo-footer/todo-footer.component';

@NgModule({ 
  declarations: [
    AppComponent,
    LoginComponent
],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    //InMemoryWebApiModule.forRoot(InMemoryTodoDbService),
    routing,
    TodoModule
  ],
  providers: [{provide: 'auth',  useClass: AuthService}],
  //给出了一个对象，里面有两个属性，provide和useClass，provide定义了这个服务的名称，有需要注入这个服务的就引用这个名称就好。
  //useClass指明这个名称对应的服务是一个类，本例中就是AuthService了。
  bootstrap: [AppComponent]
})
export class AppModule { }
