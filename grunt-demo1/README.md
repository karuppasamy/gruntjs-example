##gruntjs-example

Automate with Grunt code examples

1. Install grunt.

        npm install grunt --save-dev

2. Run the following commands.

        grunt # It will execute the default task

        grunt greet:mrblack # It will execute the task greet and considering 'mrblack' as parameter.

        grunt addNumbers:1:2 # 1 and 2 are the parameters.

        grunt addNumbers:a:2 # a and 2 are the parameters.

        grunt addNumbers:1:a # a and 2 are the parameters.

        grunt praise # It will display the random phrase.

        grunt all # It will execute all the tasks as chaining process.

        grunt -h

            Available tasks
            default  Custom task.
            greet  Custom task.
            addNumbers  Custom task.
            praise  Have Grunt say nice things about you.
            all  Alias for "default", "greet:mrblack", "addNumbers:1:5" tasks.