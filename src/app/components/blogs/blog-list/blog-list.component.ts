import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Blogs } from 'src/app/models/blogs/blogs-list';
import { ContextDataService } from 'src/app/services/context-data.service';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css']
})
export class BlogListComponent implements OnInit {
  @Input() blogs;
  selected: Blogs[] = [];
  isDeleteConfirm: boolean;
  isDeleteSuccess: boolean;
  constructor(private _router: Router, private _contextDataService: ContextDataService) { }

  ngOnInit() {
    this.isDeleteConfirm = false;
    this.isDeleteSuccess = false;
  }

  onEdit() {
    const blogid = this.selected[0].blogid;
    this._router.navigate(['/home/new-blog', { blogid: blogid }]);
  }

  onDelete() {
    this.isDeleteConfirm = true;
  }

  confirmDelete() {
    let blogsToDelete = [];
    this.selected.forEach(blog => {
      blogsToDelete.push(blog.blogid);
    });
    this._contextDataService.removeBlog(blogsToDelete);
    this.blogs = this._contextDataService.getBlogs();
    this.isDeleteSuccess = true;
    this.isDeleteConfirm = false;

  }

}
