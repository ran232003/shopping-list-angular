import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
})
export class ModalComponent implements OnInit, OnChanges {
  constructor(
    private modalService: NgbModal,
    private authService: AuthService
  ) {}
  @ViewChild('mymodal') mymodal;
  @Input() wasClick: Boolean;
  checkClick: Boolean;
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    console.log(this.wasClick);
    if (this.wasClick) {
      // this.open(this.mymodal);
    }
  }

  ngOnInit(): void {
    console.log(this.wasClick, 'init');
    this.checkClick = false;
    this.authService.openModal.subscribe((modal) => {
      this.open(this.mymodal);
    });
  }
  title = 'appBootstrap';

  closeResult: string;

  open(content) {
    console.log(content);
    this.modalService
      .open(content, { ariaLabelledBy: 'modal-basic-title' })
      .result.then(
        (result) => {
          console.log('by pressing ESCsssssss');
          this.authService.logOut();

          this.closeResult = `Closed with: ${result}`;
        },
        (reason) => {
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        }
      );
  }
  openModal(event) {
    console.log('hereeee');
    this.open(this.mymodal);
  }
  private getDismissReason(reason: any): string {
    console.log('esc');
    this.wasClick = false;
    if (reason === ModalDismissReasons.ESC) {
      console.log('by pressing ESC');
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      console.log('by clicking on a backdrop');
      return 'by clicking on a backdrop';
    } else {
      console.log(`with: ${reason}`);
      return `with: ${reason}`;
    }
  }
}
