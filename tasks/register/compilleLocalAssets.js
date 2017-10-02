module.exports = function(grunt) {
    grunt.registerTask('compileLocalAssets', [
        'clean:dev',
        'jst:dev',
        'less:dev',
        'copy:dev',
        'coffee:dev'
    ]);
};