import { Component, OnInit } from '@angular/core';
import { AllAlbumsService } from '../all-albums.service';
import { StorageHandlerService } from '../storage-handler.service';


@Component({
  selector: 'app-selected-items-container',
  templateUrl: './selected-items-container.component.html',
  styleUrls: ['./selected-items-container.component.css']
})
export class SelectedItemsContainerComponent implements OnInit {

  abs!: any; 
  allSelectedItems!: any[];
  constructor(private localStorageService: StorageHandlerService, private albumsService: AllAlbumsService) {
    this.allSelectedItems = albumsService.selectedAlbums
   }

  ngOnInit(): void {
  }

  reloadData(){
    this.allSelectedItems = this.albumsService.selectedAlbums
    console.log(this.allSelectedItems)

  }
}
