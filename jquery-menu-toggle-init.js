/**
 *
 * @author Raphael da Silva
 *
 */
var $menuToggleInit = (function($, menuToggle){

	return function(selectors){

		var menuToggle = new menuToggle(
			$(selectors.icon),
			$(selectors.wrapper),
			selectors.toggleClass
		);

		menuToggle.toggleMenu();

	};

})($, JqueryResponsiveMenuToggle);