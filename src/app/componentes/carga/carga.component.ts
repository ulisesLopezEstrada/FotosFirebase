import { Component, OnInit } from '@angular/core';
import { Imagen } from '../../modelo/imagen';
import { ImagenesService } from '../../servicios/imagenes.service';

@Component({
  selector: 'app-carga',
  templateUrl: './carga.component.html',
  styleUrls: ['./carga.component.css']
})
export class CargaComponent implements OnInit {

  estaSobreElemento:boolean = false;
  archivos: Imagen[]=[];

  constructor(public imagenServicio:ImagenesService) { }

  ngOnInit() {
  }

  cargarImagen(){
    this.imagenServicio.cargarImagenes(this.archivos)
  }

  limpiarArchivo(){
    this.archivos=[];
  }

}
