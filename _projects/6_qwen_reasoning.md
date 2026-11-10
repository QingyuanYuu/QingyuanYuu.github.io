---
layout: page
title: Fine-Tuning Qwen3-4B for Reasoning
description: Prompt engineering, LoRA SFT, and GRPO improved validation accuracy from 47% to 66.22%
importance: 2
selected: true
category: work
---

## Overview

A reasoning-model fine-tuning project for CSE 151B: Deep Learning at UC San Diego, completed from March to June 2026. I led the implementation of a three-stage pipeline combining prompt engineering, LoRA supervised fine-tuning, and GRPO reinforcement learning.

## Highlights

- Improved validation accuracy from **47% to 66.22%** under an approximately **$50 H100 compute budget**.
- Identified training instability caused by inconsistent prompt formats between the SFT and RL stages, and implemented prompt alignment and a hard-prompt boost.
- Evaluated the contribution of prompt engineering, supervised fine-tuning, and GRPO to the final reasoning performance.

## Tech

Python, PyTorch, Hugging Face, Qwen3-4B, LoRA, supervised fine-tuning, GRPO.
