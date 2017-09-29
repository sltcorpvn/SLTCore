module.exports = function(grunt) {
    grunt.registerTask('linkLocalAssets', [
        'sails-linker:localCommonsJs',
        'sails-linker:localCommonsStyles',
        'sails-linker:localTpl'
    ]);
};