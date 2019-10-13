import 'bootstrap';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SearchComponent } from './search/search.component';
import { ColorCubeComponent } from './color-cube/color-cube.component';
import { ColorCubeListComponent } from './color-cube-list/color-cube-list.component';
import { ColorManagementComponent } from './color-management/color-management.component';
import { DialogComponent } from './dialog/dialog.component';
import { ColorCubeService } from './color-cube/color-cube.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchComponent,
    ColorCubeComponent,
    ColorCubeListComponent,
    ColorManagementComponent,
    DialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [ColorCubeService],
  bootstrap: [AppComponent]
})
export class AppModule {}
