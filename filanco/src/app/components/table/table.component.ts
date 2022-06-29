import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CardService} from "../../services/card.service";

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent  {

  @Input() item: any;
  @Input() column: any;
  @Output() emitText: EventEmitter<{ id: number; text: string }> = new EventEmitter();
  @Output() emitDeleteCard: EventEmitter<number> = new EventEmitter();

  commentInput = '';

  constructor(private cardService: CardService) { }

  ngOnInit(): void {
  }

  public onCommentTextEmit(id: number) {
    this.emitText.emit({id, text: this.commentInput});
    this.commentInput = '';
  }

  onAddComment(event: string) {
    this.cardService.addComment(event);
  }

  public onDeleteComment(commentId: number) {
    this.cardService.deleteComment(commentId)
  }

}
