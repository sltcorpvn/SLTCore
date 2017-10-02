module.exports = function (grunt) {
    grunt.registerTask('local', [
        'compileLocalAssets', 
        'linkLocalAssets',  
        'clean:dev',
        'copy:dev'
    ]);
};