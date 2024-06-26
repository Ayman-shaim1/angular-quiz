import { Component } from '@angular/core';
import { data } from '../../data';

@Component({
  selector: 'app-quiz',
  standalone: true,
  imports: [],
  templateUrl: './quiz.component.html',
  styleUrl: './quiz.component.css',
})
export class QuizComponent {
  quiz = data;
  currentIndex: number = 0;

  goto(page: number) {
    this.currentIndex = page;
  }
}
