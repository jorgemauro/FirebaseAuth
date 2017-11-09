import { AngularFireAuth } from 'angularfire2/auth';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the CadastroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cadastro',
  templateUrl: 'cadastro.html',
})
export class CadastroPage {

  constructor(private afAuth:AngularFireAuth,public navCtrl: NavController, public navParams: NavParams) {
    
  }
  async register(email,senha){
    try{
      const result=this.afAuth.auth.createUserWithEmailAndPassword(email,senha);
      console.log(result);
    }catch(e){
      console.log(e);
    }
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad CadastroPage');
  }

}
