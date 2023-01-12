import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
public dataArr:any =[]
  sytr: any;
  constructor(private dataserve:DataService) { }
   
  ngOnInit(): void {
    this.getdatas()
  }
getdatas(){
  this.dataserve.getdata().subscribe(res => {
this.dataArr=res.products;
console.log(this.dataArr,"************")
  })


}
addCart(data: any){
  let check = localStorage.getItem('cart')
 
  
    if (check) {
      this.sytr = JSON.parse(check)
      this.sytr.push(data)
      localStorage.setItem('cart',JSON.stringify(this.sytr))
      console.log(this.sytr)
      
    }
    else {
      let setArr: any = []
      setArr.push(data)
      localStorage.setItem('cart', JSON.stringify(setArr))
     
    }

  
}
}
