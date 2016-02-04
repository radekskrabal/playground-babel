define(['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var _createClass = function () {
        function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || false;
                descriptor.configurable = true;
                if ("value" in descriptor) descriptor.writable = true;
                Object.defineProperty(target, descriptor.key, descriptor);
            }
        }

        return function (Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);
            if (staticProps) defineProperties(Constructor, staticProps);
            return Constructor;
        };
    }();

    var Greeter = function () {
        function Greeter(name) {
            _classCallCheck(this, Greeter);

            this.name = name;
        }

        _createClass(Greeter, [{
            key: 'greet',
            value: function greet() {
                var messages = ['Dobry den', 'Guter Tag', 'Salut'];
                var body = $('body');
                var _iteratorNormalCompletion = true;
                var _didIteratorError = false;
                var _iteratorError = undefined;

                try {
                    for (var _iterator = messages[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                        var message = _step.value;
                        body.append('<p>' + message + '</p>');
                    }
                } catch (err) {
                    _didIteratorError = true;
                    _iteratorError = err;
                } finally {
                    try {
                        if (!_iteratorNormalCompletion && _iterator.return) {
                            _iterator.return();
                        }
                    } finally {
                        if (_didIteratorError) {
                            throw _iteratorError;
                        }
                    }
                }
            }
        }]);

        return Greeter;
    }();

    exports.default = Greeter;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9HcmVldGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7UUFBcUI7Ozs7Ozs7Ozs7Ozs7Ozs7O3lDQWFPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7ZUFiUCIsImZpbGUiOiJHcmVldGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgY2xhc3MgR3JlZXRlciB7XHJcbiAgICBjb25zdHJ1Y3RvcihuYW1lKSB7XHJcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcclxuICAgIH1cclxuXHJcbiAgICBncmVldCgpIHtcclxuICAgICAgICBsZXQgbWVzc2FnZXMgPSBbXHJcbiAgICAgICAgICAgICdEb2JyeSBkZW4nLFxyXG4gICAgICAgICAgICAnR3V0ZXIgVGFnJyxcclxuICAgICAgICAgICAgJ1NhbHV0J1xyXG4gICAgICAgIF07XHJcblxyXG4gICAgICAgIGxldCBib2R5ID0gJCgnYm9keScpO1xyXG4gICAgICAgIGZvciAobGV0IG1lc3NhZ2Ugb2YgbWVzc2FnZXMpIHtcclxuICAgICAgICAgICAgYm9keS5hcHBlbmQoYDxwPiR7bWVzc2FnZX08L3A+YClcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXX0=