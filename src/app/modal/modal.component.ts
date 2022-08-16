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
    if (this.wasClick) {
      // this.open(this.mymodal);
    }
  }

  ngOnInit(): void {
    this.checkClick = false;
    this.authService.openModal.subscribe((modal) => {
      this.open(this.mymodal);
    });
  }
  title = 'appBootstrap';

  closeResult: string;

  open(content) {
    this.modalService
      .open(content, { ariaLabelledBy: 'modal-basic-title' })
      .result.then(
        (result) => {
          this.authService.logOut();

          this.closeResult = `Closed with: ${result}`;
        },
        (reason) => {
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        }
      );
  }
  openModal(event) {
    this.open(this.mymodal);
  }
  private getDismissReason(reason: any): string {
    this.wasClick = false;
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
}
