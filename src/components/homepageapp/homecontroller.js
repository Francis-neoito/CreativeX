import { createApp } from 'vue/dist/vue.esm-bundler.js'
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import * as WEBGI from 'webgi';

const updateProgressEvent = new Event('updateprogress');
const clock = new THREE.Clock();
let frameRatedelta = 0;

const initHomeMainApp = function(){
    const app = createApp(
        {props:[]},
        {
            isLoaded:false,
            loadPercentage:0,
        });
    app.component('jewelleryframe',{
        props: ['identifier'],
        data(){
            return{
                ID: this.identifier,
            };
        },
        created(){
        },
        mounted(){
            this.dom = document.getElementById(this.identifier);
            this.initWebGI();
        },
        methods:{
            redirectDemo(){
                window.location.href = 'https://francis-neoito.github.io/Jewellery/weddingrings.html';
            },
            async initWebGI(){
                app._props.loadPercentage +=5;
                document.dispatchEvent(updateProgressEvent);
                this.viewer = new WEBGI.ViewerApp({
                    canvas: document.getElementById(this.identifier),
                    isAntialiased: true,
                    useRgbm: true
                  }) ;
                const manager = new WEBGI.AssetManagerPlugin();
                await this.viewer.addPlugin(manager);
                this.viewer.renderer.displayCanvasScaling = Math.min(window.devicePixelRatio, 2);
                await WEBGI.addBasePlugins(this.viewer);
                const camViews = this.viewer.getPlugin(WEBGI.CameraViewPlugin);
                this.viewer.renderer.refreshPipeline();
                const options = {autoScale: false}
                const assets = await manager.addFromPath("./objects/jewelleryDemo.glb", options);
                app._props.loadPercentage +=20;
                document.dispatchEvent(updateProgressEvent);
                this.controls = this.viewer.scene.activeCamera.controls;
                setTimeout(this.startRotate, 3000);
            },
            startRotate(){
                this.controls.autoRotate = true;
                this.controls.autoRotateSpeed = 0.8;
            },
        },
        template:`
            <div class="jewelleryContainer">
                <canvas class="jewelleryViewer" :id="identifier"></canvas>
                <div id="jewelleryInfo">
                    <h1 class="demoSectionHeader">Jewellery Experience</h1>
                    <p class="demoSectionInfo">Shop, design & customize your unique ring with realistic graphics and pure beauty of the collection.</p>
                    <div class="demoSectionDemo" style="background-color: rgb(145, 25, 53);" @click="redirectDemo()">DEMO</div>
                </div>
            </div>
        `
    });
    app.component('productframe',{
        props: ['identifier'],
        data(){
            return{
                ID: this.identifier,
            };
        },
        created(){
        },
        mounted(){
            this.dom = document.getElementById(this.identifier);
            this.initWebGI();
        },
        methods:{
            redirectDemo(){
                window.location.href = 'https://francis-neoito.github.io/Product_Viewer_Demo/';
            },
            async initWebGI(){
                app._props.loadPercentage +=5;
                document.dispatchEvent(updateProgressEvent);
                this.viewer = new WEBGI.ViewerApp({
                    canvas: document.getElementById(this.identifier),
                    isAntialiased: true,
                    useRgbm: true
                  }) ;
                const manager = new WEBGI.AssetManagerPlugin();
                await this.viewer.addPlugin(manager);
                this.viewer.renderer.displayCanvasScaling = Math.min(window.devicePixelRatio, 2);
                await WEBGI.addBasePlugins(this.viewer);
                const camViews = this.viewer.getPlugin(WEBGI.CameraViewPlugin);
                this.viewer.renderer.refreshPipeline();
                // this.viewer.getPlugin(WEBGI.TonemapPlugin).config.clipBackground = true;
                const options = {autoScale: false}
                const assets = await manager.addFromPath("./objects/pr1.glb", options);
                app._props.loadPercentage +=20;
                document.dispatchEvent(updateProgressEvent);
                this.controls = this.viewer.scene.activeCamera.controls;
                setTimeout(this.startRotate, 3000);
            },
            startRotate(){
                this.controls.autoRotate = true;
                this.controls.autoRotateSpeed = 1.5;
            },
        },
        template:`
            <div class="jewelleryContainer" style="margin-top:70vh">
                <canvas class="jewelleryViewer" :id="identifier"></canvas>
                <div id="jewelleryInfo">
                    <h1 class="demoSectionHeader" style="color:rgb(86 11 107)">Shopping Experience</h1>
                    <p class="demoSectionInfo">Experience the marvel of your favorite products in its true essence of color, shape and real life looks.</p>
                    <div class="demoSectionDemo" style="background-color: rgb(86 11 107);" @click="redirectDemo()">DEMO</div>
                </div>
            </div>
        `
    });
    app.component('realestateframe',{
        props: ['identifier'],
        data(){
            return{
                ID: this.identifier,
            };
        },
        created(){
        },
        mounted(){
            this.dom = document.getElementById(this.identifier);
            this.initWebGI();
        },
        methods:{
            redirectDemo(){
                window.location.href = 'https://francis-neoito.github.io/MyHome_realestate/';
            },
            async initWebGI(){
                app._props.loadPercentage +=5;
                document.dispatchEvent(updateProgressEvent);
                this.viewer = new WEBGI.ViewerApp({
                    canvas: document.getElementById(this.identifier),
                    isAntialiased: true,
                    useRgbm: true
                  }) ;
                const manager = new WEBGI.AssetManagerPlugin();
                await this.viewer.addPlugin(manager);
                this.viewer.renderer.displayCanvasScaling = Math.min(window.devicePixelRatio, 2);
                await WEBGI.addBasePlugins(this.viewer);
                const camViews = this.viewer.getPlugin(WEBGI.CameraViewPlugin);
                this.viewer.renderer.refreshPipeline();
                const options = {autoScale: false}
                const assets = await manager.addFromPath("./objects/realestate.glb", options);
                app._props.loadPercentage +=20;
                document.dispatchEvent(updateProgressEvent);
                this.controls = this.viewer.scene.activeCamera.controls;
                setTimeout(this.startRotate, 3000);
            },
            startRotate(){
                this.controls.autoRotate = true;
                this.controls.autoRotateSpeed = 1.5;
            },
        },
        template:`
            <div class="jewelleryContainer">
                <canvas class="jewelleryViewer" :id="identifier"></canvas>
                <div id="jewelleryInfo">
                    <h1 class="demoSectionHeader" style="color:rgb(223 92 22)">Realestate Visualization</h1>
                    <p class="demoSectionInfo">Visualize your dream with industry leading 3D solution to showcase your next realestate project to your potential customers.</p>
                    <div class="demoSectionDemo" style="background-color: rgb(223 92 22);" @click="redirectDemo()">DEMO</div>
                </div>
            </div>
        `
    });
    app.component('patternengineframe',{
        props: ['identifier'],
        data(){
            return{
                ID: this.identifier,
                inited : false,
            };
        },
        created(){
        },
        mounted(){
            this.dom = document.getElementById(this.identifier);
            if(!this.inited)
                this.initPatternEngine();

            document.getElementById(this.ID).addEventListener('mousemove',(e)=>{
                if(this.inited){
                    this.updateShadowMode(e);
                }
            });
        },
        methods:{
            redirectDemo(){
            },
            async initPatternEngine(){
                this.mouse = new THREE.Vector2();
                this.inited = true;
                this.canvasWidth = this.dom.getBoundingClientRect().width;
                this.canvasHeight = this.dom.getBoundingClientRect().height;
                this.renderer = new THREE.WebGLRenderer({antialias:false});
                this.scene = new THREE.Scene();
                this.scene.background = new THREE.Color('#0f0f60');
                this.renderer.setSize(this.canvasWidth, this.canvasHeight);
                this.renderer.setPixelRatio( window.devicePixelRatio );
                this.dom.append(this.renderer.domElement);
                this.camera = new THREE.PerspectiveCamera(10, this.canvasWidth/this.canvasHeight,1,1000);
                this.camera.lookAt(this.scene.position);
                this.camera.position.z = 60;
                this.camera.position.x = 35;
                this.camera.position.y = 20;
                this.controls = new OrbitControls(this.camera,  this.renderer.domElement);
                await this.createGeometry();
                app._props.loadPercentage += 5;
                document.dispatchEvent(updateProgressEvent);
                this.raycaster = new THREE.Raycaster();
                this.scannery = -7;
                this.scannerColor = new THREE.Color('#ffffff');
                this.origin = [0,0,0];
                this.maxRadius = 5;
                this.curRadius = 0;
                this.startRendering();
                app._props.loadPercentage += 10;
                document.dispatchEvent(updateProgressEvent);
            },
            createGeometry(){
                const positions = [];
                const colors = [];
                const color = new THREE.Color("#00f0f0");
                for(let i=-5; i<5; i++){
                    for(let j=-5; j<5; j++){
                        for(let k=-5; k<5; k++){
                            positions.push(i, j, k);
                            colors.push(color.r, color.g, color.b);
                        }
                    }
                }
                const leds = new THREE.BufferGeometry();
                leds.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
                leds.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));
                leds.computeBoundingSphere();
                const material = new THREE.PointsMaterial({ size: 0.8, vertexColors: true });
                this.geometry = new THREE.Points(leds, material);
                this.geometry.scale.set(0.5, 0.5, 0.5);
                this.geometry.position.set(0, 0, 0);
                this.scene.add(this.geometry);
            },
            updateShadowMode(e){
                this.mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
                this.mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
                this.raycaster.setFromCamera( this.mouse, this.camera );
                const intersects = this.raycaster.intersectObjects( this.scene.children );
                if ( intersects.length > 0 ) {
                    const intersection = intersects[0];
                    console.log(intersection);
                    const faceIndex = intersection.point;
                    const x = this.geometry.geometry.attributes.position.getX(faceIndex);
                    const y = this.geometry.geometry.attributes.position.getY(faceIndex);
                    const z = this.geometry.geometry.attributes.position.getZ(faceIndex);
                    this.origin = [faceIndex.x,faceIndex.y,faceIndex.z];
                }
            },
            scanner( { color, position }){
                for (let index = 0; index < position.count; index++) {
                    //clearingtree
                    color.setXYZ(index, ...[0, 0, 0]);
                    //scannerPattern
                    const y = position.getY(index);
                    if (y < this.scannery && y> this.scannery-2){
                        if(y == Math.floor(this.scannery-1)) {
                            const newColor = [0.3,0.3,0.3];
                            color.setXYZ(index, ...newColor);
                        }else{
                            color.setXYZ(index, ...this.scannerColor);

                        }
                    }
                    //rainbowpattern
                    const x = position.getX(index);
                    const z = position.getZ(index);
                    let dx = x - this.origin[0];
                    let dy = y - this.origin[1];
                    let dz = z - this.origin[2];
                    let distanceEQ = Math.sqrt(dx * dx + dy * dy + dz * dz);
                    if (distanceEQ <= this.maxRadius) {
                      let colorWeight = 1;
                      if (distanceEQ == this.curRadius) {
                        colorWeight = 1;
                      } else if (distanceEQ < this.curRadius) {
                        colorWeight = 1 - (this.curRadius - distanceEQ) / this.maxRadius;
                      } else {
                        colorWeight = (distanceEQ - this.curRadius) / this.maxRadius;
                      }
                      const h = 1.0 * colorWeight;
                      const tempColor = new THREE.Color();
                      tempColor.setHSL(h, 1, 0.5);
                      color.setXYZ(index, ...tempColor.toArray());
                    }
                  }
                  if (this.scannery <= 6) {
                    this.scannery += 0.05;
                  } else {
                    this.scannery = -6;
                  }
                  if (this.curRadius <= this.maxRadius - 0.025) {
                    this.curRadius += 0.025;
                  } else {
                    this.curRadius = 0;
                  }
            },
            tick(){
                if (frameRatedelta * 1000 < 33) {
                      frameRatedelta += clock.getDelta();
                      return;
                }
                this.scanner(this.geometry.geometry.attributes);
                this.geometry.geometry.attributes.color.needsUpdate = true;
            },
            startRendering(){
                this.renderer.setAnimationLoop(this.animate);
            },
            animate(){
                this.tick();
				this.renderer.render( this.scene, this.camera );
            }
        },
        template:`
            <div class="jewelleryContainer" style="margin-top:70vh">
                <div class="jewelleryViewer" :id="identifier" style="overflow:hidden"></div>
                <div id="jewelleryInfo">
                    <h1 class="demoSectionHeader" style="color:rgb(8 81 175);">Custom 3D Solutions</h1>
                    <p class="demoSectionInfo">Building highly optimized and efficient custom 3D solutions to unique graphical requirements, such as generating upto 120fps LED art installation light pattern cues</p>
                    <div class="demoSectionDemo" style="background-color: rgb(8 81 175);" @click="redirectDemo()">Coming Soon</div>
                </div>
            </div>
        `
    });
    app.component('homemain',{
        props:[],
        data(){
            return{
                rootApp: app,
                dummyKey: false,
            };
        },
        created(){
            document.addEventListener('updateprogress',(e)=>{
                this.forceRenderLoader();
                if(app._props.loadPercentage >=80){
                    document.body.style.overflow = 'auto';
                    app._props.isLoaded = true;
                }
            });
        },
        mounted(){
            this.dom = document.getElementById('homeAppBannerCanvaDiv');
        },
        methods:{
            updateVideoLoadProgress(){
                app._props.loadPercentage += 20;
                document.dispatchEvent(updateProgressEvent);
            },
            forceRenderLoader(){
                this.dummyKey = !this.dummyKey;
            },
        },
        template:`
            <div id="homeLoaderBackground" v-if="!rootApp._props.isLoaded">
                <div style="width:80%; display:flex;justify-content:center;align-items: center;flex-direction:column">
                    <div :key="dummyKey" id="homeLoader" :style="{'width':rootApp._props.loadPercentage+'%'}"></div>
                    <span :key="dummyKey" style="margin-top:1rem">{{rootApp._props.loadPercentage+'%'}}</span>
                </div>
            </div>
            <div class="homeAppHeader">
                <div class="homeAppHeaderTitle">Creative<img id="titleX" src="./images/favcon.svg"></div>
                <nav class="homeAppLinksContainer">
                    <ul class="homeAppNavLink">
                        <li class="homeAppLinkItem">Projects</li>
                        <li class="homeAppLinkItem">Services</li>
                        <li class="homeAppLinkItem">About</li>
                        <li class="homeAppLinkItem">Join</li>
                    </ul>
                </nav>
                <div id="homeAppContactContainer">
                    <div id="homeAppContactUs">CONTACT US</div>
                </div>
            </div>
            <div id="homeAppBannerContainer">
                <div id="homeAppBannerVideoDiv">
                    <video preload="auto" autoplay muted playsinline loop @loadeddata="updateVideoLoadProgress">
                        <source src="./images/splashscreen.mp4" type="video/mp4" />
                    </video>
                </div>
                <div id="homeAppBannerLogo">
                    <span id="logoTextX">X</span>
                    <span id="logoTextCreative">CREATIVE</span>
                    <div id="logoOrg">
                        Powered by NEOITO
                    </div>
                    <table id="bannerOptions">
                        <tr>
                            <td><div class="bannerOptionsButton" style="">Contact Us</div></td>
                            <td><div class="bannerOptionsButton" style="background-color: aliceblue;color:black">See what's new</div></td>
                        </tr>
                    </table>
                </div>
            </div>
            <div id="projectsContainer">
                <p id="scrollLabel">- Scroll for more -</p>
                <div id="projectContainerFlex">
                    <div id="projectsHeader">
                        <h1 id="projectsTitle">Projects</h1>
                    </div>
                    <div id="missionHeader">
                        <h1 style="font-size:3rem">Realize your next 3D Web-experience with Creative<span style="color:#6e9d53;font-size:1.2em">X</span></h1>
                        
                        <p style="font-size:1.75rem;color: rgb(110 110 110);">Work with us on conception, design, development and 3D visualization
                         of your projects from scratch to get sophisticated and unique web experience for your customers.</p>
                    </div>
                </div>
                <p class="projectSubTitle">We build epic realtime interactive experience to blow people's mind.</p>
                <div class="grid">
                    <jewelleryframe :identifier="'jewelleryViewer1'"></jewelleryframe>
                    <div class="typog" id="typog1">Beyond</div>
                    <div class="typog" id="typog2">Visions</div>
                    <productframe :identifier="'jewelleryViewer2'"></productframe>
                </div>
                <div class="grid" style="margin-top:-10rem">
                    <realestateframe :identifier="'jewelleryViewer3'"></realestateframe>
                    <div class="typog" id="typog3">Within</div>
                    <div class="typog" id="typog2">Reach.</div>
                    <patternengineframe :identifier="'jewelleryViewer4'"></patternengineframe>
                </div>
                <div id="footerContainer">
                    <div id="footerTitle">
                        <div style="font-size: 3rem;margin-bottom:5rem">CreativeX</div>
                        <div style="font-size: 1.5rem;font-family:sans-serif;margin-left:3rem">
                            General Enquiries <br>
                            safaldas.g@neoito.com
                        </div>
                    </div>
                    
                </div>
            </div>

            

        `
    });

    return app;
};

export {initHomeMainApp};