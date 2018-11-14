import React from 'react';
import ReactDOM from 'react-dom';
import ExampleWork from './example-work.js';

const myWork = [
    {
        'title': "Portfolio Boilerplate",
        'href': "http://tre.se",
        'desc': "This portfolio application was made during a 3-labs week. The application frontend uses ReactJS and is completly serverless. The code for the frontend resides in S3 (AWS) and it is distributed from the AWS CDN. As the code or content is updated on github it triggers a CodeBuild project in which the ReactJS code is bundled and tested in CodePipeline. A lambda function is triggered as the last step of the build. It takes the output from the build and deploys the application to the s3 bucket/website",
        'image': {
            'desc': "A Serverless Portfolio",
            'src': "images/portfolio_architecture.png",
            'comment': "I really enjoyed creating this portfolio application"
        }
    },
    {
        'title': "Work Example",
        'href': "https://example.com",
        'desc': "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        'image': {
            'desc': "example screenshot of a project involving code",
            'src': "images/example1.png",
            'comment': ""
        }
    },
    {
        'title': "Work Example",
        'href': "https://example.com",
        'desc': "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        'image': {
            'desc': "example screenshot of a project involving cats",
            'src': "images/example3.png",
            'comment': `"Bengal cat" by roberto shabs is licensed under CC BY 2.0
           https://www.flickr.com/photos/37287295@N00/2540855181`
        }
    }
];

ReactDOM.render(<ExampleWork work={myWork}/>, document.getElementById('example-work'));
