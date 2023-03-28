import {Directive, ElementRef, HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  @HostBinding('class.open') isOpen = false;

  constructor(private elRef: ElementRef) { }

  // @HostListener('click')
  @HostListener('click', ['$event'])
  toggleOpen(event: Event) {
    console.log('WHY WONT THIS WORK', this.elRef)
    this.isOpen = this.elRef.nativeElement.contains(event.target) ? !this.isOpen : false;
    // this.isOpen = !this.isOpen;
  }

}
