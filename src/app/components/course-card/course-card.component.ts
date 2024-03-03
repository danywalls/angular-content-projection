import {Component, input} from '@angular/core';
import {ThumbnailAreaDirective} from "../../directives/thumbnail-area.directive";
import {FooterAreaDirective} from "../../directives/footer-area.directive";
import {TitleAreaDirective} from "../../directives/title-area.directive";

export type Course = {
  title: string;
  image: string;
  rank: number;
  timeSpan: string;
}
@Component({
  selector: 'app-course-card',
  standalone: true,
  imports: [ThumbnailAreaDirective, FooterAreaDirective, TitleAreaDirective],
  templateUrl: './course-card.component.html',
  styleUrl: './course-card.component.css'
})
export class CourseCardComponent {

}
