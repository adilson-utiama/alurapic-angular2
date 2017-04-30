import { Component, Input, OnInit, ViewEncapsulation, ElementRef } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'painel',
    templateUrl: './painel.component.html',
    styleUrls: ['./painel.component.css'],
    encapsulation: ViewEncapsulation.Emulated
})
export class PainelComponent implements OnInit {

    //inbound property 
    @Input() titulo: string;
    elemento: ElementRef;

    //Com ElementRef podemos pegar a referencia do DOM de Painel
    constructor(elemento: ElementRef) {
        this.elemento = elemento;
    }

    ngOnInit() {

        this.titulo = 
            this.titulo.length > 7 
            ? this.titulo.substr(0, 7) + '...'
            : this.titulo;
    }

    fadeOut(callback) {
        //Aqui com Jquery podemos manipular o elemento do DOM, encapsulado em elemento.nativeElement
        $(this.elemento.nativeElement).fadeOut(callback);
    }
}