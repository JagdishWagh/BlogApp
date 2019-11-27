import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClarityModule } from '@clr/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AddBlogComponent } from './components/add-blog/add-blog.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { SidenavComponent } from './layout/sidenav/sidenav.component';
import { SubnavComponent } from './layout/subnav/subnav.component';
import { ContentAreaComponent } from './layout/content-area/content-area.component';
import { AppLayoutComponent } from './layout/app-layout/app-layout.component';
import { AuthLayoutComponent } from './layout/auth-layout/auth-layout.component';
import { LoginComponent } from './components/login/login.component';
import { BlogListComponent } from './components/blogs/blog-list/blog-list.component';
import { BlogGridComponent } from './components/blogs/blog-grid/blog-grid.component';
import { BlogsContainerComponent } from './components/blogs/blogs-container/blogs-container.component';


@NgModule({
  declarations: [
    AppComponent,
    AddBlogComponent,
    HeaderComponent,
    FooterComponent,
    SidenavComponent,
    SubnavComponent,
    ContentAreaComponent,
    AppLayoutComponent,
    AuthLayoutComponent,
    LoginComponent,
    BlogListComponent,
    BlogGridComponent,
    BlogsContainerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ClarityModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
