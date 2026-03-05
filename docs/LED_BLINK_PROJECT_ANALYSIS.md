# LED Blink Project Analysis

## Overview

The LED Blink project (Section 3.1) is an entry-level project that teaches beginners how to control an LED using block-based programming. It uses an NPN triode (Q2) as a switch to amplify the IO port's limited current for adequate LED brightness.

## Circuit Explanation

- **HIGH** on triode base (pin 1) -> collector (pin 3) and emitter (pin 2) connect -> VCC flows through current-limiting resistor -> LED -> triode -> GND -> **LED ON**
- **LOW** on triode base (pin 1) -> collector and emitter disconnect -> no current loop -> **LED OFF**

## Sensors and Functions Identified

### From the LED Blink Project

| Component | Type | Description |
|-----------|------|-------------|
| LED (IO23) | Actuator | Red LED controlled via NPN triode |
| Start block | Event | Program entry point |
| Forever loop | Control | Continuous execution loop |
| LED ON/OFF | Output | Sets pin HIGH/LOW |
| Delay | Control | Configurable wait (unit: seconds) |

### From the Full AARNAITAI ROBO Platform (25 blocks)

#### Sensors (5)
1. **Distance sensor** (`sensor_read_distance`) - Ultrasonic, returns cm
2. **Light sensor** (`sensor_read_light`) - Returns 0-1023
3. **Temperature sensor** (`sensor_read_temperature`) - Returns Celsius
4. **Button sensor** (`sensor_button_pressed`) - Buttons A, B, C
5. **Line follower** (`sensor_line_detected`) - Left, Right, Center positions

#### Robot Movement (7)
1. Move forward (steps)
2. Move backward (steps)
3. Turn left (degrees)
4. Turn right (degrees)
5. Stop
6. Set speed (0-100)
7. Wait/delay (seconds)

#### Display and Output (6)
1. Display text
2. Clear display
3. Set display color
4. LED on (pins 1-4, with color)
5. LED off (pins 1-4 or all)
6. Play sound (beep, buzz, melody, alarm, chime)

#### Animation (5)
1. Create sprite (robot, cat, dog, star, ball)
2. Move sprite to coordinates
3. Change sprite costume
4. Sprite speech bubble
5. Animation wait

## Application Usage

1. **Drag and drop** blocks from the toolbox onto the Blockly workspace
2. **Snap blocks** together to build programs (e.g., Start -> Forever -> LED HIGH -> Delay 0.5s -> LED LOW -> Delay 0.5s)
3. **View generated code** in JavaScript or Python
4. **Run/simulate** in the built-in console
5. **Save/export** as `.arobo` project files or `.js`/`.py` code files

## LED Blink Pattern

The fundamental pattern demonstrated:
```
Start
  Forever:
    Set LED pin IO23 -> HIGH
    Delay 0.5 seconds
    Set LED pin IO23 -> LOW
    Delay 0.5 seconds
```

Modify the delay value to change blink speed (e.g., 0.25s for faster blinking).
