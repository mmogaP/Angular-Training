import { Component, EventEmitter, Input, Output, ChangeDetectionStrategy } from '@angular/core';
import { City } from '../service/data.service';

@Component({
  selector: 'app-form-new-item',
  templateUrl: './form-new-item.component.html',
  styleUrls: ['./form-new-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormNewItemComponent{
  @Input() label!: string;
  @Input() className = 'btn-primary';
  @Input() selection!: City;

  @Output() newItemEvent = new EventEmitter<string>();
  @Output() updateItemEvent = new EventEmitter<City>();

  onAddNewItem(item: string): void {
    this.newItemEvent.emit(item);
  }  

  onUpdateNewItem(item: City, change: string): void {
    const city: City = {
      _id: item._id,
      name: change
    };

    this.updateItemEvent.emit(city);
  }  


}
