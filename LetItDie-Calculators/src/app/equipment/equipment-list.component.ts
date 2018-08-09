import { Component, OnInit } from '@angular/core';
import { IEquipment } from './equipment';


@Component({
  selector: 'app-equipment',
  templateUrl: './equipment-list.component.html',
  styleUrls: ['./equipment-list.component.css']
})
export class EquipmentListComponent implements OnInit {

  imageWidth: number = 50;
  imageMargin: number = 2;

  

  filteredEquipment: IEquipment[]
  _listFilter: string;
  get listFilter(): string {
      return this._listFilter;
  }
  set listFilter(value: string) {
      this._listFilter = value;
      this.filteredEquipment = this.listFilter ? this.performFilter(this.listFilter) : this.equipmentList;
  }
  showImage: boolean = true;
  equipmentList: IEquipment[] =[{
     "name": "Bowling Stomper",
     "tierDescription": "Bowling Stomper",
     "tierNumber": 1,
     "upgradeLevel": 0,
     "statRequirements": ["58 STR"],
     "attack": 241,
     "upgradeMaterials": ["2x Mineral Oil", "2x Copper Wire Mountain","2x M.I.L.K. Black Metal"],
     "splithiumRequired": 8000,
     "upgradeTime": "000:10",
     "durability": 1400,
     "shopCost": 7600,
     "restockTimer": "000:08"
    },
    {
      "name": "Bowling Stomper",
      "tierDescription": "Bowling Stomper",
      "tierNumber": 1,
      "upgradeLevel": 0,
      "statRequirements": ["58 STR"],
      "attack": 241,
      "upgradeMaterials": ["2x Mineral Oil", "2x Copper Wire Mountain","2x M.I.L.K. Black Metal"],
      "splithiumRequired": 8000,
      "upgradeTime": "000:10",
      "durability": 1400,
      "shopCost": 7600,
      "restockTimer": "000:08"
     }]


  performFilter(filterBy: string) : IEquipment[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.equipmentList.filter((equipment: IEquipment) =>
            equipment.name.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }
  
  constructor() { }

  ngOnInit() {
    this.filteredEquipment = this.equipmentList
  }
}
