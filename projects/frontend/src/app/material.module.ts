import { MatAutocompleteModule, MatInputModule } from '@angular/material';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [MatAutocompleteModule, MatInputModule],
  exports: [MatAutocompleteModule, MatInputModule],
})
export class MaterialModule {}
