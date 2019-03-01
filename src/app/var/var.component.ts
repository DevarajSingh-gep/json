import { Component, OnInit } from '@angular/core';
import { DemoService } from '../demo.service';
import { HttpClient } from 'selenium-webdriver/http';

@Component({
  selector: 'app-var',
  templateUrl: './var.component.html',
  styleUrls: ['./var.component.css']
})
export class VarComponent implements OnInit {

  name: string = 'rahul';
  jokes: any;

  constructor(private demoService: DemoService ) {
    this.jokes = [
      {
        setup: "What did the cheese say when it looked in the mirror?",
        punchline: "Hello-Me (Halloumi)"
      },
      {
        setup: "What kind of cheese do you use to disguise a small horse?",
        punchline: "Mask-a-pony (Mascarpone)"
      },
      {
        setup: "A kid threw a lump of cheddar at me",
        punchline: "I thought ‘That’s not very mature’"
      },
    ];
   }
  ngOnInit() {
    // var xhttp = new XMLHttpRequest();
    // var data: object[];
    // xhttp.onreadystatechange = function(){
    //   if(this.readyState == 4 && this.status == 200) {
    //     var res = JSON.parse(xhttp.responseText);
    //     data = res;        
    //   }
    //   xhttp.open('GET', "./assets/data/data.json", true);
    //   xhttp.send();
    // }
    // this.jokes = data;
  }

  print() {
    return 'Devaraj Singh';
  }
}
