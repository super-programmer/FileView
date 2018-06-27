'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /*文件预览主入口 */


var _tipl = require('src/tipl');

var _tipl2 = _interopRequireDefault(_tipl);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var FileView = function () {
    function FileView(el, options) {
        _classCallCheck(this, FileView);

        this.options = options || {};
        this.el = el || ''; //绑定元素即预览box
        this.srcollbox = ''; //自定义滚动条框
        this.srcollbar = ''; //自定义滚动条
        this.init();
    }

    /*初始化*/

    _createClass(FileView, [{
        key: 'init',
        value: function init() {
            this.el.append($(_tipl2.default));
        }
    }]);

    return FileView;
}();

exports.default = FileView;