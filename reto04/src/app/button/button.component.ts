import { Component, Input, OnInit, OnChanges, OnDestroy, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-button',
  template: `<button [ngStyle]="{'background-color': color ,'color': 'white'}">{{label}}</button>`,
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnChanges, OnInit, OnDestroy{
  @Input() color!: string;
  @Input() label!: string;
  @Input() selection!: string;


  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('Changes ->', changes);
  }
  ngOnDestroy(): void {
    console.log('OnDestroy')
  }

  ngOnInit(): void {
    console.log('OnInit')
  }

}
