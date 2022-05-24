import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'nfts2';

  constructor() { }
  srcDeBanner: any;
  cadenaDeSrc:any;
  cadenaDeSrc2:any;
  srcDeFlecha:any;
  numDeImg:any;
  numDeImg2:any;
  product:any[]=[
    {id:121,name:"sida1",url:'./../../assets/images/nft1.jpg'},
    {id:122,name:"sida2",url:'./../../assets/images/nft2.jpg'},
    {id:123,name:"sida3",url:'./../../assets/images/nft3.jpg'}]
    product2:any[]=[
      {id:121,name:"sida1",url:"./../../assets/images/nft69.png"},
      {id:122,name:"sida2",url:'./../../assets/images/nft67.png'},
      {id:124,name:"sida4",url:'./../../assets/images/nftpelorosa.png'},
      {id:125,name:"sida5",url:'./../../assets/images/nftpelorosa2.png'},
      {id:123,name:"sida3",url:'./../../assets/images/nft68.png'},
      {id:123,name:"sida3",url:'./../../assets/images/nftxd.png'},
      {id:123,name:"sida3",url:'./../../assets/images/flecha3.png'}]
  ngOnInit(): void {
    this.srcDeFlecha='./../../assets/images/flecha4.png';
    this.numDeImg=0;
    this.numDeImg2=0;
    this.cadenaDeSrc=this.product[0].url;
    this.cadenaDeSrc2=this.product2[0].url;
    console.log(this.cadenaDeSrc);
    this.srcDeBanner='./../../assets/images/banner.png';
  }

  nextImage()
{
  this.numDeImg++;
    this.cadenaDeSrc=this.product[this.numDeImg].url;
     
}

  nextImage2()
{
  this.numDeImg2++;
    
    this.cadenaDeSrc2=this.product2[this.numDeImg2].url;   
    
}
}

