import { Component, OnDestroy, OnInit } from '@angular/core';
import { InventoryItem } from './inventory-item/inventory-item.model';
import { Subscription } from 'rxjs';
import { InventoryService } from '../../shared/inventory.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-inventory-list',
  templateUrl: './inventory-list.component.html',
  styleUrls: ['./inventory-list.component.css']
})
export class InventoryListComponent implements OnInit, OnDestroy {
  inventory: InventoryItem[];
  subscription: Subscription;
  constructor(
    private inventoryService: InventoryService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.subscription = this.inventoryService.inventoryChanged
      .subscribe(
        (inventory: InventoryItem[]) => {
          this.inventory = inventory;
        }
      );
    this.inventory = this.inventoryService.getInventory();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onAddItem() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }

  onEditItem(id: number) {
    this.inventoryService.startedEditing.next(id);
    this.router.navigate([id], {relativeTo: this.route});
  }
}
