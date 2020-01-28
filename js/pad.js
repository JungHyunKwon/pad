/**
 * @author JungHyunKwon
 * @version 1.0.0
 */
(function() {
	'use strict';

	/**
	 * @name 숫자 확인
	 * @since 2017-12-06
	 * @param {*} value
	 * @return {boolean}
	 */
	function isNumeric(value) {
		return typeof value === 'number' && !isNaN(value) && isFinite(value);
	}

	/**
	 * @name pad
	 * @param {number} value
	 * @return {number}
	 * @since 2018-07-13
	 */
	window.pad = function(value) {
		var result = NaN;
		
		//숫자일 때
		if(isNumeric(value)) {
			//0 보다 크면서 10 보다 작을 때
			result = (value > 0 && 10 > value) ? result = '0' + value : value;
		}

		return result;
	};
})();