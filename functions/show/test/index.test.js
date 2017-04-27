const LambdaTester = require( 'lambda-tester' );
const expect = require( 'chai' ).expect;

const showFunction = require( '../index' ).show;

describe( 'handler', function() {

	it( 'return input positive integer', function() {
		return LambdaTester( showFunction )
			.event( { num1: 1} )
			.expectSucceed(function( result ) {
                expect(result.show).to.equal(2);
            });
	});

});
