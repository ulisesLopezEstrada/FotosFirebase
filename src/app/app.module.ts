import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FotosComponent } from './componentes/fotos/fotos.component';
import { CargaComponent } from './componentes/carga/carga.component';
import { APP_ROUTES } from './app.routes';
import { ImagenesService } from './servicios/imagenes.service';
// configuracion para usu de firebase
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';

// modulos de la base de datos
import { AngularFirestoreModule } from 'angularfire2/firestore';
// modulo para storage
import { AngularFireStorageModule } from 'angularfire2/storage';
import { NgDropFilesDirective } from './directivas/ng-drop-files.directive';

@NgModule({
  declarations: [
    AppComponent,
    FotosComponent,
    CargaComponent,
    NgDropFilesDirective
  ],
  imports: [
    BrowserModule,
    APP_ROUTES,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireStorageModule
  ],
  providers: [ImagenesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
