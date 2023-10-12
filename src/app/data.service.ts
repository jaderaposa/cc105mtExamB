import { Injectable } from "@angular/core";
import { Data } from "./data.model";
import { v4 as jaded } from "uuid";

@Injectable({ providedIn:'root' })
export class DataService {
    listofPosts: Data[]=[
        new Data(jaded(),'Nike Air Force 1 Big Kids Shoes','Nike','White/Pink Foam-Elemental',3495,'https://www.urbanathletics.com.ph/cdn/shop/products/CT3839-107-B_1000x.jpg?v=1676946166','Available'),
        new Data(jaded(),'Adidas Mens Forum 84 Low','Adidas','Off White/Shadow Navy/Cream White',3850,'https://media.istockphoto.com/id/1350560575/photo/pair-of-blue-running-sneakers-on-white-background-isolated.webp?b=1&s=170667a&w=0&k=20&c=liUSgX6SafJ7HWvefFqR9-pnf3KuH6v1lwQ6iEpePWc=','Out Of Stock'),
        ];
        getPost(){
            return this.listofPosts;
        }
        deleteButton(index: number){
            this.listofPosts.splice(index, 1)
        }
        addPost(data: Data){
            this.listofPosts.push(data)
        }
        updatePost(index: number, data: Data){
            this.listofPosts[index] = data
        }
        getSpecPost(index: number) {
            return this.listofPosts[index];
        }
}