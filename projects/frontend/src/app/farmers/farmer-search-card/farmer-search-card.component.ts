import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import {
  switchMap,
  debounceTime,
  tap,
  finalize,
  distinctUntilChanged,
} from 'rxjs/operators';
import { Farmer } from '../farmers.model';
import { of, Observable } from 'rxjs';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { FarmerSearchAbstractProvider } from '../farmers.interface';

@Component({
  selector: 'app-farmer-search-card',
  templateUrl: './farmer-search-card.component.html',
  styleUrls: ['./farmer-search-card.component.scss'],
})
export class FarmerSearchCardComponent implements OnInit {
  @Input() farmerSearchAbstractProvider: FarmerSearchAbstractProvider;
  @Output() onFarmerSelectedEvent = new EventEmitter<Farmer>();
  public filteredOptions: Farmer[] = null;
  public farmerControl = new FormControl();
  isLoading = false;

  constructor() {}

  ngOnInit() {
    this.farmerControl.valueChanges
      .pipe(
        debounceTime(500),
        distinctUntilChanged(),
        tap(() => (this.isLoading = true)),
        switchMap((value) => {
          let result: Observable<Farmer[]>;
          if (typeof value === 'string' && value.trim() !== '') {
            result = this.farmerSearchAbstractProvider.searchFarmers({ term: value });
          } else {
            result = of([] as Farmer[]);
          }
          return result.pipe(finalize(() => (this.isLoading = false)));
        })
      )
      .subscribe((farmers) => (this.filteredOptions = farmers));
  }

  formatSelectedOption(farmer: Farmer) {
    if (farmer) {
      return farmer.name;
    }
  }

  onSelectionChanged(event: MatAutocompleteSelectedEvent) {
    this.onFarmerSelectedEvent.emit(event.option.value as Farmer);
  }
}
