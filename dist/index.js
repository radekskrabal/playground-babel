define(['./Greeter'], function (_Greeter) {
    'use strict';

    var _Greeter2 = _interopRequireDefault(_Greeter);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    $(document).ready(function () {
        var greeter = new _Greeter2.default('John');
        greeter.greet();
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbXX0=