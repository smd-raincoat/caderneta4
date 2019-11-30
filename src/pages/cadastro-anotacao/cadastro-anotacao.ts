import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ViagemPage} from '../viagem/viagem';

/**
 * Generated class for the CadastroAnotacaoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cadastro-anotacao',
  templateUrl: 'cadastro-anotacao.html',
})
export class CadastroAnotacaoPage {

  [x: string]: any;
  
  public cadastroForm = {
    titulo:"",
    data:"",
    hora:"",
    coordenadaX:"",
    coordenadaY:"",
    altitude:"",
    texto:"",
    imagem:""
  }

  public viagens: any;
  
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.cadastroForm = {
      titulo:"",
      data:"",
      hora:"",
      coordenadaX:"",
      coordenadaY:"",
      altitude:"",
      texto:"",
      imagem:"",
    }
    this.viagens = localStorage.getItem('viagens');
    
  }
  setData(data: string, hora: string, coordenadas: string, texto: string, titulo:string, coordenadaX: string, coordenadaY:string, altitude: string){
    let cadastroForm = {
      titulo:"",
      data:"",
      hora:"",
      coordenadaX:"",
      coordenadaY:"",
      altitude:"",
      texto:"",
      imagem:"",
    } 
    cadastroForm.titulo = titulo;
    cadastroForm.data = data;
    cadastroForm.hora = hora;
    cadastroForm.coordenadaX = coordenadaX;
    cadastroForm.coordenadaY = coordenadaY;
    cadastroForm.altitude = altitude;
    cadastroForm.texto = texto;

  }
  logForm(){
    this.viagens = localStorage.getItem('viagens');
    this.viagens = JSON.parse(this.viagens);
    this.viagens[localStorage.getItem("indexViagem")].anotacoes.push(this.cadastroForm);
    localStorage.setItem("viagens",JSON.stringify(this.viagens));
  }
  getData(){
    return localStorage.getItem("viagens");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CadastroAnotacaoPage');
  }

  goViagem(){
    this.navCtrl.pop();
  }

}
