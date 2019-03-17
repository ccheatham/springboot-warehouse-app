import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InventoryService } from './inventory.service';
import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {

  constructor(
    private httpClient: HttpClient,
    private inventoryService: InventoryService
  ) { }

  getInventory() {
    this.httpClient.get<any[]>(`${environment.apiURL}/api/inventory`)
      .subscribe(
        (inventoryItems = []) => {
          this.inventoryService.setInventory(inventoryItems);
        }
      );
  }
}
