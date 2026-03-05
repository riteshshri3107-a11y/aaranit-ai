// =============================================
// AARNAITAI ROBO - Custom Block Definitions
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

// ===== Sensor Blocks =====

Blockly.Blocks['sensor_read_distance'] = {
  init: function () {
    this.appendDummyInput().appendField('read distance sensor');
    this.setOutput(true, 'Number');
    this.setColour('#D4A017');
    this.setTooltip('Read the distance from the ultrasonic sensor (cm)');
  }
};

Blockly.Blocks['sensor_read_light'] = {
  init: function () {
    this.appendDummyInput().appendField('read light sensor');
    this.setOutput(true, 'Number');
    this.setColour('#D4A017');
    this.setTooltip('Read the light level (0-1023)');
  }
};

Blockly.Blocks['sensor_read_temperature'] = {
  init: function () {
    this.appendDummyInput().appendField('read temperature sensor');
    this.setOutput(true, 'Number');
    this.setColour('#D4A017');
    this.setTooltip('Read the temperature in Celsius');
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

Blockly.Blocks['sensor_line_detected'] = {
  init: function () {
    this.appendDummyInput()
      .appendField('line detected on')
      .appendField(new Blockly.FieldDropdown([
        ['left', 'LEFT'], ['right', 'RIGHT'], ['center', 'CENTER']
      ]), 'POSITION');
    this.setOutput(true, 'Boolean');
    this.setColour('#D4A017');
    this.setTooltip('Check if the line follower sensor detects a line');
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

javascript.javascriptGenerator.forBlock['sensor_read_distance'] = function () {
  return ['sensor.readDistance()', javascript.Order.FUNCTION_CALL];
};

javascript.javascriptGenerator.forBlock['sensor_read_light'] = function () {
  return ['sensor.readLight()', javascript.Order.FUNCTION_CALL];
};

javascript.javascriptGenerator.forBlock['sensor_read_temperature'] = function () {
  return ['sensor.readTemperature()', javascript.Order.FUNCTION_CALL];
};

javascript.javascriptGenerator.forBlock['sensor_button_pressed'] = function (block) {
  var btn = block.getFieldValue('BUTTON');
  return ['sensor.isButtonPressed("' + btn + '")', javascript.Order.FUNCTION_CALL];
};

javascript.javascriptGenerator.forBlock['sensor_line_detected'] = function (block) {
  var pos = block.getFieldValue('POSITION');
  return ['sensor.lineDetected("' + pos + '")', javascript.Order.FUNCTION_CALL];
};

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

python.pythonGenerator.forBlock['sensor_read_distance'] = function () {
  return ['sensor.read_distance()', python.Order.FUNCTION_CALL];
};

python.pythonGenerator.forBlock['sensor_read_light'] = function () {
  return ['sensor.read_light()', python.Order.FUNCTION_CALL];
};

python.pythonGenerator.forBlock['sensor_read_temperature'] = function () {
  return ['sensor.read_temperature()', python.Order.FUNCTION_CALL];
};

python.pythonGenerator.forBlock['sensor_button_pressed'] = function (block) {
  var btn = block.getFieldValue('BUTTON');
  return ['sensor.is_button_pressed("' + btn + '")', python.Order.FUNCTION_CALL];
};

python.pythonGenerator.forBlock['sensor_line_detected'] = function (block) {
  var pos = block.getFieldValue('POSITION');
  return ['sensor.line_detected("' + pos + '")', python.Order.FUNCTION_CALL];
};

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
