---
title: Nikos Efthias aka R.B. Tokdemir
headline: Software Engineer
description: Software Engineer with 10+ years of experience in systems programming, backend development, and distributed systems
email: nikos@mugsoft.io
phone: |
  +995 500 057 048
  +7 962 572 2002
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

### APRS Agent (Rust)

Designed and implemented an extensible APRS-IS (Automatic Packet Reporting System) daemon with a plugin-based architecture for real-time packet processing and external service integration.

- Core Architecture

  - Built async daemon using Tokio runtime connecting to APRS-IS servers with automatic reconnection and exponential backoff
  - Designed Trait-based plugin system (async-trait) enabling extensibility through clean abstractions
  - Implemented ExtensionRegistry pattern managing multiple concurrent packet handlers
  - Created TCP extension server (127.0.0.1:65080) for external client connections with real-time packet broadcasting
  - Built TOML-based configuration system with CLI-based config generation and runtime validation

- Built-in Extensions

  - **Twitter Extension** (157 lines): Automated APRS-to-Twitter posting with configurable whitelists, optional hashtag appending (#APRS), and automatic ACK message generation using Twitter API v2
  - **SMTP/Email Extension** (153 lines): Converts APRS messages to emails with SMTP authentication, sender/recipient whitelists, email validation, and automatic ACK responses using lettre library
  - **Fixed Beacon Extension** (115 lines): Periodic position broadcasting with configurable coordinates and adjustable intervals (default 15 minutes) running as background worker
  - **Logger Extension** (76 lines): Packet filtering and logging with keyword-based filtering and message type include/exclude configurations

- Protocol Implementation

  - Full APRS packet parsing using custom aprs-parser library
  - APRS-IS authentication with passcode generation and validation
  - Packet filtering by callsign prefix
  - Position reporting in compressed/uncompressed formats
  - Message acknowledgment support with path handling and Q-constructs

- Production Deployment

  - systemd service unit configuration for long-running daemon with auto-restart (3-second interval)
  - Global singleton configuration pattern for runtime efficiency
  - Comprehensive error handling using thiserror with structured error types
  - Graceful degradation with error logging without crashes
  - Credentials masking in debug output for security

- Advanced Rust Features

  - Async/await patterns with tokio::select! for handling multiple event sources
  - Phantom types for compile-time type safety (Twitter extension)
  - Custom derive macros (educe, serde, clap)
  - Trait objects with Box<dyn Extension + Send + Sync> for dynamic dispatch
  - Unsafe static storage for global config (performance trade-off)
  - Custom macros (switch!, get_cmd!) for conditional registration and command parsing

**Key Achievements:**

- Designed extensible plugin architecture using async traits enabling dynamic packet handler registration
- Implemented multiple service integrations (Twitter API v2, SMTP) with configurable security controls and whitelists
- Built production-grade daemon with systemd integration handling long-running service requirements
- Created TCP server for external client connectivity with real-time data broadcasting
- Developed custom APRS parser library for complete protocol implementation
- Achieved robust error handling with graceful degradation for network failures
- Designed flexible configuration system supporting CLI-based config generation

**Technologies:** Rust, Tokio, async-trait, serde, TOML, aprs-parser, callpass, lettre, twitter-v2, clap, parking_lot, thiserror, educe, tap, strum
**Repository:** [github.com/ta3pks/aprs-agent](https://github.com/ta3pks/aprs-agent)

### rust_helpers (Rust Utility Library)

Developed a production-ready utility library providing ergonomic helpers, trait extensions, and macros to reduce boilerplate code and simplify common programming tasks in Rust.

- Core Utility Modules

  - **Time & Duration Utilities** (190 lines): Ergonomic time conversions (e.g., `5.seconds()`, `2.hours()`), SystemTime extensions for Unix timestamps (seconds/milliseconds/nanoseconds), duration-to-unix conversion for past/future timestamps, formatted duration output (`hms()`, `hmsxxx()`), and sync/async sleep utilities
  - **Procedural Macros** (241 lines): Struct field inheritance macro (`extends!`), compile-time bitflag generation (`bit_variants!`), conditional expressions (`if_else!`), and match-like conditional statements with bound matching syntax
  - **Numeric Type Casting** (210 lines): Type-safe casting between all 14 numeric types (u8-128, i8-128, usize, isize, f32, f64) with single `cast_as()` method, eliminating manual conversion boilerplate

- Extension Traits

  - **Iterator Extensions** (106 lines): Synchronous and async stream collectors for Vec, HashMap, and HashSet types, with parallel iterator support via rayon feature for high-performance collection operations
  - **Debug & Display Printing** (100 lines): Message-tagged printing utilities (`println("Label")`, `eprintln("Error")`), debug-specific output with `_dbg` suffix variants, and pretty-print debug formatting for complex types
  - **Encoding/Decoding**: Hexadecimal encoding/decoding (lower/upper case), Base64 encoding/decoding (optional feature), MD5 hashing with hex/base64 output formats (optional feature)
  - **JSON Utilities** (optional feature): Serialization helpers using serde (`to_json()`, `to_json_string()`, `to_json_pretty_string()`) and deserialization (`parse_json::<Type>()`)
  - **Result Extensions**: Automatic type conversion for Result types (`map_into()`, `map_err_into()`)
  - **Sync Primitive Extensions**: Graceful handling of poisoned mutexes and rwlocks with `lock_ignore()`, `read_ignore()`, `write_ignore()` methods

- Bitflag Generation

  - Declarative macro `bit_variants!` generating compile-time bitflag constants (e.g., `FLAG_A = 1 << 0`, `FLAG_B = 1 << 1`)
  - Type-safe flag manipulation with automatic shift calculations
  - Supports any integer type as underlying storage

- Feature-Gated Architecture

  - **Default features**: async time, JSON, MD5, Base64 utilities
  - **Optional features**: rayon (parallel iterators), time_async (tokio integration), base64 (encoding), md5 (hashing), json (serde integration)
  - Minimal compilation footprint for projects requiring only core utilities
  - Zero-cost abstractions with compile-time optimizations

- Advanced Rust Features

  - Generic trait implementations with macro-generated code for 14 numeric types
  - Composable trait extensions enabling method chaining patterns
  - Async/await integration with futures and tokio for time utilities
  - Declarative procedural macros for compile-time code generation
  - Feature flag system for modular dependency management

- Testing & Documentation

  - Embedded unit tests in each module with comprehensive coverage
  - Inline Rust documentation with doc examples in trait definitions
  - Well-structured module organization (~1,200 LOC across 12 modules)
  - Versioned releases (current v2.12.0) with active maintenance

**Key Achievements:**

- Reduced boilerplate code in 50+ common Rust programming scenarios through ergonomic trait extensions
- Designed composable, chainable APIs for data transformation (encoding, hashing, JSON)
- Implemented type-safe numeric casting system eliminating manual conversion errors
- Created feature-gated architecture enabling minimal dependency footprints for different use cases
- Developed procedural macros for compile-time optimizations (bitflags, struct inheritance)
- Built both synchronous and asynchronous iteration utilities with parallel processing support
- Achieved zero-cost abstractions through careful trait design and generic implementations

**Technologies:** Rust, futures, serde, serde_json, base64_light, md5, rayon, tokio, tap
**Repository:** [github.com/ta3pks/rust_utilities](https://github.com/ta3pks/rust_utilities)

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

### Founder [Jan 2018] | [MugSoft](https://mugsoft.io)

- Founded independent software development consultancy
- Delivered custom solutions in Rust, Go, and TypeScript
- Provided technical consulting and architecture services
- Built and maintained client-facing API services
- Specialized in high-performance backend systems

### Golang Developer [Jan 2017] | [socialgin.com](https://socialgin.com)

- Developed and maintained backend systems using Go
- Built scalable API services and microservices
- Implemented distributed system solutions
- Optimized performance and system reliability

### Node.js Developer [Mar 2014 – Jul 2016] | [JADE COMMERCE INTERNATIONAL](https://jade-commerce.com)

- Developed backend services using Node.js
- Built and maintained API integrations
- Contributed to e-commerce platform development
- Implemented scalable web solutions
