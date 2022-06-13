import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-kim',
  templateUrl: './kim.component.html',
  styleUrls: ['./kim.component.css']
})
export class KimComponent implements OnInit {

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
    {id:121,name:"sida1",url:'./../../assets/images/fondoskim/kimbase.png'},
    {id:124,name:"sida4",url:'./../../assets/images/fondoskim/kim2.png'},
    {id:125,name:"sida5",url:'./../../assets/images/fondoskim/kim3.png'},
    {id:126,name:"sida6",url:'./../../assets/images/fondoskim/kim5.png'},
    {id:125,name:"sida7",url:'./../../assets/images/fondoskim/kim7.png'},
    {id:125,name:"sida8",url:'./../../assets/images/fondoskim/kim8.png'},
  ]

    product2:any[]=[
      {id:120,name:"sida11",url:"./../../assets/images/peloskim/pelokim1.png"},
      {id:121,name:"sida12",url:"./../../assets/images/peloskim/pelokim2.png"},
      {id:122,name:"sida13",url:"./../../assets/images/peloskim/pelokim3.png"},
      
      {id:125,name:"sida5",url:'./../../assets/images/peloskim/pelokim4.png'},
      {id:127,name:"sida6",url:'./../../assets/images/peloskim/calvo.png'},
      ]

      product3:any[]=[
        {id:125,name:"sida17",url:"./../../assets/images/facialkim/nada.png"},
        {id:120,name:"sida11",url:"./../../assets/images/facialkim/carakim1.png"},
        {id:121,name:"sida12",url:"./../../assets/images/facialkim/carakim2.png"},
        {id:122,name:"sida13",url:"./../../assets/images/facialkim/carakim3.png"},
        {id:123,name:"sida14",url:"./../../assets/images/facialkim/carakim4.png"},
        {id:124,name:"sida15",url:"./../../assets/images/facialkim/carakim5.png"},
        
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
