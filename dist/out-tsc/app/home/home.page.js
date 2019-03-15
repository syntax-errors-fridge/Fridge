import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { NavController } from '@ionic/angular';
var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, scanner) {
        this.navCtrl = navCtrl;
        this.scanner = scanner;
        this.encodText = '';
        this.encodedData = {};
        this.scannedData = {};
    }
    HomePage.prototype.scan = function () {
        var _this = this;
        this.options = {
            prompt: "Scan your barcode"
        };
        this.scanner.scan(this.options).then(function (data) {
            _this.scannedData = data;
        }, function (err) {
            console.log('Error :', err);
        });
    };
    HomePage.prototype.encode = function () {
        var _this = this;
        this.scanner.encode(this.scanner.Encode.TEXT_TYPE, this.encodText).then(function (data) {
            _this.encodedData = data;
        }, function (err) {
            console.log('Error :', err);
        });
    };
    HomePage = tslib_1.__decorate([
        Component({
            selector: 'app-home',
            templateUrl: 'home.page.html',
            styleUrls: ['home.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [NavController, BarcodeScanner])
    ], HomePage);
    return HomePage;
}());
export { HomePage };
//# sourceMappingURL=home.page.js.map