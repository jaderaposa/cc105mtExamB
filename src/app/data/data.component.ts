import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';
import { Data } from '../data.model';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent {

  constructor(private dataService: DataService, private router: Router, private actRoute: ActivatedRoute){}

  @Input() index: number = 0;
  @Input() data?: Data;


  ngOnInit(): void {
    console.log(this.data);
  }
  delete(){
    this.dataService.deleteButton(this.index);
  }
  onEdit(){
    this.router.navigate(['/edit', this.index]);
  }
}
