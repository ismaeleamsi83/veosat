import { Component, OnInit } from '@angular/core';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { ProductsService } from '../services/products.service';
import { HttpClientModule  } from '@angular/common/http';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-informe',
  standalone: true,
  imports: [TableModule, ButtonModule, HttpClientModule, IconFieldModule, InputIconModule, CommonModule ],
  templateUrl: './informe.component.html',
  styleUrl: './informe.component.scss',
  providers: [ProductsService]
})
export class InformeComponent implements OnInit{

  //array para guardar los productos
  products: any[]=[];
  

  //declaro en el constructor el servicio para utilizar sus metodos
  //para usarlo tambien hay que importar aqui el httpclient
  constructor(public productService: ProductsService){

  }
  
  //cuando inicia el componente carga el metodo showproducts
  ngOnInit(){
    this.showProducts();
  }

  //este metodo se utiliza el servicio para realizar la peticion http hacia donde esta el archivo json con los productos a mostrar
  showProducts(){
    //console.log('ok');
    this.products = [];
    this.productService.getProducts().subscribe((products)=>{
      next: {
        this.products = products;
      }
      error: (err: Error)=>{
        console.log(err);
      }
      
    });
  }
  
  //vacio el array y hago que refresque los productos
  reset(){
    console.log('refresh');
    this.productService.getProducts().subscribe((products)=>{
      next: {
        this.products = products;
      }
      error: (err: Error)=>{
        console.log(err);
      }
      
    });
  }

  exportCSV() {
    // if (this.products && Array.isArray(this.products)) {
    //   const filteredProducts = this.products.filter(product => product.quantity > 0);
    //   console.log('filteredProducts:', filteredProducts);
    //   // Lógica para exportar a CSV
    // } else {
    //   console.error('products no está definido o no es un array');
    // }
  }

}
