import { Component } from '@angular/core';
import { Post } from '../models/post';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  model = new Post();

  constructor(private data: DataService) {

  }

  sendPost(){
    this.model.createdOn = new Date(); //set this time
    console.log("Saving post", this.model);

    //save the obj
    this.data.savePost(this.model);

    //create new model (clear form)
    this.model = new Post();
  }

}
