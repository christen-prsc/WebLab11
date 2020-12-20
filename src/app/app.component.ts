import { Component } from '@angular/core';
import { MyDets } from './shared/det.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title(title: any) {
    throw new Error("Method not implemented.")
  }
  dets: MyDets[] = [
    { id: 0, name: '1', status: getRandom() },
    { id: 1, name: '2', status: getRandom() },
    { id: 2, name: '3', status: getRandom() },
    { id: 3, name: '4', status: getRandom() },
    { id: 4, name: '5', status: getRandom() },
    { id: 5, name: '6', status: getRandom() },
    { id: 6, name: '7', status: getRandom() },
    { id: 7, name: '8', status: getRandom() },
    { id: 8, name: '9', status: getRandom() },
    { id: 9, name: '10', status: getRandom() }
  ];

  Reverse(id: number) {
    setTimeout(() => {
      this.dets[id].status = !this.dets[id].status;
    }, 500);
  }
  AddDet(det: MyDets) {
    let id = this.dets.length > 0 ? this.dets[this.dets.length-1].id +1 : 0;
    det.id = id;
    this.dets.push(det);
  }
}
function getRandom() {
  return Math.round(Math.random()) ? true : false;
}