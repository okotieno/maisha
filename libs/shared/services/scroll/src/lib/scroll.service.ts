import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {
  smoothScrollTo = (el: string) => {
    const header = document.querySelector('#header') as HTMLDivElement
    const offset = header?.offsetHeight

    const elementPos = (document.querySelector(el) as HTMLDivElement).offsetTop
    window.scrollTo({
      top: elementPos - offset,
      behavior: 'smooth'
    })
  }
}
