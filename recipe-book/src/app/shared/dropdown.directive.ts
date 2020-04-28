import { Directive, HostListener, HostBinding, ElementRef } from '@angular/core'

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  isOpen = false

  @HostListener('click') toggleOpen() {
    this.isOpen = !this.isOpen
    
    if (this.isOpen) {
      this.elRef.nativeElement.querySelector('.dropdown-menu').classList.add('show')
    } else {
      this.elRef.nativeElement.querySelector('.dropdown-menu').classList.remove('show')
    }
  }
  constructor(private elRef: ElementRef) {}
}