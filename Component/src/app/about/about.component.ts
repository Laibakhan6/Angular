import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
message: string = "hello world";
num_1:number = 10;
num_2:number = 40;

onchange(value:string)
{
  this.message =value;
}
updatemessage(){
  this.message = "updated message";
}
}

