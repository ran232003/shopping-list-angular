import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() state = new EventEmitter<string>();
  constructor() { }
  headerState(event){
    console.log(event.innerHTML);
    this.state.emit(event.innerHTML)
  }
  ngOnInit(): void {
  }

}
