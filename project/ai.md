---
title: Lauren Mitchell | AI Assignment Generator
tag: AI
type: project
layout: project
image: "/img/og-img.png"
---

## Where It All Began

At OpenClass, I assumed the role of AI engineer after completing a study of machine learning. I focused on leveraging OpenAI models through LangChain and the OpenAI API, using few-shot prompting to provide the model with high-quality examples and streamline the generation of student assignments.

The core challenge was twofold: instructors often struggled to generate high-quality questions and "distractor" answers, and integrating large language models into existing teaching workflows required constant copying and pasting between platforms. I designed and implemented a system that allowed instructors to input learning objectives and automatically generate relevant multiple choice and short answer questions, directly in OpenClass's teaching platform.

To ensure outputs were reliable and aligned with expectations, I incorporated extensive manual fact-checking and integrated the pydantic library into my workflow. This allowed me to build a Python class that validated outputs for the correct data format, maintaining consistency and accuracy across all generated content.

From conception to full implementation, the project took approximately four months. The result was a system that significantly reduced friction for instructors, allowing them to focus on teaching and research. The project was met with strong enthusiasm from both teachers and students, and final engineering integration into the OpenClass platform was handled by my co-worker Alec.

Here is a video expalinaig the project to users: [![Watch the video](https://img.youtube.com/vi/MidtF8TrSLU/0.jpg)](https://www.youtube.com/watch?v=MidtF8TrSLU)
