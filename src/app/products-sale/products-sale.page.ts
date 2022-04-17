import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductsSaleResolverService } from './products-sale-resolver.service';

@Component({
  selector: 'app-products-sale',
  templateUrl: './products-sale.page.html',
  styleUrls: ['./products-sale.page.scss'],
})
export class ProductsSalePage implements OnInit {

  noImage: string;
  items: Array<any>;

  constructor(
    public loadingCtrl: LoadingController, 
    private productSaleService: ProductsSaleResolverService, 
    private router: Router, 
    private route: ActivatedRoute 
  ) { }

  ngOnInit() {
    if (this.route && this.route.data) {
      this.getData();
      this.noImage = 'https://pngimage.net/wp-content/uploads/2018/05/empty-image-png-7.png';
    }
  }

  async getData(){ 
    const loading = await this.loadingCtrl.create({
      message: 'Por favor, espere...'
    });
    this.presentLoading(loading);

    this.productSaleService.getProducts().then((data) => {      
      data.subscribe(data => {
        loading.dismiss();
        this.items = data;
      })
    });

    console.log(this.items);   
    
  }

  async presentLoading(loading) {
    return await loading.present();
  }

}
