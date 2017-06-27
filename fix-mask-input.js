angular.module('fixMaskInput', [])
	.directive('fixMaskInput', function() {
		return {
			restrict: 'A',
			link: function(scope, element, attr) {
				element[0].addEventListener('keydown',
					function(ev) {
						if (ev.key != 8 && ev.key != 'Backspace') {
							setTimeout(function() {
								ev.target.selectionStart = ev.target.value.length
								ev.target.selectionEnd = ev.target.value.length
							})
						}
					})
			}
		}
	})
