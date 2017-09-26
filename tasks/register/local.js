module.exports = function (grunt) {
    grunt.registerTask('local', [
        'compileAssets', 
        'linkAssets',  
        'watch'
    ]);
};