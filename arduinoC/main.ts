\ 
  
enum DIGITAL_PORTS {
    //% block="3"
    3,
    //% block="5"
    5, 
    //% block="6"
    6,
	//% block="9"
    9,
    //% block="10"
    10,
	//% block="11"
    11
}

//% color="#AA278D" iconWidth=50 iconHeight=40
namespace microG {
    //% block="MicroGear στο pin [PIN] κινήσου δεξιόστροφα με ταχύτητα [SPEED]"
	//% PIN.shadow="dropdown" PIN.options="DIGITAL_PORTS" PIN.defl="DIGITAL_PORTS.D9"
	//% SPEED.shadow="range" SPEED.defl="50" SPEED.params.min="0" SPEED.params.max="100"
    export function microgmoveCW(parameter: any, block: any) {
		let speed = parameter.SPEED.code;
		let pin = parameter.PIN.code;
        if(Generator.board === 'arduino'){
            Generator.addInclude("microG","#include <Servo.h>");
            Generator.addObject(`microG_${pin}`, `Servo`, `mymotor_${pin}`);
            Generator.addSetup(`microG_${pin}`, `mymotor_${pin}.attach(${pin});`);
            //Generator.addCode(`mymotor_${pin}.write(${speed});`);
			Generator.addCode(`mymotor_${pin}.write(80 - (${speed}*80/100));`);
			
        }
    }
	
	//% block="MicroGear στο pin [PIN] κινήσου αριστερόστροφα με ταχύτητα [SPEED]"
	//% PIN.shadow="dropdown" PIN.options="DIGITAL_PORTS" PIN.defl="DIGITAL_PORTS.D9"
	//% SPEED.shadow="range" SPEED.defl="50" SPEED.params.min="0" SPEED.params.max="100"
    export function microgmoveCCW(parameter: any, block: any) {
		let speed = parameter.SPEED.code;
		let pin = parameter.PIN.code;
        if(Generator.board === 'arduino'){
            Generator.addInclude("microG","#include <Servo.h>");
            Generator.addObject(`microG_${pin}`, `Servo`, `mymotor_${pin}`);
            Generator.addSetup(`microG_${pin}`, `mymotor_${pin}.attach(${pin});`);
            //Generator.addCode(`mymotor_${pin}.write(${speed});`);
			Generator.addCode(`mymotor_${pin}.write(100 + (${speed}*80/100));`);
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
	
	//% block="MicroGear στο pin [PIN] κινήσου δεξιόστροφα με ταχύτητα [SPEED] για [SEC] δευτερόλεπτα"
	//% PIN.shadow="dropdown" PIN.options="DIGITAL_PORTS" PIN.defl="DIGITAL_PORTS.D9"
	//% SPEED.shadow="range" SPEED.defl="50" SPEED.params.min="0" SPEED.params.max="100"
	//% SEC.shadow="number" SEC.defl="1"
	export function microgmoveCWSEC(parameter: any, block: any) {
		let speed = parameter.SPEED.code;
		let pin = parameter.PIN.code;
		let sec = parameter.SEC.code;
		if (Generator.board === 'arduino') {
			Generator.addInclude("microG", "#include <Servo.h>");
			Generator.addObject(`microG_${pin}`, `Servo`, `mymotor_${pin}`);
			Generator.addSetup(`microG_${pin}`, `mymotor_${pin}.attach(${pin});`);
			Generator.addCode(
				`{ unsigned long starttime_${pin} = millis();\n` +
				`  while (millis() - starttime_${pin} < ${sec} * 1000UL) {\n` +
				`    mymotor_${pin}.write(80 - (${speed}*80/100));\n` +
				`  }\n` +
				`  mymotor_${pin}.write(90); }`
			);
		}
	}

	//% block="MicroGear στο pin [PIN] κινήσου αριστερόστροφα με ταχύτητα [SPEED] για [SEC] δευτερόλεπτα"
	//% PIN.shadow="dropdown" PIN.options="DIGITAL_PORTS" PIN.defl="DIGITAL_PORTS.D9"
	//% SPEED.shadow="range" SPEED.defl="50" SPEED.params.min="0" SPEED.params.max="100"
	//% SEC.shadow="number" SEC.defl="1"
	export function microgmoveCCWSEC(parameter: any, block: any) {
		let speed = parameter.SPEED.code;
		let pin = parameter.PIN.code;
		let sec = parameter.SEC.code;
		if (Generator.board === 'arduino') {
			Generator.addInclude("microG", "#include <Servo.h>");
			Generator.addObject(`microG_${pin}`, `Servo`, `mymotor_${pin}`);
			Generator.addSetup(`microG_${pin}`, `mymotor_${pin}.attach(${pin});`);
			Generator.addCode(
				`{ unsigned long starttime_${pin} = millis();\n` +
				`  while (millis() - starttime_${pin} < ${sec} * 1000UL) {\n` +
				`    mymotor_${pin}.write(100 + (${speed}*80/100));\n` +
				`  }\n` +
				`  mymotor_${pin}.write(90); }`
			);
		}
	}
}

