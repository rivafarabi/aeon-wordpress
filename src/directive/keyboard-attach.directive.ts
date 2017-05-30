import { Directive, ElementRef } from '@angular/core';
import { Keyboard } from '@ionic-native/keyboard';

@Directive({ selector: '[keyboard-attach]' })
export class KeyboardAttachDirective {

    constructor(
        private el:ElementRef,
        private keyboard: Keyboard
    ){}

    ngOnInit(){
        this.keyboard.onKeyboardShow().subscribe(res => {
            console.log(res);
            this.setPosition(res.keyboardHeight);
        });
        this.keyboard.onKeyboardHide().subscribe(res => this.setPosition(0));
    }

    onKeyboardShow(board){
        console.log(board);
    }

    setPosition(keyboardHeight){
        this.el.nativeElement.style.paddingBottom = keyboardHeight + 'px';
    }
}