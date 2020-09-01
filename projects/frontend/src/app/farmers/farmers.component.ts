import { Component, OnInit } from '@angular/core';
import { Farmer } from './farmers.model';
import { FarmersService } from './farmers.service';
import { FarmerSearchAbstractProvider } from './farmers.interface';

@Component({
  selector: 'app-farmers',
  templateUrl: './farmers.component.html',
  styleUrls: ['./farmers.component.scss'],
})
export class FarmersComponent implements OnInit {
  farmer: Farmer;
  farmerSearchProvider: FarmerSearchAbstractProvider;

  constructor(private farmersService: FarmersService) {
    this.farmerSearchProvider = farmersService;
  }

  ngOnInit(): void {}

  selectedFarmer(farmer: Farmer) {
    this.farmer = farmer;
  }
}
