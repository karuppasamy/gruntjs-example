##gruntjs-example

Automate with Grunt code examples

1. Install grunt.

        npm install grunt --save-dev

2. Run the following commands.
    
         # It will create a folder named as "working"
        grunt createFolder

        # It will delete the folder "working" and its contents.
        grunt clean

        # It will copy the files app.js and style.css to the folder "working" and will create a version.txt file. 
        grunt copyFiles

        # It will exectue all above three tasks in the order "clean", "createFolder" and "copyFiles"
        grunt deploy