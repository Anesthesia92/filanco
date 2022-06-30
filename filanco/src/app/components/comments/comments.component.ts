import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CardService} from "../../services/card.service";

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent {

  @Input() comment: any;
  @Output() emitComment: EventEmitter<any> = new EventEmitter();
  @Input() emitText: EventEmitter<{ id: number; text: string }> = new EventEmitter();

  constructor(public cardService: CardService) { }

  onCommentEmit(comment: Comment) {
    this.emitComment.emit(comment);
  }

}
