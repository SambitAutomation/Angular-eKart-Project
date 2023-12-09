import { Component, ViewChild } from '@angular/core';
import { ProductListComponent } from './product-list/product-list.component';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrl: './container.component.css'
})
export class ContainerComponent {

  searchText: string = '';

  @ViewChild(ProductListComponent) productListComponent: ProductListComponent;

  setSerachText(value: string){
    this.searchText = value;
  }


listOfStrings: string[] = ['sambit', 'sikun','papa','mama'];
name: string = 'sambit';
addToCart: number = 0;

onTextChange(event: any){
  this.name = event.target.value;
}

onDecrement(){
  if(this.addToCart > 0){
    this.addToCart --;
  }
  
}

onIncrement(){
  if(this.addToCart < 10){
    this.addToCart ++;
  }
  
}
}
