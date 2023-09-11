import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
  questions = [
    {
      question: 'What is the capital of France?',
      options: ['Paris', 'Berlin', 'Madrid', 'Rome'],
      answer: [true, false, false, false]
    },
    {
      question: 'Which planet is known as the Red Planet?',
      options: ['Mars', 'Venus', 'Jupiter', 'Saturn'],
      answer: [true, false, false, false]
    },
    {
      question: 'What is the largest mammal?',
      options: ['Blue Whale', 'Elephant', 'Giraffe', 'Hippopotamus'],
      answer: [false, true, false, false]
    },
    {
      question: 'Among all the major rock edicts of Ashoka, which one is the longest?',
      options: ['7th major rock edict', '11th major rock edict', ' 13th major rock edict', '9th major rock edict'],
      answer: [false, true, true, false]
    },
    {
      question: 'Who was the founder of Sunga Dynasty?',
      options: ['Pushyamitra', 'Agnimitra', ' Vasumitra', ' Vajramitra'],
      answer: [true, false, false, false]
    },




  ];

  selectedOptions: boolean[][] = [];
  score: number = 0;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.questions.forEach(() => {
      this.selectedOptions.push(new Array(this.questions[0].options.length).fill(false));
    });
  }

  submitQuiz(): void {
    let score = 0;
    for (let i = 0; i < this.questions.length; i++) {
      const question = this.questions[i];
      if ('answer' in question) {
        const correctAnswers = question.options.map((_, j) => question.answer[j]);
        const selectedAnswers = question.options.map((_, j) => this.selectedOptions[i][j]);
        if (this.areArraysEqual(correctAnswers, selectedAnswers)) {
          score++;
        }
      }
    }

    this.router.navigate(['/result'], {
      queryParams: {
        score: score,
        totalQuestions: this.questions.length
      }
    });
  }

  areArraysEqual(arr1: any[], arr2: any[]): boolean {
    return JSON.stringify(arr1) === JSON.stringify(arr2);
  }
}
