---
title: "Jaguar Re-Identification — 4th Place"
summary: "4th place / 348 teams (private LB 0.939, public 0.964). Wildlife re-identification on 1,895 images across 31 jaguar identities. Final pipeline: EVA-02 Large + DINOv2-Large ensemble trained with ArcFace metric learning, followed by pseudo-label fine-tuning (conf > 0.90), query expansion (k=3), and alpha-QE re-ranking. Backbone search spanned EfficientNetV2, ConvNeXt, and ViT before EVA-02 emerged as best single model (+0.069 LB from 10 → 20 epochs)."
date: 2026-03-11
tags: ["Computer Vision", "PyTorch"]
repoUrl: "https://github.com/Smooth-Cactus0/jaguar-re-identification"
---
