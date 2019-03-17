import { Component, OnInit } from '@angular/core';
import { DataStorageService } from './shared/data-strorage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(
    private dss: DataStorageService
  ) { }

  ngOnInit() {
    this.dss.getInventory();
  }
}
