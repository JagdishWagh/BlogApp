import { Component, OnInit, AfterContentInit } from '@angular/core';
import { ContextDataService } from 'src/app/services/context-data.service';
import { BlogCategory } from 'src/app/models/blogs/blog-category';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Blogs } from 'src/app/models/blogs/blogs-list';
import { Router, ActivatedRoute } from '@angular/router';
import { ClrLoadingState } from '@clr/angular';

@Component({
  selector: 'app-add-blog',
  templateUrl: './add-blog.component.html',
  styleUrls: ['./add-blog.component.css']
})
export class AddBlogComponent implements OnInit, AfterContentInit {
  blogForm: FormGroup;
  blogCategories: BlogCategory[] = [];
  pageTitle: string;
  submitBtnLabel: string;
  validateForm: ClrLoadingState = ClrLoadingState.DEFAULT;
  isFormInvalid: boolean = false;
  private _mode: number; // 1 - add, 2 - update
  private _selectedBlogID: number;
  constructor(private _contextDataService: ContextDataService,
    private _fb: FormBuilder,
    private _router: Router,
    private _route: ActivatedRoute) { }

  ngOnInit() {
    this.pageTitle = 'Create a new blog';
    this.submitBtnLabel = 'Publish';
    this._mode = 1;
    this.initializeForm();
    this.getBlogCategories();
  }

  ngAfterContentInit(): void {
    this._selectedBlogID = Number(this._route.snapshot.paramMap.get('blogid'));
    if (this._selectedBlogID) {
      this.pageTitle = 'Update the blog';
      this.submitBtnLabel = 'Update';
      this._mode = 2;
      this.getBlogByID(this._selectedBlogID);
    }
  }

  initializeForm() {
    this.blogForm = this._fb.group({
      blogTitle: ['', Validators.required],
      blogCategory: ['', Validators.required],
      blogMedia: [''],
      blogDescription: ['', Validators.required],
    });
  }

  getBlogCategories() {
    this.blogCategories = this._contextDataService.getBlogCategories();
  }

  onSubmit() {
    this.validateForm = ClrLoadingState.LOADING;
    setTimeout(() => {
      if (this.blogForm.invalid) {
        this.validateForm = ClrLoadingState.ERROR;
        this.isFormInvalid = true;
        return;
      }
      this.validateForm = ClrLoadingState.SUCCESS;
      let blog = new Blogs();
      blog.blogtitle = this.blogForm.controls['blogTitle'].value;
      blog.blogcategory = this.blogForm.controls['blogCategory'].value;
      blog.blogdescription = this.blogForm.controls['blogDescription'].value;
      blog.createddate = new Date().toString();
      blog.createdby = 'Jagdish';
      switch (this._mode) {
        case 1:
          this._contextDataService.addNewBlog(blog);
          break;
        case 2:
          blog.blogid = this._selectedBlogID;
          this._contextDataService.updateBlog(blog);
          break;
      }
      this._router.navigate(['/home']);
    }, 1000);
  }

  getBlogByID(blogid: number) {
    const blog = this._contextDataService.getBlogByID(blogid);

    this.blogForm.controls['blogTitle'].setValue(blog.blogtitle);
    this.blogForm.controls['blogCategory'].setValue(blog.blogcategory);
    this.blogForm.controls['blogDescription'].setValue(blog.blogdescription);
  }

}
