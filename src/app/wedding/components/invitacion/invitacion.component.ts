import { Component, OnInit } from '@angular/core';
import { timer } from 'rxjs';
const counter = timer(0, 1000);
@Component({
  selector: 'wedding-invitacion',
  templateUrl: './invitacion.component.html',
  styleUrls: ['./invitacion.component.css'],
})
export class InvitacionComponent implements OnInit {
  ngOnInit(): void {
    const targetDate = new Date('2024-05-25 17:00:00');

    function getTimeSegmentElements(segmentElement: any) {
      const segmentDisplay = segmentElement.querySelector('.segment-display');
      const segmentDisplayTop = segmentDisplay.querySelector(
        '.segment-display__top'
      );
      const segmentDisplayBottom = segmentDisplay.querySelector(
        '.segment-display__bottom'
      );

      const segmentOverlay = segmentDisplay.querySelector('.segment-overlay');
      const segmentOverlayTop = segmentOverlay.querySelector(
        '.segment-overlay__top'
      );
      const segmentOverlayBottom = segmentOverlay.querySelector(
        '.segment-overlay__bottom'
      );

      return {
        segmentDisplayTop,
        segmentDisplayBottom,
        segmentOverlay,
        segmentOverlayTop,
        segmentOverlayBottom,
      };
    }

    function updateSegmentValues(
      displayElement: any,
      overlayElement: any,
      value: any
    ) {
      displayElement.textContent = value;
      overlayElement.textContent = value;
    }

    function updateTimeSegment(segmentElement: any, timeValue: any) {
      const segmentElements = getTimeSegmentElements(segmentElement);

      if (
        parseInt(segmentElements.segmentDisplayTop.textContent, 10) ===
        timeValue
      ) {
        return;
      }

      segmentElements.segmentOverlay.classList.add('flip');

      updateSegmentValues(
        segmentElements.segmentDisplayTop,
        segmentElements.segmentOverlayBottom,
        timeValue
      );

      function finishAnimation() {
        segmentElements.segmentOverlay.classList.remove('flip');
        updateSegmentValues(
          segmentElements.segmentDisplayBottom,
          segmentElements.segmentOverlayTop,
          timeValue
        );

        removeEventListener('animationend', finishAnimation);
      }

      segmentElements.segmentOverlay.addEventListener(
        'animationend',
        finishAnimation
      );
    }

    function updateTimeSection(sectionID: any, timeValue: any) {
      const firstNumber = Math.floor(timeValue / 10) || 0;
      const secondNumber = timeValue % 10 || 0;
      const sectionElement = document.getElementById(sectionID);
      const timeSegments = sectionElement!.querySelectorAll('.time-segment');

      updateTimeSegment(timeSegments[0], firstNumber);
      updateTimeSegment(timeSegments[1], secondNumber);
    }

    function getTimeRemaining(targetDateTime: any) {
      let seconds = 0;
      let minutes = 0;
      let hours = 0;
      let days = 0;
      const nowTime = new Date();
      const complete = nowTime >= targetDateTime;

      if (complete) {
        return {
          complete,
          seconds: 0,
          minutes: 0,
          hours: 0,
          days: 0,
        };
      }

      seconds =
        Math.abs(
          Date.UTC(
            targetDateTime.getFullYear(),
            targetDateTime.getMonth(),
            targetDateTime.getDate(),
            targetDateTime.getHours(),
            targetDateTime.getMinutes(),
            targetDateTime.getSeconds()
          ) -
            Date.UTC(
              nowTime.getFullYear(),
              nowTime.getMonth(),
              nowTime.getDate(),
              nowTime.getHours(),
              nowTime.getMinutes(),
              nowTime.getSeconds()
            )
        ) / 1000;

      minutes = Math.floor(seconds / 60);
      hours = Math.floor(minutes / 60);
      days = Math.floor(hours / 24);

      hours = hours - days * 24;
      minutes = minutes - days * 24 * 60 - hours * 60;
      seconds = seconds - days * 24 * 60 * 60 - hours * 60 * 60 - minutes * 60;

      return {
        complete,
        seconds,
        minutes,
        hours,
        days,
      };
    }

    function updateAllSegments() {
      const timeRemainingBits = getTimeRemaining(targetDate);

      updateTimeSection('seconds', timeRemainingBits.seconds);
      updateTimeSection('minutes', timeRemainingBits.minutes);
      updateTimeSection('hours', timeRemainingBits.hours);
      updateTimeSection('days', timeRemainingBits.days);

      return timeRemainingBits.complete;
    }

    const countdownTimer = setInterval(() => {
      const isComplete = updateAllSegments();

      if (isComplete) {
        clearInterval(countdownTimer);
      }
    }, 1000);

    updateAllSegments();
  }

  // public date = new Date();
  // public delta: number = 0;
  // public dateSent = new Date('2024-05-25 17:00:00');
  // public hour: number | string = '';
  // public minute: number | string = '';
  // public second: number | string = '';
  // public days: number | string = '';

  // ngOnInit(): void {
  // 	counter.subscribe(() => {
  // 		this.time();
  // 	});
  // }
  // public time() {
  // 	this.date = new Date();

  // 	this.second =
  // 		Math.abs(
  // 			Date.UTC(this.dateSent.getFullYear(), this.dateSent.getMonth(), this.dateSent.getDate(), this.dateSent.getHours(), this.dateSent.getMinutes(), this.dateSent.getSeconds()) -
  // 				Date.UTC(this.date.getFullYear(), this.date.getMonth(), this.date.getDate(), this.date.getHours(), this.date.getMinutes(), this.date.getSeconds())
  // 		) / 1000;

  // 	this.minute = Math.floor(this.second / 60);
  // 	this.hour = Math.floor(this.minute / 60);
  // 	this.days = Math.floor(this.hour / 24);

  // 	this.hour = this.hour - this.days * 24;
  // 	this.minute = this.minute - this.days * 24 * 60 - this.hour * 60;
  // 	this.second = this.second - this.days * 24 * 60 * 60 - this.hour * 60 * 60 - this.minute * 60;

  // 	if (this.second < 10) {
  // 		this.second = '0' + this.second;
  // 	}
  // 	if (this.minute < 0) {
  // 		this.minute = '0' + this.minute;
  // 	}

  // }
}
