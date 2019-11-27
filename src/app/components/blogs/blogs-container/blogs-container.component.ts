import { Component, OnInit } from '@angular/core';
import { DisplayViews } from 'src/app/models/app.constants';
import { Blogs } from 'src/app/models/blogs/blogs-list';
import { ContextDataService } from 'src/app/services/context-data.service';

@Component({
  selector: 'app-blogs-container',
  templateUrl: './blogs-container.component.html',
  styleUrls: ['./blogs-container.component.css']
})
export class BlogsContainerComponent implements OnInit {
  selectedView: string;
  displayView = DisplayViews;
  blogs: Blogs[] = [];
  constructor(private _contextDataService: ContextDataService) {
    this.selectedView = this.displayView.GRID;
  }

  ngOnInit() {
    this.getBlogs();
  }

  changeView(view) {
    this.selectedView = view;
  }

  getBlogs() {
    this.blogs = this._contextDataService.getBlogs();
  }

}
