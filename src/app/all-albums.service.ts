import { Injectable } from '@angular/core';

import { Location } from '@angular/common';
import { StorageHandlerService } from './storage-handler.service';



@Injectable({
  providedIn: 'root'
})
export class AllAlbumsService {
  costShop: number = 0

  allAlbums: any[] = [
    {id: 1, amount: 0, url: '../../assets/adele19.jpg',title: '19', artist: 'Adele', price: 45.00}, {id: 2, amount: 0, url: '../../assets/adele21.jpg',title: '21', artist: 'Adele', price: 48.00}, 
    {id: 3, amount: 0, url: '../../assets/adele25.jpg',title: '25', artist: 'Adele', price: 43.00}, {id: 4, amount: 0, url: '../../assets/adele30.jpg',title: '30', artist: 'Adele', price: 50.00},
    {id: 5, amount: 0, url: '../../assets/billieep.jpg',title: "Don't Smile At Me", artist: 'Billie Eilish', price: 40.00},
    {id: 6, amount: 0, url: '../../assets/billiefirstalbum.jpg',title: "Where do We Go?", artist: 'Billie Eilish', price: 48.00},
    {id: 7, amount: 0, url: '../../assets/billiehte.jpg',title: 'Happier Than Ever', artist: 'Billie Eilish', price: 50.00},
    {id: 8, amount: 0, url: '../../assets/pittyacn.jpg',title: 'Admirável Chip Novo', artist: 'Pitty', price: 35.00},
    {id: 9, amount: 0, url: '../../assets/pittyanacronico.jpg',title: 'Anacrônico', artist: 'Pitty', price: 38.00},
    {id: 10, amount: 0, url: '../../assets/pittychiaroscuro.jpg',title: 'Chiaroscuro', artist: 'Pitty', price: 35.00},
    {id: 11, amount: 0, url: '../../assets/pittysetevidas.jpg',title: 'SETEVIDAS', artist: 'Pitty', price: 45.00},
    {id: 12, amount: 0, url: '../../assets/pittymatriz.jpg',title: 'Matriz', artist: 'Pitty', price: 50.00},
    {id: 13, amount: 0, url: '../../assets/lordepureher.jpg',title: 'Pure Heroine', artist: 'Lorde', price: 40.00},
    {id: 14, amount: 0, url: '../../assets/melodrama.jpg',title: 'Melodrama', artist: 'Lorde', price: 50.00},
    {id: 15, amount: 0, url: '../../assets/lordesolarpower.png',title: 'Solar Power', artist: 'Lorde', price: 30.00},
    {id: 16, amount: 0, url: '../../assets/oliviasour.jpg',title: 'SOUR', artist: 'Olivia Rodrigo', price: 50.00},]

  selectedAlbums: any[] = []

  constructor(private storageService: StorageHandlerService) { 
    this.selectedAlbums = storageService.loadFromLocalStorage()
  }
  
  verifyAlbum(album: any): number{
    const index = this.selectedAlbums.findIndex(currentAlbum => currentAlbum.id === album.id)
    return index 
  }

  addAlbum(album: any){
    const indexOfAlbum = this.verifyAlbum(album)
    if(indexOfAlbum >= 0){
      this.selectedAlbums[indexOfAlbum].amount += 1
    }
    else{
    album.amount +=1
    this.selectedAlbums.push(album)}
    this.selectedAlbums = this.selectedAlbums.filter(album => album.amount !== 0)

    this.storageService.addToLocalStorage(this.selectedAlbums)
  }

  removeAlbum(album: any){
    const indexOfAlbum = this.verifyAlbum(album)
    if(indexOfAlbum >= 0){
      this.selectedAlbums[indexOfAlbum].amount -= 1
    }
    this.selectedAlbums = this.selectedAlbums.filter(album => album.amount !== 0)
    this.storageService.addToLocalStorage(this.selectedAlbums)
    
  }

  reload(){
    location.reload()
  }

  getTotalPrice() {
    for(let album of this.selectedAlbums){
      this.costShop = (+album.amount * +album.price)
      
    }
    return this.costShop
  }

}
