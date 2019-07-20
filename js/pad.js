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
	function _isNumeric(value) {
		return typeof value === 'number' && !isNaN(value) && isFinite(value);
	}

	/**
	 * @name pad
	 * @param {number} value
	 * @return {number || string}
	 * @since 2018-07-13
	 */
	window.pad = function(value) {
		var result = NaN;
		
		//숫자이면서 0초과이면서 10미만일 때
		if(_isNumeric(value)) {
			//0초과이면서 10미만일 때
			if(value > 0 && 10 > value) {
				result = '0' + value;	
			}else{
				result = value;
			}
		}

		return result;
	};
})();