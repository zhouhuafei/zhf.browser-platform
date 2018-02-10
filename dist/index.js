'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

(function (name, factory) {
    if ((typeof exports === 'undefined' ? 'undefined' : _typeof(exports)) === 'object' && typeof module !== 'undefined') {
        // nodejs - commonjs canon
        module.exports = factory();
    } else if (typeof define === 'function' && define.amd) {
        // requirejs - amd canon
        define(factory);
    } else if (window) {
        // window - browser canon
        if (Object.prototype.toString.call(window.zhf).slice(8, -1).toLowerCase() !== 'Object') {
            window.zhf = {};
        }
        window.zhf[name] = factory();
    }
})('browserPlatform', function () {
    function _isPc() {
        var userAgentInfo = navigator.userAgent;
        var Agents = ['Android', 'iPhone', 'SymbianOS', 'Windows Phone', 'iPad', 'iPod'];
        var flag = true;
        for (var v = 0; v < Agents.length; v++) {
            if (userAgentInfo.indexOf(Agents[v]) > 0) {
                flag = false;
                break;
            }
        }
        return flag;
    }

    return {
        isPc: function isPc() {
            return _isPc();
        },
        isH5: function isH5() {
            return !_isPc();
        },
        isWeiXin: function isWeiXin() {
            return navigator.userAgent.toLowerCase().match(/MicroMessenger/ig);
        },
        isAndroid: function isAndroid() {
            return window.navigator.appVersion.match(/android/ig);
        },
        isIos: function isIos() {
            return window.navigator.appVersion.match(/iphone/ig);
        }
    };
});