import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { StorageHandlerService } from 'src/app/storage-handler.service';
import { Location } from '@angular/common';
import { AllAlbumsService } from 'src/app/all-albums.service';

@Component({
  selector: 'app-selected-item',
  templateUrl: './selected-item.component.html',
  styleUrls: ['./selected-item.component.css']
})
export class SelectedItemComponent implements OnInit {

  totalPrice!: number;
  @Input() currentAlbum!: any; 

  albumAmount!: number;
  @Output() amountAlbumChanged = new EventEmitter()
  
  constructor(private localStorageService: StorageHandlerService, private location: Location, private albumService: AllAlbumsService) { }

  ngOnInit(): void {
    this.updateValue()
  }

  addUnity(currentAlbum: any){
    this.albumService.addAlbum(currentAlbum)
    this.updateValue()
    this.amountAlbumChanged.emit() 
  }

  removeUnity(currentAlbum: any){
    this.albumService.removeAlbum(currentAlbum)
    this.updateValue()
    this.amountAlbumChanged.emit() 

  }
  

  updateValue(){
   
    this.totalPrice = this.currentAlbum.amount * this.currentAlbum.price

  }

  load(){
    location.reload();
  }

  replace(){
    location.replace('/carrinho')
  }
}
