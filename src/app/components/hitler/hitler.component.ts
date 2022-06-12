import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hitler',
  templateUrl: './hitler.component.html',
  styleUrls: ['./hitler.component.css']
})
export class HitlerComponent implements OnInit {

  title = 'nfts2';

  constructor(_router: Router) {this.router = _router; }
  router: Router;
  srcDeBanner: any;
  reload: any;
  cadenaDeSrc:any;
  cadenaDeSrc2:any;
  cadenaDeSrc3:any;
  srcDeFlecha:any;
  numDeImg:any;
  numDeImg2:any;
  numDeImg3:any;
  product:any[]=[
    {id:121,name:"sida1",url:'./../../assets/images/fondoshitler2/hitlercalvo.png'},
    {id:124,name:"sida4",url:'./../../assets/images/fondoshitler2/hitlercalvorosa.png'},
    {id:125,name:"sida5",url:'./../../assets/images/fondoshitler2/hitlercalvomagenta.png'},
    {id:126,name:"sida6",url:'./../../assets/images/fondoshitler2/hitlercalvoazul.png'},
    {id:127,name:"sida7",url:'./../../assets/images/fondoshitler2/hitlercalvoamarillo.png'},
    {id:128,name:"sida8",url:'./../../assets/images/fondoshitler2/hitlercalvoprision.png'},
    {id:129,name:"sida9",url:'./../../assets/images/fondoshitler2/hitlercalvoluis.png'},
  ]

    product2:any[]=[
      {id:120,name:"sida11",url:"./../../assets/images/pelos/verde.png"},
      {id:121,name:"sida12",url:"./../../assets/images/pelos/naranja.png"},
      {id:122,name:"sida13",url:"./../../assets/images/pelos/gris.png"},
      
      {id:125,name:"sida5",url:'./../../assets/images/nftpelorosa2.png'},
      ]

      product3:any[]=[
        {id:120,name:"sida11",url:"./../../assets/images/pelofacial/normal.png"},
        {id:121,name:"sida12",url:"./../../assets/images/pelofacial/interesante.png"},
        {id:122,name:"sida13",url:"./../../assets/images/pelofacial/gangsta.png"},
      ]
        
  ngOnInit(): void {
    this.srcDeFlecha='./../../assets/images/flecha4.png';
    this.reload = './../../assets/images/reload.png';
    this.numDeImg=0;
    this.numDeImg2=0;
    this.numDeImg3=0;
    this.cadenaDeSrc=this.product[0].url;
    this.cadenaDeSrc2=this.product2[0].url;
    this.cadenaDeSrc3=this.product3[0].url;
    console.log(this.cadenaDeSrc);
    this.srcDeBanner='./../../assets/images/banner.png';
  }

  previousImage(){

    this.numDeImg--;
    if(this.numDeImg<0){
      this.numDeImg=(this.product.length-1);
      this.cadenaDeSrc=this.product[this.numDeImg].url;
  
    }
    else{
    
      
      this.cadenaDeSrc=this.product[this.numDeImg].url;   
    }
  
  
  }
  navigateToMenu() {
    this.router.navigateByUrl('/mainmenu');
 }
  nextImage()
{
  this.numDeImg++;
  if(this.numDeImg>(this.product.length-1)){
    this.numDeImg=0;
    this.cadenaDeSrc=this.product[this.numDeImg].url;

  }
  else{
  
    
    this.cadenaDeSrc=this.product[this.numDeImg].url;   
  }
    
     
}

previousImage2(){

  this.numDeImg2--;
  if(this.numDeImg2<0){
    this.numDeImg2=(this.product2.length-1);
    this.cadenaDeSrc2=this.product2[this.numDeImg2].url;

  }
  else{
  
    
    this.cadenaDeSrc2=this.product2[this.numDeImg2].url;   
  }


}

  nextImage2()
{
  this.numDeImg2++;
  if(this.numDeImg2>(this.product2.length-1)){
    this.numDeImg2=0;
    this.cadenaDeSrc2=this.product2[this.numDeImg2].url;

  }
  else{
  
    
    this.cadenaDeSrc2=this.product2[this.numDeImg2].url;   
  }
    
}

previousImage3(){
  this.numDeImg3--;
  if(this.numDeImg3<0){
    this.numDeImg3=(this.product3.length-1);
    this.cadenaDeSrc3=this.product3[this.numDeImg3].url;

  }
  else{
  
    
    this.cadenaDeSrc3=this.product3[this.numDeImg3].url;   
  }


}

nextImage3()
{
  this.numDeImg3++;
  if(this.numDeImg3>(this.product3.length-1)){
    this.numDeImg3=0;
    this.cadenaDeSrc3=this.product3[this.numDeImg3].url;

  }
  else{
  
    
    this.cadenaDeSrc3=this.product3[this.numDeImg3].url;   
  }
}
}
