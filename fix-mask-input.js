angular.module('fixMaskInput', [])
	.directive('fixMaskInput', function() {
		return {
			restrict: 'A',
			link: function(scope, element, attr) {
				addFocusEvent(element[0])
				addClickEvent(element[0])
				addKeyDownEvent(element[0])
			}
		}

		function addKeyDownEvent(element) {
			element.addEventListener('keydown',
				function(ev) {
					if (ev.key != 8 && ev.key != 'Backspace') {
						setTimeout(function() {
							ev.target.selectionStart = ev.target.value.length
							ev.target.selectionEnd = ev.target.value.length
						})
					}
				})
		}

		function addClickEvent(element) {
			element.addEventListener('click',
				function(ev) {
					setTimeout(function() {
						ev.target.selectionStart = ev.target.value.length
						ev.target.selectionEnd = ev.target.value.length
					})
				})
		}

		function addFocusEvent(element) {
			element.addEventListener('focus',
				function(ev) {
					setTimeout(function() {
						ev.target.selectionStart = ev.target.value.length
						ev.target.selectionEnd = ev.target.value.length
					})
				})
		}
	})
