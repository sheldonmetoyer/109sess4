import { Injectable } from '@angular/core';
import { Post } from '../models/post';
import { Observable } from 'rxjs';
import { AngularFirestoreCollection, AngularFirestore } from 'angularfire2/firestore';
import { Friend } from '../models/friend';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  posts: Observable<Post[]>;
  postCollection: AngularFirestoreCollection<Post>;

  friends: Observable<Friend[]>;
  friendCollection: AngularFirestoreCollection<Friend>;

  constructor(private fb: AngularFirestore) {
    this.postCollection = fb.collection<Post>("posts"); // opening the pipeline
    this.friendCollection = fb.collection<Friend>("friends");


    //read posts from DB
    this.posts = this.postCollection.valueChanges();

    this.friends = this.friendCollection.valueChanges();
  }

  public saveFriend(friend){
    var item = Object.assign({}, friend);
    this.friendCollection.add(item);
  }

  public getAllFriends(){
    return this.friends;
  }

  public savePost(post){
    var item = Object.assign({}, post);
    this.postCollection.add(item);
  }

  public getAllPosts() {
    return this.posts; //return the observable array

  }
}
