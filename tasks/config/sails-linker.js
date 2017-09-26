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
        localJs: {
            options: {
                startTag: '<!--SCRIPTS-->',
                endTag: '<!--SCRIPTS END-->',
                fileTmpl: '<script src="%s"></script>',
                appRoot: 'public'
            },
            files: {
                'public/**/*.html': require('../pipeline').jsFilesToInject,
                'views/**/*.html': require('../pipeline').jsFilesToInject,
                'views/**/*.pug': require('../pipeline').jsFilesToInject
            }
        },
        localJsRelative: {
            options: {
                startTag: '<!--SCRIPTS-->',
                endTag: '<!--SCRIPTS END-->',
                fileTmpl: '<script src="%s"></script>',
                appRoot: 'public',
                relative: true
            },
            files: {
                'public/**/*.html': require('../pipeline').jsFilesToInject,
                'views/**/*.html': require('../pipeline').jsFilesToInject,
                'views/**/*.pug': require('../pipeline').jsFilesToInject
            }
        },
        localStyles: {
            options: {
                startTag: '<!--STYLES-->',
                endTag: '<!--STYLES END-->',
                fileTmpl: '<link rel="stylesheet" href="%s">',
                appRoot: 'public'
            },
            files: {
                'public/**/*.html': require('../pipeline').cssFilesToInject,
                'views/**/*.html': require('../pipeline').cssFilesToInject,
                'views/**/*.pug': require('../pipeline').cssFilesToInject
            }
        },
        localStylesRelative: {
            options: {
                startTag: '<!--STYLES-->',
                endTag: '<!--STYLES END-->',
                fileTmpl: '<link rel="stylesheet" href="%s">',
                appRoot: 'public',
                relative: true
            },
            files: {
                'public/**/*.html': require('../pipeline').cssFilesToInject,
                'views/**/*.html': require('../pipeline').cssFilesToInject,
                'views/**/*.pug': require('../pipeline').cssFilesToInject
            }
        },
        /* Bring in JST template object */
        localTpl: {
            options: {
                startTag: '<!--TEMPLATES-->',
                endTag: '<!--TEMPLATES END-->',
                fileTmpl: '<script type="text/javascript" src="%s"></script>',
                appRoot: 'public'
            },
            files: {
                'public/index.html': ['public/jst.js'],
                'views/**/*.html': ['public/jst.js'],
                'views/**/*.pug': ['public/jst.js']
            }
        },
        localJsPug: {
            options: {
                startTag: '// SCRIPTS',
                endTag: '// SCRIPTS END',
                fileTmpl: 'script(src="%s")',
                appRoot: 'public'
            },
            files: {
                'views/**/*.pug': require('../pipeline').jsFilesToInject
            }
        },
        localJsRelativePug: {
            options: {
                startTag: '// SCRIPTS',
                endTag: '// SCRIPTS END',
                fileTmpl: 'script(src="%s")',
                appRoot: 'public',
                relative: true
            },
            files: {
                'views/**/*.pug': require('../pipeline').jsFilesToInject
            }
        },
        localStylesPug: {
            options: {
                startTag: '// STYLES',
                endTag: '// STYLES END',
                fileTmpl: 'link(rel="stylesheet", href="%s")',
                appRoot: 'public'
            },
            files: {
                'views/**/*.pug': require('../pipeline').cssFilesToInject
            }
        },
        localStylesRelativePug: {
            options: {
                startTag: '// STYLES',
                endTag: '// STYLES END',
                fileTmpl: 'link(rel="stylesheet", href="%s")',
                appRoot: 'public',
                relative: true
            },
            files: {
                'views/**/*.pug': require('../pipeline').cssFilesToInject
            }
        },
        /* Bring in JST template object */
        localTplPug: {
            options: {
                startTag: '// TEMPLATES',
                endTag: '// TEMPLATES END',
                fileTmpl: 'script(type="text/javascript", src="%s")',
                appRoot: 'public'
            },
            files: {
                'views/**/*.pug': ['public/jst.js']
            }
        },
        
        /** for development */
        devJs: {
            options: {
                startTag: '<!--SCRIPTS-->',
                endTag: '<!--SCRIPTS END-->',
                fileTmpl: '<script src="%s"></script>',
                appRoot: 'public'
            },
            files: {
                'public/**/*.html': require('../pipeline').jsFilesToInject,
                'views/**/*.html': require('../pipeline').jsFilesToInject,
                'views/**/*.pug': require('../pipeline').jsFilesToInject
            }
        },
        devJsRelative: {
            options: {
                startTag: '<!--SCRIPTS-->',
                endTag: '<!--SCRIPTS END-->',
                fileTmpl: '<script src="%s"></script>',
                appRoot: 'public',
                relative: true
            },
            files: {
                'public/**/*.html': require('../pipeline').jsFilesToInject,
                'views/**/*.html': require('../pipeline').jsFilesToInject,
                'views/**/*.pug': require('../pipeline').jsFilesToInject
            }
        },
        devStyles: {
            options: {
                startTag: '<!--STYLES-->',
                endTag: '<!--STYLES END-->',
                fileTmpl: '<link rel="stylesheet" href="%s">',
                appRoot: 'public'
            },

            files: {
                'public/**/*.html': require('../pipeline').cssFilesToInject,
                'views/**/*.html': require('../pipeline').cssFilesToInject,
                'views/**/*.pug': require('../pipeline').cssFilesToInject
            }
        },
        devStylesRelative: {
            options: {
                startTag: '<!--STYLES-->',
                endTag: '<!--STYLES END-->',
                fileTmpl: '<link rel="stylesheet" href="%s">',
                appRoot: 'public',
                relative: true
            },

            files: {
                'public/**/*.html': require('../pipeline').cssFilesToInject,
                'views/**/*.html': require('../pipeline').cssFilesToInject,
                'views/**/*.pug': require('../pipeline').cssFilesToInject
            }
        },
        /* Bring in JST template object */
        devTpl: {
            options: {
                startTag: '<!--TEMPLATES-->',
                endTag: '<!--TEMPLATES END-->',
                fileTmpl: '<script type="text/javascript" src="%s"></script>',
                appRoot: 'public'
            },
            files: {
                'public/index.html': ['public/jst.js'],
                'views/**/*.html': ['public/jst.js'],
                'views/**/*.pug': ['public/jst.js']
            }
        },
        devJsPug: {
            options: {
              startTag: '// SCRIPTS',
              endTag: '// SCRIPTS END',
              fileTmpl: 'script(src="%s")',
              appRoot: 'public'
            },
            files: {
              'views/**/*.pug': require('../pipeline').jsFilesToInject
            }
        },
        devJsRelativePug: {
            options: {
                startTag: '// SCRIPTS',
                endTag: '// SCRIPTS END',
                fileTmpl: 'script(src="%s")',
                appRoot: 'public',
                relative: true
            },
            files: {
                'views/**/*.pug': require('../pipeline').jsFilesToInject
            }
        },
        devStylesPug: {
            options: {
                startTag: '// STYLES',
                endTag: '// STYLES END',
                fileTmpl: 'link(rel="stylesheet", href="%s")',
                appRoot: 'public'
            },

            files: {
                'views/**/*.pug': require('../pipeline').cssFilesToInject
            }
        },
        devStylesRelativePug: {
            options: {
                startTag: '// STYLES',
                endTag: '// STYLES END',
                fileTmpl: 'link(rel="stylesheet", href="%s")',
                appRoot: 'public',
                relative: true
            },

            files: {
                'views/**/*.pug': require('../pipeline').cssFilesToInject
            }
        },
        /* Bring in JST template object */
        devTplPug: {
            options: {
                startTag: '// TEMPLATES',
                endTag: '// TEMPLATES END',
                fileTmpl: 'script(type="text/javascript", src="%s")',
                appRoot: 'public'
            },
            files: {
                'views/**/*.pug': ['public/jst.js']
            }
        },

        /** for staging similar with dev */

        /** for production */
        prodJs: {
            options: {
                startTag: '<!--SCRIPTS-->',
                endTag: '<!--SCRIPTS END-->',
                fileTmpl: '<script src="%s"></script>',
                appRoot: 'public'
            },
            files: {
                'public/**/*.html': ['public/min/production.min.js'],
                'views/**/*.html': ['public/min/production.min.js'],
                'views/**/*.pug': ['public/min/production.min.js']
            }
        },
        prodJsRelative: {
            options: {
                startTag: '<!--SCRIPTS-->',
                endTag: '<!--SCRIPTS END-->',
                fileTmpl: '<script src="%s"></script>',
                appRoot: 'public',
                relative: true
            },
            files: {
                'public/**/*.html': ['public/min/production.min.js'],
                'views/**/*.html': ['public/min/production.min.js'],
                'views/**/*.pug': ['public/min/production.min.js']
            }
        },
        prodStyles: {
            options: {
                startTag: '<!--STYLES-->',
                endTag: '<!--STYLES END-->',
                fileTmpl: '<link rel="stylesheet" href="%s">',
                appRoot: 'public'
            },
            files: {
                'public/index.html': ['public/min/production.min.css'],
                'views/**/*.html': ['public/min/production.min.css'],
                'views/**/*.pug': ['public/min/production.min.css']
            }
        },
        prodStylesRelative: {
            options: {
                startTag: '<!--STYLES-->',
                endTag: '<!--STYLES END-->',
                fileTmpl: '<link rel="stylesheet" href="%s">',
                appRoot: 'public',
                relative: true
            },
            files: {
                'public/index.html': ['public/min/production.min.css'],
                'views/**/*.html': ['public/min/production.min.css'],
                'views/**/*.pug': ['public/min/production.min.css']
            }
        },
        prodJsPug: {
            options: {
                startTag: '// SCRIPTS',
                endTag: '// SCRIPTS END',
                fileTmpl: 'script(src="%s")',
                appRoot: 'public'
            },
            files: {
                'views/**/*.pug': ['public/min/production.min.js']
            }
        },
        prodJsRelativePug: {
            options: {
                startTag: '// SCRIPTS',
                endTag: '// SCRIPTS END',
                fileTmpl: 'script(src="%s")',
                appRoot: 'public',
                relative: true
            },
            files: {
                'views/**/*.pug': ['public/min/production.min.js']
            }
        },
        prodStylesPug: {
            options: {
                startTag: '// STYLES',
                endTag: '// STYLES END',
                fileTmpl: 'link(rel="stylesheet", href="%s")',
                appRoot: 'public'
            },
            files: {
                'views/**/*.pug': ['public/min/production.min.css']
            }
        },
        prodStylesRelativePug: {
            options: {
                startTag: '// STYLES',
                endTag: '// STYLES END',
                fileTmpl: 'link(rel="stylesheet", href="%s")',
                appRoot: 'public',
                relative: true
            },
            files: {
                'views/**/*.pug': ['public/min/production.min.css']
            }
        }
    });

    grunt.loadNpmTasks('grunt-sails-linker');
};
