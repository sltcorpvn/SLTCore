module.exports = function (grunt) {
    grunt.registerTask('local', [
        'compileLocalAssets', 
        'linkLocalAssets',  
        'clean:build',
        'copy:build'
    ]);
};