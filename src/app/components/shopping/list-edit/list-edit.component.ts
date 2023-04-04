import { Component, OnInit } from '@angular/core';
import {ShoppingListService} from "../shopping-list.service";

@Component({
  selector: 'app-list-edit',
  templateUrl: './list-edit.component.html',
  styleUrls: ['./list-edit.component.css']
})
export class ListEditComponent implements OnInit {

  constructor(private slService: ShoppingListService) { }

  ngOnInit(): void {
  }

  onAddItem() {

  }
}
