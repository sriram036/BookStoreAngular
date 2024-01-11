import { Component, Input, OnInit } from '@angular/core';

interface IFeedback {
  userId: number,
  bookId: number,
  rating: number,
  comment: string
}

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss']
})
export class FeedbackComponent implements OnInit {

  constructor() { }

  numSequence(n: number): Array<number> {
    return Array(n);
  }

  ngOnInit(): void {
  }

  @Input() FeedbackData: IFeedback[]=[];
  array:number[]=[1,2,3];
  array1:number[]=[1,2];

}
