\   
enum DIGITAL_PORTS {
    //% block="D9"
    9, 
    //% block="D10"
    10
}

//% color="#AA278D" iconWidth=50 iconHeight=40
namespace microG {
    //% block="MicroGear στο pin [PIN] κινήσου δεξιόστροφα με ταχύτητα [SPEED]"
	//% PIN.shadow="dropdown" PIN.options="DIGITAL_PORTS" PIN.defl="DIGITAL_PORTS.D9"
	//% SPEED.shadow="range" SPEED.defl="50" SPEED.params.min="0" SPEED.params.max="80"
    export function microgmoveCW(parameter: any, block: any) {
		let speed = parameter.SPEED.code;
		let pin = parameter.PIN.code;
        if(Generator.board === 'arduino'){
            Generator.addInclude("microG","#include <Servo.h>");
            Generator.addObject(`microG_${pin}`, `Servo`, `mymotor_${pin}`);
            Generator.addSetup(`microG_${pin}`, `mymotor_${pin}.attach(${pin});`);
            Generator.addCode(`mymotor_${pin}.write(${speed});`);
        }
    }
	
	//% block="MicroGear στο pin [PIN] κινήσου αριστερόστροφα με ταχύτητα [SPEED]"
	//% PIN.shadow="dropdown" PIN.options="DIGITAL_PORTS" PIN.defl="DIGITAL_PORTS.D9"
	//% SPEED.shadow="range" SPEED.defl="140" SPEED.params.min="100" SPEED.params.max="180"
    export function microgmoveCCW(parameter: any, block: any) {
		let speed = parameter.SPEED.code;
		let pin = parameter.PIN.code;
        if(Generator.board === 'arduino'){
            Generator.addInclude("microG","#include <Servo.h>");
            Generator.addObject(`microG_${pin}`, `Servo`, `mymotor_${pin}`);
            Generator.addSetup(`microG_${pin}`, `mymotor_${pin}.attach(${pin});`);
            Generator.addCode(`mymotor_${pin}.write(${speed});`);
        }
    }
	
	//% block="MicroGear στο pin [PIN] σταμάτα"
	//% PIN.shadow="dropdown" PIN.options="DIGITAL_PORTS" PIN.defl="DIGITAL_PORTS.D9"
    export function microgstop(parameter: any, block: any) {
		let pin = parameter.PIN.code;
        if(Generator.board === 'arduino'){
            Generator.addInclude("microG","#include <Servo.h>");
            Generator.addObject(`microG_${pin}`, `Servo`, `mymotor_${pin}`);
            Generator.addSetup(`microG_${pin}`, `mymotor_${pin}.attach(${pin});`);
            Generator.addCode(`mymotor_${pin}.write(90);`);
        }
    }
}

