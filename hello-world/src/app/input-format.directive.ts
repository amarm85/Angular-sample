import { Directive, HostListener, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appInputFormat]'
})
export class InputFormatDirective {
    
     constructor(private el: ElementRef ) {}
    
    @Input('appInputFormat') format;
    
    @HostListener('blur') onBlur(){
        
        if(this.format == 'lowercase')
            this.el.nativeElement.value = this.el.nativeElement.value.toLowerCase();
        else
            this.el.nativeElement.value = this.el.nativeElement.value.toUpperCase();
        
        console.log('On Blur');
    }



}
