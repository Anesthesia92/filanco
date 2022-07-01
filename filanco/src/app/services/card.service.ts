import {Injectable} from '@angular/core';
import {Comment, Comments, Domain} from "../models/item.model";
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

  private initDomain = [
    {
      id: 1,
      text: 'shoku-yoku.ru',
      link: 'www.shoku-yoku.ru',
    },
    {
      id: 2,
      text: 'srv164042.hoster-test.ru',
      link: 'www.srv164042.hoster-test.ru (alias)'
    },
    {
      id: 3,
      text: 'сёкуёку.рф',
      link: 'www.сёкуёку.рф (alias)'
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

  private domain: Domain[] = this.initDomain;
  private domain$ = new BehaviorSubject<Domain[]>(this.initDomain);

  public getDomains$() {
    return this.domain$.asObservable();
  }

  deleteDomain(domainId: number) {
    this.domain = this.domain.filter((d: Domain) => d.id !== domainId);
    this.domain$.next([...this.domain]);
  }

}
