import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service'; // importado!

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  constructor(public messageService: MessageService) { }
  // Modifique o construtor com um parâmetro que declare uma propriedade pública 
  // messageService . Angular irá injetar o singleton MessageServicenessa propriedade quando 
  //criar o HeroService.

  ngOnInit() {
  }

}
