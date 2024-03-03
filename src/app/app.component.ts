import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Course, CourseCardComponent} from "./components/course-card/course-card.component";
import {ThumbnailAreaDirective} from "./directives/thumbnail-area.directive";
import {TitleAreaDirective} from "./directives/title-area.directive";
import {FooterAreaDirective} from "./directives/footer-area.directive";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CourseCardComponent, ThumbnailAreaDirective, TitleAreaDirective, FooterAreaDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'play-with-content-projection';
  courses : Array<Course> = [
    {
      title: 'Angular 17 soon 18!',
      image: '../../../assets/angular.jpeg',
      rank: 5,
      timeSpan: "2h"
    },
    {
      title: 'Theme Builder!',
      image: '../../../assets/theme-builder.jpeg',
      rank: 5,
      timeSpan: "2h"
    }
  ]
}
