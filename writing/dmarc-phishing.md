# How I Reduced Phishing Attacks 65% with DMARC and Custom Transport Rules

**Tags:** DevOps · AWS · Security
**Date:** 2026

---

## The Problem

A 40-person creative studio was receiving a steady stream of phishing emails — spoofed domains, lookalike addresses, credential harvesting links. The attack surface was wide: no email authentication standards, no filtering rules, and staff with varying levels of security awareness.

## What I Implemented

### 1. DMARC, DKIM, and SPF Alignment

The foundation was getting SPF, DKIM, and DMARC records properly configured and aligned across all sending domains.

```
v=DMARC1; p=quarantine; rua=mailto:dmarc@domain.com; pct=100; adkim=s; aspf=s;
```

Started at `p=none` to monitor without blocking, reviewed aggregate reports for two weeks, then moved to `p=quarantine` and eventually `p=reject`.

### 2. Custom Transport Rules in Microsoft 365

Built a layered ruleset in Exchange Online to handle edge cases DMARC doesn't cover:

- Flag external senders spoofing internal display names
- Block lookalike domains (e.g. `cornpany.com` vs `company.com`)
- Prepend `[EXTERNAL]` warnings to all inbound mail from outside the org
- Auto-quarantine attachments with high-risk extensions from unknown senders

### 3. SIEM Alerting

Wired email security events into the SIEM (Sentinel) to alert on:

- DMARC failures from owned domains (indicates spoofing attempt)
- Repeated failed logins following a phishing campaign
- Suspicious link click patterns from mail client telemetry

## Results

- **65% reduction** in reported phishing incidents over 6 months
- Zero successful credential harvests post-implementation
- Staff reported feeling more confident identifying suspicious mail

## Lessons Learned

DMARC alone isn't enough — the transport rules and user training closed gaps that authentication standards can't. Monitoring the DMARC aggregate reports weekly during rollout was critical; several legitimate sending services (invoicing, HR tools) weren't covered by SPF and would have been silently rejected.
