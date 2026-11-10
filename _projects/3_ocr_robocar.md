---
layout: page
title: Vision-Based Autonomous Driving
description: OCR traffic-sign recognition and ROS2 vehicle control, with 95% recognition accuracy at 10 Hz
img: assets/img/robocar.jpg
importance: 5
selected: true
category: work
---

## Overview

**Autonomous Driving Car with Vision-Based Traffic Sign Recognition** was a team project for ECE 148: Introduction to Autonomous Vehicles at UC San Diego, completed from September to December 2025. We built a perception-and-control system for a VESC-driven 1/10-scale vehicle.

## Highlights

- Trained an end-to-end CNN behavioral-cloning policy on human-driving demonstrations collected on the vehicle, mapping camera frames to steering commands for trajectory reconstruction.
- Built and tuned the team's ROS2 stack for HSV lane detection, PID steering control, and a four-state machine for blue-tape intersection handling.
- Designed and integrated OCR traffic-sign recognition that passed textual decisions to the control node, achieving **95% recognition accuracy** and **10 Hz closed-loop inference** in real-world tests.

## Tech

Python, ROS2, OpenCV, CNN behavioral cloning, OCR, PID control, VESC.

[View the team repository](https://github.com/UCSD-ECEMAE-148/fall-2025-final-project-team-16)
