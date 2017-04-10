import { Component } from '@angular/core';



@Component({
  selector: 'my-app',
  template: `
  	<nav class="navbar navbar-light bg-faded fixed-top">
	  	<a class="navbar-brand">
	   	    <img src="/assets/brand/bootstrap-solid.svg" width="30" height="30" class="d-inline-block align-top" alt="">
	    	Pick Me

	    	<span class="fa fa-shopping-cart shopping-cart" aria-hidden="true" [routerLink]="['/cart']"></span>
	  	</a> 		
	</nav>

	<div class="container">
	 	<router-outlet></router-outlet>
	</div>`  
})

export class AppComponent  {  }
