---
layout: page
title: ROAM
description: Memory-driven active observation for open-vocabulary object retrieval on a wheeled humanoid
importance: 1
selected: true
category: work
---

## Overview

**ROAM: Memory-Driven Active Observation for Open-Vocabulary Object Retrieval** is ongoing research with Prof. Xiaolong Wang at UC San Diego, started in June 2026. My work connects perception, object memory, exploration, and navigation on a Dexmate Vega wheeled humanoid.

## Highlights

- Designed a memory-completeness-driven revisit scheduler that plans multi-degree-of-freedom viewpoints, improving object recall from **28.8% to 46.7%**.
- Built YOLO-World, SAM2, and 3D association pipelines. Anchor-keyframe-relative pose storage addresses accumulated SLAM drift, keeping median object-localization error within **12 cm**.
- On GOAT-Bench, improved memory-retrieval success from **0.166 to 0.238**, reduced the navigation path length to known targets from **55.1 m to 5.8 m**, and achieved a **7.2× improvement in SPL**.
- Deployed the system on Vega and designed adaptive recovery that reduced exploration runs invalidated by getting stuck from approximately **33% to 0%**.

## Tech

Python, ROS2, YOLO-World, SAM2, 3D object association, active perception, SLAM, exploration, navigation.

**Status:** Ongoing research.
