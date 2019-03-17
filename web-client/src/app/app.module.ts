import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InventoryListComponent } from './inventory/inventory-list/inventory-list.component';
import { ListHeaderComponent } from './inventory/inventory-list/header/list-header.component';
import { HeaderComponent } from './header/header.component';
import { InventoryItemComponent } from './inventory/inventory-list/inventory-item/inventory-item.component';
import { DataStorageService } from './shared/data-strorage.service';
import { InventoryService } from './shared/inventory.service';
import { InventoryItemEditComponent } from './inventory/inventory-list/inventory-item/inventory-item-edit/inventory-item-edit.component';
import { FormsModule } from '@angular/forms';
import { ItemCodePipe } from './item-code.pipe';


@NgModule({
  declarations: [
    AppComponent,
    InventoryListComponent,
    HeaderComponent,
    ListHeaderComponent,
    InventoryItemComponent,
    InventoryItemEditComponent,
    ItemCodePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule
  ],
  providers: [DataStorageService, InventoryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
