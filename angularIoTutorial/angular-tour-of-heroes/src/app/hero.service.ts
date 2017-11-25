import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';

import { Observable } from 'rxjs/Observable'; //observable!
import { of } from 'rxjs/observable/of'; //observable!
import { MessageService } from './message.service';



@Injectable()
export class HeroService {

	constructor(private messageService: MessageService) { } // adicionado!

	getHeroes(): Observable<Hero[]> {
	  // o getHeroesmétodo envia uma mensagem quando os heróis forem obtidos!
	  this.messageService.add('HeroService: mensagem de serviço teste - quanto o retorno for obtido com sucesso.');
	  return of(HEROES);
	}





}  // end class
