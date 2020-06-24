/**
 *
 * @author Raphael da Silva
 *
 */
var JqueryResponsiveMenuToggle = (function(){

	function ResponsiveMenuToggle(icon, wrapper, toggleClass){

		this.icon    = icon;
		this.wrapper = wrapper;
		this.class   = toggleClass;

	}

	ResponsiveMenuToggle.prototype.toggleMenuClass = function(){

		this.wrapper.toggleClass(this.class);

	};

	ResponsiveMenuToggle.prototype.toggleMenu = function(){

		if(this.wrapper.length === 0){
			throw new Error('Menu wrapper not exists in DOM.');
		}

		this.icon.on('click', this.toggleMenuClass.bind(this));

	};

	// A IIFE retorna a função construtora ResponsiveMenuToggle
	return ResponsiveMenuToggle;

})();