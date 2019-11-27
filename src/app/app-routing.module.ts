import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppLayoutComponent } from './layout/app-layout/app-layout.component';
import { AddBlogComponent } from './components/add-blog/add-blog.component';
import { AuthLayoutComponent } from './layout/auth-layout/auth-layout.component';
import { LoginComponent } from './components/login/login.component';
import { BlogsContainerComponent } from './components/blogs/blogs-container/blogs-container.component';


const routes: Routes = [
  {
    path: '',
    component: AuthLayoutComponent,
    children:[
      {
        path: '',
        component: LoginComponent
      }
    ]
  },
  {
    path: 'home',
    component: AppLayoutComponent,
    
    children:[
      {
        path: '',
        component: BlogsContainerComponent
      },
      {
        path: 'blogs',
        component: BlogsContainerComponent
      },
      {
        path: 'new-blog',
        component: AddBlogComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
