import { Component } from '@angular/core';
import { faComment } from '@fortawesome/free-regular-svg-icons';
import {
  faChevronDown,
  faCircleXmark,
} from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-faq-collapse',
  templateUrl: './faq-collapse.component.html',
  styleUrls: ['./faq-collapse.component.scss'],
})
export class FaqCollapseComponent {
  faComment = faComment;
  faChevronDown = faChevronDown;
  faCircleXmark = faCircleXmark;
  card: number[] = [0];
  open = false;
  questionsArray: string[] = [
    "Why shouldn't we trust atoms?",
    'What do you call someone with no body and no nose?',
    "What's the object-oriented way to become wealthy?",
    'How many tickles does it take to tickle an octopus?',
    'What is: 1 + 1?',
  ];
  answersArray: string[] = [
    'They make up everything',
    'Nobody knows.',
    'Inheritance',
    'Ten-tickles!',
    'Depends on who are you asking.',
  ];
  openCard(e: Event, i: number) {
    e.preventDefault();
    this.open = true;
    if (!this.card.includes(i)) {
      this.card.push(i);
    }
  }
  closeCard(e: Event, i: any) {
    e.preventDefault();
    this.open = false;
    const n = this.card.indexOf(i);
    this.card.splice(n, 1);
  }
}
