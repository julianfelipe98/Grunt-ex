module.exports=function(grunt){
    //configuration
    grunt.initConfig({
        //pass in options to plugins, references to files etc
        concat:{
            js:{
                src:['js/*.js'],
                dest:'build/scripts.js'

            } ,
            css:{
                src:['css/*.css'],
                dest:'build/styles.css'

            }
        },
        uglify:{
            build:{
                files:[{
                    src:'build/scripts.js',
                    dest:'build/scripts.js'
                }]
            }
        }
        
    });
    //load plugins 
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    
    //register tasks 
    //if we want to do one at the time   taskname , task command
    grunt.registerTask('concat-js',['concat:js']);
    grunt.registerTask('concat-css',['concat:css']);

};