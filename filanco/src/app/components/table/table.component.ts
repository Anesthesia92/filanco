import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CardService} from "../../services/card.service";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent  {

  @Input() item: any;
  @Input() column: any;
  @Output() emitDeleteCard: EventEmitter<number> = new EventEmitter();
  @Output() emitText: EventEmitter<any> = new EventEmitter();
  commentInput = '';

  constructor(public cardService: CardService, public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  public onCommentTextEmit(text: string) {
    this.cardService.addComment(text);
    this.emitText.emit({text: this.commentInput});
    this.commentInput = '';
  }

  addComment(text: string) {
    this.cardService.addComment(text);
  }

  public onDeleteComment(commentId: number) {
    this.cardService.deleteComment(commentId)
  }

}
