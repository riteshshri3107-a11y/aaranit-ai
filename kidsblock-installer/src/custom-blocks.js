// =============================================
// AARNAITAI ROBO - Custom Block Definitions
// Based on KidsBlock Tutorial Sections 3.1–3.38
// =============================================

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
