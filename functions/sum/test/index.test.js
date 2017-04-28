const LambdaTester = require( 'lambda-tester' );
const expect = require( 'chai' ).expect;

const sumFunction = require( '../index' ).sum;

describe( 'handler', function() {

	it( 'return sum of two positive integer', function() {
		return LambdaTester( sumFunction )
			.event( { num1: 1, num2: 2, } )
			.expectSucceed(function( result ) {
                expect(result.sum).to.equal(3);
            });
	});

    it( 'return sum of two negative integer', function() {
		return LambdaTester( sumFunction )
			.event( { num1: -1, num2: -10, } )
			.expectSucceed(function( result ) {
                expect(result.sum).to.equal(-12);
            });
	});

    it( 'return sum of one positive integer and one negative integer', function() {
		return LambdaTester( sumFunction )
			.event( { num1: -1, num2: 2, } )
			.expectSucceed(function( result ) {
                expect(result.sum).to.equal(1);
            });
	});
});
