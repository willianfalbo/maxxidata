import {
  MatAutocompleteModule,
  MatInputModule,
  MatProgressSpinnerModule,
  MatIconModule,
  MatToolbarModule,
} from '@angular/material';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [
    MatAutocompleteModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatToolbarModule,
  ],
  exports: [
    MatAutocompleteModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatToolbarModule,
  ],
})
export class MaterialModule {}
