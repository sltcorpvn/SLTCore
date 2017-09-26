module.exports = function(grunt) {
    grunt.registerTask('linkLocalAssets', [
        'sails-linker:localJs',
        'sails-linker:localStyles',
        'sails-linker:localTpl',
        'sails-linker:localJsPug',
        'sails-linker:localStylesPug',
        'sails-linker:localTplPug'
    ]);
};