import { Component } from '@angular/core';
import { ClrLoadingState } from '@clr/angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'blog-app';
  validateBtnState: ClrLoadingState = ClrLoadingState.DEFAULT;

  validateDemo() {
    this.validateBtnState = ClrLoadingState.LOADING;
    setTimeout(() => {
      //Validating Logic
      this.validateBtnState = ClrLoadingState.SUCCESS;
    }, 2000);

  }

}