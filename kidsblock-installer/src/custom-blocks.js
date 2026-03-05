// =============================================
// AARNAITAI ROBO - Custom Block Definitions
// Based on KidsBlock Tutorial Sections 3.1–3.38
// =============================================

// ===== KidsBlock-Style Core Blocks =====
// These match the visual blocks shown in KidsBlock tutorials

// "when Arduino begin" — Hat block (program start)
Blockly.Blocks['kb_when_arduino_begin'] = {
  init: function () {
    this.appendDummyInput()
      .appendField('when Arduino begin');
    this.setNextStatement(true, null);
    this.setColour('#FFBF00');
    this.setTooltip('The start of the execution. Codes will not run without this block. Module blocks that need to be initialized should be added below.');
    this.setHelpUrl('');
  }
};

// "forever" — C-shaped loop block
Blockly.Blocks['kb_forever'] = {
  init: function () {
    this.appendDummyInput()
      .appendField('forever');
    this.appendStatementInput('DO');
    this.setPreviousStatement(true, null);
    this.setColour('#FFBF00');
    this.setTooltip('Code runs in here and executes all the time (in a loop).');
  }
};

// "wait [seconds] seconds" block
Blockly.Blocks['kb_wait_seconds'] = {
  init: function () {
    this.appendValueInput('SECONDS')
      .setCheck('Number')
      .appendField('wait');
    this.appendDummyInput()
      .appendField('seconds');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#FFBF00');
    this.setTooltip('The delay seconds can be modified as needed. Unit: s.');
  }
};

// "wait [ms] milliseconds" block
Blockly.Blocks['kb_wait_ms'] = {
  init: function () {
    this.appendValueInput('MS')
      .setCheck('Number')
      .appendField('wait');
    this.appendDummyInput()
      .appendField('milliseconds');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#FFBF00');
    this.setTooltip('Delay in milliseconds. Unit: ms.');
  }
};

// "LED pin [dropdown] out [HIGH/LOW]" block
Blockly.Blocks['kb_led_pin'] = {
  init: function () {
    this.appendDummyInput()
      .appendField('\u2600 LED pin')
      .appendField(new Blockly.FieldDropdown([
        ['IO2', '2'], ['IO4', '4'], ['IO5', '5'], ['IO12', '12'], ['IO13', '13'],
        ['IO14', '14'], ['IO15', '15'], ['IO16', '16'], ['IO17', '17'],
        ['IO18', '18'], ['IO19', '19'], ['IO21', '21'], ['IO22', '22'],
        ['IO23', '23'], ['IO25', '25'], ['IO26', '26'], ['IO27', '27'],
        ['IO32', '32'], ['IO33', '33']
      ]), 'PIN')
      .appendField('out')
      .appendField(new Blockly.FieldDropdown([
        ['HIGH', 'HIGH'], ['LOW', 'LOW']
      ]), 'STATE');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#8B6914');
    this.setTooltip('Controls the ON/OFF of an LED. Set the pin and power level (HIGH/LOW).');
  }
};

// "set pin [dropdown] mode [INPUT/OUTPUT]" block
Blockly.Blocks['kb_pin_mode'] = {
  init: function () {
    this.appendDummyInput()
      .appendField('set pin')
      .appendField(new Blockly.FieldDropdown([
        ['IO2', '2'], ['IO4', '4'], ['IO5', '5'], ['IO12', '12'], ['IO13', '13'],
        ['IO14', '14'], ['IO15', '15'], ['IO16', '16'], ['IO17', '17'],
        ['IO18', '18'], ['IO19', '19'], ['IO21', '21'], ['IO22', '22'],
        ['IO23', '23'], ['IO25', '25'], ['IO26', '26'], ['IO27', '27'],
        ['IO32', '32'], ['IO33', '33']
      ]), 'PIN')
      .appendField('mode')
      .appendField(new Blockly.FieldDropdown([
        ['INPUT', 'INPUT'], ['OUTPUT', 'OUTPUT'], ['INPUT_PULLUP', 'INPUT_PULLUP']
      ]), 'MODE');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#8B6914');
    this.setTooltip('Set pin mode to INPUT or OUTPUT.');
  }
};

// "digital read pin [dropdown]" block
Blockly.Blocks['kb_digital_read'] = {
  init: function () {
    this.appendDummyInput()
      .appendField('digital read pin')
      .appendField(new Blockly.FieldDropdown([
        ['IO2', '2'], ['IO4', '4'], ['IO5', '5'], ['IO12', '12'], ['IO13', '13'],
        ['IO14', '14'], ['IO15', '15'], ['IO16', '16'], ['IO17', '17'],
        ['IO18', '18'], ['IO19', '19'], ['IO21', '21'], ['IO22', '22'],
        ['IO23', '23'], ['IO25', '25'], ['IO26', '26'], ['IO27', '27'],
        ['IO32', '32'], ['IO33', '33']
      ]), 'PIN');
    this.setOutput(true, 'Number');
    this.setColour('#8B6914');
    this.setTooltip('Read digital value (0 or 1) from a pin.');
  }
};

// "digital write pin [dropdown] value [HIGH/LOW]"
Blockly.Blocks['kb_digital_write'] = {
  init: function () {
    this.appendDummyInput()
      .appendField('digital write pin')
      .appendField(new Blockly.FieldDropdown([
        ['IO2', '2'], ['IO4', '4'], ['IO5', '5'], ['IO12', '12'], ['IO13', '13'],
        ['IO14', '14'], ['IO15', '15'], ['IO16', '16'], ['IO17', '17'],
        ['IO18', '18'], ['IO19', '19'], ['IO21', '21'], ['IO22', '22'],
        ['IO23', '23'], ['IO25', '25'], ['IO26', '26'], ['IO27', '27'],
        ['IO32', '32'], ['IO33', '33']
      ]), 'PIN')
      .appendField('value')
      .appendField(new Blockly.FieldDropdown([
        ['HIGH', 'HIGH'], ['LOW', 'LOW']
      ]), 'VALUE');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#8B6914');
    this.setTooltip('Write digital HIGH or LOW to a pin.');
  }
};

// "analog read pin [dropdown]"
Blockly.Blocks['kb_analog_read'] = {
  init: function () {
    this.appendDummyInput()
      .appendField('analog read pin')
      .appendField(new Blockly.FieldDropdown([
        ['IO32', '32'], ['IO33', '33'], ['IO34', '34'], ['IO35', '35'],
        ['IO36', '36'], ['IO39', '39']
      ]), 'PIN');
    this.setOutput(true, 'Number');
    this.setColour('#8B6914');
    this.setTooltip('Read analog value (0-4095) from a pin.');
  }
};

// "analog write pin [dropdown] value [number]"
Blockly.Blocks['kb_analog_write'] = {
  init: function () {
    this.appendDummyInput()
      .appendField('analog write pin')
      .appendField(new Blockly.FieldDropdown([
        ['IO2', '2'], ['IO4', '4'], ['IO5', '5'], ['IO12', '12'], ['IO13', '13'],
        ['IO14', '14'], ['IO15', '15'], ['IO25', '25'], ['IO26', '26'], ['IO27', '27']
      ]), 'PIN');
    this.appendValueInput('VALUE')
      .setCheck('Number')
      .appendField('value');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#8B6914');
    this.setTooltip('Write analog value (0-255) to a pin using PWM.');
  }
};

// "serial print [text]" block
Blockly.Blocks['kb_serial_print'] = {
  init: function () {
    this.appendValueInput('TEXT')
      .appendField('serial print');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#40BCD8');
    this.setTooltip('Print text to the serial monitor.');
  }
};

// "serial println [text]" block
Blockly.Blocks['kb_serial_println'] = {
  init: function () {
    this.appendValueInput('TEXT')
      .appendField('serial println');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#40BCD8');
    this.setTooltip('Print text to the serial monitor with a new line.');
  }
};

// "serial begin [baud]" block
Blockly.Blocks['kb_serial_begin'] = {
  init: function () {
    this.appendDummyInput()
      .appendField('serial begin baud rate')
      .appendField(new Blockly.FieldDropdown([
        ['9600', '9600'], ['115200', '115200'], ['57600', '57600'],
        ['38400', '38400'], ['19200', '19200']
      ]), 'BAUD');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#40BCD8');
    this.setTooltip('Initialize serial communication at the given baud rate.');
  }
};

// "set servo pin [dropdown] angle [number]" block
Blockly.Blocks['kb_servo_angle'] = {
  init: function () {
    this.appendDummyInput()
      .appendField('\u2699 servo pin')
      .appendField(new Blockly.FieldDropdown([
        ['IO4', '4'], ['IO5', '5'], ['IO12', '12'], ['IO13', '13'],
        ['IO14', '14'], ['IO15', '15'], ['IO16', '16'], ['IO17', '17'],
        ['IO18', '18'], ['IO19', '19'], ['IO21', '21'], ['IO22', '22'],
        ['IO23', '23'], ['IO25', '25'], ['IO26', '26'], ['IO27', '27']
      ]), 'PIN');
    this.appendValueInput('ANGLE')
      .setCheck('Number')
      .appendField('angle');
    this.appendDummyInput()
      .appendField('\u00B0');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#8B6914');
    this.setTooltip('Set servo to angle (0-180 degrees).');
  }
};

// "buzzer pin [dropdown] tone [frequency] beat [duration]" block
Blockly.Blocks['kb_buzzer_tone'] = {
  init: function () {
    this.appendDummyInput()
      .appendField('\u266B buzzer pin')
      .appendField(new Blockly.FieldDropdown([
        ['IO16', '16'], ['IO17', '17'], ['IO25', '25'], ['IO26', '26']
      ]), 'PIN');
    this.appendDummyInput()
      .appendField('tone')
      .appendField(new Blockly.FieldDropdown([
        ['C4 (262Hz)', '262'], ['D4 (294Hz)', '294'], ['E4 (330Hz)', '330'],
        ['F4 (349Hz)', '349'], ['G4 (392Hz)', '392'], ['A4 (440Hz)', '440'],
        ['B4 (494Hz)', '494'], ['C5 (523Hz)', '523'], ['D5 (587Hz)', '587'],
        ['E5 (659Hz)', '659']
      ]), 'FREQ');
    this.appendDummyInput()
      .appendField('beat')
      .appendField(new Blockly.FieldDropdown([
        ['Half', '0.5'], ['Quarter', '0.25'], ['Whole', '1'], ['Double', '2'],
        ['Zero', '0']
      ]), 'BEAT');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#8B6914');
    this.setTooltip('Play a tone on the buzzer. Different frequencies produce different musical notes.');
  }
};

// "buzzer pin [dropdown] off" block
Blockly.Blocks['kb_buzzer_off'] = {
  init: function () {
    this.appendDummyInput()
      .appendField('\u266B buzzer pin')
      .appendField(new Blockly.FieldDropdown([
        ['IO16', '16'], ['IO17', '17'], ['IO25', '25'], ['IO26', '26']
      ]), 'PIN')
      .appendField('off');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#8B6914');
    this.setTooltip('Turn off the buzzer.');
  }
};

// "ultrasonic trig [pin] echo [pin] distance (cm)" block
Blockly.Blocks['kb_ultrasonic_distance'] = {
  init: function () {
    this.appendDummyInput()
      .appendField('\u21C4 ultrasonic Trig')
      .appendField(new Blockly.FieldDropdown([
        ['IO13', '13'], ['IO12', '12'], ['IO14', '14'], ['IO27', '27']
      ]), 'TRIG')
      .appendField('Echo')
      .appendField(new Blockly.FieldDropdown([
        ['IO14', '14'], ['IO12', '12'], ['IO13', '13'], ['IO27', '27']
      ]), 'ECHO')
      .appendField('distance (cm)');
    this.setOutput(true, 'Number');
    this.setColour('#8B6914');
    this.setTooltip('Measure distance in cm using ultrasonic sensor.');
  }
};

// "read temp/humidity AHT20 [temperature/humidity]" block
Blockly.Blocks['kb_aht20_read'] = {
  init: function () {
    this.appendDummyInput()
      .appendField('\u2103 AHT20 read')
      .appendField(new Blockly.FieldDropdown([
        ['temperature (\u00B0C)', 'TEMP'], ['humidity (%RH)', 'HUMIDITY']
      ]), 'TYPE');
    this.setOutput(true, 'Number');
    this.setColour('#8B6914');
    this.setTooltip('Read temperature or humidity from AHT20 sensor.');
  }
};

// "BMP388 read [pressure/altitude/temperature]" block
Blockly.Blocks['kb_bmp388_read'] = {
  init: function () {
    this.appendDummyInput()
      .appendField('\u2191 BMP388 read')
      .appendField(new Blockly.FieldDropdown([
        ['pressure (hPa)', 'PRESSURE'], ['altitude (m)', 'ALTITUDE'], ['temperature (\u00B0C)', 'TEMP']
      ]), 'TYPE');
    this.setOutput(true, 'Number');
    this.setColour('#8B6914');
    this.setTooltip('Read barometric pressure, altitude, or temperature from BMP388.');
  }
};

// "OLED init width [128] height [64]" block
Blockly.Blocks['kb_oled_init'] = {
  init: function () {
    this.appendDummyInput()
      .appendField('\u25A1 OLED init 128x64');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#40BCD8');
    this.setTooltip('Initialize OLED display (128x64 I2C).');
  }
};

// "OLED show text [text] at row [number]" block
Blockly.Blocks['kb_oled_show'] = {
  init: function () {
    this.appendValueInput('TEXT')
      .appendField('\u25A1 OLED show');
    this.appendValueInput('ROW')
      .setCheck('Number')
      .appendField('at row');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#40BCD8');
    this.setTooltip('Display text on OLED screen at given row.');
  }
};

// "OLED clear" block
Blockly.Blocks['kb_oled_clear'] = {
  init: function () {
    this.appendDummyInput()
      .appendField('\u25A1 OLED clear');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#40BCD8');
    this.setTooltip('Clear the OLED display.');
  }
};

// "PIR pin [dropdown] detected?" block
Blockly.Blocks['kb_pir_detected'] = {
  init: function () {
    this.appendDummyInput()
      .appendField('\u26A0 PIR pin')
      .appendField(new Blockly.FieldDropdown([
        ['IO15', '15'], ['IO5', '5'], ['IO19', '19'], ['IO21', '21']
      ]), 'PIN')
      .appendField('motion detected?');
    this.setOutput(true, 'Boolean');
    this.setColour('#8B6914');
    this.setTooltip('Returns true if PIR motion sensor detects movement.');
  }
};

// "photoresistor pin [dropdown] read" block
Blockly.Blocks['kb_photoresistor_read'] = {
  init: function () {
    this.appendDummyInput()
      .appendField('\u2600 photoresistor pin')
      .appendField(new Blockly.FieldDropdown([
        ['IO34', '34'], ['IO35', '35'], ['IO36', '36'], ['IO39', '39']
      ]), 'PIN')
      .appendField('read light');
    this.setOutput(true, 'Number');
    this.setColour('#8B6914');
    this.setTooltip('Read analog light level from photoresistor (0-4095).');
  }
};

// "sound sensor pin [dropdown] read" block
Blockly.Blocks['kb_sound_sensor_read'] = {
  init: function () {
    this.appendDummyInput()
      .appendField('\u266A sound sensor pin')
      .appendField(new Blockly.FieldDropdown([
        ['IO34', '34'], ['IO35', '35'], ['IO36', '36'], ['IO39', '39']
      ]), 'PIN')
      .appendField('read');
    this.setOutput(true, 'Number');
    this.setColour('#8B6914');
    this.setTooltip('Read analog sound level from microphone sensor (0-4095).');
  }
};

// "RFID init" block
Blockly.Blocks['kb_rfid_init'] = {
  init: function () {
    this.appendDummyInput()
      .appendField('\u229A RFID init (SPI)');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#8B6914');
    this.setTooltip('Initialize RFID MFRC522 reader on SPI bus.');
  }
};

// "RFID card detected?" block
Blockly.Blocks['kb_rfid_card_detected'] = {
  init: function () {
    this.appendDummyInput()
      .appendField('\u229A RFID card detected?');
    this.setOutput(true, 'Boolean');
    this.setColour('#8B6914');
    this.setTooltip('Returns true if an RFID card is present.');
  }
};

// "RFID read UID" block
Blockly.Blocks['kb_rfid_read_uid'] = {
  init: function () {
    this.appendDummyInput()
      .appendField('\u229A RFID read UID');
    this.setOutput(true, 'String');
    this.setColour('#8B6914');
    this.setTooltip('Read the UID of the RFID card.');
  }
};

// "WS2812 RGB pin [dropdown] num LEDs [number] set [index] color [color]"
Blockly.Blocks['kb_rgb_set'] = {
  init: function () {
    this.appendDummyInput()
      .appendField('\u25CF RGB pin')
      .appendField(new Blockly.FieldDropdown([
        ['IO16', '16'], ['IO17', '17'], ['IO25', '25'], ['IO26', '26']
      ]), 'PIN')
      .appendField('LED #')
      .appendField(new Blockly.FieldDropdown([
        ['0', '0'], ['1', '1'], ['2', '2'], ['3', '3'], ['4', '4'], ['5', '5']
      ]), 'INDEX');
    this.appendDummyInput()
      .appendField('color')
      .appendField(new Blockly.FieldColour('#ff0000'), 'COLOR');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#8B6914');
    this.setTooltip('Set WS2812 RGB LED color.');
  }
};

// "WS2812 RGB pin [dropdown] all off" block
Blockly.Blocks['kb_rgb_off'] = {
  init: function () {
    this.appendDummyInput()
      .appendField('\u25CF RGB pin')
      .appendField(new Blockly.FieldDropdown([
        ['IO16', '16'], ['IO17', '17'], ['IO25', '25'], ['IO26', '26']
      ]), 'PIN')
      .appendField('all off');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#8B6914');
    this.setTooltip('Turn off all WS2812 RGB LEDs.');
  }
};

// "fan motor pin1 [dropdown] pin2 [dropdown] direction [CW/CCW] speed [number]"
Blockly.Blocks['kb_fan_motor'] = {
  init: function () {
    this.appendDummyInput()
      .appendField('\u2672 fan INA')
      .appendField(new Blockly.FieldDropdown([
        ['IO19', '19'], ['IO18', '18'], ['IO5', '5']
      ]), 'INA')
      .appendField('INB')
      .appendField(new Blockly.FieldDropdown([
        ['IO18', '18'], ['IO19', '19'], ['IO5', '5']
      ]), 'INB');
    this.appendDummyInput()
      .appendField('direction')
      .appendField(new Blockly.FieldDropdown([
        ['CW', 'CW'], ['CCW', 'CCW'], ['STOP', 'STOP']
      ]), 'DIR');
    this.appendValueInput('SPEED')
      .setCheck('Number')
      .appendField('speed');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#8B6914');
    this.setTooltip('Control fan motor direction and speed.');
  }
};

// "joystick pin X [dropdown] Y [dropdown] Button [dropdown]" block
Blockly.Blocks['kb_joystick_read'] = {
  init: function () {
    this.appendDummyInput()
      .appendField('\u2316 joystick read')
      .appendField(new Blockly.FieldDropdown([
        ['X axis', 'X'], ['Y axis', 'Y'], ['Button', 'BTN']
      ]), 'AXIS');
    this.setOutput(true, 'Number');
    this.setColour('#8B6914');
    this.setTooltip('Read joystick X, Y, or button value.');
  }
};

// "compass read heading (degrees)" block
Blockly.Blocks['kb_compass_read'] = {
  init: function () {
    this.appendDummyInput()
      .appendField('\u2316 compass heading (\u00B0)');
    this.setOutput(true, 'Number');
    this.setColour('#8B6914');
    this.setTooltip('Read compass heading in degrees (0-360).');
  }
};

// "IR receive pin [dropdown]" block
Blockly.Blocks['kb_ir_receive'] = {
  init: function () {
    this.appendDummyInput()
      .appendField('\u2B50 IR receive pin')
      .appendField(new Blockly.FieldDropdown([
        ['IO19', '19'], ['IO18', '18'], ['IO5', '5']
      ]), 'PIN');
    this.setOutput(true, 'String');
    this.setColour('#8B6914');
    this.setTooltip('Receive IR remote control code.');
  }
};

// "IR send pin [dropdown] code [text]" block
Blockly.Blocks['kb_ir_send'] = {
  init: function () {
    this.appendDummyInput()
      .appendField('\u2B50 IR send pin')
      .appendField(new Blockly.FieldDropdown([
        ['IO19', '19'], ['IO18', '18'], ['IO5', '5']
      ]), 'PIN');
    this.appendValueInput('CODE')
      .appendField('code');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#8B6914');
    this.setTooltip('Send IR code.');
  }
};

// "WiFi connect SSID [text] password [text]" block
Blockly.Blocks['kb_wifi_connect'] = {
  init: function () {
    this.appendDummyInput()
      .appendField('\u21CC WiFi connect');
    this.appendValueInput('SSID')
      .appendField('SSID');
    this.appendValueInput('PASS')
      .appendField('password');
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#40BCD8');
    this.setTooltip('Connect to WiFi network.');
  }
};

// "WiFi connected?" block
Blockly.Blocks['kb_wifi_connected'] = {
  init: function () {
    this.appendDummyInput()
      .appendField('\u21CC WiFi connected?');
    this.setOutput(true, 'Boolean');
    this.setColour('#40BCD8');
    this.setTooltip('Returns true if WiFi is connected.');
  }
};

// "WiFi get IP" block
Blockly.Blocks['kb_wifi_ip'] = {
  init: function () {
    this.appendDummyInput()
      .appendField('\u21CC WiFi IP address');
    this.setOutput(true, 'String');
    this.setColour('#40BCD8');
    this.setTooltip('Get the WiFi IP address.');
  }
};

// "if [condition] then" block (styled like KidsBlock)
Blockly.Blocks['kb_if_then'] = {
  init: function () {
    this.appendValueInput('CONDITION')
      .setCheck('Boolean')
      .appendField('if');
    this.appendStatementInput('DO')
      .appendField('then');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#FFBF00');
    this.setTooltip('If condition is true, run the blocks inside.');
  }
};

// "if [condition] then / else" block
Blockly.Blocks['kb_if_then_else'] = {
  init: function () {
    this.appendValueInput('CONDITION')
      .setCheck('Boolean')
      .appendField('if');
    this.appendStatementInput('DO')
      .appendField('then');
    this.appendStatementInput('ELSE')
      .appendField('else');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#FFBF00');
    this.setTooltip('If condition is true, run then-blocks. Otherwise run else-blocks.');
  }
};

// "repeat [number] times" block
Blockly.Blocks['kb_repeat'] = {
  init: function () {
    this.appendValueInput('TIMES')
      .setCheck('Number')
      .appendField('repeat');
    this.appendDummyInput()
      .appendField('times');
    this.appendStatementInput('DO');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#FFBF00');
    this.setTooltip('Repeat the blocks inside a specified number of times.');
  }
};

// "set variable [name] to [value]" block
Blockly.Blocks['kb_set_variable'] = {
  init: function () {
    this.appendValueInput('VALUE')
      .appendField('set')
      .appendField(new Blockly.FieldTextInput('myVar'), 'VAR')
      .appendField('to');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#FF6680');
    this.setTooltip('Set a variable value.');
  }
};

// "variable [name]" block (reader)
Blockly.Blocks['kb_get_variable'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldTextInput('myVar'), 'VAR');
    this.setOutput(true, null);
    this.setColour('#FF6680');
    this.setTooltip('Get a variable value.');
  }
};

// "map value [number] from [low1]-[high1] to [low2]-[high2]" block
Blockly.Blocks['kb_map'] = {
  init: function () {
    this.appendValueInput('VALUE')
      .setCheck('Number')
      .appendField('map');
    this.appendValueInput('FROMLOW')
      .setCheck('Number')
      .appendField('from');
    this.appendValueInput('FROMHIGH')
      .setCheck('Number')
      .appendField('-');
    this.appendValueInput('TOLOW')
      .setCheck('Number')
      .appendField('to');
    this.appendValueInput('TOHIGH')
      .setCheck('Number')
      .appendField('-');
    this.setInputsInline(true);
    this.setOutput(true, 'Number');
    this.setColour('#5C68A6');
    this.setTooltip('Map a value from one range to another.');
  }
};

// ===== KidsBlock-Style Code Generators (JavaScript) =====

javascript.javascriptGenerator.forBlock['kb_when_arduino_begin'] = function (block) {
  var code = javascript.javascriptGenerator.statementToCode(block, 'NEXT') || '';
  return '// when Arduino begin\n' + code;
};

javascript.javascriptGenerator.forBlock['kb_forever'] = function (block) {
  var branch = javascript.javascriptGenerator.statementToCode(block, 'DO') || '';
  return 'while (true) {\n' + branch + '}\n';
};

javascript.javascriptGenerator.forBlock['kb_wait_seconds'] = function (block) {
  var seconds = javascript.javascriptGenerator.valueToCode(block, 'SECONDS', javascript.Order.ATOMIC) || '1';
  return 'sensor.wait(' + seconds + ');\n';
};

javascript.javascriptGenerator.forBlock['kb_wait_ms'] = function (block) {
  var ms = javascript.javascriptGenerator.valueToCode(block, 'MS', javascript.Order.ATOMIC) || '1000';
  return 'sensor.wait(' + ms + ' / 1000);\n';
};

javascript.javascriptGenerator.forBlock['kb_led_pin'] = function (block) {
  var pin = block.getFieldValue('PIN');
  var state = block.getFieldValue('STATE');
  return 'sensor.ledBlink(' + pin + ', "' + state + '");\n';
};

javascript.javascriptGenerator.forBlock['kb_pin_mode'] = function (block) {
  var pin = block.getFieldValue('PIN');
  var mode = block.getFieldValue('MODE');
  return '// pinMode(' + pin + ', ' + mode + ')\n';
};

javascript.javascriptGenerator.forBlock['kb_digital_read'] = function (block) {
  var pin = block.getFieldValue('PIN');
  return ['sensor.digitalRead(' + pin + ')', javascript.Order.FUNCTION_CALL];
};

javascript.javascriptGenerator.forBlock['kb_digital_write'] = function (block) {
  var pin = block.getFieldValue('PIN');
  var value = block.getFieldValue('VALUE');
  return 'sensor.digitalWrite(' + pin + ', "' + value + '");\n';
};

javascript.javascriptGenerator.forBlock['kb_analog_read'] = function (block) {
  var pin = block.getFieldValue('PIN');
  return ['sensor.analogRead(' + pin + ')', javascript.Order.FUNCTION_CALL];
};

javascript.javascriptGenerator.forBlock['kb_analog_write'] = function (block) {
  var pin = block.getFieldValue('PIN');
  var value = javascript.javascriptGenerator.valueToCode(block, 'VALUE', javascript.Order.ATOMIC) || '0';
  return 'sensor.analogWrite(' + pin + ', ' + value + ');\n';
};

javascript.javascriptGenerator.forBlock['kb_serial_print'] = function (block) {
  var text = javascript.javascriptGenerator.valueToCode(block, 'TEXT', javascript.Order.ATOMIC) || '""';
  return '_print(' + text + ');\n';
};

javascript.javascriptGenerator.forBlock['kb_serial_println'] = function (block) {
  var text = javascript.javascriptGenerator.valueToCode(block, 'TEXT', javascript.Order.ATOMIC) || '""';
  return '_print(' + text + ');\n';
};

javascript.javascriptGenerator.forBlock['kb_serial_begin'] = function (block) {
  var baud = block.getFieldValue('BAUD');
  return '// Serial.begin(' + baud + ')\n';
};

javascript.javascriptGenerator.forBlock['kb_servo_angle'] = function (block) {
  var pin = block.getFieldValue('PIN');
  var angle = javascript.javascriptGenerator.valueToCode(block, 'ANGLE', javascript.Order.ATOMIC) || '90';
  return 'sensor.servoSet(' + pin + ', ' + angle + ');\n';
};

javascript.javascriptGenerator.forBlock['kb_buzzer_tone'] = function (block) {
  var pin = block.getFieldValue('PIN');
  var freq = block.getFieldValue('FREQ');
  var beat = block.getFieldValue('BEAT');
  return 'sensor.buzzerTone(' + freq + ', ' + beat + ');\n';
};

javascript.javascriptGenerator.forBlock['kb_buzzer_off'] = function (block) {
  return 'sensor.buzzerOff();\n';
};

javascript.javascriptGenerator.forBlock['kb_ultrasonic_distance'] = function (block) {
  return ['sensor.readDistance()', javascript.Order.FUNCTION_CALL];
};

javascript.javascriptGenerator.forBlock['kb_aht20_read'] = function (block) {
  var type = block.getFieldValue('TYPE');
  if (type === 'TEMP') return ['sensor.readTemperature()', javascript.Order.FUNCTION_CALL];
  return ['sensor.readHumidity()', javascript.Order.FUNCTION_CALL];
};

javascript.javascriptGenerator.forBlock['kb_bmp388_read'] = function (block) {
  var type = block.getFieldValue('TYPE');
  if (type === 'PRESSURE') return ['sensor.readPressure()', javascript.Order.FUNCTION_CALL];
  if (type === 'ALTITUDE') return ['sensor.readAltitude()', javascript.Order.FUNCTION_CALL];
  return ['sensor.readTemperature()', javascript.Order.FUNCTION_CALL];
};

javascript.javascriptGenerator.forBlock['kb_oled_init'] = function () {
  return '// OLED init 128x64\n';
};

javascript.javascriptGenerator.forBlock['kb_oled_show'] = function (block) {
  var text = javascript.javascriptGenerator.valueToCode(block, 'TEXT', javascript.Order.ATOMIC) || '""';
  var row = javascript.javascriptGenerator.valueToCode(block, 'ROW', javascript.Order.ATOMIC) || '0';
  return 'sensor.oledPrint(' + text + ', ' + row + ');\n';
};

javascript.javascriptGenerator.forBlock['kb_oled_clear'] = function () {
  return 'sensor.oledClear();\n';
};

javascript.javascriptGenerator.forBlock['kb_pir_detected'] = function (block) {
  return ['sensor.pirMotionDetected()', javascript.Order.FUNCTION_CALL];
};

javascript.javascriptGenerator.forBlock['kb_photoresistor_read'] = function (block) {
  return ['sensor.readLight()', javascript.Order.FUNCTION_CALL];
};

javascript.javascriptGenerator.forBlock['kb_sound_sensor_read'] = function (block) {
  return ['sensor.readSound()', javascript.Order.FUNCTION_CALL];
};

javascript.javascriptGenerator.forBlock['kb_rfid_init'] = function () {
  return '// RFID MFRC522 init\n';
};

javascript.javascriptGenerator.forBlock['kb_rfid_card_detected'] = function () {
  return ['sensor.rfidDetected()', javascript.Order.FUNCTION_CALL];
};

javascript.javascriptGenerator.forBlock['kb_rfid_read_uid'] = function () {
  return ['sensor.rfidRead()', javascript.Order.FUNCTION_CALL];
};

javascript.javascriptGenerator.forBlock['kb_rgb_set'] = function (block) {
  var idx = block.getFieldValue('INDEX');
  var color = block.getFieldValue('COLOR');
  return 'sensor.rgbSet(' + idx + ', "' + color + '");\n';
};

javascript.javascriptGenerator.forBlock['kb_rgb_off'] = function () {
  return 'sensor.rgbOff();\n';
};

javascript.javascriptGenerator.forBlock['kb_fan_motor'] = function (block) {
  var dir = block.getFieldValue('DIR');
  var speed = javascript.javascriptGenerator.valueToCode(block, 'SPEED', javascript.Order.ATOMIC) || '200';
  return 'sensor.fanControl("' + dir + '", ' + speed + ');\n';
};

javascript.javascriptGenerator.forBlock['kb_joystick_read'] = function (block) {
  var axis = block.getFieldValue('AXIS');
  return ['sensor.joystickRead("' + axis + '")', javascript.Order.FUNCTION_CALL];
};

javascript.javascriptGenerator.forBlock['kb_compass_read'] = function () {
  return ['sensor.readCompass()', javascript.Order.FUNCTION_CALL];
};

javascript.javascriptGenerator.forBlock['kb_ir_receive'] = function () {
  return ['sensor.irReceive()', javascript.Order.FUNCTION_CALL];
};

javascript.javascriptGenerator.forBlock['kb_ir_send'] = function (block) {
  var code = javascript.javascriptGenerator.valueToCode(block, 'CODE', javascript.Order.ATOMIC) || '""';
  return 'sensor.irSend(' + code + ');\n';
};

javascript.javascriptGenerator.forBlock['kb_wifi_connect'] = function (block) {
  var ssid = javascript.javascriptGenerator.valueToCode(block, 'SSID', javascript.Order.ATOMIC) || '""';
  var pass = javascript.javascriptGenerator.valueToCode(block, 'PASS', javascript.Order.ATOMIC) || '""';
  return 'sensor.wifiConnect(' + ssid + ', ' + pass + ');\n';
};

javascript.javascriptGenerator.forBlock['kb_wifi_connected'] = function () {
  return ['sensor.wifiConnected()', javascript.Order.FUNCTION_CALL];
};

javascript.javascriptGenerator.forBlock['kb_wifi_ip'] = function () {
  return ['"192.168.1.1"', javascript.Order.ATOMIC];
};

javascript.javascriptGenerator.forBlock['kb_if_then'] = function (block) {
  var condition = javascript.javascriptGenerator.valueToCode(block, 'CONDITION', javascript.Order.NONE) || 'false';
  var branch = javascript.javascriptGenerator.statementToCode(block, 'DO') || '';
  return 'if (' + condition + ') {\n' + branch + '}\n';
};

javascript.javascriptGenerator.forBlock['kb_if_then_else'] = function (block) {
  var condition = javascript.javascriptGenerator.valueToCode(block, 'CONDITION', javascript.Order.NONE) || 'false';
  var branch = javascript.javascriptGenerator.statementToCode(block, 'DO') || '';
  var elseBranch = javascript.javascriptGenerator.statementToCode(block, 'ELSE') || '';
  return 'if (' + condition + ') {\n' + branch + '} else {\n' + elseBranch + '}\n';
};

javascript.javascriptGenerator.forBlock['kb_repeat'] = function (block) {
  var times = javascript.javascriptGenerator.valueToCode(block, 'TIMES', javascript.Order.ATOMIC) || '10';
  var branch = javascript.javascriptGenerator.statementToCode(block, 'DO') || '';
  return 'for (var _i = 0; _i < ' + times + '; _i++) {\n' + branch + '}\n';
};

javascript.javascriptGenerator.forBlock['kb_set_variable'] = function (block) {
  var varName = block.getFieldValue('VAR');
  var value = javascript.javascriptGenerator.valueToCode(block, 'VALUE', javascript.Order.ASSIGNMENT) || '0';
  return 'var ' + varName + ' = ' + value + ';\n';
};

javascript.javascriptGenerator.forBlock['kb_get_variable'] = function (block) {
  var varName = block.getFieldValue('VAR');
  return [varName, javascript.Order.ATOMIC];
};

javascript.javascriptGenerator.forBlock['kb_map'] = function (block) {
  var value = javascript.javascriptGenerator.valueToCode(block, 'VALUE', javascript.Order.ATOMIC) || '0';
  var fromLow = javascript.javascriptGenerator.valueToCode(block, 'FROMLOW', javascript.Order.ATOMIC) || '0';
  var fromHigh = javascript.javascriptGenerator.valueToCode(block, 'FROMHIGH', javascript.Order.ATOMIC) || '1023';
  var toLow = javascript.javascriptGenerator.valueToCode(block, 'TOLOW', javascript.Order.ATOMIC) || '0';
  var toHigh = javascript.javascriptGenerator.valueToCode(block, 'TOHIGH', javascript.Order.ATOMIC) || '255';
  return ['Math.round((' + value + ' - ' + fromLow + ') * (' + toHigh + ' - ' + toLow + ') / (' + fromHigh + ' - ' + fromLow + ') + ' + toLow + ')', javascript.Order.FUNCTION_CALL];
};

// ===== KidsBlock-Style Code Generators (Python / MicroPython) =====

python.pythonGenerator.forBlock['kb_when_arduino_begin'] = function (block) {
  return '# when Arduino begin\n';
};

python.pythonGenerator.forBlock['kb_forever'] = function (block) {
  var branch = python.pythonGenerator.statementToCode(block, 'DO') || '  pass\n';
  return 'while True:\n' + branch;
};

python.pythonGenerator.forBlock['kb_wait_seconds'] = function (block) {
  var seconds = python.pythonGenerator.valueToCode(block, 'SECONDS', python.Order.ATOMIC) || '1';
  return 'time.sleep(' + seconds + ')\n';
};

python.pythonGenerator.forBlock['kb_wait_ms'] = function (block) {
  var ms = python.pythonGenerator.valueToCode(block, 'MS', python.Order.ATOMIC) || '1000';
  return 'time.sleep_ms(' + ms + ')\n';
};

python.pythonGenerator.forBlock['kb_led_pin'] = function (block) {
  var pin = block.getFieldValue('PIN');
  var state = block.getFieldValue('STATE');
  var val = state === 'HIGH' ? '1' : '0';
  return 'pin' + pin + ' = Pin(' + pin + ', Pin.OUT)\npin' + pin + '.value(' + val + ')\n';
};

python.pythonGenerator.forBlock['kb_pin_mode'] = function (block) {
  var pin = block.getFieldValue('PIN');
  var mode = block.getFieldValue('MODE');
  var pyMode = mode === 'OUTPUT' ? 'Pin.OUT' : 'Pin.IN';
  return 'pin' + pin + ' = Pin(' + pin + ', ' + pyMode + ')\n';
};

python.pythonGenerator.forBlock['kb_digital_read'] = function (block) {
  var pin = block.getFieldValue('PIN');
  return ['Pin(' + pin + ', Pin.IN).value()', python.Order.FUNCTION_CALL];
};

python.pythonGenerator.forBlock['kb_digital_write'] = function (block) {
  var pin = block.getFieldValue('PIN');
  var value = block.getFieldValue('VALUE');
  var val = value === 'HIGH' ? '1' : '0';
  return 'Pin(' + pin + ', Pin.OUT).value(' + val + ')\n';
};

python.pythonGenerator.forBlock['kb_analog_read'] = function (block) {
  var pin = block.getFieldValue('PIN');
  return ['ADC(Pin(' + pin + ')).read()', python.Order.FUNCTION_CALL];
};

python.pythonGenerator.forBlock['kb_analog_write'] = function (block) {
  var pin = block.getFieldValue('PIN');
  var value = python.pythonGenerator.valueToCode(block, 'VALUE', python.Order.ATOMIC) || '0';
  return 'PWM(Pin(' + pin + ')).duty(' + value + ')\n';
};

python.pythonGenerator.forBlock['kb_serial_print'] = function (block) {
  var text = python.pythonGenerator.valueToCode(block, 'TEXT', python.Order.ATOMIC) || '""';
  return 'print(' + text + ', end="")\n';
};

python.pythonGenerator.forBlock['kb_serial_println'] = function (block) {
  var text = python.pythonGenerator.valueToCode(block, 'TEXT', python.Order.ATOMIC) || '""';
  return 'print(' + text + ')\n';
};

python.pythonGenerator.forBlock['kb_serial_begin'] = function () {
  return '# Serial auto-initialized in MicroPython\n';
};

python.pythonGenerator.forBlock['kb_servo_angle'] = function (block) {
  var pin = block.getFieldValue('PIN');
  var angle = python.pythonGenerator.valueToCode(block, 'ANGLE', python.Order.ATOMIC) || '90';
  return 'servo = Servo(Pin(' + pin + '))\nservo.write_angle(' + angle + ')\n';
};

python.pythonGenerator.forBlock['kb_buzzer_tone'] = function (block) {
  var pin = block.getFieldValue('PIN');
  var freq = block.getFieldValue('FREQ');
  var beat = block.getFieldValue('BEAT');
  return 'buzzer = PWM(Pin(' + pin + '))\nbuzzer.freq(' + freq + ')\ntime.sleep(' + beat + ')\n';
};

python.pythonGenerator.forBlock['kb_buzzer_off'] = function (block) {
  var pin = block.getFieldValue('PIN');
  return 'PWM(Pin(' + pin + ')).deinit()\n';
};

python.pythonGenerator.forBlock['kb_ultrasonic_distance'] = function (block) {
  var trig = block.getFieldValue('TRIG');
  var echo = block.getFieldValue('ECHO');
  return ['ultrasonic_distance(' + trig + ', ' + echo + ')', python.Order.FUNCTION_CALL];
};

python.pythonGenerator.forBlock['kb_aht20_read'] = function (block) {
  var type = block.getFieldValue('TYPE');
  if (type === 'TEMP') return ['aht20.temperature()', python.Order.FUNCTION_CALL];
  return ['aht20.humidity()', python.Order.FUNCTION_CALL];
};

python.pythonGenerator.forBlock['kb_bmp388_read'] = function (block) {
  var type = block.getFieldValue('TYPE');
  if (type === 'PRESSURE') return ['bmp388.pressure()', python.Order.FUNCTION_CALL];
  if (type === 'ALTITUDE') return ['bmp388.altitude()', python.Order.FUNCTION_CALL];
  return ['bmp388.temperature()', python.Order.FUNCTION_CALL];
};

python.pythonGenerator.forBlock['kb_oled_init'] = function () {
  return 'oled = SSD1306_I2C(128, 64, I2C(scl=Pin(22), sda=Pin(21)))\n';
};

python.pythonGenerator.forBlock['kb_oled_show'] = function (block) {
  var text = python.pythonGenerator.valueToCode(block, 'TEXT', python.Order.ATOMIC) || '""';
  var row = python.pythonGenerator.valueToCode(block, 'ROW', python.Order.ATOMIC) || '0';
  return 'oled.text(str(' + text + '), 0, ' + row + ' * 10)\noled.show()\n';
};

python.pythonGenerator.forBlock['kb_oled_clear'] = function () {
  return 'oled.fill(0)\noled.show()\n';
};

python.pythonGenerator.forBlock['kb_pir_detected'] = function () {
  return ['pir.value()', python.Order.FUNCTION_CALL];
};

python.pythonGenerator.forBlock['kb_photoresistor_read'] = function (block) {
  var pin = block.getFieldValue('PIN');
  return ['ADC(Pin(' + pin + ')).read()', python.Order.FUNCTION_CALL];
};

python.pythonGenerator.forBlock['kb_sound_sensor_read'] = function (block) {
  var pin = block.getFieldValue('PIN');
  return ['ADC(Pin(' + pin + ')).read()', python.Order.FUNCTION_CALL];
};

python.pythonGenerator.forBlock['kb_rfid_init'] = function () {
  return 'rfid = MFRC522(spi_id=2, sck=18, miso=19, mosi=23, cs=5, rst=27)\n';
};

python.pythonGenerator.forBlock['kb_rfid_card_detected'] = function () {
  return ['rfid.request(rfid.REQIDL)[0] == rfid.OK', python.Order.COMPARISON];
};

python.pythonGenerator.forBlock['kb_rfid_read_uid'] = function () {
  return ['rfid.anticoll()[1]', python.Order.FUNCTION_CALL];
};

python.pythonGenerator.forBlock['kb_rgb_set'] = function (block) {
  var pin = block.getFieldValue('PIN');
  var idx = block.getFieldValue('INDEX');
  var color = block.getFieldValue('COLOR');
  var r = parseInt(color.slice(1, 3), 16);
  var g = parseInt(color.slice(3, 5), 16);
  var b = parseInt(color.slice(5, 7), 16);
  return 'np = NeoPixel(Pin(' + pin + '), 6)\nnp[' + idx + '] = (' + r + ', ' + g + ', ' + b + ')\nnp.write()\n';
};

python.pythonGenerator.forBlock['kb_rgb_off'] = function (block) {
  var pin = block.getFieldValue('PIN');
  return 'np = NeoPixel(Pin(' + pin + '), 6)\nnp.fill((0, 0, 0))\nnp.write()\n';
};

python.pythonGenerator.forBlock['kb_fan_motor'] = function (block) {
  var ina = block.getFieldValue('INA');
  var inb = block.getFieldValue('INB');
  var dir = block.getFieldValue('DIR');
  var speed = python.pythonGenerator.valueToCode(block, 'SPEED', python.Order.ATOMIC) || '200';
  if (dir === 'STOP') return 'Pin(' + ina + ', Pin.OUT).value(0)\nPin(' + inb + ', Pin.OUT).value(0)\n';
  if (dir === 'CW') return 'Pin(' + ina + ', Pin.OUT).value(1)\nPWM(Pin(' + inb + ')).duty(' + speed + ')\n';
  return 'Pin(' + ina + ', Pin.OUT).value(0)\nPWM(Pin(' + inb + ')).duty(' + speed + ')\n';
};

python.pythonGenerator.forBlock['kb_joystick_read'] = function (block) {
  var axis = block.getFieldValue('AXIS');
  if (axis === 'BTN') return ['Pin(joystick_btn, Pin.IN).value()', python.Order.FUNCTION_CALL];
  return ['ADC(Pin(joystick_' + axis.toLowerCase() + ')).read()', python.Order.FUNCTION_CALL];
};

python.pythonGenerator.forBlock['kb_compass_read'] = function () {
  return ['compass.heading()', python.Order.FUNCTION_CALL];
};

python.pythonGenerator.forBlock['kb_ir_receive'] = function () {
  return ['ir_receiver.read()', python.Order.FUNCTION_CALL];
};

python.pythonGenerator.forBlock['kb_ir_send'] = function (block) {
  var code = python.pythonGenerator.valueToCode(block, 'CODE', python.Order.ATOMIC) || '""';
  return 'ir_sender.send(' + code + ')\n';
};

python.pythonGenerator.forBlock['kb_wifi_connect'] = function (block) {
  var ssid = python.pythonGenerator.valueToCode(block, 'SSID', python.Order.ATOMIC) || '""';
  var pass = python.pythonGenerator.valueToCode(block, 'PASS', python.Order.ATOMIC) || '""';
  return 'import network\nwlan = network.WLAN(network.STA_IF)\nwlan.active(True)\nwlan.connect(' + ssid + ', ' + pass + ')\n';
};

python.pythonGenerator.forBlock['kb_wifi_connected'] = function () {
  return ['wlan.isconnected()', python.Order.FUNCTION_CALL];
};

python.pythonGenerator.forBlock['kb_wifi_ip'] = function () {
  return ['wlan.ifconfig()[0]', python.Order.FUNCTION_CALL];
};

python.pythonGenerator.forBlock['kb_if_then'] = function (block) {
  var condition = python.pythonGenerator.valueToCode(block, 'CONDITION', python.Order.NONE) || 'False';
  var branch = python.pythonGenerator.statementToCode(block, 'DO') || '  pass\n';
  return 'if ' + condition + ':\n' + branch;
};

python.pythonGenerator.forBlock['kb_if_then_else'] = function (block) {
  var condition = python.pythonGenerator.valueToCode(block, 'CONDITION', python.Order.NONE) || 'False';
  var branch = python.pythonGenerator.statementToCode(block, 'DO') || '  pass\n';
  var elseBranch = python.pythonGenerator.statementToCode(block, 'ELSE') || '  pass\n';
  return 'if ' + condition + ':\n' + branch + 'else:\n' + elseBranch;
};

python.pythonGenerator.forBlock['kb_repeat'] = function (block) {
  var times = python.pythonGenerator.valueToCode(block, 'TIMES', python.Order.ATOMIC) || '10';
  var branch = python.pythonGenerator.statementToCode(block, 'DO') || '  pass\n';
  return 'for _i in range(' + times + '):\n' + branch;
};

python.pythonGenerator.forBlock['kb_set_variable'] = function (block) {
  var varName = block.getFieldValue('VAR');
  var value = python.pythonGenerator.valueToCode(block, 'VALUE', python.Order.NONE) || '0';
  return varName + ' = ' + value + '\n';
};

python.pythonGenerator.forBlock['kb_get_variable'] = function (block) {
  var varName = block.getFieldValue('VAR');
  return [varName, python.Order.ATOMIC];
};

python.pythonGenerator.forBlock['kb_map'] = function (block) {
  var value = python.pythonGenerator.valueToCode(block, 'VALUE', python.Order.ATOMIC) || '0';
  var fromLow = python.pythonGenerator.valueToCode(block, 'FROMLOW', python.Order.ATOMIC) || '0';
  var fromHigh = python.pythonGenerator.valueToCode(block, 'FROMHIGH', python.Order.ATOMIC) || '1023';
  var toLow = python.pythonGenerator.valueToCode(block, 'TOLOW', python.Order.ATOMIC) || '0';
  var toHigh = python.pythonGenerator.valueToCode(block, 'TOHIGH', python.Order.ATOMIC) || '255';
  return ['int((' + value + ' - ' + fromLow + ') * (' + toHigh + ' - ' + toLow + ') / (' + fromHigh + ' - ' + fromLow + ') + ' + toLow + ')', python.Order.FUNCTION_CALL];
};


// ===== Robot Movement Blocks =====

Blockly.Blocks['robot_move_forward'] = {
  init: function () {
    this.appendValueInput('STEPS')
      .setCheck('Number')
      .appendField('move forward');
    this.appendDummyInput().appendField('steps');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#E6491E');
    this.setTooltip('Move the robot forward by a number of steps');
  }
};

Blockly.Blocks['robot_move_backward'] = {
  init: function () {
    this.appendValueInput('STEPS')
      .setCheck('Number')
      .appendField('move backward');
    this.appendDummyInput().appendField('steps');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#E6491E');
    this.setTooltip('Move the robot backward by a number of steps');
  }
};

Blockly.Blocks['robot_turn_left'] = {
  init: function () {
    this.appendValueInput('DEGREES')
      .setCheck('Number')
      .appendField('turn left');
    this.appendDummyInput().appendField('degrees');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#E6491E');
    this.setTooltip('Turn the robot left by degrees');
  }
};

Blockly.Blocks['robot_turn_right'] = {
  init: function () {
    this.appendValueInput('DEGREES')
      .setCheck('Number')
      .appendField('turn right');
    this.appendDummyInput().appendField('degrees');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#E6491E');
    this.setTooltip('Turn the robot right by degrees');
  }
};

Blockly.Blocks['robot_stop'] = {
  init: function () {
    this.appendDummyInput().appendField('stop robot');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#E6491E');
    this.setTooltip('Stop the robot');
  }
};

Blockly.Blocks['robot_set_speed'] = {
  init: function () {
    this.appendValueInput('SPEED')
      .setCheck('Number')
      .appendField('set speed to');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#E6491E');
    this.setTooltip('Set the robot speed (0-100)');
  }
};

Blockly.Blocks['robot_wait'] = {
  init: function () {
    this.appendValueInput('SECONDS')
      .setCheck('Number')
      .appendField('wait');
    this.appendDummyInput().appendField('seconds');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#E6491E');
    this.setTooltip('Wait for a number of seconds');
  }
};

// =============================================
// Sensor Blocks — KidsBlock Tutorial 3.1–3.38
// =============================================

// --- 3.1 LED Blink ---
Blockly.Blocks['sensor_led_blink'] = {
  init: function () {
    this.appendDummyInput()
      .appendField('LED blink pin')
      .appendField(new Blockly.FieldDropdown([
        ['2', '2'], ['4', '4'], ['5', '5'], ['13', '13'], ['15', '15']
      ]), 'PIN');
    this.appendValueInput('DELAY').setCheck('Number').appendField('delay ms');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#D4A017');
    this.setTooltip('3.1 LED Blink — Blink an LED on the selected pin');
  }
};

// --- 3.2 Sound Sensor ---
Blockly.Blocks['sensor_read_sound'] = {
  init: function () {
    this.appendDummyInput().appendField('read sound sensor');
    this.setOutput(true, 'Number');
    this.setColour('#D4A017');
    this.setTooltip('3.2 Sound Sensor — Read sound level (0-4095). Uses microphone + LM358 amplifier');
  }
};

// --- 3.3 PIR Motion Sensor ---
Blockly.Blocks['sensor_pir_motion'] = {
  init: function () {
    this.appendDummyInput().appendField('PIR motion detected?');
    this.setOutput(true, 'Boolean');
    this.setColour('#D4A017');
    this.setTooltip('3.3 PIR Motion Sensor — Detects infrared from moving humans/animals');
  }
};

// --- 3.4 Power Amplifier / Passive Buzzer ---
Blockly.Blocks['sensor_buzzer_tone'] = {
  init: function () {
    this.appendDummyInput()
      .appendField('buzzer play tone')
      .appendField(new Blockly.FieldDropdown([
        ['C', '262'], ['D', '294'], ['E', '330'], ['F', '349'],
        ['G', '392'], ['A', '440'], ['B', '494'], ['C5', '523']
      ]), 'TONE');
    this.appendValueInput('DURATION').setCheck('Number').appendField('beat');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#D4A017');
    this.setTooltip('3.4 Passive Buzzer — Play a musical tone at specified beat');
  }
};

Blockly.Blocks['sensor_buzzer_off'] = {
  init: function () {
    this.appendDummyInput().appendField('buzzer off');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#D4A017');
    this.setTooltip('3.4 Passive Buzzer — Stop buzzer');
  }
};

// --- 3.5 Photoresistor ---
Blockly.Blocks['sensor_read_light'] = {
  init: function () {
    this.appendDummyInput().appendField('read light sensor');
    this.setOutput(true, 'Number');
    this.setColour('#D4A017');
    this.setTooltip('3.5 Photoresistor — Read light level (0-4095). Resistance varies with light');
  }
};

// --- 3.6 AD Button ---
Blockly.Blocks['sensor_ad_button'] = {
  init: function () {
    this.appendDummyInput().appendField('read AD button value');
    this.setOutput(true, 'Number');
    this.setColour('#D4A017');
    this.setTooltip('3.6 AD Button — Read analog value to identify which button is pressed');
  }
};

Blockly.Blocks['sensor_button_pressed'] = {
  init: function () {
    this.appendDummyInput()
      .appendField('button')
      .appendField(new Blockly.FieldDropdown([
        ['A', 'A'], ['B', 'B'], ['C', 'C']
      ]), 'BUTTON')
      .appendField('pressed?');
    this.setOutput(true, 'Boolean');
    this.setColour('#D4A017');
    this.setTooltip('Check if a button is pressed');
  }
};

// --- 3.7 Ultrasonic Sensor ---
Blockly.Blocks['sensor_read_distance'] = {
  init: function () {
    this.appendDummyInput().appendField('read distance sensor');
    this.setOutput(true, 'Number');
    this.setColour('#D4A017');
    this.setTooltip('3.7 Ultrasonic Sensor — Read distance in cm (2-400cm range)');
  }
};

// --- 3.8 RFID Sensor ---
Blockly.Blocks['sensor_rfid_read'] = {
  init: function () {
    this.appendDummyInput().appendField('read RFID card UID');
    this.setOutput(true, 'String');
    this.setColour('#D4A017');
    this.setTooltip('3.8 RFID Sensor — Read the UID of an RFID card/tag');
  }
};

Blockly.Blocks['sensor_rfid_detected'] = {
  init: function () {
    this.appendDummyInput().appendField('RFID card detected?');
    this.setOutput(true, 'Boolean');
    this.setColour('#D4A017');
    this.setTooltip('3.8 RFID Sensor — Check if an RFID card is present');
  }
};

// --- 3.9 Servo ---
Blockly.Blocks['sensor_servo_set'] = {
  init: function () {
    this.appendDummyInput()
      .appendField('set servo pin')
      .appendField(new Blockly.FieldDropdown([
        ['4', '4'], ['5', '5'], ['12', '12'], ['13', '13'], ['14', '14'], ['15', '15']
      ]), 'PIN');
    this.appendValueInput('ANGLE').setCheck('Number').appendField('angle');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#D4A017');
    this.setTooltip('3.9 Servo — Set servo angle (0-180 degrees)');
  }
};

// --- 3.10 Temperature and Humidity Sensor (AHT20) ---
Blockly.Blocks['sensor_read_temperature'] = {
  init: function () {
    this.appendDummyInput().appendField('read temperature sensor');
    this.setOutput(true, 'Number');
    this.setColour('#D4A017');
    this.setTooltip('3.10 AHT20 Temperature Sensor — Read temperature in Celsius (accuracy ±0.3°C)');
  }
};

Blockly.Blocks['sensor_read_humidity'] = {
  init: function () {
    this.appendDummyInput().appendField('read humidity sensor');
    this.setOutput(true, 'Number');
    this.setColour('#D4A017');
    this.setTooltip('3.10 AHT20 Humidity Sensor — Read humidity percentage (accuracy ±2%RH)');
  }
};

// --- 3.11 Pressure Sensor (BMP388) ---
Blockly.Blocks['sensor_read_pressure'] = {
  init: function () {
    this.appendDummyInput().appendField('read pressure sensor');
    this.setOutput(true, 'Number');
    this.setColour('#D4A017');
    this.setTooltip('3.11 BMP388 Pressure Sensor — Read atmospheric pressure in hPa');
  }
};

Blockly.Blocks['sensor_read_altitude'] = {
  init: function () {
    this.appendDummyInput().appendField('read altitude sensor');
    this.setOutput(true, 'Number');
    this.setColour('#D4A017');
    this.setTooltip('3.11 BMP388 — Read estimated altitude in meters');
  }
};

// --- 3.12 Geomagnetic Sensor (AK8975) ---
Blockly.Blocks['sensor_read_compass'] = {
  init: function () {
    this.appendDummyInput().appendField('read compass heading');
    this.setOutput(true, 'Number');
    this.setColour('#D4A017');
    this.setTooltip('3.12 AK8975 Geomagnetic Sensor — Read compass heading (0-360 degrees)');
  }
};

Blockly.Blocks['sensor_read_magnetic'] = {
  init: function () {
    this.appendDummyInput()
      .appendField('read magnetic')
      .appendField(new Blockly.FieldDropdown([
        ['X', 'X'], ['Y', 'Y'], ['Z', 'Z']
      ]), 'AXIS');
    this.setOutput(true, 'Number');
    this.setColour('#D4A017');
    this.setTooltip('3.12 AK8975 — Read magnetic field value on X/Y/Z axis');
  }
};

// --- 3.13 Fan Motor Module ---
Blockly.Blocks['sensor_fan_control'] = {
  init: function () {
    this.appendDummyInput()
      .appendField('fan motor')
      .appendField(new Blockly.FieldDropdown([
        ['forward', 'FORWARD'], ['reverse', 'REVERSE'], ['stop', 'STOP']
      ]), 'DIRECTION');
    this.appendValueInput('SPEED').setCheck('Number').appendField('speed');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#D4A017');
    this.setTooltip('3.13 Fan Motor — Control motor direction and speed (0-255)');
  }
};

// --- 3.14 Servo (270-degree) ---
Blockly.Blocks['sensor_servo270_set'] = {
  init: function () {
    this.appendDummyInput().appendField('set 270° servo');
    this.appendValueInput('ANGLE').setCheck('Number').appendField('angle');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#D4A017');
    this.setTooltip('3.14 Servo 270° — Set servo angle (0-270 degrees)');
  }
};

// --- 3.15 WS2812 RGB LED ---
Blockly.Blocks['sensor_rgb_set'] = {
  init: function () {
    this.appendDummyInput()
      .appendField('set RGB LED #')
      .appendField(new Blockly.FieldDropdown([
        ['1', '0'], ['2', '1'], ['3', '2'], ['4', '3'],
        ['5', '4'], ['6', '5'], ['7', '6'], ['8', '7'],
        ['9', '8'], ['10', '9'], ['11', '10'], ['12', '11']
      ]), 'INDEX')
      .appendField('color')
      .appendField(new Blockly.FieldColour('#ff0000'), 'COLOUR');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#D4A017');
    this.setTooltip('3.15 WS2812 RGB LED — Set individual LED color');
  }
};

Blockly.Blocks['sensor_rgb_all'] = {
  init: function () {
    this.appendDummyInput()
      .appendField('set all RGB LEDs color')
      .appendField(new Blockly.FieldColour('#0000ff'), 'COLOUR');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#D4A017');
    this.setTooltip('3.15 WS2812 — Set all LEDs to one color');
  }
};

Blockly.Blocks['sensor_rgb_off'] = {
  init: function () {
    this.appendDummyInput().appendField('turn off all RGB LEDs');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#D4A017');
    this.setTooltip('3.15 WS2812 — Turn off all RGB LEDs');
  }
};

// --- 3.16 OLED Display ---
Blockly.Blocks['sensor_oled_print'] = {
  init: function () {
    this.appendValueInput('TEXT').setCheck('String').appendField('OLED print');
    this.appendValueInput('ROW').setCheck('Number').appendField('row');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#D4A017');
    this.setTooltip('3.16 OLED Display — Print text on specified row (0-7)');
  }
};

Blockly.Blocks['sensor_oled_clear'] = {
  init: function () {
    this.appendDummyInput().appendField('OLED clear');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#D4A017');
    this.setTooltip('3.16 OLED Display — Clear the OLED screen');
  }
};

// --- 3.17 IR Receiver ---
Blockly.Blocks['sensor_ir_receive'] = {
  init: function () {
    this.appendDummyInput().appendField('IR receive code');
    this.setOutput(true, 'String');
    this.setColour('#D4A017');
    this.setTooltip('3.17 IR Receiver — Read infrared remote control code');
  }
};

// --- 3.18 IR Emitter ---
Blockly.Blocks['sensor_ir_send'] = {
  init: function () {
    this.appendValueInput('CODE').setCheck('String').appendField('IR send code');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#D4A017');
    this.setTooltip('3.18 IR Emitter — Send infrared signal code');
  }
};

// --- 3.19 Joystick ---
Blockly.Blocks['sensor_joystick_read'] = {
  init: function () {
    this.appendDummyInput()
      .appendField('joystick')
      .appendField(new Blockly.FieldDropdown([
        ['X axis', 'X'], ['Y axis', 'Y'], ['button', 'BTN']
      ]), 'AXIS');
    this.setOutput(true, 'Number');
    this.setColour('#D4A017');
    this.setTooltip('3.19 Joystick — Read X (0-4095), Y (0-4095), or Button (0/1)');
  }
};

// --- 3.20 Acceleration Sensor (SC7A20) ---
Blockly.Blocks['sensor_accel_read'] = {
  init: function () {
    this.appendDummyInput()
      .appendField('acceleration')
      .appendField(new Blockly.FieldDropdown([
        ['X', 'X'], ['Y', 'Y'], ['Z', 'Z']
      ]), 'AXIS');
    this.setOutput(true, 'Number');
    this.setColour('#D4A017');
    this.setTooltip('3.20 SC7A20 Acceleration Sensor — Read acceleration on X/Y/Z axis');
  }
};

// --- 3.21 Potentiometer ---
Blockly.Blocks['sensor_potentiometer'] = {
  init: function () {
    this.appendDummyInput().appendField('read potentiometer');
    this.setOutput(true, 'Number');
    this.setColour('#D4A017');
    this.setTooltip('3.21 Potentiometer — Read analog value (0-4095)');
  }
};

// --- 3.22 Reed Switch ---
Blockly.Blocks['sensor_reed_switch'] = {
  init: function () {
    this.appendDummyInput().appendField('reed switch magnet detected?');
    this.setOutput(true, 'Boolean');
    this.setColour('#D4A017');
    this.setTooltip('3.22 Reed Switch — Detects nearby magnetic field');
  }
};

// --- 3.23 Hall Sensor ---
Blockly.Blocks['sensor_hall'] = {
  init: function () {
    this.appendDummyInput().appendField('read Hall sensor');
    this.setOutput(true, 'Number');
    this.setColour('#D4A017');
    this.setTooltip('3.23 Hall Sensor — Read magnetic field strength value');
  }
};

// --- 3.24 Flame Sensor ---
Blockly.Blocks['sensor_flame'] = {
  init: function () {
    this.appendDummyInput().appendField('read flame sensor');
    this.setOutput(true, 'Number');
    this.setColour('#D4A017');
    this.setTooltip('3.24 Flame Sensor — Read flame/fire intensity (0-4095)');
  }
};

Blockly.Blocks['sensor_flame_detected'] = {
  init: function () {
    this.appendDummyInput().appendField('flame detected?');
    this.setOutput(true, 'Boolean');
    this.setColour('#D4A017');
    this.setTooltip('3.24 Flame Sensor — Check if flame is detected');
  }
};

// --- 3.25 Steam/Water Sensor ---
Blockly.Blocks['sensor_steam'] = {
  init: function () {
    this.appendDummyInput().appendField('read steam/water sensor');
    this.setOutput(true, 'Number');
    this.setColour('#D4A017');
    this.setTooltip('3.25 Steam Sensor — Read water/rain level (0-4095)');
  }
};

// --- 3.26 UV Sensor ---
Blockly.Blocks['sensor_uv'] = {
  init: function () {
    this.appendDummyInput().appendField('read UV sensor');
    this.setOutput(true, 'Number');
    this.setColour('#D4A017');
    this.setTooltip('3.26 UV Sensor — Read ultraviolet index (0-15)');
  }
};

// --- 3.27 Traffic Light Module ---
Blockly.Blocks['sensor_traffic_light'] = {
  init: function () {
    this.appendDummyInput()
      .appendField('traffic light')
      .appendField(new Blockly.FieldDropdown([
        ['red', 'RED'], ['yellow', 'YELLOW'], ['green', 'GREEN']
      ]), 'COLOR')
      .appendField(new Blockly.FieldDropdown([
        ['ON', 'ON'], ['OFF', 'OFF']
      ]), 'STATE');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#D4A017');
    this.setTooltip('3.27 Traffic Light — Control red/yellow/green LED');
  }
};

// --- 3.28 Relay Module ---
Blockly.Blocks['sensor_relay'] = {
  init: function () {
    this.appendDummyInput()
      .appendField('relay')
      .appendField(new Blockly.FieldDropdown([
        ['ON', 'ON'], ['OFF', 'OFF']
      ]), 'STATE');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#D4A017');
    this.setTooltip('3.28 Relay Module — Switch relay on/off to control external devices');
  }
};

// --- 3.29 Button Module ---
Blockly.Blocks['sensor_button_module'] = {
  init: function () {
    this.appendDummyInput().appendField('button module pressed?');
    this.setOutput(true, 'Boolean');
    this.setColour('#D4A017');
    this.setTooltip('3.29 Button Module — Check if the button module is pressed');
  }
};

// --- 3.30 Tilt Sensor ---
Blockly.Blocks['sensor_tilt'] = {
  init: function () {
    this.appendDummyInput().appendField('tilt sensor tilted?');
    this.setOutput(true, 'Boolean');
    this.setColour('#D4A017');
    this.setTooltip('3.30 Tilt Sensor — Detects if tilted/shaken');
  }
};

// --- 3.31 Obstacle Avoidance Sensor ---
Blockly.Blocks['sensor_obstacle'] = {
  init: function () {
    this.appendDummyInput().appendField('obstacle detected?');
    this.setOutput(true, 'Boolean');
    this.setColour('#D4A017');
    this.setTooltip('3.31 Obstacle Avoidance Sensor — IR proximity detection');
  }
};

// --- 3.32 Line Tracking Sensor ---
Blockly.Blocks['sensor_line_detected'] = {
  init: function () {
    this.appendDummyInput()
      .appendField('line detected on')
      .appendField(new Blockly.FieldDropdown([
        ['left', 'LEFT'], ['right', 'RIGHT'], ['center', 'CENTER']
      ]), 'POSITION');
    this.setOutput(true, 'Boolean');
    this.setColour('#D4A017');
    this.setTooltip('3.32 Line Tracking Sensor — Detect line on left/right/center');
  }
};

// --- 3.33 WiFi Connect ---
Blockly.Blocks['sensor_wifi_connect'] = {
  init: function () {
    this.appendDummyInput().appendField('WiFi connect to');
    this.appendValueInput('SSID').setCheck('String').appendField('SSID');
    this.appendValueInput('PASS').setCheck('String').appendField('password');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#D4A017');
    this.setTooltip('3.33 WiFi — Connect to a WiFi network (ESP32)');
  }
};

Blockly.Blocks['sensor_wifi_connected'] = {
  init: function () {
    this.appendDummyInput().appendField('WiFi connected?');
    this.setOutput(true, 'Boolean');
    this.setColour('#D4A017');
    this.setTooltip('3.33 WiFi — Check if WiFi is connected');
  }
};

// --- 3.34 WiFi Real-time Display ---
Blockly.Blocks['sensor_wifi_send_data'] = {
  init: function () {
    this.appendValueInput('KEY').setCheck('String').appendField('WiFi send key');
    this.appendValueInput('VALUE').setCheck(null).appendField('value');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#D4A017');
    this.setTooltip('3.34 WiFi Display — Send sensor data to web dashboard');
  }
};

// --- 3.35 WiFi Control ---
Blockly.Blocks['sensor_wifi_receive'] = {
  init: function () {
    this.appendDummyInput().appendField('WiFi receive command');
    this.setOutput(true, 'String');
    this.setColour('#D4A017');
    this.setTooltip('3.35 WiFi Control — Receive control command via WiFi');
  }
};

// --- 3.36 Smart Home (Combined Project) ---
Blockly.Blocks['sensor_smart_home_mode'] = {
  init: function () {
    this.appendDummyInput()
      .appendField('smart home mode')
      .appendField(new Blockly.FieldDropdown([
        ['auto', 'AUTO'], ['manual', 'MANUAL'], ['away', 'AWAY']
      ]), 'MODE');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#D4A017');
    this.setTooltip('3.36 Smart Home — Set home automation mode');
  }
};

// --- 3.37 Weather Station (Combined Project) ---
Blockly.Blocks['sensor_weather_read_all'] = {
  init: function () {
    this.appendDummyInput()
      .appendField('weather station read')
      .appendField(new Blockly.FieldDropdown([
        ['temperature', 'TEMP'], ['humidity', 'HUMIDITY'],
        ['pressure', 'PRESSURE'], ['UV index', 'UV'], ['altitude', 'ALT']
      ]), 'PARAM');
    this.setOutput(true, 'Number');
    this.setColour('#D4A017');
    this.setTooltip('3.37 Weather Station — Read a weather parameter');
  }
};

// --- 3.38 Robot Car (Combined Project) ---
Blockly.Blocks['sensor_robot_car'] = {
  init: function () {
    this.appendDummyInput()
      .appendField('robot car')
      .appendField(new Blockly.FieldDropdown([
        ['forward', 'FORWARD'], ['backward', 'BACKWARD'],
        ['turn left', 'LEFT'], ['turn right', 'RIGHT'], ['stop', 'STOP'],
        ['line follow', 'LINE_FOLLOW'], ['avoid obstacle', 'AVOID']
      ]), 'ACTION');
    this.appendValueInput('SPEED').setCheck('Number').appendField('speed');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#D4A017');
    this.setTooltip('3.38 Robot Car — Control robot car movements and modes');
  }
};


// ===== Display Blocks =====

Blockly.Blocks['display_show_text'] = {
  init: function () {
    this.appendValueInput('TEXT')
      .setCheck('String')
      .appendField('display text');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#40BCD8');
    this.setTooltip('Show text on the display');
  }
};

Blockly.Blocks['display_clear'] = {
  init: function () {
    this.appendDummyInput().appendField('clear display');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#40BCD8');
    this.setTooltip('Clear the display');
  }
};

Blockly.Blocks['display_set_color'] = {
  init: function () {
    this.appendDummyInput()
      .appendField('set display color')
      .appendField(new Blockly.FieldColour('#ff0000'), 'COLOUR');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#40BCD8');
    this.setTooltip('Set the display background color');
  }
};

Blockly.Blocks['led_on'] = {
  init: function () {
    this.appendDummyInput()
      .appendField('turn LED')
      .appendField(new Blockly.FieldDropdown([
        ['1', '1'], ['2', '2'], ['3', '3'], ['4', '4']
      ]), 'PIN')
      .appendField('ON')
      .appendField('color')
      .appendField(new Blockly.FieldColour('#00ff00'), 'COLOUR');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#40BCD8');
    this.setTooltip('Turn on an LED with a color');
  }
};

Blockly.Blocks['led_off'] = {
  init: function () {
    this.appendDummyInput()
      .appendField('turn LED')
      .appendField(new Blockly.FieldDropdown([
        ['1', '1'], ['2', '2'], ['3', '3'], ['4', '4'], ['all', 'ALL']
      ]), 'PIN')
      .appendField('OFF');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#40BCD8');
    this.setTooltip('Turn off an LED');
  }
};

Blockly.Blocks['play_sound'] = {
  init: function () {
    this.appendDummyInput()
      .appendField('play sound')
      .appendField(new Blockly.FieldDropdown([
        ['beep', 'BEEP'], ['buzz', 'BUZZ'], ['melody', 'MELODY'],
        ['alarm', 'ALARM'], ['chime', 'CHIME']
      ]), 'SOUND');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#40BCD8');
    this.setTooltip('Play a sound');
  }
};

// ===== Animation Blocks =====

Blockly.Blocks['animation_create_sprite'] = {
  init: function () {
    this.appendDummyInput()
      .appendField('create sprite')
      .appendField(new Blockly.FieldTextInput('mySprite'), 'NAME')
      .appendField('as')
      .appendField(new Blockly.FieldDropdown([
        ['robot', 'ROBOT'], ['cat', 'CAT'], ['dog', 'DOG'],
        ['star', 'STAR'], ['ball', 'BALL']
      ]), 'TYPE');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#CC4499');
    this.setTooltip('Create a new animated sprite');
  }
};

Blockly.Blocks['animation_move_sprite'] = {
  init: function () {
    this.appendDummyInput()
      .appendField('move sprite')
      .appendField(new Blockly.FieldTextInput('mySprite'), 'NAME');
    this.appendValueInput('X').setCheck('Number').appendField('x:');
    this.appendValueInput('Y').setCheck('Number').appendField('y:');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#CC4499');
    this.setTooltip('Move a sprite to x, y position');
  }
};

Blockly.Blocks['animation_change_costume'] = {
  init: function () {
    this.appendDummyInput()
      .appendField('change')
      .appendField(new Blockly.FieldTextInput('mySprite'), 'NAME')
      .appendField('costume to')
      .appendField(new Blockly.FieldDropdown([
        ['happy', 'HAPPY'], ['sad', 'SAD'], ['excited', 'EXCITED'],
        ['sleeping', 'SLEEPING'], ['walking', 'WALKING']
      ]), 'COSTUME');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#CC4499');
    this.setTooltip('Change a sprite costume');
  }
};

Blockly.Blocks['animation_say'] = {
  init: function () {
    this.appendValueInput('TEXT')
      .setCheck('String')
      .appendField('sprite')
      .appendField(new Blockly.FieldTextInput('mySprite'), 'NAME')
      .appendField('says');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#CC4499');
    this.setTooltip('Make a sprite display a speech bubble');
  }
};

Blockly.Blocks['animation_wait'] = {
  init: function () {
    this.appendValueInput('SECONDS')
      .setCheck('Number')
      .appendField('animate wait');
    this.appendDummyInput().appendField('seconds');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#CC4499');
    this.setTooltip('Wait during animation');
  }
};


// =============================================
// JavaScript Code Generators
// =============================================

// --- Robot Movement ---
javascript.javascriptGenerator.forBlock['robot_move_forward'] = function (block) {
  var steps = javascript.javascriptGenerator.valueToCode(block, 'STEPS', javascript.Order.ATOMIC) || '1';
  return 'robot.moveForward(' + steps + ');\n';
};

javascript.javascriptGenerator.forBlock['robot_move_backward'] = function (block) {
  var steps = javascript.javascriptGenerator.valueToCode(block, 'STEPS', javascript.Order.ATOMIC) || '1';
  return 'robot.moveBackward(' + steps + ');\n';
};

javascript.javascriptGenerator.forBlock['robot_turn_left'] = function (block) {
  var degrees = javascript.javascriptGenerator.valueToCode(block, 'DEGREES', javascript.Order.ATOMIC) || '90';
  return 'robot.turnLeft(' + degrees + ');\n';
};

javascript.javascriptGenerator.forBlock['robot_turn_right'] = function (block) {
  var degrees = javascript.javascriptGenerator.valueToCode(block, 'DEGREES', javascript.Order.ATOMIC) || '90';
  return 'robot.turnRight(' + degrees + ');\n';
};

javascript.javascriptGenerator.forBlock['robot_stop'] = function () {
  return 'robot.stop();\n';
};

javascript.javascriptGenerator.forBlock['robot_set_speed'] = function (block) {
  var speed = javascript.javascriptGenerator.valueToCode(block, 'SPEED', javascript.Order.ATOMIC) || '50';
  return 'robot.setSpeed(' + speed + ');\n';
};

javascript.javascriptGenerator.forBlock['robot_wait'] = function (block) {
  var seconds = javascript.javascriptGenerator.valueToCode(block, 'SECONDS', javascript.Order.ATOMIC) || '1';
  return 'await robot.wait(' + seconds + ');\n';
};

// --- Sensors 3.1–3.38 ---

javascript.javascriptGenerator.forBlock['sensor_led_blink'] = function (block) {
  var pin = block.getFieldValue('PIN');
  var delay = javascript.javascriptGenerator.valueToCode(block, 'DELAY', javascript.Order.ATOMIC) || '500';
  return 'sensor.ledBlink(' + pin + ', ' + delay + ');\n';
};

javascript.javascriptGenerator.forBlock['sensor_read_sound'] = function () {
  return ['sensor.readSound()', javascript.Order.FUNCTION_CALL];
};

javascript.javascriptGenerator.forBlock['sensor_pir_motion'] = function () {
  return ['sensor.pirMotionDetected()', javascript.Order.FUNCTION_CALL];
};

javascript.javascriptGenerator.forBlock['sensor_buzzer_tone'] = function (block) {
  var tone = block.getFieldValue('TONE');
  var dur = javascript.javascriptGenerator.valueToCode(block, 'DURATION', javascript.Order.ATOMIC) || '0.5';
  return 'sensor.buzzerTone(' + tone + ', ' + dur + ');\n';
};

javascript.javascriptGenerator.forBlock['sensor_buzzer_off'] = function () {
  return 'sensor.buzzerOff();\n';
};

javascript.javascriptGenerator.forBlock['sensor_read_light'] = function () {
  return ['sensor.readLight()', javascript.Order.FUNCTION_CALL];
};

javascript.javascriptGenerator.forBlock['sensor_ad_button'] = function () {
  return ['sensor.readADButton()', javascript.Order.FUNCTION_CALL];
};

javascript.javascriptGenerator.forBlock['sensor_button_pressed'] = function (block) {
  var btn = block.getFieldValue('BUTTON');
  return ['sensor.isButtonPressed("' + btn + '")', javascript.Order.FUNCTION_CALL];
};

javascript.javascriptGenerator.forBlock['sensor_read_distance'] = function () {
  return ['sensor.readDistance()', javascript.Order.FUNCTION_CALL];
};

javascript.javascriptGenerator.forBlock['sensor_rfid_read'] = function () {
  return ['sensor.rfidRead()', javascript.Order.FUNCTION_CALL];
};

javascript.javascriptGenerator.forBlock['sensor_rfid_detected'] = function () {
  return ['sensor.rfidDetected()', javascript.Order.FUNCTION_CALL];
};

javascript.javascriptGenerator.forBlock['sensor_servo_set'] = function (block) {
  var pin = block.getFieldValue('PIN');
  var angle = javascript.javascriptGenerator.valueToCode(block, 'ANGLE', javascript.Order.ATOMIC) || '90';
  return 'sensor.servoSet(' + pin + ', ' + angle + ');\n';
};

javascript.javascriptGenerator.forBlock['sensor_read_temperature'] = function () {
  return ['sensor.readTemperature()', javascript.Order.FUNCTION_CALL];
};

javascript.javascriptGenerator.forBlock['sensor_read_humidity'] = function () {
  return ['sensor.readHumidity()', javascript.Order.FUNCTION_CALL];
};

javascript.javascriptGenerator.forBlock['sensor_read_pressure'] = function () {
  return ['sensor.readPressure()', javascript.Order.FUNCTION_CALL];
};

javascript.javascriptGenerator.forBlock['sensor_read_altitude'] = function () {
  return ['sensor.readAltitude()', javascript.Order.FUNCTION_CALL];
};

javascript.javascriptGenerator.forBlock['sensor_read_compass'] = function () {
  return ['sensor.readCompass()', javascript.Order.FUNCTION_CALL];
};

javascript.javascriptGenerator.forBlock['sensor_read_magnetic'] = function (block) {
  var axis = block.getFieldValue('AXIS');
  return ['sensor.readMagnetic("' + axis + '")', javascript.Order.FUNCTION_CALL];
};

javascript.javascriptGenerator.forBlock['sensor_fan_control'] = function (block) {
  var dir = block.getFieldValue('DIRECTION');
  var spd = javascript.javascriptGenerator.valueToCode(block, 'SPEED', javascript.Order.ATOMIC) || '200';
  return 'sensor.fanControl("' + dir + '", ' + spd + ');\n';
};

javascript.javascriptGenerator.forBlock['sensor_servo270_set'] = function (block) {
  var angle = javascript.javascriptGenerator.valueToCode(block, 'ANGLE', javascript.Order.ATOMIC) || '135';
  return 'sensor.servo270Set(' + angle + ');\n';
};

javascript.javascriptGenerator.forBlock['sensor_rgb_set'] = function (block) {
  var idx = block.getFieldValue('INDEX');
  var col = block.getFieldValue('COLOUR');
  return 'sensor.rgbSet(' + idx + ', "' + col + '");\n';
};

javascript.javascriptGenerator.forBlock['sensor_rgb_all'] = function (block) {
  var col = block.getFieldValue('COLOUR');
  return 'sensor.rgbAll("' + col + '");\n';
};

javascript.javascriptGenerator.forBlock['sensor_rgb_off'] = function () {
  return 'sensor.rgbOff();\n';
};

javascript.javascriptGenerator.forBlock['sensor_oled_print'] = function (block) {
  var text = javascript.javascriptGenerator.valueToCode(block, 'TEXT', javascript.Order.ATOMIC) || '""';
  var row = javascript.javascriptGenerator.valueToCode(block, 'ROW', javascript.Order.ATOMIC) || '0';
  return 'sensor.oledPrint(' + text + ', ' + row + ');\n';
};

javascript.javascriptGenerator.forBlock['sensor_oled_clear'] = function () {
  return 'sensor.oledClear();\n';
};

javascript.javascriptGenerator.forBlock['sensor_ir_receive'] = function () {
  return ['sensor.irReceive()', javascript.Order.FUNCTION_CALL];
};

javascript.javascriptGenerator.forBlock['sensor_ir_send'] = function (block) {
  var code = javascript.javascriptGenerator.valueToCode(block, 'CODE', javascript.Order.ATOMIC) || '""';
  return 'sensor.irSend(' + code + ');\n';
};

javascript.javascriptGenerator.forBlock['sensor_joystick_read'] = function (block) {
  var axis = block.getFieldValue('AXIS');
  return ['sensor.joystickRead("' + axis + '")', javascript.Order.FUNCTION_CALL];
};

javascript.javascriptGenerator.forBlock['sensor_accel_read'] = function (block) {
  var axis = block.getFieldValue('AXIS');
  return ['sensor.accelRead("' + axis + '")', javascript.Order.FUNCTION_CALL];
};

javascript.javascriptGenerator.forBlock['sensor_potentiometer'] = function () {
  return ['sensor.readPotentiometer()', javascript.Order.FUNCTION_CALL];
};

javascript.javascriptGenerator.forBlock['sensor_reed_switch'] = function () {
  return ['sensor.reedSwitchDetected()', javascript.Order.FUNCTION_CALL];
};

javascript.javascriptGenerator.forBlock['sensor_hall'] = function () {
  return ['sensor.readHall()', javascript.Order.FUNCTION_CALL];
};

javascript.javascriptGenerator.forBlock['sensor_flame'] = function () {
  return ['sensor.readFlame()', javascript.Order.FUNCTION_CALL];
};

javascript.javascriptGenerator.forBlock['sensor_flame_detected'] = function () {
  return ['sensor.flameDetected()', javascript.Order.FUNCTION_CALL];
};

javascript.javascriptGenerator.forBlock['sensor_steam'] = function () {
  return ['sensor.readSteam()', javascript.Order.FUNCTION_CALL];
};

javascript.javascriptGenerator.forBlock['sensor_uv'] = function () {
  return ['sensor.readUV()', javascript.Order.FUNCTION_CALL];
};

javascript.javascriptGenerator.forBlock['sensor_traffic_light'] = function (block) {
  var color = block.getFieldValue('COLOR');
  var state = block.getFieldValue('STATE');
  return 'sensor.trafficLight("' + color + '", "' + state + '");\n';
};

javascript.javascriptGenerator.forBlock['sensor_relay'] = function (block) {
  var state = block.getFieldValue('STATE');
  return 'sensor.relay("' + state + '");\n';
};

javascript.javascriptGenerator.forBlock['sensor_button_module'] = function () {
  return ['sensor.buttonModulePressed()', javascript.Order.FUNCTION_CALL];
};

javascript.javascriptGenerator.forBlock['sensor_tilt'] = function () {
  return ['sensor.tiltDetected()', javascript.Order.FUNCTION_CALL];
};

javascript.javascriptGenerator.forBlock['sensor_obstacle'] = function () {
  return ['sensor.obstacleDetected()', javascript.Order.FUNCTION_CALL];
};

javascript.javascriptGenerator.forBlock['sensor_line_detected'] = function (block) {
  var pos = block.getFieldValue('POSITION');
  return ['sensor.lineDetected("' + pos + '")', javascript.Order.FUNCTION_CALL];
};

javascript.javascriptGenerator.forBlock['sensor_wifi_connect'] = function (block) {
  var ssid = javascript.javascriptGenerator.valueToCode(block, 'SSID', javascript.Order.ATOMIC) || '""';
  var pass = javascript.javascriptGenerator.valueToCode(block, 'PASS', javascript.Order.ATOMIC) || '""';
  return 'sensor.wifiConnect(' + ssid + ', ' + pass + ');\n';
};

javascript.javascriptGenerator.forBlock['sensor_wifi_connected'] = function () {
  return ['sensor.wifiConnected()', javascript.Order.FUNCTION_CALL];
};

javascript.javascriptGenerator.forBlock['sensor_wifi_send_data'] = function (block) {
  var key = javascript.javascriptGenerator.valueToCode(block, 'KEY', javascript.Order.ATOMIC) || '""';
  var val = javascript.javascriptGenerator.valueToCode(block, 'VALUE', javascript.Order.ATOMIC) || '0';
  return 'sensor.wifiSendData(' + key + ', ' + val + ');\n';
};

javascript.javascriptGenerator.forBlock['sensor_wifi_receive'] = function () {
  return ['sensor.wifiReceive()', javascript.Order.FUNCTION_CALL];
};

javascript.javascriptGenerator.forBlock['sensor_smart_home_mode'] = function (block) {
  var mode = block.getFieldValue('MODE');
  return 'sensor.smartHomeMode("' + mode + '");\n';
};

javascript.javascriptGenerator.forBlock['sensor_weather_read_all'] = function (block) {
  var param = block.getFieldValue('PARAM');
  return ['sensor.weatherRead("' + param + '")', javascript.Order.FUNCTION_CALL];
};

javascript.javascriptGenerator.forBlock['sensor_robot_car'] = function (block) {
  var action = block.getFieldValue('ACTION');
  var speed = javascript.javascriptGenerator.valueToCode(block, 'SPEED', javascript.Order.ATOMIC) || '200';
  return 'sensor.robotCar("' + action + '", ' + speed + ');\n';
};

// --- Display ---
javascript.javascriptGenerator.forBlock['display_show_text'] = function (block) {
  var text = javascript.javascriptGenerator.valueToCode(block, 'TEXT', javascript.Order.ATOMIC) || '""';
  return 'display.showText(' + text + ');\n';
};

javascript.javascriptGenerator.forBlock['display_clear'] = function () {
  return 'display.clear();\n';
};

javascript.javascriptGenerator.forBlock['display_set_color'] = function (block) {
  var colour = block.getFieldValue('COLOUR');
  return 'display.setColor("' + colour + '");\n';
};

javascript.javascriptGenerator.forBlock['led_on'] = function (block) {
  var pin = block.getFieldValue('PIN');
  var colour = block.getFieldValue('COLOUR');
  return 'led.on(' + pin + ', "' + colour + '");\n';
};

javascript.javascriptGenerator.forBlock['led_off'] = function (block) {
  var pin = block.getFieldValue('PIN');
  return 'led.off("' + pin + '");\n';
};

javascript.javascriptGenerator.forBlock['play_sound'] = function (block) {
  var sound = block.getFieldValue('SOUND');
  return 'audio.playSound("' + sound + '");\n';
};

// --- Animation ---
javascript.javascriptGenerator.forBlock['animation_create_sprite'] = function (block) {
  var name = block.getFieldValue('NAME');
  var type = block.getFieldValue('TYPE');
  return 'var ' + name + ' = animation.createSprite("' + type + '");\n';
};

javascript.javascriptGenerator.forBlock['animation_move_sprite'] = function (block) {
  var name = block.getFieldValue('NAME');
  var x = javascript.javascriptGenerator.valueToCode(block, 'X', javascript.Order.ATOMIC) || '0';
  var y = javascript.javascriptGenerator.valueToCode(block, 'Y', javascript.Order.ATOMIC) || '0';
  return name + '.moveTo(' + x + ', ' + y + ');\n';
};

javascript.javascriptGenerator.forBlock['animation_change_costume'] = function (block) {
  var name = block.getFieldValue('NAME');
  var costume = block.getFieldValue('COSTUME');
  return name + '.setCostume("' + costume + '");\n';
};

javascript.javascriptGenerator.forBlock['animation_say'] = function (block) {
  var name = block.getFieldValue('NAME');
  var text = javascript.javascriptGenerator.valueToCode(block, 'TEXT', javascript.Order.ATOMIC) || '""';
  return name + '.say(' + text + ');\n';
};

javascript.javascriptGenerator.forBlock['animation_wait'] = function (block) {
  var seconds = javascript.javascriptGenerator.valueToCode(block, 'SECONDS', javascript.Order.ATOMIC) || '1';
  return 'await animation.wait(' + seconds + ');\n';
};


// =============================================
// Python Code Generators
// =============================================

// --- Robot Movement ---
python.pythonGenerator.forBlock['robot_move_forward'] = function (block) {
  var steps = python.pythonGenerator.valueToCode(block, 'STEPS', python.Order.ATOMIC) || '1';
  return 'robot.move_forward(' + steps + ')\n';
};

python.pythonGenerator.forBlock['robot_move_backward'] = function (block) {
  var steps = python.pythonGenerator.valueToCode(block, 'STEPS', python.Order.ATOMIC) || '1';
  return 'robot.move_backward(' + steps + ')\n';
};

python.pythonGenerator.forBlock['robot_turn_left'] = function (block) {
  var degrees = python.pythonGenerator.valueToCode(block, 'DEGREES', python.Order.ATOMIC) || '90';
  return 'robot.turn_left(' + degrees + ')\n';
};

python.pythonGenerator.forBlock['robot_turn_right'] = function (block) {
  var degrees = python.pythonGenerator.valueToCode(block, 'DEGREES', python.Order.ATOMIC) || '90';
  return 'robot.turn_right(' + degrees + ')\n';
};

python.pythonGenerator.forBlock['robot_stop'] = function () {
  return 'robot.stop()\n';
};

python.pythonGenerator.forBlock['robot_set_speed'] = function (block) {
  var speed = python.pythonGenerator.valueToCode(block, 'SPEED', python.Order.ATOMIC) || '50';
  return 'robot.set_speed(' + speed + ')\n';
};

python.pythonGenerator.forBlock['robot_wait'] = function (block) {
  var seconds = python.pythonGenerator.valueToCode(block, 'SECONDS', python.Order.ATOMIC) || '1';
  return 'time.sleep(' + seconds + ')\n';
};

// --- Sensors 3.1–3.38 ---

python.pythonGenerator.forBlock['sensor_led_blink'] = function (block) {
  var pin = block.getFieldValue('PIN');
  var delay = python.pythonGenerator.valueToCode(block, 'DELAY', python.Order.ATOMIC) || '500';
  return 'sensor.led_blink(' + pin + ', ' + delay + ')\n';
};

python.pythonGenerator.forBlock['sensor_read_sound'] = function () {
  return ['sensor.read_sound()', python.Order.FUNCTION_CALL];
};

python.pythonGenerator.forBlock['sensor_pir_motion'] = function () {
  return ['sensor.pir_motion_detected()', python.Order.FUNCTION_CALL];
};

python.pythonGenerator.forBlock['sensor_buzzer_tone'] = function (block) {
  var tone = block.getFieldValue('TONE');
  var dur = python.pythonGenerator.valueToCode(block, 'DURATION', python.Order.ATOMIC) || '0.5';
  return 'sensor.buzzer_tone(' + tone + ', ' + dur + ')\n';
};

python.pythonGenerator.forBlock['sensor_buzzer_off'] = function () {
  return 'sensor.buzzer_off()\n';
};

python.pythonGenerator.forBlock['sensor_read_light'] = function () {
  return ['sensor.read_light()', python.Order.FUNCTION_CALL];
};

python.pythonGenerator.forBlock['sensor_ad_button'] = function () {
  return ['sensor.read_ad_button()', python.Order.FUNCTION_CALL];
};

python.pythonGenerator.forBlock['sensor_button_pressed'] = function (block) {
  var btn = block.getFieldValue('BUTTON');
  return ['sensor.is_button_pressed("' + btn + '")', python.Order.FUNCTION_CALL];
};

python.pythonGenerator.forBlock['sensor_read_distance'] = function () {
  return ['sensor.read_distance()', python.Order.FUNCTION_CALL];
};

python.pythonGenerator.forBlock['sensor_rfid_read'] = function () {
  return ['sensor.rfid_read()', python.Order.FUNCTION_CALL];
};

python.pythonGenerator.forBlock['sensor_rfid_detected'] = function () {
  return ['sensor.rfid_detected()', python.Order.FUNCTION_CALL];
};

python.pythonGenerator.forBlock['sensor_servo_set'] = function (block) {
  var pin = block.getFieldValue('PIN');
  var angle = python.pythonGenerator.valueToCode(block, 'ANGLE', python.Order.ATOMIC) || '90';
  return 'sensor.servo_set(' + pin + ', ' + angle + ')\n';
};

python.pythonGenerator.forBlock['sensor_read_temperature'] = function () {
  return ['sensor.read_temperature()', python.Order.FUNCTION_CALL];
};

python.pythonGenerator.forBlock['sensor_read_humidity'] = function () {
  return ['sensor.read_humidity()', python.Order.FUNCTION_CALL];
};

python.pythonGenerator.forBlock['sensor_read_pressure'] = function () {
  return ['sensor.read_pressure()', python.Order.FUNCTION_CALL];
};

python.pythonGenerator.forBlock['sensor_read_altitude'] = function () {
  return ['sensor.read_altitude()', python.Order.FUNCTION_CALL];
};

python.pythonGenerator.forBlock['sensor_read_compass'] = function () {
  return ['sensor.read_compass()', python.Order.FUNCTION_CALL];
};

python.pythonGenerator.forBlock['sensor_read_magnetic'] = function (block) {
  var axis = block.getFieldValue('AXIS');
  return ['sensor.read_magnetic("' + axis + '")', python.Order.FUNCTION_CALL];
};

python.pythonGenerator.forBlock['sensor_fan_control'] = function (block) {
  var dir = block.getFieldValue('DIRECTION');
  var spd = python.pythonGenerator.valueToCode(block, 'SPEED', python.Order.ATOMIC) || '200';
  return 'sensor.fan_control("' + dir + '", ' + spd + ')\n';
};

python.pythonGenerator.forBlock['sensor_servo270_set'] = function (block) {
  var angle = python.pythonGenerator.valueToCode(block, 'ANGLE', python.Order.ATOMIC) || '135';
  return 'sensor.servo270_set(' + angle + ')\n';
};

python.pythonGenerator.forBlock['sensor_rgb_set'] = function (block) {
  var idx = block.getFieldValue('INDEX');
  var col = block.getFieldValue('COLOUR');
  return 'sensor.rgb_set(' + idx + ', "' + col + '")\n';
};

python.pythonGenerator.forBlock['sensor_rgb_all'] = function (block) {
  var col = block.getFieldValue('COLOUR');
  return 'sensor.rgb_all("' + col + '")\n';
};

python.pythonGenerator.forBlock['sensor_rgb_off'] = function () {
  return 'sensor.rgb_off()\n';
};

python.pythonGenerator.forBlock['sensor_oled_print'] = function (block) {
  var text = python.pythonGenerator.valueToCode(block, 'TEXT', python.Order.ATOMIC) || '""';
  var row = python.pythonGenerator.valueToCode(block, 'ROW', python.Order.ATOMIC) || '0';
  return 'sensor.oled_print(' + text + ', ' + row + ')\n';
};

python.pythonGenerator.forBlock['sensor_oled_clear'] = function () {
  return 'sensor.oled_clear()\n';
};

python.pythonGenerator.forBlock['sensor_ir_receive'] = function () {
  return ['sensor.ir_receive()', python.Order.FUNCTION_CALL];
};

python.pythonGenerator.forBlock['sensor_ir_send'] = function (block) {
  var code = python.pythonGenerator.valueToCode(block, 'CODE', python.Order.ATOMIC) || '""';
  return 'sensor.ir_send(' + code + ')\n';
};

python.pythonGenerator.forBlock['sensor_joystick_read'] = function (block) {
  var axis = block.getFieldValue('AXIS');
  return ['sensor.joystick_read("' + axis + '")', python.Order.FUNCTION_CALL];
};

python.pythonGenerator.forBlock['sensor_accel_read'] = function (block) {
  var axis = block.getFieldValue('AXIS');
  return ['sensor.accel_read("' + axis + '")', python.Order.FUNCTION_CALL];
};

python.pythonGenerator.forBlock['sensor_potentiometer'] = function () {
  return ['sensor.read_potentiometer()', python.Order.FUNCTION_CALL];
};

python.pythonGenerator.forBlock['sensor_reed_switch'] = function () {
  return ['sensor.reed_switch_detected()', python.Order.FUNCTION_CALL];
};

python.pythonGenerator.forBlock['sensor_hall'] = function () {
  return ['sensor.read_hall()', python.Order.FUNCTION_CALL];
};

python.pythonGenerator.forBlock['sensor_flame'] = function () {
  return ['sensor.read_flame()', python.Order.FUNCTION_CALL];
};

python.pythonGenerator.forBlock['sensor_flame_detected'] = function () {
  return ['sensor.flame_detected()', python.Order.FUNCTION_CALL];
};

python.pythonGenerator.forBlock['sensor_steam'] = function () {
  return ['sensor.read_steam()', python.Order.FUNCTION_CALL];
};

python.pythonGenerator.forBlock['sensor_uv'] = function () {
  return ['sensor.read_uv()', python.Order.FUNCTION_CALL];
};

python.pythonGenerator.forBlock['sensor_traffic_light'] = function (block) {
  var color = block.getFieldValue('COLOR');
  var state = block.getFieldValue('STATE');
  return 'sensor.traffic_light("' + color + '", "' + state + '")\n';
};

python.pythonGenerator.forBlock['sensor_relay'] = function (block) {
  var state = block.getFieldValue('STATE');
  return 'sensor.relay("' + state + '")\n';
};

python.pythonGenerator.forBlock['sensor_button_module'] = function () {
  return ['sensor.button_module_pressed()', python.Order.FUNCTION_CALL];
};

python.pythonGenerator.forBlock['sensor_tilt'] = function () {
  return ['sensor.tilt_detected()', python.Order.FUNCTION_CALL];
};

python.pythonGenerator.forBlock['sensor_obstacle'] = function () {
  return ['sensor.obstacle_detected()', python.Order.FUNCTION_CALL];
};

python.pythonGenerator.forBlock['sensor_line_detected'] = function (block) {
  var pos = block.getFieldValue('POSITION');
  return ['sensor.line_detected("' + pos + '")', python.Order.FUNCTION_CALL];
};

python.pythonGenerator.forBlock['sensor_wifi_connect'] = function (block) {
  var ssid = python.pythonGenerator.valueToCode(block, 'SSID', python.Order.ATOMIC) || '""';
  var pass = python.pythonGenerator.valueToCode(block, 'PASS', python.Order.ATOMIC) || '""';
  return 'sensor.wifi_connect(' + ssid + ', ' + pass + ')\n';
};

python.pythonGenerator.forBlock['sensor_wifi_connected'] = function () {
  return ['sensor.wifi_connected()', python.Order.FUNCTION_CALL];
};

python.pythonGenerator.forBlock['sensor_wifi_send_data'] = function (block) {
  var key = python.pythonGenerator.valueToCode(block, 'KEY', python.Order.ATOMIC) || '""';
  var val = python.pythonGenerator.valueToCode(block, 'VALUE', python.Order.ATOMIC) || '0';
  return 'sensor.wifi_send_data(' + key + ', ' + val + ')\n';
};

python.pythonGenerator.forBlock['sensor_wifi_receive'] = function () {
  return ['sensor.wifi_receive()', python.Order.FUNCTION_CALL];
};

python.pythonGenerator.forBlock['sensor_smart_home_mode'] = function (block) {
  var mode = block.getFieldValue('MODE');
  return 'sensor.smart_home_mode("' + mode + '")\n';
};

python.pythonGenerator.forBlock['sensor_weather_read_all'] = function (block) {
  var param = block.getFieldValue('PARAM');
  return ['sensor.weather_read("' + param + '")', python.Order.FUNCTION_CALL];
};

python.pythonGenerator.forBlock['sensor_robot_car'] = function (block) {
  var action = block.getFieldValue('ACTION');
  var speed = python.pythonGenerator.valueToCode(block, 'SPEED', python.Order.ATOMIC) || '200';
  return 'sensor.robot_car("' + action + '", ' + speed + ')\n';
};

// --- Display ---
python.pythonGenerator.forBlock['display_show_text'] = function (block) {
  var text = python.pythonGenerator.valueToCode(block, 'TEXT', python.Order.ATOMIC) || '""';
  return 'display.show_text(' + text + ')\n';
};

python.pythonGenerator.forBlock['display_clear'] = function () {
  return 'display.clear()\n';
};

python.pythonGenerator.forBlock['display_set_color'] = function (block) {
  var colour = block.getFieldValue('COLOUR');
  return 'display.set_color("' + colour + '")\n';
};

python.pythonGenerator.forBlock['led_on'] = function (block) {
  var pin = block.getFieldValue('PIN');
  var colour = block.getFieldValue('COLOUR');
  return 'led.on(' + pin + ', "' + colour + '")\n';
};

python.pythonGenerator.forBlock['led_off'] = function (block) {
  var pin = block.getFieldValue('PIN');
  return 'led.off("' + pin + '")\n';
};

python.pythonGenerator.forBlock['play_sound'] = function (block) {
  var sound = block.getFieldValue('SOUND');
  return 'audio.play_sound("' + sound + '")\n';
};

// --- Animation ---
python.pythonGenerator.forBlock['animation_create_sprite'] = function (block) {
  var name = block.getFieldValue('NAME');
  var type = block.getFieldValue('TYPE');
  return name + ' = animation.create_sprite("' + type + '")\n';
};

python.pythonGenerator.forBlock['animation_move_sprite'] = function (block) {
  var name = block.getFieldValue('NAME');
  var x = python.pythonGenerator.valueToCode(block, 'X', python.Order.ATOMIC) || '0';
  var y = python.pythonGenerator.valueToCode(block, 'Y', python.Order.ATOMIC) || '0';
  return name + '.move_to(' + x + ', ' + y + ')\n';
};

python.pythonGenerator.forBlock['animation_change_costume'] = function (block) {
  var name = block.getFieldValue('NAME');
  var costume = block.getFieldValue('COSTUME');
  return name + '.set_costume("' + costume + '")\n';
};

python.pythonGenerator.forBlock['animation_say'] = function (block) {
  var name = block.getFieldValue('NAME');
  var text = python.pythonGenerator.valueToCode(block, 'TEXT', python.Order.ATOMIC) || '""';
  return name + '.say(' + text + ')\n';
};

python.pythonGenerator.forBlock['animation_wait'] = function (block) {
  var seconds = python.pythonGenerator.valueToCode(block, 'SECONDS', python.Order.ATOMIC) || '1';
  return 'time.sleep(' + seconds + ')\n';
};
