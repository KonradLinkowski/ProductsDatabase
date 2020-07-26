import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appNumberInput]'
})
export class NumberInputDirective {

  constructor(private el: ElementRef) {
    this.el.nativeElement.type = 'number';
  }

  private invalidCharacters: string[] = ['+', '-', 'e', 'E'];
  private invalidRegExp = new RegExp(`[${this.invalidCharacters.join('')}]`, 'g');

  @HostListener('keydown', ['$event']) onKeyDown(e: KeyboardEvent) {
    if (this.invalidCharacters.includes(e.key)) {
      e.preventDefault();
    }
  }

  @HostListener('paste', ['$event']) onPaste(e: ClipboardEvent) {
    const value = e.clipboardData.getData('text/plain').replace(this.invalidRegExp, '');
    this.el.nativeElement.value = value;
    e.preventDefault();
  }
}