---
title: Lauren Mitchell | AI Assignment Generator
tag: AI Assignment Generator
type: project
layout: project
image: "/img/og-img.png"
---

When I joined **OpenClass**, I wanted to explore how large language models could make instructors’ work easier.

<div class="aside" markdown="1">
<span class="aside-label">A bit of context</span>

I joined OpenClass in November 2022, the same month ChatGPT was released to the public. It was an exciting time, but the technology was brand new.
</div>

Having just completed a focused study in machine learning, I began experimenting with **OpenAI models**, **LangChain**, and the **OpenAI API** to create tools that could generate educational content more efficiently. My early experiments with **few-shot prompting** showed promise, but I wanted to take things further by embedding this intelligence directly into the teaching platform.
<br><br>

## Understanding the Problem

Instructors faced two main challenges. First, creating strong multiple choice questions with well-constructed distractor answers was time-consuming and inconsistent.

<div class="aside" markdown="1">
<span class="aside-label">What’s a distractor answer?</span>

It’s one of the wrong answers in a multiple choice question. Sounds easy, right? It could be anything! But writing good distractors takes real subject knowledge and careful framing. They need to be challenging without being misleading.
</div>

Second, using AI tools in their workflows meant juggling multiple platforms. This was a very practical problem: in those early days, people enjoyed working with AI, but it involved a lot of copying and pasting between windows, which got especially tedious for questions with mathematical notation or code. Building AI directly into the platform would save instructors a huge amount of time. I wanted to solve both problems with a single, integrated solution.
<br><br>

## Designing the Solution

I built a system that allowed instructors to input **learning objectives** and automatically generate **multiple choice** and **short answer** questions aligned with those objectives. The tool was designed to live inside the OpenClass platform, so instructors could stay in one place while building their lessons.

To ensure the model’s outputs were consistent and trustworthy, I built a **validation layer** using **Pydantic**. This Python library let me define a strict data schema for the model’s responses, catching errors before they reached users. I also implemented a **manual review process** during testing to refine prompts and ensure quality before deployment.
<br><br>

## The Outcome

After four months of development, the system was fully functional and integrated into OpenClass. Instructors could now generate polished assignments in minutes, freeing up more time for teaching and research. The response from both instructors and students was enthusiastic, and the final engineering integration was completed by my teammate **Alec**.
<br><br>

## See It in Action

You can watch the walkthrough video on Youtube by clicking the image below:  
[![Watch the video](https://img.youtube.com/vi/MidtF8TrSLU/0.jpg)](https://www.youtube.com/watch?v=MidtF8TrSLU)


