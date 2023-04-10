import { NgClass } from '@angular/common';
import { Component, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnChanges, OnInit, OnDestroy{
  cities = ['Barcelona', 'Madrid', 'Lima', 'Quito'];
  name!: string;
  selection!: string;

  title = 'Día 4 del reto';
  url = 'https://lh3.googleusercontent.com/CN8n-PRqK3TiLPkzwh0FJ9Uv2j54gpdPuf7T6gTlL8B7BR7ZFGA14X0ZNGBB6ORU9HDTLwgd2atO3MPLNPAQ15rk=w640-h400-e365-rj-sc0x00ffffff'

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges', changes);
  }

  ngOnInit(): void {
    console.log('ngOnInit');
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy');
  }

  onCityClicked(city: string): void {
    console.log('City ->', city);
    this.selection = city;
  }

  onClear(): void {
    this.selection = '';
  }

}


