//% weight=0 color=#3003f1 icon="\uf0ad" block="Microbitnodemcu"
namespace microbitnodemcu {
      export enum analogpin {
        A0 = 0
     }
     
      export enum digitalpin {
        D0 = 16,
        D1 = 5,
        D2 = 4,
        D3 = 0,
        D4 = 2,
        D5 = 14,
        D6 = 12,
        D7 = 13,
        D8 = 15
     }
      export enum type {
        INPUT = 2,
        OUTPUT = 1
     }
     export enum value {
        HIGH = 1,
        LOW = 0
     }


    //% blockId=setMicrobit block="Initialize Microbit |TX %tx|RX %rx|Baud rate %baudrate "
    //% tx.defl=SerialPin.P0
    //% rx.defl=SerialPin.P1
    //% weight=101
    //% blockExternalInputs = 1
    export function setMicrobit(tx: SerialPin, rx: SerialPin, baudrate: BaudRate) {
        serial.redirect(
            tx,
            rx,
            baudrate
        )
        basic.pause(1000)
    }
      
      
    //% blockId=setpinmode1 block="set nodemcu digital pin %pin | for %XY"
    //% weight=101
    export function setpinmode1(pin: digitalpin, XY: type):void {
       serial.writeLine("pinMode="+pin.toString()+","+XY.toString()+"\\n")    
    }
     
     
    //% blockId=setdigital1 block="set nodemcu digital pin  %pin | value to %XY"
    //% weight=101
    export function setdigital1(pin: digitalpin, XY: value):void {
        serial.writeLine("digitalWrite="+pin.toString()+","+XY.toString()+"\\n")    
    }
     
    //% blockId=setdigital2 block="set nodemcu digital pin  %pin | PWM value to %XY"
    //% weight=101
    export function setdigital2(pin: digitalpin, XY: number):void {
        serial.writeLine("analogWrite="+pin.toString()+","+XY.toString()+"\\n")    
    }
 
    //% blockId=setdigital3 block="read nodemcu digital pin  %pin value"
    //% weight=101
    export function setdigital3(pin: digitalpin):string {
        serial.writeLine("digitalRead="+pin.toString()+"\\n")
        basic.pause(10)
        let a=serial.readString()
        return a;
    }
    //% blockId=setdigital4 block="read nodemcu analog pin  %pin value"
    //% weight=101 
    export function setdigital4(pin: analogpin):string {
        serial.writeLine("analogRead="+pin.toString()+"\\n")
        basic.pause(10)
        let a=serial.readString()
        return a
    }   
      
    //% blockId=thingspeak1 block="thingspeak key %key | field1 value %value1 "
    //% weight=101 
    export function thingspeak1(key:string, value1: string) {
        serial.writeLine("t\="+key+","+value1+"\\n")
        basic.pause(8000)
    }
      
    //% blockId=thingspeak2 block="thingspeak key %key | fields value %value1 "
    //% weight=101
    export function thingspeak2(key:string, value1: number[]) {
        let a=value1.length
        let b=""
        let i
        for (i=0;i<a;i++)
        {
              if (i==0)
              {
                    b=value1[0].toString()
              }else
              {
                    let c=i+1
                    b=b+"\&field"+c.toString()+"="+value1[i].toString()
              }
        }
        serial.writeLine("t\="+key+","+b+"\\n")
        basic.pause(8000)
    }
}
