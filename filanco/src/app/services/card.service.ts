import { Injectable } from '@angular/core';
import {Comment, Comments} from "../models/item.model";
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CardService {

  private initComment = [
        {
          id: 1,
          text: ''
        }
  ];

  private board: Comment[] = this.initComment;
  private board$ = new BehaviorSubject<Comment[]>(this.initComment);

  getBoard$() {
    return this.board$.asObservable();
  }

  addComment(text: string) {
    const newComments: Comment = {
      id: Date.now(),
      text: text,
    };

    this.board = [...this.board, newComments];
    this.board$.next([...this.board]);
  }

  deleteComment(commentId: number) {
    this.board = this.board.filter((comment: Comment) => comment.id !== commentId);
    this.board$.next([...this.board]);
  }

}
