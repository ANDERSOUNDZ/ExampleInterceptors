import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialsModule } from './materials/materials.module';
import { HomeComponent } from './home/home.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HomeListItemComponent } from './home/home-list-item/home-list-item.component';
import { LayoutModule } from '@angular/cdk/layout';

import { ResponceHomeComponent } from './home/responce-home/responce-home.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HomeListItemComponent,
    ResponceHomeComponent    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialsModule,
    FlexLayoutModule,
    LayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
