import { Component, Input, OnInit } from '@angular/core';
import { InventoryItem } from './inventory-item.model';
import { faBox, faBoxOpen } from '@fortawesome/free-solid-svg-icons';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-inventory-item',
  templateUrl: './inventory-item.component.html',
  styleUrls: ['./inventory-item.component.css']
})
export class InventoryItemComponent implements OnInit {

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) { }
  @Input() inventoryItem: InventoryItem;
  @Input() index: number;
  faBox = faBox;
  faBoxOpen = faBoxOpen;
  showOptions = false;
  showEdit = false;

  ngOnInit() {
  }
}
