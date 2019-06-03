// Component Typography – start

(function (){

	let init = host => {
		
		/* Typography */
		
		if (typeof ResizeObserver !== 'undefined') { // Compensate element height according to line height
	
			let ro = new ResizeObserver(entries => {
				
				entries.forEach(el => {
					
					let a = el.target;
					a.style.removeProperty('--adjust-height');
					let style = getComputedStyle(a);
					let line_height = parseFloat(style.lineHeight);
					let adjust = line_height - parseFloat(style.height) % line_height;
					if (adjust !== line_height) {

						a.style.setProperty('--adjust-height', adjust);
						a.setAttribute('data-ready', true);
					
					}
					
				});
			
			});
			
			document.querySelectorAll('.n-adjust-height:not([data-ready])').forEach(el => ro.observe(el));
		
		}
		
	};
	registerComponent('typography', init);

})();

// Component Typography – end