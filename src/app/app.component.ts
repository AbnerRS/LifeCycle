import { ListaDeCompraService } from './service/lista-de-compra.service';
import { Component, DoCheck, OnInit } from '@angular/core';
import { Item } from './interfaces/iItem';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, DoCheck{
  title = 'app-lista-de-compras';
  ListaDeCompra! : Array<Item>;
  ItemParaSerEditado! : Item;

   constructor(private listaService: ListaDeCompraService) { }

   ngOnInit(){
      this.ListaDeCompra = this.listaService.getListaDeCompra();
      console.log(this.ListaDeCompra)
   }

   editarItem(item: Item){
    this.ItemParaSerEditado = item;
   }

   deletarItem(id: number){
    const index = this.ListaDeCompra.findIndex((item) =>
      item.id === id);
      this.ListaDeCompra.splice(index, 1);
   }

   limparLista(){
    this.ListaDeCompra = [];
   }

   ngDoCheck(): void {
    console.log('doCheck Foi chamado')
    this.listaService.atualizarLocalStorage();
   }
}
