$( function () {
	$( '.toggle-port' )
		.click( function () {
			$( 'body' )
				.toggleClass( 'show-port' );
			return false;
		} );

	$( '.toggle-port2' )
		.click( function () {
			$( 'body' )
				.toggleClass( 'show-port2' );
			return false;
		} );

	$( '.toggle-nav' )
		.click( function () {
			$( 'body' )
				.toggleClass( 'show-nav' );
			return false;
		} );
} );