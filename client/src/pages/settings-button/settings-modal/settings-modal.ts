import * as firebase from 'firebase/app';
import 'firebase/auth';

import { Component } from '@angular/core';
import {
  ViewController,
  ToastController,
  AlertController
} from 'ionic-angular';
import { FundamentalModal } from '../../fundamental-modal';
import { State } from '../../../app/state/_state.interfaces';
import { Store } from '@ngrx/store';
import { SignOut } from '../../../app/state/auth/auth.action';
import { AngularFireFunctions } from '@angular/fire/functions';

@Component({
  templateUrl: 'settings-modal.html'
})
export class SettingsModal extends FundamentalModal {
  constructor(
    protected viewCtrl: ViewController,
    protected toastCtrl: ToastController,
    private alertCtrl: AlertController,
    private store: Store<State>,
    private afFunctions: AngularFireFunctions
  ) {
    super(viewCtrl, toastCtrl);
  }

  logout() {
    this.store.dispatch(new SignOut());
  }

  withdraw() {
    this.alertCtrl
      .create({
        title: '本当に退会しますか？',
        message: 'この操作はやり直せません。',
        buttons: [
          {
            text: '退会する',
            handler: () => {
              this.afFunctions.functions.httpsCallable('withdraw')({
                uid: (firebase.auth().currentUser as firebase.User).uid
              });
            }
          },
          {
            text: 'キャンセル',
            role: 'cancel'
          }
        ]
      })
      .present();
  }
}
