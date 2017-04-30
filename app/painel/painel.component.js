"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var PainelComponent = (function () {
    //Com ElementRef podemos pegar a referencia do DOM de Painel
    function PainelComponent(elemento) {
        this.elemento = elemento;
    }
    PainelComponent.prototype.ngOnInit = function () {
        this.titulo =
            this.titulo.length > 7
                ? this.titulo.substr(0, 7) + '...'
                : this.titulo;
    };
    PainelComponent.prototype.fadeOut = function (callback) {
        //Aqui com Jquery podemos manipular o elemento do DOM, encapsulado em elemento.nativeElement
        $(this.elemento.nativeElement).fadeOut(callback);
    };
    return PainelComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], PainelComponent.prototype, "titulo", void 0);
PainelComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'painel',
        templateUrl: './painel.component.html',
        styleUrls: ['./painel.component.css'],
        encapsulation: core_1.ViewEncapsulation.Emulated
    }),
    __metadata("design:paramtypes", [core_1.ElementRef])
], PainelComponent);
exports.PainelComponent = PainelComponent;
//# sourceMappingURL=painel.component.js.map