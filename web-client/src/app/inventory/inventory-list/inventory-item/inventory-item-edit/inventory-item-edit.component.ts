import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { InventoryItem } from '../inventory-item.model';
import { InventoryService } from '../../../../shared/inventory.service';

@Component({
  selector: 'app-inventory-item-edit',
  templateUrl: './inventory-item-edit.component.html',
  styleUrls: ['./inventory-item-edit.component.css']
})
export class InventoryItemEditComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private inventoryService: InventoryService
  ) { }
  @ViewChild('f') inventoryItemForm: NgForm;
  id: number;
  editMode = false;
  editedItem: InventoryItem;
  tempItemCode = '';

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          if (params['id'] === 'new') {
            setTimeout(() => {
              this.inventoryItemForm.setValue({
                id: null,
                name: '',
                amount: 1,
                description: '',
                itemCode: '',
                itemNo: 1
              });
            }, );
            return;
          }

          this.id = +params['id'];
          this.editMode = true;
          this.editedItem = this.inventoryService.getInventoryItem(this.id);

          if (!this.editedItem) {
            this.router.navigate(['../'], {relativeTo: this.route});
            return;
          }

          setTimeout(() => {
            this.inventoryItemForm.setValue({ ...this.editedItem });
          }, );
        }
      );
  }

  onNameChange(value) {
    this.tempItemCode = value;
  }

  onEdit(ngForm: NgForm) {
    if (this.editMode) {
      const updatedItem = { ...this.editedItem, ...ngForm.form.value};
      this.inventoryService.editInventoryItem(this.id, updatedItem);
    } else {
      const newItem = { ...ngForm.form.value };
      this.inventoryService.addInventoryItem(newItem);
    }
    this.editMode = false;
    this.router.navigate(['../'], {relativeTo: this.route});
  }

  onDelete() {
    this.inventoryService.deleteInventoryItem(this.id);
    this.editMode = false;
    this.router.navigate(['../'], {relativeTo: this.route});

  }
  onCancel() {
    this.editMode = false;
    this.router.navigate(['../'], {relativeTo: this.route});

  }
}
