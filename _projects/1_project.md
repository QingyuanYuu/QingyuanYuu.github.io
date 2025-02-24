---
layout: page
title: DNA Sequence Classification
description: Classifying coding and non-coding regions using CNN
img: assets/img/Dna_classification_background.jpg
importance: 1
category: work
related_publications: true
---

## Project Overview

The **DNA Sequence Classification** project focuses on training a Convolutional Neural Network (CNN) to distinguish between coding and non-coding regions in DNA sequences. Using datasets from Ensembl and NCBI, the project leverages PyTorch, BioPython, and various Python libraries for data processing, model training, and visualization.

### Objectives
- Classify DNA sequences into coding and non-coding regions.
- Build and train a CNN using PyTorch.
- Visualize data distributions and model performance.

### Tools & Libraries
- **PyTorch** – Deep learning framework
- **BioPython** – DNA sequence processing
- **Pandas & NumPy** – Data manipulation
- **Matplotlib** – Data visualization

### Data Sources
- [NCBI GenBank](https://www.ncbi.nlm.nih.gov/genbank/)
- [Ensembl Genome Browser](https://www.ensembl.org/index.html)

## Detailed Process

1. **Data Preprocessing**
   - Extracted DNA sequences from FASTA and GenBank files.
   - Applied one-hot encoding and K-mer frequency encoding.

2. **Model Training**
   - Designed a 1D CNN for sequence classification.
   - Used cross-entropy loss and optimized using Adam.

3. **Evaluation & Results**
   - Measured accuracy, precision, recall, and F1-score.
   - Visualized confusion matrix and ROC curve.

## Key Insights

- The CNN achieved **92% accuracy** in distinguishing coding regions.
- Data augmentation techniques improved generalization.

For the full code and documentation, visit the [GitHub Repository](https://github.com/QingyuanYuu/DNA_Classification_Project).

---

This enhanced project page includes a detailed overview, key insights, and direct links, presenting your work effectively.

