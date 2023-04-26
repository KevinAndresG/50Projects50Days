import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-theme-clock',
  templateUrl: './theme-clock.component.html',
  styleUrls: ['./theme-clock.component.scss']
})
export class ThemeClockComponent implements OnInit {
  dark = false
  light = true
  today = new Date();
  now = this.today.toLocaleTimeString('en-US');
  time = this.now.split(':')
  nowFormat = new Date().toDateString()
  timeFormat = this.nowFormat.split(' ')
  day = this.timeFormat[0]
  month = this.timeFormat[1]
  dayNumber = this.timeFormat[2]
  amPm = ''
  hour = this.time[0]
  minute = this.time[1]
  second = ''
  secondGrades = 0
  hourGrades = 30 * parseInt(this.hour)
  minuteGrades = 6 * parseInt(this.minute)

  ngOnInit(): void {
    let add = ''
    let defTime = ''
    this.time.map(x => {
      if (x.split(' ').length >= 2) {
        add = x.split(' ').pop()!
        this.second = x.split(' ').shift()!
        this.secondGrades = 6 * parseInt(this.second);
        this.amPm = add
      }
    })
    this.time.pop()
    this.time.join(':')
    defTime = this.time.join(':') + ' ' + add
    setInterval(() => {
      if (parseInt(this.second) === 60) {
        this.second = '0'
        this.secondGrades = 0
        let m = parseInt(this.minute)
        m++
        this.minute = m.toString()
        this.minuteGrades += 6
      }
      if (parseInt(this.minute) === 60) {
        this.minute = '0'
        this.minuteGrades = 0
        let h = parseInt(this.hour)
        h++
        this.hour = h.toString()
        this.hourGrades += 6
      }
      let s = parseInt(this.second)
      s++;
      this.second = s.toString()
      this.secondGrades += 6
    }, 1000);
  }
  changeTheme() {
    this.dark = !this.dark
    this.light = !this.light
  }
}
