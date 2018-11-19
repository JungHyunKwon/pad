/**
 * @author JungHyunKwon
 * @version 1.0.0
 */
try {
	(function() {
		'use strict';

		/**
		 * @name pad
		 * @param {number} value
		 * @return {number}
		 * @since 2018-07-13
		 */
		window.pad = function(value) {
			var result = NaN;
			
			//NaN이 아닐 때
			if(typeof value === 'number' && !isNaN(value)) {
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
}catch(e) {
	console.error(e);
}