import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import 'firebase/storage';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root'
})
export class ProductsSaleResolverService {
  private snapshotChangesSubscription: any;

  constructor(
    public afs: AngularFirestore,
    public afAuth: AngularFireAuth) { }

  getProducts(){ 
    return new Promise<any>((resolve, reject) => {      
      this.afAuth.user.subscribe(currentUser => {
        if(currentUser){
          this.snapshotChangesSubscription = this.afs.collection('users').doc("hyYQUoqo6dSx3mdKe2XfZ8SCZdS2").collection('products').snapshotChanges();
          resolve(this.snapshotChangesSubscription);
        }
      })
    })
  }
}
