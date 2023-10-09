import { Injectable } from "@angular/core";
import { Data } from "./data.model";


@Injectable({ providedIn:'root' })
export class DataService {
    listofPosts: Data[]=[
        new Data('12321321','Jaded','Jordans','Red',2,'https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8fDA%3D&w=1000&q=80','available'),
        new Data('21412511','Jaded2','Bench','Black',5,'https://media.istockphoto.com/id/1350560575/photo/pair-of-blue-running-sneakers-on-white-background-isolated.webp?b=1&s=170667a&w=0&k=20&c=liUSgX6SafJ7HWvefFqR9-pnf3KuH6v1lwQ6iEpePWc=','out-of-stock'),
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