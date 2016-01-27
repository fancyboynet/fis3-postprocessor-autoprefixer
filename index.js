const postcss = require( 'postcss' );
const autoprefixer = require( 'autoprefixer' );

module.exports = function( content, file, settings ) {
    return postcss( [ autoprefixer( settings ) ] ).process( content ).css;
};