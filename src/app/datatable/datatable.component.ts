import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Data } from '../data.model';

@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.css']
})
export class DatatableComponent implements OnInit {

  listofPosts: Data []=[];
  constructor(
    private dataService: DataService
  ) {}
  

  ngOnInit(): void{
    this.listofPosts=this.dataService.getPost();
  }
}
