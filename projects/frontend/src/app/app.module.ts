import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { FarmersComponent } from './farmers/farmers.component';
import { FarmersService } from './farmers/farmers.service';
import { FarmerSearchCardComponent } from './farmers/farmer-search-card/farmer-search-card.component';

@NgModule({
  declarations: [AppComponent, FarmersComponent, FarmerSearchCardComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MaterialModule,
  ],
  providers: [FarmersService],
  bootstrap: [AppComponent],
})
export class AppModule {}
