// =============================================
// AARNAITAI ROBO - Custom Block Definitions
// Complete block library: Sensors, Actuators,
// Code Blocks (Events/Loops/Conditions/Hardware),
// and Project Templates
// =============================================


// =============================================================================
// SENSORS
// =============================================================================

// ----- Sound Sensor -----
Blockly.Blocks['sensor_sound_level'] = {
  init: function () {
    this.appendDummyInput().appendField('read sound level');
    this.setOutput(true, 'Number');
    this.setColour('#D4A017');
    this.setTooltip('Read sound level from microphone (0-1023)');
  }
};

Blockly.Blocks['sensor_sound_detected'] = {
  init: function () {
    this.appendValueInput('THRESHOLD')
      .setCheck('Number')
      .appendField('sound detected above');
    this.setInputsInline(true);
    this.setOutput(true, 'Boolean');
    this.setColour('#D4A017');
    this.setTooltip('Check if sound level exceeds threshold');
  }
};

// ----- Motion Sensor (PIR) -----
Blockly.Blocks['sensor_motion_detected'] = {
  init: function () {
    this.appendDummyInput()
      .appendField('motion detected on pin')
      .appendField(new Blockly.FieldDropdown([
        ['2', '2'], ['3', '3'], ['4', '4'], ['7', '7']
      ]), 'PIN');
    this.setOutput(true, 'Boolean');
    this.setColour('#D4A017');
    this.setTooltip('Check if the PIR motion sensor detects movement');
  }
};

// ----- Ultrasonic Sensor -----
Blockly.Blocks['sensor_ultrasonic_distance'] = {
  init: function () {
    this.appendDummyInput()
      .appendField('ultrasonic distance')
      .appendField('trig')
      .appendField(new Blockly.FieldDropdown([
        ['9', '9'], ['10', '10'], ['11', '11']
      ]), 'TRIG')
      .appendField('echo')
      .appendField(new Blockly.FieldDropdown([
        ['8', '8'], ['10', '10'], ['12', '12']
      ]), 'ECHO');
    this.setOutput(true, 'Number');
    this.setColour('#D4A017');
    this.setTooltip('Read distance from ultrasonic sensor in cm');
  }
};

Blockly.Blocks['sensor_ultrasonic_object_near'] = {
  init: function () {
    this.appendValueInput('DISTANCE')
      .setCheck('Number')
      .appendField('object closer than');
    this.appendDummyInput().appendField('cm');
    this.setInputsInline(true);
    this.setOutput(true, 'Boolean');
    this.setColour('#D4A017');
    this.setTooltip('Check if an object is closer than specified distance');
  }
};

// ----- Temperature Sensor -----
Blockly.Blocks['sensor_temperature_read'] = {
  init: function () {
    this.appendDummyInput()
      .appendField('read temperature')
      .appendField(new Blockly.FieldDropdown([
        ['Celsius', 'C'], ['Fahrenheit', 'F']
      ]), 'UNIT')
      .appendField('on pin')
      .appendField(new Blockly.FieldDropdown([
        ['A0', 'A0'], ['A1', 'A1'], ['A2', 'A2']
      ]), 'PIN');
    this.setOutput(true, 'Number');
    this.setColour('#D4A017');
    this.setTooltip('Read temperature from sensor');
  }
};

Blockly.Blocks['sensor_humidity_read'] = {
  init: function () {
    this.appendDummyInput()
      .appendField('read humidity on pin')
      .appendField(new Blockly.FieldDropdown([
        ['A0', 'A0'], ['A1', 'A1'], ['A2', 'A2']
      ]), 'PIN');
    this.setOutput(true, 'Number');
    this.setColour('#D4A017');
    this.setTooltip('Read humidity percentage from DHT sensor');
  }
};

// ----- Compass / Magnetometer -----
Blockly.Blocks['sensor_compass_heading'] = {
  init: function () {
    this.appendDummyInput().appendField('compass heading (degrees)');
    this.setOutput(true, 'Number');
    this.setColour('#D4A017');
    this.setTooltip('Read compass heading 0-360 degrees (North=0)');
  }
};

Blockly.Blocks['sensor_compass_direction'] = {
  init: function () {
    this.appendDummyInput().appendField('compass direction');
    this.setOutput(true, 'String');
    this.setColour('#D4A017');
    this.setTooltip('Get compass direction as N, NE, E, SE, S, SW, W, NW');
  }
};


// =============================================================================
// ACTUATORS
// =============================================================================

// ----- LED -----
Blockly.Blocks['actuator_led_on'] = {
  init: function () {
    this.appendDummyInput()
      .appendField('set LED on pin')
      .appendField(new Blockly.FieldDropdown([
        ['2', '2'], ['3', '3'], ['4', '4'], ['5', '5'],
        ['6', '6'], ['7', '7'], ['8', '8'], ['13', '13']
      ]), 'PIN')
      .appendField('ON');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#40BCD8');
    this.setTooltip('Turn on an LED on specified pin');
  }
};

Blockly.Blocks['actuator_led_off'] = {
  init: function () {
    this.appendDummyInput()
      .appendField('set LED on pin')
      .appendField(new Blockly.FieldDropdown([
        ['2', '2'], ['3', '3'], ['4', '4'], ['5', '5'],
        ['6', '6'], ['7', '7'], ['8', '8'], ['13', '13']
      ]), 'PIN')
      .appendField('OFF');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#40BCD8');
    this.setTooltip('Turn off an LED on specified pin');
  }
};

Blockly.Blocks['actuator_led_blink'] = {
  init: function () {
    this.appendDummyInput()
      .appendField('blink LED on pin')
      .appendField(new Blockly.FieldDropdown([
        ['2', '2'], ['3', '3'], ['4', '4'], ['5', '5'],
        ['6', '6'], ['7', '7'], ['8', '8'], ['13', '13']
      ]), 'PIN');
    this.appendValueInput('DELAY')
      .setCheck('Number')
      .appendField('delay');
    this.appendDummyInput().appendField('ms');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#40BCD8');
    this.setTooltip('Blink an LED with specified delay in milliseconds');
  }
};

// ----- Servo -----
Blockly.Blocks['actuator_servo_angle'] = {
  init: function () {
    this.appendDummyInput()
      .appendField('set servo on pin')
      .appendField(new Blockly.FieldDropdown([
        ['9', '9'], ['10', '10'], ['11', '11']
      ]), 'PIN');
    this.appendValueInput('ANGLE')
      .setCheck('Number')
      .appendField('to angle');
    this.appendDummyInput().appendField('degrees');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#40BCD8');
    this.setTooltip('Set servo motor angle (0-180 degrees)');
  }
};

Blockly.Blocks['actuator_servo_sweep'] = {
  init: function () {
    this.appendDummyInput()
      .appendField('sweep servo on pin')
      .appendField(new Blockly.FieldDropdown([
        ['9', '9'], ['10', '10'], ['11', '11']
      ]), 'PIN');
    this.appendValueInput('FROM')
      .setCheck('Number')
      .appendField('from');
    this.appendValueInput('TO')
      .setCheck('Number')
      .appendField('to');
    this.appendValueInput('SPEED')
      .setCheck('Number')
      .appendField('speed');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#40BCD8');
    this.setTooltip('Sweep servo from one angle to another');
  }
};

// ----- Motor (DC Motor) -----
Blockly.Blocks['actuator_motor_run'] = {
  init: function () {
    this.appendDummyInput()
      .appendField('run motor')
      .appendField(new Blockly.FieldDropdown([
        ['A', 'A'], ['B', 'B']
      ]), 'MOTOR')
      .appendField('direction')
      .appendField(new Blockly.FieldDropdown([
        ['forward', 'FORWARD'], ['backward', 'BACKWARD']
      ]), 'DIRECTION');
    this.appendValueInput('SPEED')
      .setCheck('Number')
      .appendField('speed');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#40BCD8');
    this.setTooltip('Run DC motor in specified direction at given speed (0-255)');
  }
};

Blockly.Blocks['actuator_motor_stop'] = {
  init: function () {
    this.appendDummyInput()
      .appendField('stop motor')
      .appendField(new Blockly.FieldDropdown([
        ['A', 'A'], ['B', 'B'], ['all', 'ALL']
      ]), 'MOTOR');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#40BCD8');
    this.setTooltip('Stop DC motor');
  }
};

// ----- RGB LED -----
Blockly.Blocks['actuator_rgb_set'] = {
  init: function () {
    this.appendDummyInput()
      .appendField('set RGB LED on pin')
      .appendField(new Blockly.FieldDropdown([
        ['3', '3'], ['5', '5'], ['6', '6'], ['9', '9']
      ]), 'PIN');
    this.appendValueInput('RED').setCheck('Number').appendField('R');
    this.appendValueInput('GREEN').setCheck('Number').appendField('G');
    this.appendValueInput('BLUE').setCheck('Number').appendField('B');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#40BCD8');
    this.setTooltip('Set RGB LED color (0-255 for each channel)');
  }
};

Blockly.Blocks['actuator_rgb_color'] = {
  init: function () {
    this.appendDummyInput()
      .appendField('set RGB LED color')
      .appendField(new Blockly.FieldColour('#ff0000'), 'COLOUR');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#40BCD8');
    this.setTooltip('Set RGB LED to a chosen color');
  }
};

Blockly.Blocks['actuator_rgb_off'] = {
  init: function () {
    this.appendDummyInput().appendField('turn RGB LED off');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#40BCD8');
    this.setTooltip('Turn off the RGB LED');
  }
};

// ----- OLED Display -----
Blockly.Blocks['actuator_oled_print'] = {
  init: function () {
    this.appendValueInput('TEXT')
      .setCheck('String')
      .appendField('OLED print');
    this.appendValueInput('ROW')
      .setCheck('Number')
      .appendField('row');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#40BCD8');
    this.setTooltip('Print text on OLED display at specified row');
  }
};

Blockly.Blocks['actuator_oled_clear'] = {
  init: function () {
    this.appendDummyInput().appendField('clear OLED display');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#40BCD8');
    this.setTooltip('Clear the OLED display');
  }
};

Blockly.Blocks['actuator_oled_draw'] = {
  init: function () {
    this.appendDummyInput()
      .appendField('OLED draw')
      .appendField(new Blockly.FieldDropdown([
        ['line', 'LINE'], ['rectangle', 'RECT'], ['circle', 'CIRCLE']
      ]), 'SHAPE');
    this.appendValueInput('X').setCheck('Number').appendField('x');
    this.appendValueInput('Y').setCheck('Number').appendField('y');
    this.appendValueInput('SIZE').setCheck('Number').appendField('size');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#40BCD8');
    this.setTooltip('Draw a shape on the OLED display');
  }
};

Blockly.Blocks['actuator_buzzer_tone'] = {
  init: function () {
    this.appendDummyInput()
      .appendField('buzzer on pin')
      .appendField(new Blockly.FieldDropdown([
        ['8', '8'], ['9', '9'], ['10', '10']
      ]), 'PIN');
    this.appendValueInput('FREQ')
      .setCheck('Number')
      .appendField('frequency');
    this.appendValueInput('DURATION')
      .setCheck('Number')
      .appendField('duration ms');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#40BCD8');
    this.setTooltip('Play a tone on the buzzer');
  }
};

Blockly.Blocks['actuator_buzzer_off'] = {
  init: function () {
    this.appendDummyInput()
      .appendField('buzzer off on pin')
      .appendField(new Blockly.FieldDropdown([
        ['8', '8'], ['9', '9'], ['10', '10']
      ]), 'PIN');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#40BCD8');
    this.setTooltip('Turn off the buzzer');
  }
};


// =============================================================================
// CODE BLOCKS - Events
// =============================================================================

Blockly.Blocks['event_when_started'] = {
  init: function () {
    this.appendDummyInput().appendField('when program starts');
    this.appendStatementInput('NEXT').setCheck(null);
    this.setColour('#FFAB19');
    this.setTooltip('Run code when the program starts');
    this.setDeletable(false);
  }
};

Blockly.Blocks['event_when_button_pressed'] = {
  init: function () {
    this.appendDummyInput()
      .appendField('when button')
      .appendField(new Blockly.FieldDropdown([
        ['A', 'A'], ['B', 'B'], ['C', 'C']
      ]), 'BUTTON')
      .appendField('pressed');
    this.appendStatementInput('NEXT').setCheck(null);
    this.setColour('#FFAB19');
    this.setTooltip('Run code when a button is pressed');
  }
};

Blockly.Blocks['event_when_sensor_triggered'] = {
  init: function () {
    this.appendDummyInput()
      .appendField('when')
      .appendField(new Blockly.FieldDropdown([
        ['motion detected', 'MOTION'],
        ['sound detected', 'SOUND'],
        ['object near', 'ULTRASONIC'],
        ['temperature high', 'TEMP_HIGH'],
        ['temperature low', 'TEMP_LOW']
      ]), 'TRIGGER');
    this.appendStatementInput('NEXT').setCheck(null);
    this.setColour('#FFAB19');
    this.setTooltip('Run code when a sensor event is triggered');
  }
};

Blockly.Blocks['event_every_seconds'] = {
  init: function () {
    this.appendValueInput('INTERVAL')
      .setCheck('Number')
      .appendField('every');
    this.appendDummyInput().appendField('seconds');
    this.setInputsInline(true);
    this.appendStatementInput('NEXT').setCheck(null);
    this.setColour('#FFAB19');
    this.setTooltip('Run code at regular intervals');
  }
};

Blockly.Blocks['event_broadcast'] = {
  init: function () {
    this.appendValueInput('MESSAGE')
      .setCheck('String')
      .appendField('broadcast message');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#FFAB19');
    this.setTooltip('Broadcast a message to trigger other event blocks');
  }
};

Blockly.Blocks['event_when_receive'] = {
  init: function () {
    this.appendValueInput('MESSAGE')
      .setCheck('String')
      .appendField('when I receive');
    this.setInputsInline(true);
    this.appendStatementInput('NEXT').setCheck(null);
    this.setColour('#FFAB19');
    this.setTooltip('Run code when a broadcast message is received');
  }
};

// =============================================================================
// CODE BLOCKS - Loops
// =============================================================================

Blockly.Blocks['loop_forever'] = {
  init: function () {
    this.appendDummyInput().appendField('forever');
    this.appendStatementInput('DO').setCheck(null);
    this.setPreviousStatement(true, null);
    this.setColour('#5CA65C');
    this.setTooltip('Repeat the enclosed blocks forever');
  }
};

Blockly.Blocks['loop_repeat_times'] = {
  init: function () {
    this.appendValueInput('TIMES')
      .setCheck('Number')
      .appendField('repeat');
    this.appendDummyInput().appendField('times');
    this.appendStatementInput('DO').setCheck(null);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#5CA65C');
    this.setTooltip('Repeat the enclosed blocks a specific number of times');
  }
};

Blockly.Blocks['loop_while_condition'] = {
  init: function () {
    this.appendValueInput('CONDITION')
      .setCheck('Boolean')
      .appendField('repeat while');
    this.appendStatementInput('DO').setCheck(null);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#5CA65C');
    this.setTooltip('Repeat while condition is true');
  }
};

Blockly.Blocks['loop_wait_seconds'] = {
  init: function () {
    this.appendValueInput('SECONDS')
      .setCheck('Number')
      .appendField('wait');
    this.appendDummyInput().appendField('seconds');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#5CA65C');
    this.setTooltip('Pause execution for specified seconds');
  }
};

Blockly.Blocks['loop_wait_ms'] = {
  init: function () {
    this.appendValueInput('MS')
      .setCheck('Number')
      .appendField('wait');
    this.appendDummyInput().appendField('milliseconds');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#5CA65C');
    this.setTooltip('Pause execution for specified milliseconds');
  }
};

// =============================================================================
// CODE BLOCKS - Conditions
// =============================================================================

Blockly.Blocks['condition_if'] = {
  init: function () {
    this.appendValueInput('CONDITION')
      .setCheck('Boolean')
      .appendField('if');
    this.appendStatementInput('DO').setCheck(null).appendField('then');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#5C81A6');
    this.setTooltip('Run code if condition is true');
  }
};

Blockly.Blocks['condition_if_else'] = {
  init: function () {
    this.appendValueInput('CONDITION')
      .setCheck('Boolean')
      .appendField('if');
    this.appendStatementInput('DO').setCheck(null).appendField('then');
    this.appendStatementInput('ELSE').setCheck(null).appendField('else');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#5C81A6');
    this.setTooltip('Run code if condition is true, otherwise run else');
  }
};

Blockly.Blocks['condition_compare'] = {
  init: function () {
    this.appendValueInput('A').setCheck('Number');
    this.appendDummyInput()
      .appendField(new Blockly.FieldDropdown([
        ['=', 'EQ'], ['!=', 'NEQ'],
        ['<', 'LT'], ['>', 'GT'],
        ['<=', 'LTE'], ['>=', 'GTE']
      ]), 'OP');
    this.appendValueInput('B').setCheck('Number');
    this.setInputsInline(true);
    this.setOutput(true, 'Boolean');
    this.setColour('#5C81A6');
    this.setTooltip('Compare two values');
  }
};

Blockly.Blocks['condition_and_or'] = {
  init: function () {
    this.appendValueInput('A').setCheck('Boolean');
    this.appendDummyInput()
      .appendField(new Blockly.FieldDropdown([
        ['and', 'AND'], ['or', 'OR']
      ]), 'OP');
    this.appendValueInput('B').setCheck('Boolean');
    this.setInputsInline(true);
    this.setOutput(true, 'Boolean');
    this.setColour('#5C81A6');
    this.setTooltip('Combine two conditions with AND/OR');
  }
};

Blockly.Blocks['condition_not'] = {
  init: function () {
    this.appendValueInput('BOOL')
      .setCheck('Boolean')
      .appendField('not');
    this.setOutput(true, 'Boolean');
    this.setColour('#5C81A6');
    this.setTooltip('Negate a boolean value');
  }
};

// =============================================================================
// CODE BLOCKS - Hardware
// =============================================================================

Blockly.Blocks['hardware_pin_mode'] = {
  init: function () {
    this.appendDummyInput()
      .appendField('set pin')
      .appendField(new Blockly.FieldDropdown([
        ['2', '2'], ['3', '3'], ['4', '4'], ['5', '5'],
        ['6', '6'], ['7', '7'], ['8', '8'], ['9', '9'],
        ['10', '10'], ['11', '11'], ['12', '12'], ['13', '13']
      ]), 'PIN')
      .appendField('as')
      .appendField(new Blockly.FieldDropdown([
        ['input', 'INPUT'], ['output', 'OUTPUT'], ['input pullup', 'INPUT_PULLUP']
      ]), 'MODE');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#A6745C');
    this.setTooltip('Set a pin as input or output');
  }
};

Blockly.Blocks['hardware_digital_write'] = {
  init: function () {
    this.appendDummyInput()
      .appendField('digital write pin')
      .appendField(new Blockly.FieldDropdown([
        ['2', '2'], ['3', '3'], ['4', '4'], ['5', '5'],
        ['6', '6'], ['7', '7'], ['8', '8'], ['9', '9'],
        ['10', '10'], ['11', '11'], ['12', '12'], ['13', '13']
      ]), 'PIN')
      .appendField('to')
      .appendField(new Blockly.FieldDropdown([
        ['HIGH', 'HIGH'], ['LOW', 'LOW']
      ]), 'VALUE');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#A6745C');
    this.setTooltip('Write HIGH or LOW to a digital pin');
  }
};

Blockly.Blocks['hardware_digital_read'] = {
  init: function () {
    this.appendDummyInput()
      .appendField('digital read pin')
      .appendField(new Blockly.FieldDropdown([
        ['2', '2'], ['3', '3'], ['4', '4'], ['5', '5'],
        ['6', '6'], ['7', '7'], ['8', '8'], ['9', '9'],
        ['10', '10'], ['11', '11'], ['12', '12'], ['13', '13']
      ]), 'PIN');
    this.setOutput(true, 'Number');
    this.setColour('#A6745C');
    this.setTooltip('Read a digital pin (returns 0 or 1)');
  }
};

Blockly.Blocks['hardware_analog_write'] = {
  init: function () {
    this.appendDummyInput()
      .appendField('analog write pin')
      .appendField(new Blockly.FieldDropdown([
        ['3', '3'], ['5', '5'], ['6', '6'],
        ['9', '9'], ['10', '10'], ['11', '11']
      ]), 'PIN');
    this.appendValueInput('VALUE')
      .setCheck('Number')
      .appendField('value');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#A6745C');
    this.setTooltip('Write an analog value (0-255) to a PWM pin');
  }
};

Blockly.Blocks['hardware_analog_read'] = {
  init: function () {
    this.appendDummyInput()
      .appendField('analog read pin')
      .appendField(new Blockly.FieldDropdown([
        ['A0', 'A0'], ['A1', 'A1'], ['A2', 'A2'],
        ['A3', 'A3'], ['A4', 'A4'], ['A5', 'A5']
      ]), 'PIN');
    this.setOutput(true, 'Number');
    this.setColour('#A6745C');
    this.setTooltip('Read an analog pin (returns 0-1023)');
  }
};

Blockly.Blocks['hardware_serial_print'] = {
  init: function () {
    this.appendValueInput('TEXT')
      .appendField('serial print');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#A6745C');
    this.setTooltip('Print a value to serial monitor');
  }
};

Blockly.Blocks['hardware_map_value'] = {
  init: function () {
    this.appendValueInput('VALUE').setCheck('Number').appendField('map');
    this.appendValueInput('FROM_LOW').setCheck('Number').appendField('from');
    this.appendValueInput('FROM_HIGH').setCheck('Number').appendField('-');
    this.appendValueInput('TO_LOW').setCheck('Number').appendField('to');
    this.appendValueInput('TO_HIGH').setCheck('Number').appendField('-');
    this.setInputsInline(true);
    this.setOutput(true, 'Number');
    this.setColour('#A6745C');
    this.setTooltip('Map a value from one range to another');
  }
};


// =============================================================================
// PROJECT TEMPLATES
// =============================================================================

Blockly.Blocks['project_alarm_system'] = {
  init: function () {
    this.appendDummyInput()
      .appendField('ALARM SYSTEM')
      .appendField(new Blockly.FieldDropdown([
        ['motion alarm', 'MOTION'],
        ['sound alarm', 'SOUND'],
        ['distance alarm', 'DISTANCE']
      ]), 'TYPE');
    this.appendStatementInput('SETUP').setCheck(null).appendField('setup');
    this.appendStatementInput('ALARM_ACTION').setCheck(null).appendField('when triggered');
    this.setColour('#FF4444');
    this.setTooltip('Pre-configured alarm system project');
  }
};

Blockly.Blocks['project_smart_door'] = {
  init: function () {
    this.appendDummyInput()
      .appendField('SMART DOOR')
      .appendField(new Blockly.FieldDropdown([
        ['auto open/close', 'AUTO'],
        ['keypad lock', 'KEYPAD'],
        ['proximity', 'PROXIMITY']
      ]), 'TYPE');
    this.appendStatementInput('SETUP').setCheck(null).appendField('setup');
    this.appendStatementInput('ON_OPEN').setCheck(null).appendField('on open');
    this.appendStatementInput('ON_CLOSE').setCheck(null).appendField('on close');
    this.setColour('#FF4444');
    this.setTooltip('Pre-configured smart door project');
  }
};

Blockly.Blocks['project_environment_monitor'] = {
  init: function () {
    this.appendDummyInput()
      .appendField('ENVIRONMENT MONITOR');
    this.appendStatementInput('SETUP').setCheck(null).appendField('setup');
    this.appendStatementInput('ON_READ').setCheck(null).appendField('on each reading');
    this.appendStatementInput('ON_ALERT').setCheck(null).appendField('on alert');
    this.setColour('#FF4444');
    this.setTooltip('Monitor temperature, humidity, and air quality');
  }
};

Blockly.Blocks['project_radar_system'] = {
  init: function () {
    this.appendDummyInput()
      .appendField('RADAR SYSTEM');
    this.appendDummyInput()
      .appendField('servo pin')
      .appendField(new Blockly.FieldDropdown([
        ['9', '9'], ['10', '10'], ['11', '11']
      ]), 'SERVO_PIN')
      .appendField('sensor trig')
      .appendField(new Blockly.FieldDropdown([
        ['7', '7'], ['8', '8']
      ]), 'TRIG_PIN')
      .appendField('echo')
      .appendField(new Blockly.FieldDropdown([
        ['6', '6'], ['5', '5']
      ]), 'ECHO_PIN');
    this.appendStatementInput('SETUP').setCheck(null).appendField('setup');
    this.appendStatementInput('ON_DETECT').setCheck(null).appendField('on object detected');
    this.setColour('#FF4444');
    this.setTooltip('Sweep ultrasonic sensor with servo to create radar');
  }
};


// =============================================================================
// GETTING STARTED
// =============================================================================

Blockly.Blocks['getting_started_hello'] = {
  init: function () {
    this.appendDummyInput().appendField('say Hello AARNAITAI!');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#4A90D9');
    this.setTooltip('Print a hello message - your first block!');
  }
};

Blockly.Blocks['getting_started_wait'] = {
  init: function () {
    this.appendValueInput('SECONDS')
      .setCheck('Number')
      .appendField('wait');
    this.appendDummyInput().appendField('seconds');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#4A90D9');
    this.setTooltip('Wait for a number of seconds');
  }
};

Blockly.Blocks['getting_started_print'] = {
  init: function () {
    this.appendValueInput('TEXT')
      .appendField('print');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#4A90D9');
    this.setTooltip('Print a message to the console');
  }
};

Blockly.Blocks['getting_started_comment'] = {
  init: function () {
    this.appendDummyInput()
      .appendField('// note:')
      .appendField(new Blockly.FieldTextInput('my comment'), 'TEXT');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#4A90D9');
    this.setTooltip('Add a comment to your code');
  }
};


// =============================================
// JavaScript Code Generators
// =============================================

// ----- Sensors (JS) -----

javascript.javascriptGenerator.forBlock['sensor_sound_level'] = function () {
  return ['sensor.readSoundLevel()', javascript.Order.FUNCTION_CALL];
};

javascript.javascriptGenerator.forBlock['sensor_sound_detected'] = function (block) {
  var threshold = javascript.javascriptGenerator.valueToCode(block, 'THRESHOLD', javascript.Order.ATOMIC) || '500';
  return ['sensor.readSoundLevel() > ' + threshold, javascript.Order.RELATIONAL];
};

javascript.javascriptGenerator.forBlock['sensor_motion_detected'] = function (block) {
  var pin = block.getFieldValue('PIN');
  return ['sensor.motionDetected(' + pin + ')', javascript.Order.FUNCTION_CALL];
};

javascript.javascriptGenerator.forBlock['sensor_ultrasonic_distance'] = function (block) {
  var trig = block.getFieldValue('TRIG');
  var echo = block.getFieldValue('ECHO');
  return ['sensor.ultrasonicDistance(' + trig + ', ' + echo + ')', javascript.Order.FUNCTION_CALL];
};

javascript.javascriptGenerator.forBlock['sensor_ultrasonic_object_near'] = function (block) {
  var dist = javascript.javascriptGenerator.valueToCode(block, 'DISTANCE', javascript.Order.ATOMIC) || '20';
  return ['sensor.ultrasonicDistance(9, 8) < ' + dist, javascript.Order.RELATIONAL];
};

javascript.javascriptGenerator.forBlock['sensor_temperature_read'] = function (block) {
  var unit = block.getFieldValue('UNIT');
  var pin = block.getFieldValue('PIN');
  return ['sensor.readTemperature("' + pin + '", "' + unit + '")', javascript.Order.FUNCTION_CALL];
};

javascript.javascriptGenerator.forBlock['sensor_humidity_read'] = function (block) {
  var pin = block.getFieldValue('PIN');
  return ['sensor.readHumidity("' + pin + '")', javascript.Order.FUNCTION_CALL];
};

javascript.javascriptGenerator.forBlock['sensor_compass_heading'] = function () {
  return ['sensor.compassHeading()', javascript.Order.FUNCTION_CALL];
};

javascript.javascriptGenerator.forBlock['sensor_compass_direction'] = function () {
  return ['sensor.compassDirection()', javascript.Order.FUNCTION_CALL];
};

// ----- Actuators (JS) -----

javascript.javascriptGenerator.forBlock['actuator_led_on'] = function (block) {
  var pin = block.getFieldValue('PIN');
  return 'led.on(' + pin + ');\n';
};

javascript.javascriptGenerator.forBlock['actuator_led_off'] = function (block) {
  var pin = block.getFieldValue('PIN');
  return 'led.off(' + pin + ');\n';
};

javascript.javascriptGenerator.forBlock['actuator_led_blink'] = function (block) {
  var pin = block.getFieldValue('PIN');
  var delay = javascript.javascriptGenerator.valueToCode(block, 'DELAY', javascript.Order.ATOMIC) || '500';
  return 'led.blink(' + pin + ', ' + delay + ');\n';
};

javascript.javascriptGenerator.forBlock['actuator_servo_angle'] = function (block) {
  var pin = block.getFieldValue('PIN');
  var angle = javascript.javascriptGenerator.valueToCode(block, 'ANGLE', javascript.Order.ATOMIC) || '90';
  return 'servo.setAngle(' + pin + ', ' + angle + ');\n';
};

javascript.javascriptGenerator.forBlock['actuator_servo_sweep'] = function (block) {
  var pin = block.getFieldValue('PIN');
  var from = javascript.javascriptGenerator.valueToCode(block, 'FROM', javascript.Order.ATOMIC) || '0';
  var to = javascript.javascriptGenerator.valueToCode(block, 'TO', javascript.Order.ATOMIC) || '180';
  var speed = javascript.javascriptGenerator.valueToCode(block, 'SPEED', javascript.Order.ATOMIC) || '5';
  return 'servo.sweep(' + pin + ', ' + from + ', ' + to + ', ' + speed + ');\n';
};

javascript.javascriptGenerator.forBlock['actuator_motor_run'] = function (block) {
  var motor = block.getFieldValue('MOTOR');
  var dir = block.getFieldValue('DIRECTION');
  var speed = javascript.javascriptGenerator.valueToCode(block, 'SPEED', javascript.Order.ATOMIC) || '150';
  return 'motor.run("' + motor + '", "' + dir + '", ' + speed + ');\n';
};

javascript.javascriptGenerator.forBlock['actuator_motor_stop'] = function (block) {
  var motor = block.getFieldValue('MOTOR');
  return 'motor.stop("' + motor + '");\n';
};

javascript.javascriptGenerator.forBlock['actuator_rgb_set'] = function (block) {
  var pin = block.getFieldValue('PIN');
  var r = javascript.javascriptGenerator.valueToCode(block, 'RED', javascript.Order.ATOMIC) || '0';
  var g = javascript.javascriptGenerator.valueToCode(block, 'GREEN', javascript.Order.ATOMIC) || '0';
  var b = javascript.javascriptGenerator.valueToCode(block, 'BLUE', javascript.Order.ATOMIC) || '0';
  return 'rgbLed.setColor(' + pin + ', ' + r + ', ' + g + ', ' + b + ');\n';
};

javascript.javascriptGenerator.forBlock['actuator_rgb_color'] = function (block) {
  var colour = block.getFieldValue('COLOUR');
  return 'rgbLed.setHex("' + colour + '");\n';
};

javascript.javascriptGenerator.forBlock['actuator_rgb_off'] = function () {
  return 'rgbLed.off();\n';
};

javascript.javascriptGenerator.forBlock['actuator_oled_print'] = function (block) {
  var text = javascript.javascriptGenerator.valueToCode(block, 'TEXT', javascript.Order.ATOMIC) || '""';
  var row = javascript.javascriptGenerator.valueToCode(block, 'ROW', javascript.Order.ATOMIC) || '0';
  return 'oled.print(' + text + ', ' + row + ');\n';
};

javascript.javascriptGenerator.forBlock['actuator_oled_clear'] = function () {
  return 'oled.clear();\n';
};

javascript.javascriptGenerator.forBlock['actuator_oled_draw'] = function (block) {
  var shape = block.getFieldValue('SHAPE');
  var x = javascript.javascriptGenerator.valueToCode(block, 'X', javascript.Order.ATOMIC) || '0';
  var y = javascript.javascriptGenerator.valueToCode(block, 'Y', javascript.Order.ATOMIC) || '0';
  var size = javascript.javascriptGenerator.valueToCode(block, 'SIZE', javascript.Order.ATOMIC) || '10';
  return 'oled.draw("' + shape + '", ' + x + ', ' + y + ', ' + size + ');\n';
};

javascript.javascriptGenerator.forBlock['actuator_buzzer_tone'] = function (block) {
  var pin = block.getFieldValue('PIN');
  var freq = javascript.javascriptGenerator.valueToCode(block, 'FREQ', javascript.Order.ATOMIC) || '440';
  var dur = javascript.javascriptGenerator.valueToCode(block, 'DURATION', javascript.Order.ATOMIC) || '500';
  return 'buzzer.tone(' + pin + ', ' + freq + ', ' + dur + ');\n';
};

javascript.javascriptGenerator.forBlock['actuator_buzzer_off'] = function (block) {
  var pin = block.getFieldValue('PIN');
  return 'buzzer.off(' + pin + ');\n';
};

// ----- Events (JS) -----

javascript.javascriptGenerator.forBlock['event_when_started'] = function (block) {
  var code = javascript.javascriptGenerator.statementToCode(block, 'NEXT') || '';
  return '// Program Start\n' + code;
};

javascript.javascriptGenerator.forBlock['event_when_button_pressed'] = function (block) {
  var btn = block.getFieldValue('BUTTON');
  var code = javascript.javascriptGenerator.statementToCode(block, 'NEXT') || '';
  return 'events.onButtonPress("' + btn + '", function() {\n' + code + '});\n';
};

javascript.javascriptGenerator.forBlock['event_when_sensor_triggered'] = function (block) {
  var trigger = block.getFieldValue('TRIGGER');
  var code = javascript.javascriptGenerator.statementToCode(block, 'NEXT') || '';
  return 'events.onSensorTrigger("' + trigger + '", function() {\n' + code + '});\n';
};

javascript.javascriptGenerator.forBlock['event_every_seconds'] = function (block) {
  var interval = javascript.javascriptGenerator.valueToCode(block, 'INTERVAL', javascript.Order.ATOMIC) || '1';
  var code = javascript.javascriptGenerator.statementToCode(block, 'NEXT') || '';
  return 'events.every(' + interval + ', function() {\n' + code + '});\n';
};

javascript.javascriptGenerator.forBlock['event_broadcast'] = function (block) {
  var msg = javascript.javascriptGenerator.valueToCode(block, 'MESSAGE', javascript.Order.ATOMIC) || '""';
  return 'events.broadcast(' + msg + ');\n';
};

javascript.javascriptGenerator.forBlock['event_when_receive'] = function (block) {
  var msg = javascript.javascriptGenerator.valueToCode(block, 'MESSAGE', javascript.Order.ATOMIC) || '""';
  var code = javascript.javascriptGenerator.statementToCode(block, 'NEXT') || '';
  return 'events.onReceive(' + msg + ', function() {\n' + code + '});\n';
};

// ----- Loops (JS) -----

javascript.javascriptGenerator.forBlock['loop_forever'] = function (block) {
  var branch = javascript.javascriptGenerator.statementToCode(block, 'DO') || '';
  return 'while (true) {\n' + branch + '}\n';
};

javascript.javascriptGenerator.forBlock['loop_repeat_times'] = function (block) {
  var times = javascript.javascriptGenerator.valueToCode(block, 'TIMES', javascript.Order.ATOMIC) || '10';
  var branch = javascript.javascriptGenerator.statementToCode(block, 'DO') || '';
  return 'for (var _i = 0; _i < ' + times + '; _i++) {\n' + branch + '}\n';
};

javascript.javascriptGenerator.forBlock['loop_while_condition'] = function (block) {
  var cond = javascript.javascriptGenerator.valueToCode(block, 'CONDITION', javascript.Order.ATOMIC) || 'false';
  var branch = javascript.javascriptGenerator.statementToCode(block, 'DO') || '';
  return 'while (' + cond + ') {\n' + branch + '}\n';
};

javascript.javascriptGenerator.forBlock['loop_wait_seconds'] = function (block) {
  var secs = javascript.javascriptGenerator.valueToCode(block, 'SECONDS', javascript.Order.ATOMIC) || '1';
  return 'await delay(' + secs + ' * 1000);\n';
};

javascript.javascriptGenerator.forBlock['loop_wait_ms'] = function (block) {
  var ms = javascript.javascriptGenerator.valueToCode(block, 'MS', javascript.Order.ATOMIC) || '100';
  return 'await delay(' + ms + ');\n';
};

// ----- Conditions (JS) -----

javascript.javascriptGenerator.forBlock['condition_if'] = function (block) {
  var cond = javascript.javascriptGenerator.valueToCode(block, 'CONDITION', javascript.Order.ATOMIC) || 'false';
  var branch = javascript.javascriptGenerator.statementToCode(block, 'DO') || '';
  return 'if (' + cond + ') {\n' + branch + '}\n';
};

javascript.javascriptGenerator.forBlock['condition_if_else'] = function (block) {
  var cond = javascript.javascriptGenerator.valueToCode(block, 'CONDITION', javascript.Order.ATOMIC) || 'false';
  var doBranch = javascript.javascriptGenerator.statementToCode(block, 'DO') || '';
  var elseBranch = javascript.javascriptGenerator.statementToCode(block, 'ELSE') || '';
  return 'if (' + cond + ') {\n' + doBranch + '} else {\n' + elseBranch + '}\n';
};

javascript.javascriptGenerator.forBlock['condition_compare'] = function (block) {
  var a = javascript.javascriptGenerator.valueToCode(block, 'A', javascript.Order.ATOMIC) || '0';
  var op = block.getFieldValue('OP');
  var b = javascript.javascriptGenerator.valueToCode(block, 'B', javascript.Order.ATOMIC) || '0';
  var ops = { 'EQ': '==', 'NEQ': '!=', 'LT': '<', 'GT': '>', 'LTE': '<=', 'GTE': '>=' };
  return [a + ' ' + ops[op] + ' ' + b, javascript.Order.RELATIONAL];
};

javascript.javascriptGenerator.forBlock['condition_and_or'] = function (block) {
  var a = javascript.javascriptGenerator.valueToCode(block, 'A', javascript.Order.ATOMIC) || 'false';
  var op = block.getFieldValue('OP');
  var b = javascript.javascriptGenerator.valueToCode(block, 'B', javascript.Order.ATOMIC) || 'false';
  var jsOp = op === 'AND' ? '&&' : '||';
  return [a + ' ' + jsOp + ' ' + b, javascript.Order.LOGICAL_AND];
};

javascript.javascriptGenerator.forBlock['condition_not'] = function (block) {
  var val = javascript.javascriptGenerator.valueToCode(block, 'BOOL', javascript.Order.ATOMIC) || 'false';
  return ['!' + val, javascript.Order.LOGICAL_NOT];
};

// ----- Hardware (JS) -----

javascript.javascriptGenerator.forBlock['hardware_pin_mode'] = function (block) {
  var pin = block.getFieldValue('PIN');
  var mode = block.getFieldValue('MODE');
  return 'hardware.pinMode(' + pin + ', "' + mode + '");\n';
};

javascript.javascriptGenerator.forBlock['hardware_digital_write'] = function (block) {
  var pin = block.getFieldValue('PIN');
  var val = block.getFieldValue('VALUE');
  return 'hardware.digitalWrite(' + pin + ', "' + val + '");\n';
};

javascript.javascriptGenerator.forBlock['hardware_digital_read'] = function (block) {
  var pin = block.getFieldValue('PIN');
  return ['hardware.digitalRead(' + pin + ')', javascript.Order.FUNCTION_CALL];
};

javascript.javascriptGenerator.forBlock['hardware_analog_write'] = function (block) {
  var pin = block.getFieldValue('PIN');
  var val = javascript.javascriptGenerator.valueToCode(block, 'VALUE', javascript.Order.ATOMIC) || '0';
  return 'hardware.analogWrite(' + pin + ', ' + val + ');\n';
};

javascript.javascriptGenerator.forBlock['hardware_analog_read'] = function (block) {
  var pin = block.getFieldValue('PIN');
  return ['hardware.analogRead("' + pin + '")', javascript.Order.FUNCTION_CALL];
};

javascript.javascriptGenerator.forBlock['hardware_serial_print'] = function (block) {
  var text = javascript.javascriptGenerator.valueToCode(block, 'TEXT', javascript.Order.ATOMIC) || '""';
  return 'Serial.println(' + text + ');\n';
};

javascript.javascriptGenerator.forBlock['hardware_map_value'] = function (block) {
  var val = javascript.javascriptGenerator.valueToCode(block, 'VALUE', javascript.Order.ATOMIC) || '0';
  var fl = javascript.javascriptGenerator.valueToCode(block, 'FROM_LOW', javascript.Order.ATOMIC) || '0';
  var fh = javascript.javascriptGenerator.valueToCode(block, 'FROM_HIGH', javascript.Order.ATOMIC) || '1023';
  var tl = javascript.javascriptGenerator.valueToCode(block, 'TO_LOW', javascript.Order.ATOMIC) || '0';
  var th = javascript.javascriptGenerator.valueToCode(block, 'TO_HIGH', javascript.Order.ATOMIC) || '255';
  return ['map(' + val + ', ' + fl + ', ' + fh + ', ' + tl + ', ' + th + ')', javascript.Order.FUNCTION_CALL];
};

// ----- Projects (JS) -----

javascript.javascriptGenerator.forBlock['project_alarm_system'] = function (block) {
  var type = block.getFieldValue('TYPE');
  var setup = javascript.javascriptGenerator.statementToCode(block, 'SETUP') || '';
  var action = javascript.javascriptGenerator.statementToCode(block, 'ALARM_ACTION') || '';
  return '// === Alarm System (' + type + ') ===\n' +
    '(function() {\n' +
    '  // Setup\n' + setup +
    '  // Alarm triggered\n' +
    '  events.onSensorTrigger("' + type + '", function() {\n' + action + '  });\n' +
    '})();\n';
};

javascript.javascriptGenerator.forBlock['project_smart_door'] = function (block) {
  var type = block.getFieldValue('TYPE');
  var setup = javascript.javascriptGenerator.statementToCode(block, 'SETUP') || '';
  var onOpen = javascript.javascriptGenerator.statementToCode(block, 'ON_OPEN') || '';
  var onClose = javascript.javascriptGenerator.statementToCode(block, 'ON_CLOSE') || '';
  return '// === Smart Door (' + type + ') ===\n' +
    '(function() {\n' +
    '  // Setup\n' + setup +
    '  // On open\n' +
    '  events.onDoorOpen(function() {\n' + onOpen + '  });\n' +
    '  // On close\n' +
    '  events.onDoorClose(function() {\n' + onClose + '  });\n' +
    '})();\n';
};

javascript.javascriptGenerator.forBlock['project_environment_monitor'] = function (block) {
  var setup = javascript.javascriptGenerator.statementToCode(block, 'SETUP') || '';
  var onRead = javascript.javascriptGenerator.statementToCode(block, 'ON_READ') || '';
  var onAlert = javascript.javascriptGenerator.statementToCode(block, 'ON_ALERT') || '';
  return '// === Environment Monitor ===\n' +
    '(function() {\n' +
    '  // Setup\n' + setup +
    '  // Each reading\n' +
    '  events.every(5, function() {\n' + onRead + '  });\n' +
    '  // Alert\n' +
    '  events.onSensorTrigger("TEMP_HIGH", function() {\n' + onAlert + '  });\n' +
    '})();\n';
};

javascript.javascriptGenerator.forBlock['project_radar_system'] = function (block) {
  var servoPin = block.getFieldValue('SERVO_PIN');
  var trigPin = block.getFieldValue('TRIG_PIN');
  var echoPin = block.getFieldValue('ECHO_PIN');
  var setup = javascript.javascriptGenerator.statementToCode(block, 'SETUP') || '';
  var onDetect = javascript.javascriptGenerator.statementToCode(block, 'ON_DETECT') || '';
  return '// === Radar System ===\n' +
    '(function() {\n' +
    '  var servoPin = ' + servoPin + ';\n' +
    '  var trigPin = ' + trigPin + ';\n' +
    '  var echoPin = ' + echoPin + ';\n' +
    '  // Setup\n' + setup +
    '  // Sweep and detect\n' +
    '  for (var angle = 0; angle <= 180; angle += 5) {\n' +
    '    servo.setAngle(servoPin, angle);\n' +
    '    var dist = sensor.ultrasonicDistance(trigPin, echoPin);\n' +
    '    if (dist < 50) {\n' + onDetect + '    }\n' +
    '  }\n' +
    '})();\n';
};

// ----- Getting Started (JS) -----

javascript.javascriptGenerator.forBlock['getting_started_hello'] = function () {
  return '_print("Hello AARNAITAI!");\n';
};

javascript.javascriptGenerator.forBlock['getting_started_wait'] = function (block) {
  var secs = javascript.javascriptGenerator.valueToCode(block, 'SECONDS', javascript.Order.ATOMIC) || '1';
  return 'await delay(' + secs + ' * 1000);\n';
};

javascript.javascriptGenerator.forBlock['getting_started_print'] = function (block) {
  var text = javascript.javascriptGenerator.valueToCode(block, 'TEXT', javascript.Order.ATOMIC) || '""';
  return '_print(' + text + ');\n';
};

javascript.javascriptGenerator.forBlock['getting_started_comment'] = function (block) {
  var text = block.getFieldValue('TEXT');
  return '// ' + text + '\n';
};


// =============================================
// Python Code Generators
// =============================================

// ----- Sensors (Python) -----

python.pythonGenerator.forBlock['sensor_sound_level'] = function () {
  return ['sensor.read_sound_level()', python.Order.FUNCTION_CALL];
};

python.pythonGenerator.forBlock['sensor_sound_detected'] = function (block) {
  var threshold = python.pythonGenerator.valueToCode(block, 'THRESHOLD', python.Order.ATOMIC) || '500';
  return ['sensor.read_sound_level() > ' + threshold, python.Order.COMPARISON];
};

python.pythonGenerator.forBlock['sensor_motion_detected'] = function (block) {
  var pin = block.getFieldValue('PIN');
  return ['sensor.motion_detected(' + pin + ')', python.Order.FUNCTION_CALL];
};

python.pythonGenerator.forBlock['sensor_ultrasonic_distance'] = function (block) {
  var trig = block.getFieldValue('TRIG');
  var echo = block.getFieldValue('ECHO');
  return ['sensor.ultrasonic_distance(' + trig + ', ' + echo + ')', python.Order.FUNCTION_CALL];
};

python.pythonGenerator.forBlock['sensor_ultrasonic_object_near'] = function (block) {
  var dist = python.pythonGenerator.valueToCode(block, 'DISTANCE', python.Order.ATOMIC) || '20';
  return ['sensor.ultrasonic_distance(9, 8) < ' + dist, python.Order.COMPARISON];
};

python.pythonGenerator.forBlock['sensor_temperature_read'] = function (block) {
  var unit = block.getFieldValue('UNIT');
  var pin = block.getFieldValue('PIN');
  return ['sensor.read_temperature("' + pin + '", "' + unit + '")', python.Order.FUNCTION_CALL];
};

python.pythonGenerator.forBlock['sensor_humidity_read'] = function (block) {
  var pin = block.getFieldValue('PIN');
  return ['sensor.read_humidity("' + pin + '")', python.Order.FUNCTION_CALL];
};

python.pythonGenerator.forBlock['sensor_compass_heading'] = function () {
  return ['sensor.compass_heading()', python.Order.FUNCTION_CALL];
};

python.pythonGenerator.forBlock['sensor_compass_direction'] = function () {
  return ['sensor.compass_direction()', python.Order.FUNCTION_CALL];
};

// ----- Actuators (Python) -----

python.pythonGenerator.forBlock['actuator_led_on'] = function (block) {
  var pin = block.getFieldValue('PIN');
  return 'led.on(' + pin + ')\n';
};

python.pythonGenerator.forBlock['actuator_led_off'] = function (block) {
  var pin = block.getFieldValue('PIN');
  return 'led.off(' + pin + ')\n';
};

python.pythonGenerator.forBlock['actuator_led_blink'] = function (block) {
  var pin = block.getFieldValue('PIN');
  var delay = python.pythonGenerator.valueToCode(block, 'DELAY', python.Order.ATOMIC) || '500';
  return 'led.blink(' + pin + ', ' + delay + ')\n';
};

python.pythonGenerator.forBlock['actuator_servo_angle'] = function (block) {
  var pin = block.getFieldValue('PIN');
  var angle = python.pythonGenerator.valueToCode(block, 'ANGLE', python.Order.ATOMIC) || '90';
  return 'servo.set_angle(' + pin + ', ' + angle + ')\n';
};

python.pythonGenerator.forBlock['actuator_servo_sweep'] = function (block) {
  var pin = block.getFieldValue('PIN');
  var from = python.pythonGenerator.valueToCode(block, 'FROM', python.Order.ATOMIC) || '0';
  var to = python.pythonGenerator.valueToCode(block, 'TO', python.Order.ATOMIC) || '180';
  var speed = python.pythonGenerator.valueToCode(block, 'SPEED', python.Order.ATOMIC) || '5';
  return 'servo.sweep(' + pin + ', ' + from + ', ' + to + ', ' + speed + ')\n';
};

python.pythonGenerator.forBlock['actuator_motor_run'] = function (block) {
  var motor = block.getFieldValue('MOTOR');
  var dir = block.getFieldValue('DIRECTION');
  var speed = python.pythonGenerator.valueToCode(block, 'SPEED', python.Order.ATOMIC) || '150';
  return 'motor.run("' + motor + '", "' + dir + '", ' + speed + ')\n';
};

python.pythonGenerator.forBlock['actuator_motor_stop'] = function (block) {
  var motor = block.getFieldValue('MOTOR');
  return 'motor.stop("' + motor + '")\n';
};

python.pythonGenerator.forBlock['actuator_rgb_set'] = function (block) {
  var pin = block.getFieldValue('PIN');
  var r = python.pythonGenerator.valueToCode(block, 'RED', python.Order.ATOMIC) || '0';
  var g = python.pythonGenerator.valueToCode(block, 'GREEN', python.Order.ATOMIC) || '0';
  var b = python.pythonGenerator.valueToCode(block, 'BLUE', python.Order.ATOMIC) || '0';
  return 'rgb_led.set_color(' + pin + ', ' + r + ', ' + g + ', ' + b + ')\n';
};

python.pythonGenerator.forBlock['actuator_rgb_color'] = function (block) {
  var colour = block.getFieldValue('COLOUR');
  return 'rgb_led.set_hex("' + colour + '")\n';
};

python.pythonGenerator.forBlock['actuator_rgb_off'] = function () {
  return 'rgb_led.off()\n';
};

python.pythonGenerator.forBlock['actuator_oled_print'] = function (block) {
  var text = python.pythonGenerator.valueToCode(block, 'TEXT', python.Order.ATOMIC) || '""';
  var row = python.pythonGenerator.valueToCode(block, 'ROW', python.Order.ATOMIC) || '0';
  return 'oled.print(' + text + ', ' + row + ')\n';
};

python.pythonGenerator.forBlock['actuator_oled_clear'] = function () {
  return 'oled.clear()\n';
};

python.pythonGenerator.forBlock['actuator_oled_draw'] = function (block) {
  var shape = block.getFieldValue('SHAPE');
  var x = python.pythonGenerator.valueToCode(block, 'X', python.Order.ATOMIC) || '0';
  var y = python.pythonGenerator.valueToCode(block, 'Y', python.Order.ATOMIC) || '0';
  var size = python.pythonGenerator.valueToCode(block, 'SIZE', python.Order.ATOMIC) || '10';
  return 'oled.draw("' + shape + '", ' + x + ', ' + y + ', ' + size + ')\n';
};

python.pythonGenerator.forBlock['actuator_buzzer_tone'] = function (block) {
  var pin = block.getFieldValue('PIN');
  var freq = python.pythonGenerator.valueToCode(block, 'FREQ', python.Order.ATOMIC) || '440';
  var dur = python.pythonGenerator.valueToCode(block, 'DURATION', python.Order.ATOMIC) || '500';
  return 'buzzer.tone(' + pin + ', ' + freq + ', ' + dur + ')\n';
};

python.pythonGenerator.forBlock['actuator_buzzer_off'] = function (block) {
  var pin = block.getFieldValue('PIN');
  return 'buzzer.off(' + pin + ')\n';
};

// ----- Events (Python) -----

python.pythonGenerator.forBlock['event_when_started'] = function (block) {
  var code = python.pythonGenerator.statementToCode(block, 'NEXT') || '';
  return '# Program Start\n' + code;
};

python.pythonGenerator.forBlock['event_when_button_pressed'] = function (block) {
  var btn = block.getFieldValue('BUTTON');
  var code = python.pythonGenerator.statementToCode(block, 'NEXT') || '  pass\n';
  return 'def on_button_' + btn.toLowerCase() + '():\n' + code + 'events.on_button_press("' + btn + '", on_button_' + btn.toLowerCase() + ')\n';
};

python.pythonGenerator.forBlock['event_when_sensor_triggered'] = function (block) {
  var trigger = block.getFieldValue('TRIGGER');
  var code = python.pythonGenerator.statementToCode(block, 'NEXT') || '  pass\n';
  return 'def on_' + trigger.toLowerCase() + '():\n' + code + 'events.on_sensor_trigger("' + trigger + '", on_' + trigger.toLowerCase() + ')\n';
};

python.pythonGenerator.forBlock['event_every_seconds'] = function (block) {
  var interval = python.pythonGenerator.valueToCode(block, 'INTERVAL', python.Order.ATOMIC) || '1';
  var code = python.pythonGenerator.statementToCode(block, 'NEXT') || '  pass\n';
  return 'def on_interval():\n' + code + 'events.every(' + interval + ', on_interval)\n';
};

python.pythonGenerator.forBlock['event_broadcast'] = function (block) {
  var msg = python.pythonGenerator.valueToCode(block, 'MESSAGE', python.Order.ATOMIC) || '""';
  return 'events.broadcast(' + msg + ')\n';
};

python.pythonGenerator.forBlock['event_when_receive'] = function (block) {
  var msg = python.pythonGenerator.valueToCode(block, 'MESSAGE', python.Order.ATOMIC) || '""';
  var code = python.pythonGenerator.statementToCode(block, 'NEXT') || '  pass\n';
  return 'def on_receive():\n' + code + 'events.on_receive(' + msg + ', on_receive)\n';
};

// ----- Loops (Python) -----

python.pythonGenerator.forBlock['loop_forever'] = function (block) {
  var branch = python.pythonGenerator.statementToCode(block, 'DO') || '  pass\n';
  return 'while True:\n' + branch;
};

python.pythonGenerator.forBlock['loop_repeat_times'] = function (block) {
  var times = python.pythonGenerator.valueToCode(block, 'TIMES', python.Order.ATOMIC) || '10';
  var branch = python.pythonGenerator.statementToCode(block, 'DO') || '  pass\n';
  return 'for _i in range(' + times + '):\n' + branch;
};

python.pythonGenerator.forBlock['loop_while_condition'] = function (block) {
  var cond = python.pythonGenerator.valueToCode(block, 'CONDITION', python.Order.ATOMIC) || 'False';
  var branch = python.pythonGenerator.statementToCode(block, 'DO') || '  pass\n';
  return 'while ' + cond + ':\n' + branch;
};

python.pythonGenerator.forBlock['loop_wait_seconds'] = function (block) {
  var secs = python.pythonGenerator.valueToCode(block, 'SECONDS', python.Order.ATOMIC) || '1';
  return 'time.sleep(' + secs + ')\n';
};

python.pythonGenerator.forBlock['loop_wait_ms'] = function (block) {
  var ms = python.pythonGenerator.valueToCode(block, 'MS', python.Order.ATOMIC) || '100';
  return 'time.sleep(' + ms + ' / 1000)\n';
};

// ----- Conditions (Python) -----

python.pythonGenerator.forBlock['condition_if'] = function (block) {
  var cond = python.pythonGenerator.valueToCode(block, 'CONDITION', python.Order.ATOMIC) || 'False';
  var branch = python.pythonGenerator.statementToCode(block, 'DO') || '  pass\n';
  return 'if ' + cond + ':\n' + branch;
};

python.pythonGenerator.forBlock['condition_if_else'] = function (block) {
  var cond = python.pythonGenerator.valueToCode(block, 'CONDITION', python.Order.ATOMIC) || 'False';
  var doBranch = python.pythonGenerator.statementToCode(block, 'DO') || '  pass\n';
  var elseBranch = python.pythonGenerator.statementToCode(block, 'ELSE') || '  pass\n';
  return 'if ' + cond + ':\n' + doBranch + 'else:\n' + elseBranch;
};

python.pythonGenerator.forBlock['condition_compare'] = function (block) {
  var a = python.pythonGenerator.valueToCode(block, 'A', python.Order.ATOMIC) || '0';
  var op = block.getFieldValue('OP');
  var b = python.pythonGenerator.valueToCode(block, 'B', python.Order.ATOMIC) || '0';
  var ops = { 'EQ': '==', 'NEQ': '!=', 'LT': '<', 'GT': '>', 'LTE': '<=', 'GTE': '>=' };
  return [a + ' ' + ops[op] + ' ' + b, python.Order.COMPARISON];
};

python.pythonGenerator.forBlock['condition_and_or'] = function (block) {
  var a = python.pythonGenerator.valueToCode(block, 'A', python.Order.ATOMIC) || 'False';
  var op = block.getFieldValue('OP');
  var b = python.pythonGenerator.valueToCode(block, 'B', python.Order.ATOMIC) || 'False';
  var pyOp = op === 'AND' ? 'and' : 'or';
  return [a + ' ' + pyOp + ' ' + b, python.Order.LOGICAL_AND];
};

python.pythonGenerator.forBlock['condition_not'] = function (block) {
  var val = python.pythonGenerator.valueToCode(block, 'BOOL', python.Order.ATOMIC) || 'False';
  return ['not ' + val, python.Order.LOGICAL_NOT];
};

// ----- Hardware (Python) -----

python.pythonGenerator.forBlock['hardware_pin_mode'] = function (block) {
  var pin = block.getFieldValue('PIN');
  var mode = block.getFieldValue('MODE');
  return 'hardware.pin_mode(' + pin + ', "' + mode + '")\n';
};

python.pythonGenerator.forBlock['hardware_digital_write'] = function (block) {
  var pin = block.getFieldValue('PIN');
  var val = block.getFieldValue('VALUE');
  return 'hardware.digital_write(' + pin + ', "' + val + '")\n';
};

python.pythonGenerator.forBlock['hardware_digital_read'] = function (block) {
  var pin = block.getFieldValue('PIN');
  return ['hardware.digital_read(' + pin + ')', python.Order.FUNCTION_CALL];
};

python.pythonGenerator.forBlock['hardware_analog_write'] = function (block) {
  var pin = block.getFieldValue('PIN');
  var val = python.pythonGenerator.valueToCode(block, 'VALUE', python.Order.ATOMIC) || '0';
  return 'hardware.analog_write(' + pin + ', ' + val + ')\n';
};

python.pythonGenerator.forBlock['hardware_analog_read'] = function (block) {
  var pin = block.getFieldValue('PIN');
  return ['hardware.analog_read("' + pin + '")', python.Order.FUNCTION_CALL];
};

python.pythonGenerator.forBlock['hardware_serial_print'] = function (block) {
  var text = python.pythonGenerator.valueToCode(block, 'TEXT', python.Order.ATOMIC) || '""';
  return 'print(' + text + ')\n';
};

python.pythonGenerator.forBlock['hardware_map_value'] = function (block) {
  var val = python.pythonGenerator.valueToCode(block, 'VALUE', python.Order.ATOMIC) || '0';
  var fl = python.pythonGenerator.valueToCode(block, 'FROM_LOW', python.Order.ATOMIC) || '0';
  var fh = python.pythonGenerator.valueToCode(block, 'FROM_HIGH', python.Order.ATOMIC) || '1023';
  var tl = python.pythonGenerator.valueToCode(block, 'TO_LOW', python.Order.ATOMIC) || '0';
  var th = python.pythonGenerator.valueToCode(block, 'TO_HIGH', python.Order.ATOMIC) || '255';
  return ['map_value(' + val + ', ' + fl + ', ' + fh + ', ' + tl + ', ' + th + ')', python.Order.FUNCTION_CALL];
};

// ----- Projects (Python) -----

python.pythonGenerator.forBlock['project_alarm_system'] = function (block) {
  var type = block.getFieldValue('TYPE');
  var setup = python.pythonGenerator.statementToCode(block, 'SETUP') || '  pass\n';
  var action = python.pythonGenerator.statementToCode(block, 'ALARM_ACTION') || '  pass\n';
  return '# === Alarm System (' + type + ') ===\n' +
    '# Setup\n' + setup +
    'def on_alarm():\n' + action +
    'events.on_sensor_trigger("' + type + '", on_alarm)\n';
};

python.pythonGenerator.forBlock['project_smart_door'] = function (block) {
  var type = block.getFieldValue('TYPE');
  var setup = python.pythonGenerator.statementToCode(block, 'SETUP') || '  pass\n';
  var onOpen = python.pythonGenerator.statementToCode(block, 'ON_OPEN') || '  pass\n';
  var onClose = python.pythonGenerator.statementToCode(block, 'ON_CLOSE') || '  pass\n';
  return '# === Smart Door (' + type + ') ===\n' +
    '# Setup\n' + setup +
    'def on_door_open():\n' + onOpen +
    'def on_door_close():\n' + onClose +
    'events.on_door_open(on_door_open)\n' +
    'events.on_door_close(on_door_close)\n';
};

python.pythonGenerator.forBlock['project_environment_monitor'] = function (block) {
  var setup = python.pythonGenerator.statementToCode(block, 'SETUP') || '  pass\n';
  var onRead = python.pythonGenerator.statementToCode(block, 'ON_READ') || '  pass\n';
  var onAlert = python.pythonGenerator.statementToCode(block, 'ON_ALERT') || '  pass\n';
  return '# === Environment Monitor ===\n' +
    '# Setup\n' + setup +
    'def on_reading():\n' + onRead +
    'def on_alert():\n' + onAlert +
    'events.every(5, on_reading)\n' +
    'events.on_sensor_trigger("TEMP_HIGH", on_alert)\n';
};

python.pythonGenerator.forBlock['project_radar_system'] = function (block) {
  var servoPin = block.getFieldValue('SERVO_PIN');
  var trigPin = block.getFieldValue('TRIG_PIN');
  var echoPin = block.getFieldValue('ECHO_PIN');
  var setup = python.pythonGenerator.statementToCode(block, 'SETUP') || '  pass\n';
  var onDetect = python.pythonGenerator.statementToCode(block, 'ON_DETECT') || '  pass\n';
  return '# === Radar System ===\n' +
    'servo_pin = ' + servoPin + '\n' +
    'trig_pin = ' + trigPin + '\n' +
    'echo_pin = ' + echoPin + '\n' +
    '# Setup\n' + setup +
    'for angle in range(0, 181, 5):\n' +
    '  servo.set_angle(servo_pin, angle)\n' +
    '  dist = sensor.ultrasonic_distance(trig_pin, echo_pin)\n' +
    '  if dist < 50:\n' + onDetect;
};

// ----- Getting Started (Python) -----

python.pythonGenerator.forBlock['getting_started_hello'] = function () {
  return 'print("Hello AARNAITAI!")\n';
};

python.pythonGenerator.forBlock['getting_started_wait'] = function (block) {
  var secs = python.pythonGenerator.valueToCode(block, 'SECONDS', python.Order.ATOMIC) || '1';
  return 'time.sleep(' + secs + ')\n';
};

python.pythonGenerator.forBlock['getting_started_print'] = function (block) {
  var text = python.pythonGenerator.valueToCode(block, 'TEXT', python.Order.ATOMIC) || '""';
  return 'print(' + text + ')\n';
};

python.pythonGenerator.forBlock['getting_started_comment'] = function (block) {
  var text = block.getFieldValue('TEXT');
  return '# ' + text + '\n';
};
