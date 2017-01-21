
export function decide ( formula , G ) {

	for ( let [ a , b ] of formula ) G.add_edges( [ -a , b ] , [ -b , a ] ) ;

	for ( let H of G.strongly_connected_components( ) ) {

		for ( let a of H ) if ( H.has( -a ) ) return false ;

	}

	return true ;

}

