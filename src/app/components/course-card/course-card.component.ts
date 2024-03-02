import {Component, input} from '@angular/core';

export type Course = {
  title: string;
  image: string;
  rank: number;
  timeSpan: string;
}
@Component({
  selector: 'app-course-card',
  standalone: true,
  imports: [],
  templateUrl: './course-card.component.html',
  styleUrl: './course-card.component.css'
})
export class CourseCardComponent {
  course = input.required<Course>()
}
