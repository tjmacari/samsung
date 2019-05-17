# Samsung Smart TV experiment

This is a simple ReactJs/Webpack/ES6/SASS carousel experiment which runs on Samsung Smart TV's through Tizen Studio.

This application was built with Webpack, so the parsed and minified website is located in the "/dist" folder.  Since the site is bundled, the index.html file is directly executable from that folder.  The contents of the "/dist" folder were also built and packaged into a Tizen Studio project file called "SamsungCarouselTest.wgt".

To run the application in the Tizen Studio Samsung TV Simulator:
* Download Tizen Studio (https://developer.tizen.org/development/tizen-studio/download)
* Checkout the code from this repository
* Run Tizen Studio and import the packed application (ie. File -> Open Projects from File System)
* Select the packaged project file located at "dist/SamsungCarouselTest.wgt"
* Run the project as a "Tizen Web Simulator Application (Samsung TV)"
* Once in the simulator, the user can scroll left/right using either the virtual remote control or the keyboard keys
