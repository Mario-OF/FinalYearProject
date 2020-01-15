import { Component } from '@angular/core';
import { DeviceMotion, DeviceMotionAccelerationData, DeviceMotionAccelerometerOptions } from '@ionic-native/device-motion/ngx';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  x:number;
  y:number;
  z:number;
  timestamp:string;

  xStart:number;
  yStart:number;
  zStart:number;
  punch: number;

  id: any;

  constructor(public deviceMotion: DeviceMotion) { 
    this.x = 0;
    this.y = 0;
    this.z = 0;
    this.timestamp = "-";
    this.xStart = 0;
    this.yStart = 0;
    this.zStart = 0;
    this.punch = 0 ;
  }

  start(){
    try {
      var option: DeviceMotionAccelerometerOptions = 
      {
        frequency: 2000
      };
      this.id = this.deviceMotion.watchAcceleration(option).subscribe((acc: DeviceMotionAccelerationData)=>
      {
        this.x =  acc.x;
        this.y =  acc.y;
        this.z =  acc.z;
        this.timestamp = "" + acc.timestamp;
      });

      var ters:number;
      var test2:number ;
      ters = this.zStart - this.z;
      test2 = this.zStart - this.z;

      console.log(ters, test2);

    
      if ((this.zStart - this.z >= 2)||(this.zStart - this.z <= -2) ) {

        this.punch + 1;       
     }

    } catch (error) {
      alert("Error "+ error);
    }

  }

  stop(){
    this.id.unsubscribe();
    this.x = 0;
    this.y = 0;
    this.z = 0;
    this.punch = 0;
    this.timestamp = "";

  }

  startingPosition(){
    try {
      
      this.id = this.deviceMotion.watchAcceleration().subscribe((acc: DeviceMotionAccelerationData)=>
      {
        this.xStart = acc.x;
        this.yStart = acc.y;
        this.zStart = acc.z;
      });

    } catch (error) {
      alert("Error "+ error);
    }


  }


}
