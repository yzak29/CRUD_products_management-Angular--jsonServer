import { Component, OnInit } from '@angular/core';
import {EventDriverService} from "../../../services/event-driver.service";
import {ActionEvent} from "../../../state/product.state";

@Component({
  selector: 'app-event-compteur',
  templateUrl: './event-compteur.component.html',
  styleUrls: ['./event-compteur.component.css']
})
export class EventCompteurComponent implements OnInit {

  compteur : number=0;


  constructor(private eventDriverService : EventDriverService) { }

  ngOnInit(): void {
    this.eventDriverService.sourceEventSubjectObservable.subscribe((event:ActionEvent)=>{
      ++this.compteur
    })
  }

}
