"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

exports.verify = verify;

/**
 *
 * A positive atom is represented by a positive number.
 * A negative atom is represented by a negative number.
 *
 * @param {Array} formula an array of length-2 array clauses
 * @param {Array} assignment an array in {0,1}^n
 *
 */

function verify(formula, assignment) {
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {

    for (var _iterator = formula[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var _ref = _step.value;

      var _ref2 = _slicedToArray(_ref, 2);

      var a = _ref2[0];
      var b = _ref2[1];


      if (assigment[variable(a)] !== value(a) && assigment[variable(b)] !== value(b)) return false;
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

  return true;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy92ZXJpZnkuanMiXSwibmFtZXMiOlsidmVyaWZ5IiwiZm9ybXVsYSIsImFzc2lnbm1lbnQiLCJhIiwiYiIsImFzc2lnbWVudCIsInZhcmlhYmxlIiwidmFsdWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O1FBV2dCQSxNLEdBQUFBLE07O0FBVmhCOzs7Ozs7Ozs7O0FBVU8sU0FBU0EsTUFBVCxDQUFrQkMsT0FBbEIsRUFBNEJDLFVBQTVCLEVBQXlDO0FBQUE7QUFBQTtBQUFBOztBQUFBOztBQUUvQyx5QkFBdUJELE9BQXZCLDhIQUFpQztBQUFBOztBQUFBOztBQUFBLFVBQXJCRSxDQUFxQjtBQUFBLFVBQWpCQyxDQUFpQjs7O0FBRWhDLFVBQUtDLFVBQVVDLFNBQVVILENBQVYsQ0FBVixNQUE2QkksTUFBT0osQ0FBUCxDQUE3QixJQUNBRSxVQUFVQyxTQUFVRixDQUFWLENBQVYsTUFBNkJHLE1BQU9ILENBQVAsQ0FEbEMsRUFDK0MsT0FBTyxLQUFQO0FBRS9DO0FBUDhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBUy9DLFNBQU8sSUFBUDtBQUVBIiwiZmlsZSI6InZlcmlmeS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLyoqXG4gKlxuICogQSBwb3NpdGl2ZSBhdG9tIGlzIHJlcHJlc2VudGVkIGJ5IGEgcG9zaXRpdmUgbnVtYmVyLlxuICogQSBuZWdhdGl2ZSBhdG9tIGlzIHJlcHJlc2VudGVkIGJ5IGEgbmVnYXRpdmUgbnVtYmVyLlxuICpcbiAqIEBwYXJhbSB7QXJyYXl9IGZvcm11bGEgYW4gYXJyYXkgb2YgbGVuZ3RoLTIgYXJyYXkgY2xhdXNlc1xuICogQHBhcmFtIHtBcnJheX0gYXNzaWdubWVudCBhbiBhcnJheSBpbiB7MCwxfV5uXG4gKlxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiB2ZXJpZnkgKCBmb3JtdWxhICwgYXNzaWdubWVudCApIHtcblxuXHRmb3IgKCBsZXQgWyBhICwgYiBdIG9mIGZvcm11bGEgKSB7XG5cblx0XHRpZiAoIGFzc2lnbWVudFt2YXJpYWJsZSggYSApXSAhPT0gdmFsdWUoIGEgKSAmJlxuXHRcdCAgICAgYXNzaWdtZW50W3ZhcmlhYmxlKCBiICldICE9PSB2YWx1ZSggYiApICkgcmV0dXJuIGZhbHNlIDtcblxuXHR9XG5cblx0cmV0dXJuIHRydWUgO1xuXG59XG5cbiJdfQ==