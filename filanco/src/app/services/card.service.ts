import { Injectable } from '@angular/core';
import {Comment, Comments} from "../models/item.model";
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CardService {

  private initComment = [
    {
     text: '',
      comments: [
        {
          id: 1,
          text: 'Комментарий для примера',
        },
      ]
    },
  ];

  private board: Comments[] = this.initComment;
  private board$ = new BehaviorSubject<Comments[]>(this.initComment);

  getBoard$() {
    return this.board$.asObservable();
  }

  addComment(text: string) {
    const newComments: Comment = {
      id: Date.now(),
      text: text,
    };

    this.board = this.board.map((column: Comments) => {
        column.comments = [newComments, ...column.comments];
      return column;
    });
    this.board$.next([...this.board]);
  }

  deleteComment(commentId: number) {
    this.board = this.board.map((column: Comments) => {
        column.comments = column.comments.filter((card: Comment) => card.id !== commentId);
      return column;
    });
    this.board$.next([...this.board]);
  }


}
