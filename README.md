<!--
#
# Licensed to the Apache Software Foundation (ASF) under one
# or more contributor license agreements.  See the NOTICE file
# distributed with this work for additional information
# regarding copyright ownership.  The ASF licenses this file
# to you under the Apache License, Version 2.0 (the
# "License"); you may not use this file except in compliance
# with the License.  You may obtain a copy of the License at
#
# http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing,
# software distributed under the License is distributed on an
# "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
#  KIND, either express or implied.  See the License for the
# specific language governing permissions and limitations
# under the License.
#
-->

# Apache Mynewt Sensor Network Application for STM32 Blue Pill with Rust, ESP8266 and nRF24L01 (includes Geolocation)

Check the tutorial...

[_Build Your IoT Sensor Network — STM32 Blue Pill + nRF24L01 + ESP8266 + Apache Mynewt + thethings.io_](https://medium.com/@ly.lee/build-your-iot-sensor-network-stm32-blue-pill-nrf24l01-esp8266-apache-mynewt-thethings-io-ca7486523f5d)

If you're looking for the NB-IoT version built with Rust, [click here for the `rust-nbiot` branch](https://github.com/lupyuen/stm32bluepill-mynewt-sensor/tree/rust-nbiot)

If you're looking for the NB-IoT version built with C, [click here for the `nbiot` branch](https://github.com/lupyuen/stm32bluepill-mynewt-sensor/tree/nbiot)

If you're looking for Mynewt with Rust support, [click here for the `rust` branch](https://github.com/lupyuen/stm32bluepill-mynewt-sensor/tree/rust)

If you're looking for Mynewt with Rust Macros and Safe Wrappers, [click here for the `rust-safe` branch](https://github.com/lupyuen/stm32bluepill-mynewt-sensor/tree/rust-safe)

# Contents

This repository contains...

1. [`my_sensor_app`](apps/my_sensor_app): Sensor Network Application

1. [`boot_stub`](apps/boot_stub): Mynewt Bootloader Stub

1. [`adc_stm32f1`](libs/adc_stm32f1): Mynewt Driver for ADC on STM32F1

1. [`custom_sensor`](libs/custom_sensor): Custom Sensor Definitions

1. [`esp8266`](libs/esp8266): Mynewt Driver for ESP8266

1. [`hmac_prng`](libs/hmac_prng): HMAC pseudorandom number generator with entropy based on internal temperature sensor

1. [`nrf24l01`](libs/nrf24l01): Mynewt Driver for nRF24L01

1. [`remote_sensor`](libs/remote_sensor): Mynewt Driver for Remote Sensor

1. [`semihosting_console`](libs/semihosting_console): Mynewt Console for Arm Semihosting

1. [`sensor_coap`](libs/sensor_coap): Sensor CoAP Library

1. [`sensor_network`](libs/sensor_network): Sensor Network Library

1. [`temp_stm32`](libs/temp_stm32): Mynewt Driver for Internal Temperature Sensor on STM32

# Requirements

1. STM32 Blue Pill or [_Super Blue Pill_](https://medium.com/swlh/super-blue-pill-like-stm32-blue-pill-but-better-6d341d9347da)

1. ESP8266 or nRF24L01 or both

# Configuration

The program runs in 4 modes:

<b>1️⃣ Standalone Node (Blue Pill with ESP8266):</b> The program polls the 
Blue Pill internal temperature sensor every 10 seconds and transmits the 
sensor data (JSON format) to a CoAP (UDP) Server, such as thethings.io.  

Edit the settings in `targets/bluepill_my_sensor/syscfg.yml` as follows: 

```yml
syscfg.vals:
    # TUTORIAL1: 1
    TUTORIAL2: 1
    # TUTORIAL3: 1
    ...
```

<b>2️⃣ Sensor Node (Blue Pill with nRF24L01):</b> The program polls the 
Blue Pill internal temperature sensor every 10 seconds and transmits the 
sensor data (CBOR format) to the Collector Node.  

Edit the settings 
in `targets/bluepill_my_sensor/syscfg.yml` as follows: 

```yml
syscfg.vals:
    # TUTORIAL1: 1
    # TUTORIAL2: 1
    TUTORIAL3: 1
    ...
```

Set `SENSOR_NODE_HW_ID_1` to the Hardware ID of the Blue Pill.

<b>3️⃣ Collector Node (Blue Pill with nRF24L01 and ESP8266):</b> The program
receives sensor data (CBOR format) from the Sensor Node, and transmits the 
sensor data (JSON format) to a CoAP (UDP) Server, such as thethings.io.

Edit the settings in `targets/bluepill_my_sensor/syscfg.yml` as follows: 

```yml
syscfg.vals:
    # TUTORIAL1: 1
    # TUTORIAL2: 1
    TUTORIAL3: 1
    ...
```

Set `COLLECTOR_NODE_HW_ID` to the Hardware ID of the Blue Pill.

<b>4️⃣ WiFi Geolocation (Blue Pill with ESP8266):</b> The program sends WiFi Access Point MAC Addresses and Signal Strength scanned by ESP8266 to a CoAP (UDP) Server, such as thethings.io.  See https://github.com/lupyuen/thethingsio-wifi-geolocation

thethings.io will call the Google Geolocation API to compute the latitude and longitude based on the WiFi data.  For public display, the computed geolocation is pushed to a web application hosted on Google Cloud App Engine. See https://github.com/lupyuen/gcloud-wifi-geolocation

Edit the settings in `targets/bluepill_my_sensor/syscfg.yml` as follows: 

```yml
syscfg.vals:
    # TUTORIAL1: 1
    TUTORIAL2: 1
    # TUTORIAL3: 1
    WIFI_GEOLOCATION: 1
    ...
```

# Install Apache Mynewt for Windows and macOS

To install Apache Mynewt for Windows and macOS, refer to the tutorials...

1.  [_Build Your IoT Sensor Network — STM32 Blue Pill + nRF24L01 + ESP8266 + Apache Mynewt + thethings.io_](https://medium.com/@ly.lee/build-your-iot-sensor-network-stm32-blue-pill-nrf24l01-esp8266-apache-mynewt-thethings-io-ca7486523f5d)

1.  [_Connect STM32 Blue Pill to ESP8266 with Apache Mynewt_](https://medium.com/@ly.lee/connect-stm32-blue-pill-to-esp8266-with-apache-mynewt-7edceb9e3b8d?source=friends_link&sk=df729a82533d817ec6b2d9b626b6f66b)

1.  [_Create your IoT gadget with Apache Mynewt and STM32 Blue Pill_](https://medium.com/@ly.lee/create-your-iot-gadget-with-apache-mynewt-and-stm32-blue-pill-d689b3ca725?source=friends_link&sk=d511426d5a2217ebd06789b3eef7df54)

# Install Apache Mynewt for Ubuntu Linux

1.  Launch Video Studio Code

1.  Click `Terminal → Run Task`

1.  Select `[0] Install Apache Mynewt`

1.  When prompted, click on the `Terminal` pane and enter the `sudo` password. The password only needs to be entered once.

1.  The [setup script](https://github.com/lupyuen/stm32bluepill-mynewt-sensor/blob/master/scripts/install-linux.sh) will take a few minutes to download and install the build tools.  When it’s done, we should see Done!

1.  Exit and restart Visual Studio Code. This activates the installed extensions.

In case of problems, compare your log with this [setup log](https://github.com/lupyuen/stm32bluepill-mynewt-sensor/blob/master/logs/install-linux.log).


# Installation, Build, Flash and Debug Logs

Sample logs for Windows and Ubuntu Linux may be found in the [logs folder](logs)

# How This Application Was Created

Based on 

https://mynewt.apache.org/latest/tutorials/sensors/sensor_thingy_lis2dh12_onb.html

https://mynewt.apache.org/latest/tutorials/sensors/sensor_nrf52_bno055.html

```bash
cd /mnt/c
newt new stm32bluepill-mynewt-sensor
cd stm32bluepill-mynewt-sensor
cat project.yml

newt install
newt pkg new -t app apps/my_sensor_app
newt pkg new -t lib libs/semihosting_console

newt target create bluepill_boot
newt target set bluepill_boot bsp=@apache-mynewt-core/hw/bsp/bluepill
newt target set bluepill_boot app=@apache-mynewt-core/apps/boot
newt target set bluepill_boot build_profile=optimized

newt target create bluepill_my_sensor
newt target set bluepill_my_sensor bsp=@apache-mynewt-core/hw/bsp/bluepill
newt target set bluepill_my_sensor app=apps/my_sensor_app
newt target set bluepill_my_sensor build_profile=debug
```

`project.yml` should contain

```yaml
project.name: "my_project"

project.repositories:
    - apache-mynewt-core

repository.apache-mynewt-core:
    type: github
    vers: 1.6.0
    user: apache
    repo: mynewt-core
```
