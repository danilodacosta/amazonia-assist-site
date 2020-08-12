import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.less']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

   goHeader() {
      //$('html, body').animate({scrollTop:0}, 'slow');
      $('html,body').scrollTop(0);
   }

}
