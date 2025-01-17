import { Component, OnInit } from "@angular/core";
import { ModalFunctions } from "../common/modal-functions";
import { EventsData } from "../data/events-data";
declare var $:any;

@Component({
  selector: "app-resources",
  templateUrl: "./resources.component.html",
  styleUrls: ["./resources.component.scss"],
})
export class ResourcesComponent implements OnInit {
  topevents = [];
  pastevents = [];
  currentPDFs = [];
  currentPPTs = [];
  currentIMGs = [];
  currentEvent: {
    topic:'',
    date:'',
    speakers:[],
    desc:'',
    thumbnail:''
  };
  constructor(public modal: ModalFunctions, public eventsData: EventsData) {}

  ngOnInit() {
    this.topevents = this.eventsData.topEvents;
    this.pastevents = this.eventsData.pastEvents;
    //console.log(this.pastevents);
   
  }

  showEvent(currevent) {
    this.currentEvent = currevent;
    console.log(this.currentEvent);
    this.splitFiles();
    this.modal.openModal("#eventModal");
  }
 
  splitFiles(){
    this.currentPDFs = [];
    this.currentPPTs = [];
    this.currentIMGs = [];
    this.currentEvent['files'].forEach(element => {
      if(element.type == 'pdf'){
        this.currentPDFs.push(element);
      }
      else if(element.type == 'ppt'){
        this.currentPPTs.push(element);
      }
      else if(element.type == 'img')
      {
        this.currentIMGs.push(element);
      }
    });
    //console.log(this.currentPDFs,this.currentPPTs);
  }

  
}
