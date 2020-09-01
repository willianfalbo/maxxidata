import {
  MatAutocompleteModule,
  MatInputModule,
  MatProgressSpinnerModule,
  MatIconModule,
} from '@angular/material';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [
    MatAutocompleteModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatIconModule,
  ],
  exports: [
    MatAutocompleteModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatIconModule,
  ],
})
export class MaterialModule {}
