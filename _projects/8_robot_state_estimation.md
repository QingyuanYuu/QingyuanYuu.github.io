---
layout: page
title: Robot State Estimation and SLAM
description: Pose-graph SLAM, vectorized ICP, and an SE(3) EKF with a stereo vision front-end
importance: 4
selected: true
category: work
---

## Overview

A collection of state-estimation and mapping work for ECE 276A: Sensing and Estimation in Robotics, a graduate course at UC San Diego, completed from January to March 2026.

## Highlights

- Derived the linearized point-to-line ICP residual and vectorized k-NN PCA normal estimation with batched eigendecomposition, achieving roughly **two orders of magnitude** faster computation than the loop implementation.
- Used GTSAM pose-graph optimization over approximately **1,000 keyframes**, reducing start-to-end trajectory error from approximately **2 m to under 0.1 m** on both corridor datasets.
- Implemented an **EKF on SE(3)** with uncertainty parameterized in se(3), deriving landmark and pose Jacobians.
- Built a stereo front-end with Shi-Tomasi corners, pyramidal Lucas-Kanade tracking, and forward-backward and epipolar consistency checks, yielding **6,733 feature tracks over 6,393 frames**.

## Tech

Python, GTSAM, OpenCV, ICP, pose-graph optimization, SE(3), EKF, stereo vision.
