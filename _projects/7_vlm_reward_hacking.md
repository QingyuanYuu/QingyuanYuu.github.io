---
layout: page
title: Can VLMs Audit Reward Hacking?
description: A MuJoCo benchmark of 20 PPO policies for studying reward exploitation and VLM auditing
importance: 3
selected: true
category: work
---

## Overview

**Can Vision-Language Models Audit Reward Hacking?** was a project for CSE 190: Deep Reinforcement Learning at UC San Diego, completed from March to June 2026. The work studies how to distinguish reward exploitation from policies that fail to learn, and how that distinction affects VLM-based audits.

## Highlights

- Designed **five reward variants** across MuJoCo continuous-control tasks, trained **20 PPO policies**, and constructed an audit benchmark.
- Proposed the **hackΔ** metric to quantify the severity of reward exploitation.
- Investigated anomalous negative hackΔ values in Hopper and Humanoid, formally separating exploitation of reward loopholes from policy non-learning.
- Analyzed the limits imposed by single random seeds, compute constraints, and high training variance, including a coefficient of variation reaching **92%**.

## Tech

Python, MuJoCo, PPO, vision-language models, reward design, reinforcement-learning evaluation.
