"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

exports.decide = decide;
function decide(formula, G) {
	var _iteratorNormalCompletion = true;
	var _didIteratorError = false;
	var _iteratorError = undefined;

	try {

		for (var _iterator = formula[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
			var _ref = _step.value;

			var _ref2 = _slicedToArray(_ref, 2);

			var a = _ref2[0];
			var b = _ref2[1];
			G.add_edges([-a, b], [-b, a]);
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

	var _iteratorNormalCompletion2 = true;
	var _didIteratorError2 = false;
	var _iteratorError2 = undefined;

	try {
		for (var _iterator2 = G.strongly_connected_components()[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
			var H = _step2.value;
			var _iteratorNormalCompletion3 = true;
			var _didIteratorError3 = false;
			var _iteratorError3 = undefined;

			try {

				for (var _iterator3 = H[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
					var _a = _step3.value;
					if (H.has(-_a)) return false;
				}
			} catch (err) {
				_didIteratorError3 = true;
				_iteratorError3 = err;
			} finally {
				try {
					if (!_iteratorNormalCompletion3 && _iterator3.return) {
						_iterator3.return();
					}
				} finally {
					if (_didIteratorError3) {
						throw _iteratorError3;
					}
				}
			}
		}
	} catch (err) {
		_didIteratorError2 = true;
		_iteratorError2 = err;
	} finally {
		try {
			if (!_iteratorNormalCompletion2 && _iterator2.return) {
				_iterator2.return();
			}
		} finally {
			if (_didIteratorError2) {
				throw _iteratorError2;
			}
		}
	}

	return true;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9kZWNpZGUuanMiXSwibmFtZXMiOlsiZGVjaWRlIiwiZm9ybXVsYSIsIkciLCJhIiwiYiIsImFkZF9lZGdlcyIsInN0cm9uZ2x5X2Nvbm5lY3RlZF9jb21wb25lbnRzIiwiSCIsImhhcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7UUFDZ0JBLE0sR0FBQUEsTTtBQUFULFNBQVNBLE1BQVQsQ0FBa0JDLE9BQWxCLEVBQTRCQyxDQUE1QixFQUFnQztBQUFBO0FBQUE7QUFBQTs7QUFBQTs7QUFFdEMsdUJBQXVCRCxPQUF2QjtBQUFBOztBQUFBOztBQUFBLE9BQVlFLENBQVo7QUFBQSxPQUFnQkMsQ0FBaEI7QUFBaUNGLEtBQUVHLFNBQUYsQ0FBYSxDQUFFLENBQUNGLENBQUgsRUFBT0MsQ0FBUCxDQUFiLEVBQTBCLENBQUUsQ0FBQ0EsQ0FBSCxFQUFPRCxDQUFQLENBQTFCO0FBQWpDO0FBRnNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBSXRDLHdCQUFlRCxFQUFFSSw2QkFBRixFQUFmLG1JQUFvRDtBQUFBLE9BQTFDQyxDQUEwQztBQUFBO0FBQUE7QUFBQTs7QUFBQTs7QUFFbkQsMEJBQWVBLENBQWY7QUFBQSxTQUFVSixFQUFWO0FBQW1CLFNBQUtJLEVBQUVDLEdBQUYsQ0FBTyxDQUFDTCxFQUFSLENBQUwsRUFBbUIsT0FBTyxLQUFQO0FBQXRDO0FBRm1EO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFJbkQ7QUFScUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFVdEMsUUFBTyxJQUFQO0FBRUEiLCJmaWxlIjoiZGVjaWRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5leHBvcnQgZnVuY3Rpb24gZGVjaWRlICggZm9ybXVsYSAsIEcgKSB7XG5cblx0Zm9yICggbGV0IFsgYSAsIGIgXSBvZiBmb3JtdWxhICkgRy5hZGRfZWRnZXMoIFsgLWEgLCBiIF0gLCBbIC1iICwgYSBdICkgO1xuXG5cdGZvciAoIGxldCBIIG9mIEcuc3Ryb25nbHlfY29ubmVjdGVkX2NvbXBvbmVudHMoICkgKSB7XG5cblx0XHRmb3IgKCBsZXQgYSBvZiBIICkgaWYgKCBILmhhcyggLWEgKSApIHJldHVybiBmYWxzZSA7XG5cblx0fVxuXG5cdHJldHVybiB0cnVlIDtcblxufVxuXG4iXX0=