import { MnFullpageService } from 'ngx-fullpage';
import { Component, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  title = 'ImBrad.com';


  // Particle.js Settings
  particles: object = {
    style: {
      'position': 'fixed',
      'width': '100%',
      'height': '100%',
      'z-index': 1,
      'top': 0,
      'left': 0,
      'right': 0,
      'bottom': 0,
    },
    params: {
      interactivity: {
        detect_on: "window",
        events: {
          onhover: {
            enable: true,
            mode: "grab"
          },
          onclick: {
            enable: false,
            mode: "push"
          },
          resize: true
        },
        modes: {
          grab: {
            distance: 200,
            line_linked: {
              opacity: 1
            }
          },
          bubble: {
            distance: 400,
            size: 40,
            duration: 2,
            opacity: 0.8,
            speed: 2
          },
          repulse: {
            distance: 200
          },
          push: {
            particles_nb: 4
          },
          remove: {
            particles_nb: 2
          }
        }
      },
      particles: {
        number: {
          value: 80,
          density: {
            enable: false,
            value_area: 800
          }
        },
        color: {
          value: "#ffffff"
        },
        shape: {
          type: "circle",
          stroke: {
            width: 0,
            color: "#ffffff"
          },
          polygon: {
            nb_sides: 5
          },
          image: {
            src: "img/github.svg",
            width: 100,
            height: 100
          }
        },
        size: {
          value: 2,
          random: true,
          anim: {
            enable: false,
            speed: 6,
            size_min: 0.5,
            sync: false
          }
        },
        opacity: {
          value: 1,
          random: false,
          anim: {
            enable: false,
            speed: 1,
            opacity_min: 0.1,
            sync: false
          }
        },
        line_linked: {
          enable: true,
          distance: 150,
          color: "#fff",
          opacity: 1,
          width: 0.3
        },
        move: {
          enable: true,
          speed: 1.3,
          direction: "none",
          random: false,
          straight: false,
          out_mode: "bounce",
          attract: {
            enable: false,
            rotateX: 600,
            rotateY: 1200
          }
        }
      },
      retina_detect: true
    },
    width: 100,
    height: 100
  };


  //Fullpage.js section binding.
  visible: {
    hello: string,
    work: string,
    folio: string,
    contact: string
  } = {
    hello: null,
    work: null,
    folio: null,
    contact: null
  };

  //Called after fullpage.js completes transition
  //Toggles viewable class to correct html elements to reveal text with animation.
  after_load = (anchorLink, index) => {

    for(let key in this.visible) {
      this.visible[key] = null;
    }

    this.visible[anchorLink] = "viewable"
  };


  //Navigation menu binding
  nav: {
    open: string,
  } = {
    open: null
  };

  //Toggles navigation object binding to show/hide navigation
  nav_open = () => {
    if(this.nav.open === "open"){
      this.nav.open = null;
    } else {
      this.nav.open = "open";
    }
  };



  // constructor(public fullpageService: MnFullpageService) {
  //
  // }

  // ngOnInit() {
  //   alert("okay");
  // }


  // @Output() public options: MnFullpageOptions = new MnFullpageOptions({
  //   afterSlideLoad: function(){
  //     console.log("Nice");
  //   }
  // });

}
