import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { Facebook, NativeStorage } from 'ionic-native';
import { UserPage } from '../user/user';
import { FirebaseListObservable, AngularFireDatabase } from 'angularfire2';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  listado: FirebaseListObservable<any>;
  constructor(public navCtrl: NavController, public database: AngularFireDatabase) {
    
  }
  

  doFbLogin(){
    let permissions = new Array();
    let nav = this.navCtrl;
    let env = this;

    permissions= ["public_profile"];
    Facebook.login(permissions).then(function(response){
      let userId = response.authResponse.userID;
      let params = new Array();
      Facebook.api("/me?fields=name,gender",params).then(function(user){
          user.picture="https://graph.facebook.com/"+userId+"/piture?type=large";
          NativeStorage.setItem('user',{
            name: user.name,
            gender: user.gender,
            picture: user.picture
          }).then(function(){
            nav.push(UserPage);
          },function(error){
            console.log(JSON.stringify(error));
          });
      },function(error){
        console.log(JSON.stringify(error));
      });
    },function(error){
      console.log(JSON.stringify(error));
    });
  }
}
