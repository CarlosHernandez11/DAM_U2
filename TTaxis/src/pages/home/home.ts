import { Component } from '@angular/core';
import { Facebook, NativeStorage, GooglePlus } from 'ionic-native';
import { NavController, LoadingController } from 'ionic-angular';
import { UserPage } from '../user/user';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public loadingCtrl: LoadingController) {
    
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

  doGoogleLogin(){
    let nav = this.navCtrl;
    let loading = this.loadingCtrl.create({
      content:'Espere un momento'
    });
    loading.present();
    GooglePlus.login({
      'scopes':'',
      'webClientId':'',
      'offline':true
    }).then(function(user){
      loading.dismiss();

      NativeStorage.setItem('user',{
        name:user.displayName,
        email: user.email,
        piture: user.imageUrl
      }).then(function(){
        nav.push(UserPage);
      },function(error){
        console.log(error);
      });
    },function(error){
      loading.dismiss();
    });
  }
}
