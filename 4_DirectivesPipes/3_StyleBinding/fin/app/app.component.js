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
var Langage = (function () {
    function Langage() {
    }
    return Langage;
}());
var LANGAGES = [
    { id: 2, nom: 'javascript', interested: false },
    { id: 3, nom: 'rails', interested: false },
    { id: 4, nom: 'python', interested: false },
    { id: 5, nom: 'swift', interested: false },
    { id: 6, nom: 'java', interested: false },
    { id: 7, nom: 'c++', interested: false },
    { id: 8, nom: 'php', interested: false },
    { id: 9, nom: 'golang', interested: false }
];
var AppComponent = (function () {
    function AppComponent() {
        this.langages = LANGAGES;
    }
    AppComponent.prototype.surligner = function (index) {
        this.langages[index].interested = (this.langages[index].interested == false ? this.langages[index].interested = true : this.langages[index].interested = false);
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'ng-app',
            templateUrl: 'app/template.html',
            styles: ['ul li {list-style-type: none}', '.surligner {background: yellow}']
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map