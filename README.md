# ARI — The Voice Agent

> Work in progress

This is a personal engineering project for **Engineering Assignment 1 – Voice Agent**.

The goal is to build a simple, low-latency voice assistant and improve it step by step. This README is kept intentionally short while development is ongoing.

---

## What this project is about

Building a voice agent that:

* Listens to user speech
* Understands when the user is done speaking
* Responds with spoken audio
* Feels fast and natural to interact with

---

## Basic Flow

```
User speaks
→ Audio cleanup
→ Speech detection
→ Speech to text
→ Response generation
→ Text to speech
→ Audio playback
```

---

## Current Focus

* Getting a basic voice pipeline working end-to-end
* Experimenting with noise handling and speech detection
* Keeping latency low

---

## Tech (subject to change)

* Frontend: Web Audio APIs
* Backend: Node.js
* External APIs for speech and language

---

## Status

Early development. Things may change, break, or be rewritten.

More details will be added once the core system is stable.
