# Ari — Project Tracker

This file tracks **all tasks derived from the assignment description**. It is a single source of truth for what exists, what is in progress, and what is intentionally skipped.

---

## ✅ Master Task List (Assignment-Derived)

### 1. Voice Pipeline (Cascade)

* [ ] Audio capture from microphone
* [ ] Audio streaming to backend
* [ ] Noise suppression / cancellation (custom)
* [ ] Voice Activity Detection (VAD) — custom logic
* [ ] Turn detection (end-of-speech detection)
* [ ] Speech-to-Text integration
* [ ] LLM request/response handling
* [ ] Text-to-Speech synthesis
* [ ] Audio playback to user

---

### 2. Custom Audio Processing

#### Noise Suppression

* [ ] Analyze raw audio signal
* [ ] Identify noise floor
* [ ] Apply noise reduction filter
* [ ] Preserve voice clarity

#### Voice Activity Detection (VAD)

* [ ] Speech vs silence detection
* [ ] Handle background noise
* [ ] Handle low-volume speech
* [ ] Reduce false positives

#### Turn Detection

* [ ] Pause-based heuristics
* [ ] Distinguish pause vs end-of-turn
* [ ] Avoid cutting off user

---

### 3. Multi-User Architecture

* [ ] Session creation per user
* [ ] Session isolation (no context bleed)
* [ ] Concurrent connections handling
* [ ] Resource-efficient design (no heavy process per user)
* [ ] Two simultaneous sessions demo

---

### 4. Web Search Integration

* [ ] Detect when search is needed
* [ ] Call search API
* [ ] Parse search results
* [ ] Inject results into LLM context
* [ ] Provide source citations

---

### 5. Real-Time Context Updates

* [ ] API for pushing context updates
* [ ] Update active session context
* [ ] Immediate effect on next response
* [ ] Verify mid-session context change

---

### 6. Natural Conversation

* [ ] Barge-in support (interrupt AI speech)
* [ ] Stop TTS on user speech
* [ ] Resume listening immediately
* [ ] Handle silence gracefully

---

### 7. Performance Targets

* [ ] Measure system initialization time
* [ ] Measure first audio response latency
* [ ] Measure barge-in stop time
* [ ] Optimize slow stages

---

### 8. User Feedback States

* [ ] Listening state
* [ ] Thinking state
* [ ] Speaking state

---

### 9. Observability Dashboard

* [ ] VAD detection timestamp
* [ ] STT latency tracking
* [ ] LLM latency (TTFT + total)
* [ ] TTS latency tracking
* [ ] End-to-end latency
* [ ] Noise suppression stats

---

### 10. Provider Fallback

* [ ] Detect provider failure
* [ ] Switch to secondary provider
* [ ] Log fallback event

---

### 11. Live Captions / Transcripts

* [ ] Stream user speech text
* [ ] Stream AI response text
* [ ] Near-sync with audio

---

### 12. Conversation Memory

* [ ] Persist conversation history
* [ ] Retrieve past context
* [ ] Use memory in responses

---

### 13. Structured Logging

* [ ] JSON logs
* [ ] Correlation IDs
* [ ] Trace request across pipeline

---

### 14. Smart Caching

* [ ] Cache repeated responses
* [ ] Semantic similarity matching
* [ ] Balance freshness vs speed

---

### 15. Documentation & Delivery

* [ ] `.env.example`
* [ ] `.gitignore`
* [ ] README updates
* [ ] Demo video recording
* [ ] Live deployment

---

## 📌 Current Focus

(Manually update)

* [ ]

---

## 📝 Notes / Learnings

*
*
*

---

_Last updated: _
