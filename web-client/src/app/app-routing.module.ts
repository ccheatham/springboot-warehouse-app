import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InventoryListComponent } from './inventory/inventory-list/inventory-list.component';
import { InventoryItemEditComponent } from './inventory/inventory-list/inventory-item/inventory-item-edit/inventory-item-edit.component';

const routes: Routes = [
  { path: '', redirectTo: '/inventory-list', pathMatch: 'full' },
  { path: 'inventory-list', component: InventoryListComponent },
  { path: 'inventory-list/:id', component: InventoryItemEditComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
