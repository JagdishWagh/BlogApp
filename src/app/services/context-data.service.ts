import { Injectable } from '@angular/core';
import { Blogs } from '../models/blogs/blogs-list';
import { Observable } from 'rxjs';
import { BlogCategory } from '../models/blogs/blog-category';

@Injectable({
  providedIn: 'root'
})
export class ContextDataService {
  // blog categories
  blogCategories: BlogCategory[] = [
    {
      blogcategoryid: 1,
      blogcategoryname: 'Beauty'
    },
    {
      blogcategoryid: 2,
      blogcategoryname: 'Fashion'
    },
    {
      blogcategoryid: 3,
      blogcategoryname: 'Lifestyle'
    },
    {
      blogcategoryid: 4,
      blogcategoryname: 'Travel'
    }
  ];
  // blogs
  blogs: Blogs[] = [
    {
      blogid: 1,
      blogtitle: 'DESIGN FOR MANKIND',
      blogdescription: `I’ve never met Erin before in person, but goodness, I feel like she is such a kindred spirit.  
      And I have completely enjoyed tuning into her blog for years (like, so many years now!) for a dose of real-life 
      inspiration and lovely prose.  Her posts on navigating motherhood (with her sweet little toddler) and marriage 
      have always been some of my favorites.  But I have always especially connected with her posts on work, and creativity, 
      and self-care, probably because they’re always words I need to take to heart myself. I also really admire how brave 
      and open she has been to letting her career evolve/change in some big ways over the past decade, and I can’t wait to 
      follow along wherever the next roads may lead.`,
      blogcategory: 'Lifestyle',
      createdby: 'Erin Loechner',
      createddate: 'Mar 25 2015'
    },
    {
      blogid: 2,
      blogtitle: 'DESIGN FOR MANKIND',
      blogdescription: `I’ve never met Erin before in person, but goodness, I feel like she is such a kindred spirit.  
      And I have completely enjoyed tuning into her blog for years (like, so many years now!) for a dose of real-life 
      inspiration and lovely prose.  Her posts on navigating motherhood (with her sweet little toddler) and marriage 
      have always been some of my favorites.  But I have always especially connected with her posts on work, and creativity, 
      and self-care, probably because they’re always words I need to take to heart myself. I also really admire how brave 
      and open she has been to letting her career evolve/change in some big ways over the past decade, and I can’t wait to 
      follow along wherever the next roads may lead.`,
      blogcategory: 'Lifestyle',
      createdby: 'Erin Loechner',
      createddate: 'Mar 25 2015'
    },
    {
      blogid: 3,
      blogtitle: 'DESIGN FOR MANKIND',
      blogdescription: `I’ve never met Erin before in person, but goodness, I feel like she is such a kindred spirit.  
      And I have completely enjoyed tuning into her blog for years (like, so many years now!) for a dose of real-life 
      inspiration and lovely prose.  Her posts on navigating motherhood (with her sweet little toddler) and marriage 
      have always been some of my favorites.  But I have always especially connected with her posts on work, and creativity, 
      and self-care, probably because they’re always words I need to take to heart myself. I also really admire how brave 
      and open she has been to letting her career evolve/change in some big ways over the past decade, and I can’t wait to 
      follow along wherever the next roads may lead.`,
      blogcategory: 'Lifestyle',
      createdby: 'Erin Loechner',
      createddate: 'Mar 25 2015'
    },
    {
      blogid: 4,
      blogtitle: 'DESIGN FOR MANKIND',
      blogdescription: `I’ve never met Erin before in person, but goodness, I feel like she is such a kindred spirit.  
      And I have completely enjoyed tuning into her blog for years (like, so many years now!) for a dose of real-life 
      inspiration and lovely prose.  Her posts on navigating motherhood (with her sweet little toddler) and marriage 
      have always been some of my favorites.  But I have always especially connected with her posts on work, and creativity, 
      and self-care, probably because they’re always words I need to take to heart myself. I also really admire how brave 
      and open she has been to letting her career evolve/change in some big ways over the past decade, and I can’t wait to 
      follow along wherever the next roads may lead.`,
      blogcategory: 'Lifestyle',
      createdby: 'Erin Loechner',
      createddate: 'Mar 25 2015'
    },
    {
      blogid: 5,
      blogtitle: 'DESIGN FOR MANKIND',
      blogdescription: `I’ve never met Erin before in person, but goodness, I feel like she is such a kindred spirit.  
      And I have completely enjoyed tuning into her blog for years (like, so many years now!) for a dose of real-life 
      inspiration and lovely prose.  Her posts on navigating motherhood (with her sweet little toddler) and marriage 
      have always been some of my favorites.  But I have always especially connected with her posts on work, and creativity, 
      and self-care, probably because they’re always words I need to take to heart myself. I also really admire how brave 
      and open she has been to letting her career evolve/change in some big ways over the past decade, and I can’t wait to 
      follow along wherever the next roads may lead.`,
      blogcategory: 'Lifestyle',
      createdby: 'Erin Loechner',
      createddate: 'Mar 25 2015'
    },
    {
      blogid: 6,
      blogtitle: 'DESIGN FOR MANKIND',
      blogdescription: `I’ve never met Erin before in person, but goodness, I feel like she is such a kindred spirit.  
      And I have completely enjoyed tuning into her blog for years (like, so many years now!) for a dose of real-life 
      inspiration and lovely prose.  Her posts on navigating motherhood (with her sweet little toddler) and marriage 
      have always been some of my favorites.  But I have always especially connected with her posts on work, and creativity, 
      and self-care, probably because they’re always words I need to take to heart myself. I also really admire how brave 
      and open she has been to letting her career evolve/change in some big ways over the past decade, and I can’t wait to 
      follow along wherever the next roads may lead.`,
      blogcategory: 'Lifestyle',
      createdby: 'Erin Loechner',
      createddate: 'Mar 25 2015'
    },
    {
      blogid: 7,
      blogtitle: 'DESIGN FOR MANKIND',
      blogdescription: `I’ve never met Erin before in person, but goodness, I feel like she is such a kindred spirit.  
      And I have completely enjoyed tuning into her blog for years (like, so many years now!) for a dose of real-life 
      inspiration and lovely prose.  Her posts on navigating motherhood (with her sweet little toddler) and marriage 
      have always been some of my favorites.  But I have always especially connected with her posts on work, and creativity, 
      and self-care, probably because they’re always words I need to take to heart myself. I also really admire how brave 
      and open she has been to letting her career evolve/change in some big ways over the past decade, and I can’t wait to 
      follow along wherever the next roads may lead.`,
      blogcategory: 'Lifestyle',
      createdby: 'Erin Loechner',
      createddate: 'Mar 25 2015'
    },
    {
      blogid: 8,
      blogtitle: 'DESIGN FOR MANKIND',
      blogdescription: `I’ve never met Erin before in person, but goodness, I feel like she is such a kindred spirit.  
      And I have completely enjoyed tuning into her blog for years (like, so many years now!) for a dose of real-life 
      inspiration and lovely prose.  Her posts on navigating motherhood (with her sweet little toddler) and marriage 
      have always been some of my favorites.  But I have always especially connected with her posts on work, and creativity, 
      and self-care, probably because they’re always words I need to take to heart myself. I also really admire how brave 
      and open she has been to letting her career evolve/change in some big ways over the past decade, and I can’t wait to 
      follow along wherever the next roads may lead.`,
      blogcategory: 'Lifestyle',
      createdby: 'Erin Loechner',
      createddate: 'Mar 25 2015'
    },
    {
      blogid: 9,
      blogtitle: 'DESIGN FOR MANKIND',
      blogdescription: `I’ve never met Erin before in person, but goodness, I feel like she is such a kindred spirit.  
      And I have completely enjoyed tuning into her blog for years (like, so many years now!) for a dose of real-life 
      inspiration and lovely prose.  Her posts on navigating motherhood (with her sweet little toddler) and marriage 
      have always been some of my favorites.  But I have always especially connected with her posts on work, and creativity, 
      and self-care, probably because they’re always words I need to take to heart myself. I also really admire how brave 
      and open she has been to letting her career evolve/change in some big ways over the past decade, and I can’t wait to 
      follow along wherever the next roads may lead.`,
      blogcategory: 'Lifestyle',
      createdby: 'Erin Loechner',
      createddate: 'Mar 25 2015'
    },
    {
      blogid: 10,
      blogtitle: 'DESIGN FOR MANKIND',
      blogdescription: `I’ve never met Erin before in person, but goodness, I feel like she is such a kindred spirit.  
      And I have completely enjoyed tuning into her blog for years (like, so many years now!) for a dose of real-life 
      inspiration and lovely prose.  Her posts on navigating motherhood (with her sweet little toddler) and marriage 
      have always been some of my favorites.  But I have always especially connected with her posts on work, and creativity, 
      and self-care, probably because they’re always words I need to take to heart myself. I also really admire how brave 
      and open she has been to letting her career evolve/change in some big ways over the past decade, and I can’t wait to 
      follow along wherever the next roads may lead.`,
      blogcategory: 'Lifestyle',
      createdby: 'Erin Loechner',
      createddate: 'Mar 25 2015'
    },
    {
      blogid: 11,
      blogtitle: 'DESIGN FOR MANKIND',
      blogdescription: `I’ve never met Erin before in person, but goodness, I feel like she is such a kindred spirit.  
      And I have completely enjoyed tuning into her blog for years (like, so many years now!) for a dose of real-life 
      inspiration and lovely prose.  Her posts on navigating motherhood (with her sweet little toddler) and marriage 
      have always been some of my favorites.  But I have always especially connected with her posts on work, and creativity, 
      and self-care, probably because they’re always words I need to take to heart myself. I also really admire how brave 
      and open she has been to letting her career evolve/change in some big ways over the past decade, and I can’t wait to 
      follow along wherever the next roads may lead.`,
      blogcategory: 'Lifestyle',
      createdby: 'Erin Loechner',
      createddate: 'Mar 25 2015'
    },
    {
      blogid: 12,
      blogtitle: 'DESIGN FOR MANKIND',
      blogdescription: `I’ve never met Erin before in person, but goodness, I feel like she is such a kindred spirit.  
      And I have completely enjoyed tuning into her blog for years (like, so many years now!) for a dose of real-life 
      inspiration and lovely prose.  Her posts on navigating motherhood (with her sweet little toddler) and marriage 
      have always been some of my favorites.  But I have always especially connected with her posts on work, and creativity, 
      and self-care, probably because they’re always words I need to take to heart myself. I also really admire how brave 
      and open she has been to letting her career evolve/change in some big ways over the past decade, and I can’t wait to 
      follow along wherever the next roads may lead.`,
      blogcategory: 'Lifestyle',
      createdby: 'Erin Loechner',
      createddate: 'Mar 25 2015'
    },
    {
      blogid: 13,
      blogtitle: 'DESIGN FOR MANKIND',
      blogdescription: `I’ve never met Erin before in person, but goodness, I feel like she is such a kindred spirit.  
      And I have completely enjoyed tuning into her blog for years (like, so many years now!) for a dose of real-life 
      inspiration and lovely prose.  Her posts on navigating motherhood (with her sweet little toddler) and marriage 
      have always been some of my favorites.  But I have always especially connected with her posts on work, and creativity, 
      and self-care, probably because they’re always words I need to take to heart myself. I also really admire how brave 
      and open she has been to letting her career evolve/change in some big ways over the past decade, and I can’t wait to 
      follow along wherever the next roads may lead.`,
      blogcategory: 'Lifestyle',
      createdby: 'Erin Loechner',
      createddate: 'Mar 25 2015'
    },
    {
      blogid: 14,
      blogtitle: 'DESIGN FOR MANKIND',
      blogdescription: `I’ve never met Erin before in person, but goodness, I feel like she is such a kindred spirit.  
      And I have completely enjoyed tuning into her blog for years (like, so many years now!) for a dose of real-life 
      inspiration and lovely prose.  Her posts on navigating motherhood (with her sweet little toddler) and marriage 
      have always been some of my favorites.  But I have always especially connected with her posts on work, and creativity, 
      and self-care, probably because they’re always words I need to take to heart myself. I also really admire how brave 
      and open she has been to letting her career evolve/change in some big ways over the past decade, and I can’t wait to 
      follow along wherever the next roads may lead.`,
      blogcategory: 'Lifestyle',
      createdby: 'Erin Loechner',
      createddate: 'Mar 25 2015'
    },
    {
      blogid: 15,
      blogtitle: 'DESIGN FOR MANKIND',
      blogdescription: `I’ve never met Erin before in person, but goodness, I feel like she is such a kindred spirit.  
      And I have completely enjoyed tuning into her blog for years (like, so many years now!) for a dose of real-life 
      inspiration and lovely prose.  Her posts on navigating motherhood (with her sweet little toddler) and marriage 
      have always been some of my favorites.  But I have always especially connected with her posts on work, and creativity, 
      and self-care, probably because they’re always words I need to take to heart myself. I also really admire how brave 
      and open she has been to letting her career evolve/change in some big ways over the past decade, and I can’t wait to 
      follow along wherever the next roads may lead.`,
      blogcategory: 'Lifestyle',
      createdby: 'Erin Loechner',
      createddate: 'Mar 25 2015'
    },
    {
      blogid: 16,
      blogtitle: 'DESIGN FOR MANKIND',
      blogdescription: `I’ve never met Erin before in person, but goodness, I feel like she is such a kindred spirit.  
      And I have completely enjoyed tuning into her blog for years (like, so many years now!) for a dose of real-life 
      inspiration and lovely prose.  Her posts on navigating motherhood (with her sweet little toddler) and marriage 
      have always been some of my favorites.  But I have always especially connected with her posts on work, and creativity, 
      and self-care, probably because they’re always words I need to take to heart myself. I also really admire how brave 
      and open she has been to letting her career evolve/change in some big ways over the past decade, and I can’t wait to 
      follow along wherever the next roads may lead.`,
      blogcategory: 'Lifestyle',
      createdby: 'Erin Loechner',
      createddate: 'Mar 25 2015'
    }
  ];
  constructor() { }

  getBlogCategories(): BlogCategory[] {
    return this.blogCategories;
  }

  getBlogs(): Blogs[] {
    this.blogs.sort(function (a, b) { return b.blogid - a.blogid });
    return this.blogs;
  }

  getBlogByID(blogid: number): Blogs {
    return this.blogs.find(blog => blog.blogid === blogid);
  }

  addNewBlog(blog: Blogs) {
    const lastIndex = this.blogs.length;
    blog.blogid = lastIndex + 1;
    this.blogs.push(blog);
    console.log('after add');
    console.log(this.blogs);
  }

  updateBlog(blog: Blogs) {
    const index = this.getIndexByBlogID(blog.blogid);
    this.blogs[index] = blog;
  }

  removeBlog(blogid: number[]) {
    for (let i = 0; i < blogid.length; i++) {
      const index = this.getIndexByBlogID(blogid[i]);
      this.blogs.splice(index, 1);
    }
  }

  getIndexByBlogID(blogid){
    return this.blogs.findIndex(blog => blog.blogid === blogid);
  }
}
