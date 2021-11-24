import { Component, Input, OnInit } from '@angular/core';
import { AllAlbumsService } from 'src/app/all-albums.service';
import { StorageHandlerService } from 'src/app/storage-handler.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  @Input() string!: string; 

  @Input() currentAlbum!: any;
  nome!: string; 
  valor!: string; 
  constructor(private localStorageService: StorageHandlerService, private albumService: AllAlbumsService) {

   }

  ngOnInit(): void {

  }

  addToSelectedList(currentAlbum: any){
    alert(`O álbum ${this.currentAlbum.title} de ${this.currentAlbum.artist} foi adicionado ao seu carrinho!`)
    this.albumService.addAlbum(currentAlbum)
  }
  

}
