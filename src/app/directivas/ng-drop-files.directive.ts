import { Directive, EventEmitter, HostListener, Input, Output } from '@angular/core';
import { Imagen } from '../modelo/imagen';

@Directive({
  selector: '[appNgDropFiles]'
})
export class NgDropFilesDirective {

 @Input()  archivos: Imagen[]=[];
 @Output() mouseSobre: EventEmitter<boolean> = new EventEmitter();
  constructor() { }
   
  // Eventos

  @HostListener('dragover',['$event'])
   public onDragEnter(event:any){
     this.mouseSobre.emit(true);
     this.prevenirDetener(event);
  }
  @HostListener('dragleave',['$event'])
   public onDragLeave(event:any){
     this.mouseSobre.emit(false);
    
  }

  @HostListener('drop',['$event'])
  public onDrop(event:any){
    
    const transferencia = this.getTransferencia(event);
     if (!transferencia) {
       return;
     }

     this.extraerArchivos(transferencia.files);
     this.prevenirDetener(event);
     this.mouseSobre.emit(false);

 }
 // compatibiliadad con los navegadores

  private getTransferencia(event:any){
    return event.dataTransfer ? event.dataTransfer : event.originalEvent.dataTransf;
  }

  private extraerArchivos(archivoLista:FileList){

   //console.log(archivoLista);

    for ( const propiedad in Object.getOwnPropertyNames( archivoLista)){
         const archivoTemporal= archivoLista[propiedad];

         if (this.archivoPuedeSerCargado(archivoTemporal)){
            const nuevoArchivo = new Imagen(archivoTemporal);
            this.archivos.push(nuevoArchivo);
         }
        }
      /* console.log(this.archivos); */
  }


// validaciones

  private prevenirDetener(event){
    event.preventDefault();
    event.stopPropagation();
  }


  private archivoYaFueDroppeado (nombreArchivo:string):boolean {

     for ( const archivo of this.archivos) {
        if (archivo.nombreArchivo === nombreArchivo ){
      console.log('El archivo' + nombreArchivo + 'ya esta agregado');
      return true;
    }
   }
  }

  private esImagen(tipoArchivo:string):boolean {
    return (tipoArchivo ==='' || tipoArchivo === undefined) ? false : tipoArchivo.startsWith('image');
  }

  private archivoPuedeSerCargado(archivo: File): boolean{
    if (!this.archivoYaFueDroppeado(archivo.name) && this.esImagen (archivo.type)) {
     return true;
    } else {
      return false;
    }
   
  }

}
