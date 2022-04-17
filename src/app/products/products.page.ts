import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service'; 
import { LoadingController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';
import { DbService } from '../services/db.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss'],
})
export class ProductsPage implements OnInit {

  items: Array<any>;
  errorMessage: string;

  constructor(
    public loadingCtrl: LoadingController, 
    private authService: AuthService, 
    private router: Router, 
    private route: ActivatedRoute,
    private dbService: DbService 
  ) { }

  ngOnInit() {
    if (this.route && this.route.data) {
      this.getData();
    }
  }

  async getData(){ 
    const loading = await this.loadingCtrl.create({
      message: 'Por favor, espere...'
    });
    this.presentLoading(loading);

    this.route.data.subscribe(routeData => { 
      routeData['data'].subscribe(data => {
        loading.dismiss();
        this.items = data;
      })
    })
  }

  async deleteProduct(productKey){     
    await this.dbService.deleteProduct(productKey)
    .then(
      res => {
        console.log("Product deleted");
      }, err => {
        this.errorMessage = "No se pudo eliminar el producto.";
        console.log(err);
      }
    )
  } 

  async presentLoading(loading) {
    return await loading.present();
  }

  logout(){ 
    this.router.navigate(["/home"]);
    this.authService.doLogout()
    .then(res => {
      console.log("User logout");
    }, err => {
      console.log(err);
    })
  }

}