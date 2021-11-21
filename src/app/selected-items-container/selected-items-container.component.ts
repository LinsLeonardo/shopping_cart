import { Component, OnInit } from '@angular/core';
import { StorageHandlerService } from '../storage-handler.service';


@Component({
  selector: 'app-selected-items-container',
  templateUrl: './selected-items-container.component.html',
  styleUrls: ['./selected-items-container.component.css']
})
export class SelectedItemsContainerComponent implements OnInit {

  allSelectedItems!: any[];
  constructor(private localStorageService: StorageHandlerService) {
    
   }

  ngOnInit(): void {
    this.allSelectedItems = this.localStorageService.loadFromLocalStorage(); 
  }


}
