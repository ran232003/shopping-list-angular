import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-my-input',
  templateUrl: './my-input.component.html',
  styleUrls: ['./my-input.component.css'],
})
export class MyInputComponent implements OnInit, OnChanges {
  @Input() lable: String;
  @Input() message: String;
  @Input() placeHolder: String;
  @Input() type: String;
  @Input() name: String;
  @Output() valueChange = new EventEmitter<{}>();
  valueChange3 = new Subject<{}>();
  value: String = '';
  constructor() {}
  ngOnChanges(changes: SimpleChanges): void {
    console.log('Method not implemented.');
  }

  ngOnInit(): void {}
  onChange() {
    this.valueChange.emit({ name: this.name, value: this.value });
    console.log(this.value, 'asd');
  }
}
