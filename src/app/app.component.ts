import { ListaDeCompraService } from './service/lista-de-compra.service';
import { Component, OnInit } from '@angular/core';
import { Item } from './interfaces/iItem';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app-lista-de-compras';
  ListaDeCompra! : Array<Item>

   constructor(private listaService: ListaDeCompraService) { }

   ngOnInit(){
      this.ListaDeCompra = this.listaService.getListaDeCompra();
      console.log(this.ListaDeCompra)
   }

   editarItem(item: Item){
    console.log(item)
   }
}
