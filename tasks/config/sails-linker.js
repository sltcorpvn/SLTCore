/**
 * `sails-linker`
 *
 * ---------------------------------------------------------------
 *
 * Automatically inject <script> tags and <link> tags into the specified
 * specified HTML and/or PUG files.  The specified delimiters (`startTag`
 * and `endTag`) determine the insertion points.
 *
 * #### Development (default)
 * By default, tags will be injected for your app's client-side JavaScript files,
 * CSS stylesheets, and precompiled client-side HTML templates in the `templates/`
 * directory (see the `jst` task for more info on that).  In addition, if a LESS
 * stylesheet exists at `assets/styles/importer.less`, it will be compiled to CSS
 * and a `<link>` tag will be inserted for it.  Similarly, if any Coffeescript
 * files exists in `assets/js/`, they will be compiled into JavaScript and injected
 * as well.
 *
 * #### Production (`NODE_ENV=production`)
 * In production, all stylesheets are minified into a single `.css` file (see
 * `tasks/config/cssmin.js` task) and all client-side scripts are minified into
 * a single `.js` file (see `tasks/config/uglify.js` task). Any client-side HTML
 * templates, CoffeeScript, or LESS files are bundled into these same two minified
 * files as well.
 *
 * For usage docs see:
 * https://github.com/Zolmeister/grunt-sails-linker
 *
 */
module.exports = function(grunt) {

    grunt.config.set('sails-linker', {
        /** for local */
        localCommonsJs: {
            options: {
                startTag: '<!--SCRIPTS COMMONS-->',
                endTag: '<!--SCRIPTS COMMONS END-->',
                fileTmpl: '<script src="%s"></script>',
                appRoot: '.tmp/public'
            },
            files: {
                '.tmp/public/**/*.html': require('../pipeline').jsCommonFiles,
                'views/**/*.html': require('../pipeline').jsCommonFiles,
                'views/**/*.ejs': require('../pipeline').jsCommonFiles,
                'views/**/*.pug': require('../pipeline').jsCommonFiles
            }
        },
        localJsRelative: {
            options: {
                startTag: '<!--SCRIPTS-->',
                endTag: '<!--SCRIPTS END-->',
                fileTmpl: '<script src="%s"></script>',
                appRoot: '.tmp/public',
                relative: true
            },
            files: {
                '.tmp/public/**/*.html': require('../pipeline').jsFilesToInject,
                'views/**/*.html': require('../pipeline').jsFilesToInject,
                'views/**/*.ejs': require('../pipeline').jsFilesToInject
            }
        },
        localCommonsStyles: {
            options: {
                startTag: '<!--STYLES COMMONS-->',
                endTag: '<!--STYLES COMMONS END-->',
                fileTmpl: '<link rel="stylesheet" href="%s">',
                appRoot: '.tmp/public'
            },
            files: {
                '.tmp/public/**/*.html': require('../pipeline').cssCommonFiles,
                'views/**/*.html': require('../pipeline').cssCommonFiles,
                'views/**/*.ejs': require('../pipeline').cssCommonFiles,
                'views/**/*.pug': require('../pipeline').cssCommonFiles
                //,'view/commons/login.ejs': require('../pipeline').cssLoginFiles
            }
        },
        localStylesRelative: {
            options: {
                startTag: '<!--STYLES-->',
                endTag: '<!--STYLES END-->',
                fileTmpl: '<link rel="stylesheet" href="%s">',
                appRoot: '.tmp/public',
                relative: true
            },
            files: {
                '.tmp/public/**/*.html': require('../pipeline').cssFilesToInject,
                'views/**/*.html': require('../pipeline').cssFilesToInject,
                'views/**/*.ejs': require('../pipeline').cssFilesToInject
            }
        },
        /* Bring in JST template object */
        localTpl: {
            options: {
                startTag: '<!--TEMPLATES-->',
                endTag: '<!--TEMPLATES END-->',
                fileTmpl: '<script type="text/javascript" src="%s"></script>',
                appRoot: '.tmp/public'
            },
            files: {
                '.tmp/public/index.html': ['.tmp/public/jst.js'],
                'views/**/*.html': ['.tmp/public/jst.js'],
                'views/**/*.ejs': ['.tmp/public/jst.js']
            }
        },

        /** for development */
        devCommonsJs: {
            options: {
                startTag: '<!--SCRIPTS COMMONS-->',
                endTag: '<!--SCRIPTS COMMONS END-->',
                fileTmpl: '<script src="%s"></script>',
                appRoot: '.tmp/public'
            },
            files: {
                '.tmp/public/**/*.html': require('../pipeline').jsCommonFiles,
                'views/**/*.html': require('../pipeline').jsCommonFiles,
                'views/**/*.ejs': require('../pipeline').jsCommonFiles
            }
        },
        devJsRelative: {
            options: {
                startTag: '<!--SCRIPTS-->',
                endTag: '<!--SCRIPTS END-->',
                fileTmpl: '<script src="%s"></script>',
                appRoot: '.tmp/public',
                relative: true
            },
            files: {
                '.tmp/public/**/*.html': require('../pipeline').jsFilesToInject,
                'views/**/*.html': require('../pipeline').jsFilesToInject,
                'views/**/*.ejs': require('../pipeline').jsFilesToInject
            }
        },
        devCommonsStyles: {
            options: {
                startTag: '<!--STYLES COMMONS-->',
                endTag: '<!--STYLES COMMONS END-->',
                fileTmpl: '<link rel="stylesheet" href="%s">',
                appRoot: '.tmp/public'
            },

            files: {
                '.tmp/public/**/*.html': require('../pipeline').cssCommonFiles,
                'views/**/*.html': require('../pipeline').cssCommonFiles,
                'views/**/*.ejs': require('../pipeline').cssCommonFiles
            }
        },
        devStylesRelative: {
            options: {
                startTag: '<!--STYLES-->',
                endTag: '<!--STYLES END-->',
                fileTmpl: '<link rel="stylesheet" href="%s">',
                appRoot: '.tmp/public',
                relative: true
            },

            files: {
                '.tmp/public/**/*.html': require('../pipeline').cssFilesToInject,
                'views/**/*.html': require('../pipeline').cssFilesToInject,
                'views/**/*.ejs': require('../pipeline').cssFilesToInject
            }
        },
        /* Bring in JST template object */
        devTpl: {
            options: {
                startTag: '<!--TEMPLATES-->',
                endTag: '<!--TEMPLATES END-->',
                fileTmpl: '<script type="text/javascript" src="%s"></script>',
                appRoot: '.tmp/public'
            },
            files: {
                '.tmp/public/index.html': ['.tmp/public/jst.js'],
                'views/**/*.html': ['.tmp/public/jst.js'],
                'views/**/*.ejs': ['.tmp/public/jst.js']
            }
        },
        
        /** for staging similar with dev */

        /** for production */
        prodJs: {
            options: {
                startTag: '<!--SCRIPTS-->',
                endTag: '<!--SCRIPTS END-->',
                fileTmpl: '<script src="%s"></script>',
                appRoot: '.tmp/public'
            },
            files: {
                '.tmp/public/**/*.html': ['.tmp/public/min/production.min.js'],
                'views/**/*.html': ['.tmp/public/min/production.min.js'],
                'views/**/*.ejs': ['.tmp/public/min/production.min.js']
            }
        },
        prodJsRelative: {
            options: {
                startTag: '<!--SCRIPTS-->',
                endTag: '<!--SCRIPTS END-->',
                fileTmpl: '<script src="%s"></script>',
                appRoot: '.tmp/public',
                relative: true
            },
            files: {
                '.tmp/public/**/*.html': ['.tmp/public/min/production.min.js'],
                'views/**/*.html': ['.tmp/public/min/production.min.js'],
                'views/**/*.ejs': ['.tmp/public/min/production.min.js']
            }
        },
        prodStyles: {
            options: {
                startTag: '<!--STYLES-->',
                endTag: '<!--STYLES END-->',
                fileTmpl: '<link rel="stylesheet" href="%s">',
                appRoot: '.tmp/public'
            },
            files: {
                '.tmp/public/index.html': ['.tmp/public/min/production.min.css'],
                'views/**/*.html': ['.tmp/public/min/production.min.css'],
                'views/**/*.ejs': ['.tmp/public/min/production.min.css']
            }
        },
        prodStylesRelative: {
            options: {
                startTag: '<!--STYLES-->',
                endTag: '<!--STYLES END-->',
                fileTmpl: '<link rel="stylesheet" href="%s">',
                appRoot: '.tmp/public',
                relative: true
            },
            files: {
                '.tmp/public/index.html': ['.tmp/public/min/production.min.css'],
                'views/**/*.html': ['.tmp/public/min/production.min.css'],
                'views/**/*.ejs': ['.tmp/public/min/production.min.css']
            }
        }
    });

    grunt.loadNpmTasks('grunt-sails-linker');
};
