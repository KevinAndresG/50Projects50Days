import {
  Component,
  ElementRef,
  ViewChildren,
  AfterViewInit,
} from '@angular/core';

@Component({
  selector: 'app-verify-account-ui',
  templateUrl: './verify-account-ui.component.html',
  styleUrls: ['./verify-account-ui.component.scss'],
})
export class VerifyAccountUiComponent implements AfterViewInit {
  @ViewChildren('campos') camposInputs!: ElementRef | any;
  campo1: string = '';
  campo2: string = '';
  campo3: string = '';
  campo4: string = '';
  campo5: string = '';
  campo6: string = '';
  input = 0;
  password: number[] = [0, 0, 0, 0, 0, 0];
  ngAfterViewInit(): void {
    this.camposInputs._results![this.input].nativeElement.focus();
  }
  onInputChange(event: any) {
    const inputLength = event.target.value.length;
    if (!isNaN(Number(event.target.value))) {
      if (inputLength > 1) {
        event.target.value = event.target.value.split('').pop();
      }
      this.input++;
      if (this.input < this.camposInputs._results.length) {
        this.camposInputs._results[this.input].nativeElement.focus();
      } else {
        this.input = this.camposInputs._results.length;
      }
      this.camposInputs._results[this.input - 1].nativeElement.classList.add(
        'full'
      );
    } else {
      event.target.value = '';
      this.camposInputs._results[this.input].nativeElement.classList.remove(
        'full'
      );
    }
  }
  onClick(i: number) {
    this.input = i;
  }
}
