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

### 4. Microsoft Defender for Office 365 Protection Policies

Once email authentication was in place, the next step was enabling Microsoft Defender for Office 365 protections to reduce phishing and impersonation attempts that still bypass basic checks.

Defender introduced several key layers of protection:

#### Anti-Phishing Policies

We configured impersonation protection to detect emails pretending to come from:

- Executives and finance staff
- Internal domains
- Trusted vendors

Defender analyzes sender reputation, domain similarity, and message characteristics to identify impersonation attempts. When triggered, messages are automatically sent to quarantine instead of reaching the inbox.

#### Quarantine Center

Defender’s Quarantine Center became the central review location for suspicious messages.

Instead of outright deleting questionable emails, messages flagged for:

- phishing
- spoofing
- malware attachments
- suspicious links

were automatically quarantined for review by administrators.

This reduced risk while still allowing us to recover legitimate messages if needed.

#### Anti-Spam and Anti-Malware Policies

We tightened the default policies by:

- increasing spam detection sensitivity
- blocking high-risk attachment types from unknown senders
- enabling Safe Links and Safe Attachments scanning

This ensured links were analyzed in real time and attachments detonated in a sandbox before delivery.

##### External Sender Warning Rules

We also created Exchange Online mail flow (transport) rules to provide visual warnings to users.

One rule prepended a warning banner when messages originated outside the organization:

```
[EXTERNAL EMAIL] Be cautious when clicking links or opening attachments.
```

Another rule flagged messages that appeared to come from our domain but were sent externally, which is a common spoofing technique.

For example:

```
WARNING: This email appears to originate from our domain but was sent from an external server.
```

These banners proved surprisingly effective because they provided instant visual context before users interacted with the email.

### Why Authentication Alone Isn't Enough

Even with SPF, DKIM, and DMARC configured, phishing attacks can still succeed through:

- compromised legitimate accounts
- newly registered lookalike domains
- social engineering messages without malicious attachments

This is where Defender’s behavioral analysis and impersonation detection made the difference.

The combination of:

- DMARC enforcement
- Defender anti-phishing protection
- transport rules
- quarantine review
- created a layered defense model.


## Results

- **65% reduction** in reported phishing incidents over 6 months
- Zero successful credential harvests post-implementation
- Staff reported feeling more confident identifying suspicious mail

## Lessons Learned

DMARC alone isn't enough — the transport rules and user training closed gaps that authentication standards can't. Monitoring the DMARC aggregate reports weekly during rollout was critical; several legitimate sending services (invoicing, HR tools) weren't covered by SPF and would have been silently rejected.
