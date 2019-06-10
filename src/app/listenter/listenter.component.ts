import {Component, Input, OnInit} from '@angular/core';
import { trigger, state, style, animate, transition} from '@angular/animations';

@Component({
  selector: 'app-listenter',
  templateUrl: './listenter.component.html',
  styleUrls: ['./listenter.component.css'],
  // animations: [
  //   trigger('flyInOut', [
  //     state('in', style({ color: 'green', transition: 'transform 0.5s ease-in' })),
  //     transition('void => *', [
  //       style({ transform: 'translateX(-100%)' }),
  //       animate(10000)
  //     ]),
  //     transition('* => void', [
  //       animate(10000, style({ transform: 'translateX(100%)' }))
  //     ])
  //   ])
  // ]
})
export class ListenterComponent implements OnInit {
  @Input() details: string[];
  constructor() { }

  ngOnInit() {
  }

}
