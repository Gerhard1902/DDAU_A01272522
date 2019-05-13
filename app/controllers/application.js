import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';


export default class ApplicationController extends Controller {
	@tracked numbers=[1,2,3,4,5];

	@action prime(n){
		if (n <=0)
			return false;
		let divisibles=0, i=1;
		
		for(;i<=n;i++){
			if (n%i===0){
				console.log("arrived"+ i);
				divisibles++;	
				}			
			}
		
		if (divisibles==2 || divisibles==1)
		{
			alert("Es primo");
			return true
		}
		else
		{
			alert("No es primo");
			return false
		}
	}

	@action odd(n){
		alert(n%2==0);
		if (n%2==0)
			return true;
		else
			return false;

	}

	@action pow(n){
		alert(n*n);
		return n*n;
	}

}
