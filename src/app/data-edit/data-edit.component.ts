import { Component } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { DataService } from '../data.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Data } from '../data.model';
import { v4 as uuid } from 'uuid';

@Component({
  selector: 'app-data-edit',
  templateUrl: './data-edit.component.html',
  styleUrls: ['./data-edit.component.css']
})
export class DataEditComponent {

  form!: FormGroup;
  index: number = 0;
  editMode = false;
  constructor(private dataService: DataService, private router: Router, private actRoute: ActivatedRoute) {
  }

  ngOnInit(): void {

    let editId = uuid();
    let editName = '';
    let editBrand = '';
    let editColor = '';
    let editPrice = NaN;
    let editImage = '';
    let editStatus = '';


    this.actRoute.params.subscribe((params: Params) => {
        if(params['index']) {
          console.log(params['index']);
          this.index = params['index'];

        const editPost = this.dataService.getSpecPost(this.index);

        editId = editPost.id;
        editName = editPost.name;
        editBrand = editPost.brand;
        editColor = editPost.color;
        editPrice = editPost.price;
        editImage = editPost.image;
        editStatus = editPost.status;

        this.editMode =true;
        }
      }
    )

    this.form = new FormGroup({
      id : new FormControl(editId, [Validators.required]),
      name: new FormControl(editName, [Validators.required]),
      brand: new FormControl(editBrand, [Validators.required]),
      color: new FormControl(editColor, [Validators.required]),
      price: new FormControl(editPrice, [Validators.required]),
      image: new FormControl(editImage, [Validators.required]),
      status: new FormControl(editStatus, [Validators.required])
    });
  }

  onSubmit() {
    if (this.form.valid) {
      const id = this.form.value.id;
      const name = this.form.value.name;
      const brand = this.form.value.brand;
      const color = this.form.value.color;
      const price = this.form.value.price;
      const image = this.form.value.image;
      const status = this.form.value.status;


      const data: Data = new Data(id, name, brand, color , price, image, status
      );

    if(this.editMode){
      this.dataService.updatePost(this.index, data) //uni man maga update//
    }
    else{
      this.dataService.addPost(data) //maga add digdi//
    }

   

    this.router.navigate(['/table']);
    } else {
      // Handle form validation errors
    }

  }
}
