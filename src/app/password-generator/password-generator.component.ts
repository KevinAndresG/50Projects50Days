import { Component } from '@angular/core';
import { faClipboard } from '@fortawesome/free-regular-svg-icons';
@Component({
  selector: 'app-password-generator',
  templateUrl: './password-generator.component.html',
  styleUrls: ['./password-generator.component.scss'],
})
export class PasswordGeneratorComponent {
  faClipboard = faClipboard;
  passwordSize = 20;
  lowerCase = true;
  upperCase = true;
  num = true;
  sym = true;
  password = '';
  lower = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
  ];
  upper = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z',
  ];
  numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  symbols = [
    '|',
    '°',
    '!',
    '"',
    '#',
    '$',
    '%',
    '&',
    '/',
    '(',
    ')',
    '=',
    ',',
    ';',
    ':',
    '.',
    '-',
    '_',
    '?',
    '¿',
    '¡',
    '+',
    '*',
    '{',
    '[',
    '}',
    ']',
    '^',
    '~',
  ];
  randomPassword() {
    let times = 0;
    let i = 0;
    this.password = '';
    while (i < this.passwordSize / 4) {
      i++;
      if (this.lowerCase && times < this.passwordSize) {
        this.password +=
          this.lower[Math.floor(Math.random() * this.lower.length)];
        times++;
      }
      if (this.upperCase && times < this.passwordSize) {
        this.password +=
          this.upper[Math.floor(Math.random() * this.upper.length)];
        times++;
      }
      if (this.num && times < this.passwordSize) {
        this.password +=
          this.numbers[Math.floor(Math.random() * this.numbers.length)];
        times++;
      }
      if (this.sym && times < this.passwordSize) {
        this.password +=
          this.symbols[Math.floor(Math.random() * this.symbols.length)];
        times++;
      }
      if (times < this.passwordSize) {
        i--;
      }
    }
  }
  copyToClipboard() {
    if (this.password) {
      navigator.clipboard.writeText(this.password).then(
        function () {
          alert('Password Copied To ClipBoard');
        },
        function () {
          alert('Password Not Copied To ClipBoard');
        }
      );
      this.password = '';
    }
  }
}
