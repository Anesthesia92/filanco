import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {

  items = ['Заказать', 'Продлить/Изменить', 'Финансы', 'Управление'];
  expandedIndex = 0;
}
