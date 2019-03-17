import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { InventoryItem } from '../inventory/inventory-list/inventory-item/inventory-item.model';

import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class InventoryService {
  constructor(
    private httpClient: HttpClient
  ) { }
  startedEditing = new Subject<number>();
  inventoryChanged = new Subject<InventoryItem[]>();
  inventory: InventoryItem[];

  setInventory(inventory: InventoryItem[]) {
    this.inventory = inventory;
    this.inventoryChanged.next(this.inventory.slice());
  }

  getInventory() {
    return this.inventory;
  }

  getInventoryItem(id: number) {
    const item  = this.inventory.slice().find(item => item.id === id);
    return this.inventory && item || null;
  }

  editInventoryItem(id: number, inventoryItem: InventoryItem) {
    const index = this.inventory.findIndex(item => item.id === id);
    this.inventory[index] = inventoryItem;
    this.httpClient.put(`${environment.apiURL}/api/inventory`, inventoryItem)
      .subscribe(
        (inventoryItemsResult: InventoryItem[]) => {
          this.setInventory(inventoryItemsResult);
        }
      );
  }

  addInventoryItem(inventoryItem: InventoryItem) {
    this.inventory.push(inventoryItem);
    this.httpClient.put(`${environment.apiURL}/api/inventory`, inventoryItem)
      .subscribe(
        (inventoryItemsResult: InventoryItem[]) => {
          this.setInventory(inventoryItemsResult);
        }
      );
  }

  deleteInventoryItem(id: number) {
    const index = this.inventory.findIndex(item => item.id === id);
    const item = this.inventory[index];
    this.inventory.splice(index, 1);
    this.inventoryChanged.next(this.inventory.slice());
    this.httpClient.delete(`${environment.apiURL}/api/inventory/${item.id}`)
      .subscribe(
        (inventoryItemsResult: InventoryItem[]) => {
          this.setInventory(inventoryItemsResult);
        }
      );
  }
}
