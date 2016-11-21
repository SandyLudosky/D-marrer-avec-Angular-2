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
var core_1 = require('@angular/core');
var AppComponent = (function () {
    function AppComponent() {
        this.taches = [
            { texte: 'pommes', fait: false },
            { texte: 'dentrifice', fait: false },
            { texte: 'mouchoirs', fait: false },
        ];
    }
    AppComponent.prototype.ajouterTache = function (nouvelleTache) {
        this.taches.push({ texte: nouvelleTache, fait: false });
        this.texte = '';
    };
    AppComponent.prototype.barrerListe = function (index) {
        // console.log(this.taches[index] + " acheté") 
        this.taches[index].fait = (this.taches[index].fait == false ? this.taches[index].fait = true : this.taches[index].fait = false);
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'ng-app',
            templateUrl: 'app/template.html',
            styles: ['ul li {cursor: pointer}', '.fait { text-decoration: line-through; color: #ccc }']
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map