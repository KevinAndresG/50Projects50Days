import { Component, OnInit } from '@angular/core';
import { faEdit, faTrashCan, faSave } from '@fortawesome/free-regular-svg-icons';
@Component({
  selector: 'app-notes-app',
  templateUrl: './notes-app.component.html',
  styleUrls: ['./notes-app.component.scss']
})
export class NotesAppComponent implements OnInit {
  notes: { disabled: boolean, value: string }[] = []
  faEdit = faEdit
  faTrashCan = faTrashCan
  faSave = faSave
  editing = true
  actual: number[] = []
  ngOnInit(): void {
    if (localStorage.getItem('notes')) {
      let n = localStorage.getItem('notes');
      let m: { disabled: boolean, value: string }[] = JSON.parse(n!);
      this.notes = m
      this.notes.forEach((note, i) => {
        if (note.value === "") {
          this.notes.splice(i, 1)
        }
      });
      localStorage.setItem('notes', JSON.stringify(this.notes));
    }
  }
  addNote() {
    this.notes.push({ disabled: false, value: '' })
  }
  deleteNote(i: number) {
    this.notes.splice(i, 1)
    localStorage.setItem('notes', JSON.stringify(this.notes));
  }
  disableText(i: number) {
    this.notes[i].disabled = !this.notes[i].disabled
    if (this.actual.includes(i)) {
      this.actual.splice(this.actual.indexOf(i), 1)
    } else {
      this.actual.push(i)
    }
    this.editing = !this.editing
  }
  saveNote() {
    localStorage.setItem('notes', JSON.stringify(this.notes));
  }
}
