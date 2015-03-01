## VisualDoge - Dogecoin Transaction Visualizer ##

Current version hosted at [**Github.io**](http://uncertified-robot.github.io/visualdoge/).

Realtime Dogecoin transaction visualizer written in HTML/Javascript. See and hear new transactions and blocks as they propagate through the Dogecoin Network.

Forked from [**BitListen**](https://github.com/MaxLaumeister/BitListen)

### Building ###

TDogecoine project is built and ready-to-go in the dist folder. If you change any of the javascript, you will need to re-build the `dist/VisualDoge.min.js` file:

1. Download the [latest Google Closure Compiler](http://dl.google.com/closure-compiler/compiler-latest.zip) and copy `compiler.jar` into the root project folder.
2. Run make.bat (Windows) or make.sh (Mac/Linux) to invoke closure compiler with the necessary arguments.

The compiled/minified script will be output to `dist/VisualDoge.min.js`.

### APIs and Libraries ###

VisualDoge uses these libraries:

* [Howler.js](http://goldfirestudios.com/blog/104/howler.js-Modern-Web-Audio-Javascript-Library) by James Simpson
* [Reconnecting-Websocket](https://github.com/joewalnes/reconnecting-websocket) by Joe Walnes

VisualDoge uses these APIs:

* [Dogechain.info](http://dogechain.info/) WebSocket API (For Transactions and Cryptsy prices)

### License ###

If you distribute this project in part or in full, please attribute with a link to [the GitHub page](https://github.com/MaxLaumeister/BitListen). This software is available under The MIT License, reproduced below.

Copyright (c) 2014 Maximillian Laumeister

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
