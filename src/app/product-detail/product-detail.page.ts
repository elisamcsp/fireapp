import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service'; 
import { LoadingController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';
import { DbService } from '../services/db.service';


@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.page.html',
  styleUrls: ['./product-detail.page.scss'],
})
export class ProductDetailPage implements OnInit {
  productKey: string;
  product: any;
  noImage: string;

  constructor(
    private activateRouter: ActivatedRoute,
    private dbServicie : DbService 
  ) { }

  ngOnInit() {   
    this.noImage = 'https://pngimage.net/wp-content/uploads/2018/05/empty-image-png-7.png';
    this.productKey = this.activateRouter.snapshot.paramMap.get("key");     
    this.dbServicie.getProduct(this.productKey).then((data)=>{
      this.product = data;
    })    
  }
}
