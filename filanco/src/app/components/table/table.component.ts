import {Component, EventEmitter, Input, Output} from '@angular/core';
import {CardService} from "../../services/card.service";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {

  @Input() item: any;
  @Input() column: any;
  @Output() emitDeleteCard: EventEmitter<number> = new EventEmitter();
  @Output() emitText: EventEmitter<any> = new EventEmitter();
  commentInput = '';
  open: boolean = false;
  isOpen = false;

  constructor(public cardService: CardService, public dialog: MatDialog) {
  }

  public onCommentTextEmit(text: string) {
    this.cardService.addComment(text);
    this.emitText.emit({text: this.commentInput});
    this.commentInput = '';
  }

  public addComment(text: string) {
    this.cardService.addComment(text);
  }

  public onDeleteComment(commentId: number) {
    this.cardService.deleteComment(commentId)
  }

  public onChangeComments() {
    this.open = true;
  }

  public onDeleteDomain(domainId: number) {
    this.cardService.deleteDomain(domainId)
  }

}
