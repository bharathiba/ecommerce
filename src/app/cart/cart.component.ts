import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
product :any = []
products :any =[]
  deleteData: any;
  deleteData1: any;
  grandTotal:any
  qty:number=1
  constructor(
  ) { }

  ngOnInit(): void {
  this.getData()
  this.totel() 
  }
getData() {
 this.product = localStorage.getItem('cart')
 this.products = JSON.parse(this.product)

  this.products.forEach((x :any) =>{
    x.qty = 1;
  })

}
delete(i:any) {
  let del = confirm('Are sure to remove this item?')
  if (del) {
    this.deleteData = localStorage.getItem('cart')
    this.deleteData1 = JSON.parse(this.deleteData)
    this.deleteData1.splice(i, 1)
    localStorage.setItem('cart', JSON.stringify(this.deleteData1))
    this.getData()
    this.totel() 

  }
  else { return }

}

plus(_i:any) {
  
  let value = this.products[_i].qty
 value++
 this.products[_i].qty =value
 this.totel()
}
minus(_i:any) {

  let value = this.products[_i].qty
  value--
  this.products[_i].qty =(value <1)?1:value;
 this.totel()
}
totel() {
  let total = 0
  this.products.forEach((a:any) =>{
    total+=(a.price*a.qty)
  })
  this.grandTotal =total
}
}
