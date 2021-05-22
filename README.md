# breadcrumb-file-browser-

<!-- ABOUT THE PROJECT -->
## About The Project

The goal is to write a breadcrumb file-browser component in react. 
- There should be a breadcrumb showing the current location in the directory structure (example: https://static.wingify.com/vwo/uploads/sites/3/2015/08/Location-Based-Breadcrumb-1024x349.jpg?tr=w-640)
- Each part in the breadcrumb should be separated and clickable. Clicking on a folder in the breadcrumb will take you to that folder.
- The main portion of the page should display the contents of the current directory, or "THIS IS FILE: {filename}" if the path is a file. Clicking on any of the files or folders in this portion of the page should take you to that file.
- There should be a simple http server with a single endpoint: GET /path/{mypath} should return the data about the given path. For directories, it should only include direct children, not the full subtree (otherwise it would not work on a real filesystem with millions of files).

The directory structure is below. This should only be available to the server, and not the client. The client may only access this structure via the /path call on your server. You may do any automated transformations you wish on this data structure to make it easier to work with, but the transformations should be automated (i.e.we should easily be able to replace it with another structure to test).

<script>

let root = {
type: &#34;dir&#34;,
children: {
home: {
type: &#34;dir&#34;,
children: {
myname: {
type: &#34;dir&#34;,
children: {
&#34;filea.txt&#34;: {
type: &#34;file&#34;,
},
"fileb.txt": {
type: &#34;file&#34;,
},
"projects": {
type: &#34;dir&#34;,
children: {
mysupersecretproject: {
type: &#34;dir&#34;,
children: {
mysupersecretfile: {
type: &#34;file&#34;,
},
},
}
},
},
}
},
},
}
},
}; 

</script>

### Built With

* [Bootstrap](https://getbootstrap.com)
* [Reactjs](https://reactjs.org/)
* [Nodejs](https://nodejs.org/en/)


### Screenshots




## Links:

* Project Link: [https://github.com/saidmg/breadcrumb-file-browser-](https://github.com/saidmg/breadcrumb-file-browser-)
* Deployed Link: https://breadcrumb-file-browser.herokuapp.com/

<!-- LICENSE -->
## License

Distributed under the MIT License. 
```sh
Copyright <2021> <Said Mghabghab>

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
```

<!-- CONTACT -->
## Contact

* Said Mghabghab - [Linkedin](https://www.linkedin.com/in/said-mghabghab/) - saidmghabghab@gmail.com

