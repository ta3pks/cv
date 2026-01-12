---
title: Nikos Efthias aka R.B. Tokdemir
headline: Software Engineer
description: Software Engineer with 10+ years of experience in systems programming, backend development, and distributed systems
email: nikos@mugsoft.io
phone: +995 057 048 - +7 962 572 2002
github: '@ta3pks'
linked_in: https://www.linkedin.com/in/nikosefthias/
stackoverflow: https://stackoverflow.com/users/3553432/nikoss
---

## Professional Summary [ph-user]

Software Engineer with 10+ years of experience in systems programming, backend development, and distributed systems. Specialized in Rust, Go, and TypeScript with deep expertise in high-performance architectures. Proven track record as a Co-Founder, CTO, and Team Lead delivering scalable solutions. Passionate about performance optimization, system design, and open source contributions. Targeting senior technical roles where I can lead teams and architect robust systems.

## Technical Skills [ph-wrench]

### Programming Languages

- Rust
- Go
- TypeScript
- Elm
- JavaScript
- SQL

### Backend Frameworks & Runtimes

- Tokio
- Axum
- Actix
- Poem
- Express

### Systems & Infrastructure

- Linux
- Distributed Systems
- System Programming
- API Design
- Network Programming

### Databases & Caching

- ClickHouse
- Redis
- PostgreSQL

### Tools & Technologies

- Git
- Docker
- CI/CD
- Performance Profiling
- Debugging Tools
- Systemd
- Makefiles

## Featured Projects [ph-gear]

### Distributed HTTP Proxy System (Rust)

Built a production-grade distributed proxy system featuring:

- Manager-Worker Architecture

  - Designed scalable manager-worker pattern for distributed request handling
  - Implemented round-robin load balancing across worker nodes
  - Built worker health checking system with periodic pings (500ms timeout)
  - Added automatic worker discovery and registration on 0.0.0.0:5555

- Security & Resource Management

  - Implemented ConnectionGovernor with per-IP connection limits to prevent DDoS attacks
  - Added connection timeout mechanisms (300s for bidirectional transfers)
  - Built rate limiting system tracking bytes transferred per connection
  - Prevented resource exhaustion attacks with semaphore-based permits

- Performance & Reliability

  - Fixed critical memory leaks with capacity shrinking and periodic cleanup
  - Optimized worker pinging using Arc<Worker> to avoid expensive vector cloning
  - Implemented buffer_unordered concurrent operations (50 workers)
  - Built automatic retry mechanisms with exponential backoff for server binding

- Production Deployment

  - Created systemd service units for proxy and worker processes
  - Implemented SSH-based deployment with rsync and Makefile automation
  - Added comprehensive logging with color-coded output
  - Built connection monitoring showing active worker counts

**Technologies:** Rust, Tokio, Async/Await, TCP, Mutex, RwLock, Arc, AtomicUsize, Futures, Bincode
**Repository:** [github.com/ta3pks/proxy](https://github.com/ta3pks/proxy)

### Dedecta Social Media Monitoring Platform (Rust)

Designed and implemented a comprehensive social media monitoring and analysis platform featuring six integrated subsystems for real-time data collection, AI-powered analytics, and automated alerting. **Architected and built entire system from scratch with plug-and-play tracker design enabling high-throughput distributed data processing.**

- Tracker System

  - Multi-platform monitoring across Twitter, Facebook, Instagram, YouTube, TikTok, Eksi Sözlük, Google Reviews, News (RSS), and SikayetVar
  - Designed high-level tracker interface (Trait-based) handling inter-tracker and DB communication, start/stop operations from central controller, remote hook addition for pipeline data inspection without production restarts, and extensibility functions
  - Plug-and-play architecture enabling any developer to write trackers by implementing simple Trait without understanding entire codebase or internals
  - Real-time keyword tracking with configurable rate limiting using semaphore-based concurrency control (50-100 parallel workers per tracker)
  - Historical data capture with "Capture Old Data" tasks supporting date-based pagination for Twitter, YouTube, Instagram, Facebook, Google Reviews, and SikayetVar
  - Competitor statistics tracking monitoring 230K+ YouTube channels for engagement metrics, growth patterns, and content freshness
  - Automated alerting via Telegram bot with subscription management and Redis-based persistence
  - Background job processing with cron-based table optimization and periodic health checks

- REST API Service

  - Built with Poem framework providing OpenAPI/Swagger documented endpoints (available at /api/v1/docs)
  - Server-Sent Events (SSE) for real-time data streaming and live updates
  - PDF report generation with unified v2 APIs for cross-platform data retrieval
  - JWT-based authentication with CORS support and Cloudflare IP detection
  - Comprehensive logging with request/response tracking and error categorization

- Database & AI Layer

  - ClickHouse for time-series data storage optimized for high-throughput analytics queries
  - Redis for distributed task queues with platform-specific command types (TweetCmd, YoutubeCmd, InstaCmd, etc.)
  - AI-powered sentiment analysis using OpenRouter/Gemini models processing 200+ tweets per batch with cost tracking
  - Gender prediction algorithms for Twitter users using custom trained models
  - Content relativity analysis with custom query processing for relevance scoring
  - AI chat assistant with tool-based system enabling conversational queries across all platform data
  - Extensible tool framework (QueryContents, GetKeywords, GetTags, time operations) allowing AI to filter, sort, and export data from tweets, Google reviews, complaints, Eksi entries, news, Facebook posts, and Instagram
  - Alert management system with threshold-based monitoring and notification workflows

- HLS Stream Downloader

  - Live stream recording with automatic stream detection and continuous monitoring
  - Proxy support for bypassing geographical restrictions with rotating proxy pool
  - FFmpeg integration for transcoding TS/AAC segments to MP4/MP3 with optional skip-transcode optimization
  - Path traversal security validation with allowlist-based extension checking
  - Error recovery with exponential backoff and automatic retry logic (max 5 consecutive errors)

- DevOps Infrastructure

  - Ansible-based server configuration and deployment automation
  - ClickHouse cluster setup with distributed architecture
  - Mailcow email services for system notifications
  - Database initialization scripts and SQL migration management
  - SSH-based remote deployment with automated backup procedures

- External API Libraries

  - Libeksisozluk: Custom library for Eksi Sözlük API integration with pagination support
  - Web Search Library: Serper API integration for Google search results with rate limiting
  - Modular design with versioned CHANGELOG documentation (current version v0.187.0)

**Key Achievements:**

- Designed Trait-based high-level tracker interface with centralized controller for inter-tracker/DB communication, remote start/stop operations, and hot-hook injection
- Enabled plug-and-play tracker development allowing any engineer to implement simple Trait without understanding core internals or entire codebase
- Architected plug-and-play tracker system enabling seamless addition of new platform trackers
- Designed distributed architecture allowing trackers to run on separate nodes with Redis-backed task queues for horizontal scaling
- Scaled tracker system to process data from 10+ social media platforms with 17+ concurrent tracker types
- Implemented AI-powered sentiment analysis processing 200+ tweets per batch with cost tracking and usage monitoring
- Built AI chat assistant with tool-based system enabling conversational queries across all platform data with extensible Tool trait for adding new query capabilities
- Built monitoring system tracking 230K+ YouTube channels with automated staleness detection (48-hour threshold)
- Designed semaphore-based rate limiting preventing API rate limit violations across all trackers
- Created unified v2 API system simplifying cross-platform data access with standardized response formats
- Deployed production infrastructure handling high-throughput data ingestion with automatic error recovery

**Technologies:** Rust, Tokio, ClickHouse, Redis, Poem, FFmpeg, OpenRouter AI, Gemini, Ansible, Serper API, RapidAPI, RSS, Cron

### Open Source Contributions

- GitHub: [@ta3pks](https://github.com/ta3pks)
- Stack Overflow: [nikoss](https://stackoverflow.com/users/3553432/nikoss)
- Active contributor to Rust ecosystem

## Professional Experience [ph-briefcase]

### Software Engineer / Team Lead [Jan 2023] | [Dedecta](https://dedecta.com)

- Lead Rust development team building high-performance data processing systems
- Architect scalable solutions using Rust, ClickHouse, and Redis
- Develop and optimize distributed data pipelines for real-time analytics
- Implement efficient API services and system bindings
- Contribute to system design and performance optimization initiatives

### Co-Founder & CTO [Jul 2018] | [vida.events](https://vida.events)

- Co-founded and led technical direction of the company
- Built distributed systems architecture using Go
- Designed efficient communication protocols between nodes
- Scaled systems to handle high-throughput event processing
- Led technical strategy and development team

### Founder [Jan 2018 – Present] | [MugSoft](https://mugsoft.io)

- Founded independent software development consultancy
- Delivered custom solutions in Rust, Go, and TypeScript
- Provided technical consulting and architecture services
- Built and maintained client-facing API services
- Specialized in high-performance backend systems

### Golang Developer [Jan 2017 – Present] | [socialgin.com](https://socialgin.com)

- Developed and maintained backend systems using Go
- Built scalable API services and microservices
- Implemented distributed system solutions
- Optimized performance and system reliability

### Node.js Developer [Mar 2014 – Jul 2016] | [JADE COMMERCE INTERNATIONAL](https://jade-commerce.com)

- Developed backend services using Node.js
- Built and maintained API integrations
- Contributed to e-commerce platform development
- Implemented scalable web solutions
