
/**
 *
 * A positive atom is represented by a positive number.
 * A negative atom is represented by a negative number.
 *
 * @param {Array} formula an array of length-2 array clauses
 * @param {Array} assignment an array in {0,1}^n
 *
 */

const verify = function ( formula , assignment ) {

	for ( let [ a , b ] of formula ) {

		if ( assigment[variable( a )] !== value( a ) &&
		     assigment[variable( b )] !== value( b ) ) return false ;

	}

	return true ;

} ;

exports.verify = verify ;
