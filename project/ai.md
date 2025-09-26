---
title: Lauren Mitchell | AI Assignment Generator
tag: AI
type: project
layout: project
image: "/img/og-img.png"
---

# Building an AI-Powered Assignment Generator

When I joined **OpenClass** as an AI Engineer, I wanted to explore how large language models could make instructors’ work easier. After completing a focused study in machine learning, I began experimenting with **OpenAI models**, **LangChain**, and the **OpenAI API** to create tools that could generate educational content more efficiently. My early experiments with **few-shot prompting** showed promise, but I wanted to take things further by embedding this intelligence directly into the teaching platform.

## Understanding the Problem

Instructors faced two main challenges. First, creating strong multiple choice questions with well-constructed distractor answers was time-consuming and inconsistent. Second, using AI tools in their workflows meant juggling multiple platforms and copying content back and forth. I wanted to solve both problems with a single, integrated solution.

## Designing the Solution

I built a system that allowed instructors to input **learning objectives** and automatically generate **multiple choice** and **short answer** questions aligned with those objectives. The tool was designed to live inside the OpenClass platform, so instructors could stay in one place while building their lessons.

To ensure the model’s outputs were consistent and trustworthy, I built a **validation layer** using **Pydantic**. This Python library let me define a strict data schema for the model’s responses, catching errors before they reached users. I also implemented a **manual review process** during testing to refine prompts and ensure quality before deployment.

## The Outcome

After four months of development, the system was fully functional and integrated into OpenClass. Instructors could now generate polished assignments in minutes, freeing up more time for teaching and research. The response from both instructors and students was enthusiastic, and the final engineering integration was completed by my teammate **Alec**.

## See It in Action

You can watch the walkthrough video here:  
[![Watch the video](https://img.youtube.com/vi/MidtF8TrSLU/0.jpg)](https://www.youtube.com/watch?v=MidtF8TrSLU)


