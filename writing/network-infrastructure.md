# Designing Secure Network Infrastructure for a New Warehouse

**Tags:** Networking · Infrastructure · Security · DevOps
**Date:** 2026

---

## The Situation

A creative studio was expanding operations into a larger warehouse space. The new facility would house:

* production crews on the warehouse floor
* engineering workstations
* office staff
* shared network infrastructure

The building already had **internet service installed**, but the internal network needed to be designed and deployed from scratch.

The goal was to build a **secure, segmented, and maintainable network** that could scale as more staff moved into the location.

---

# Phase 1: Wireless Coverage Planning

The first step was determining **access point placement**.

Warehouse environments create unique wireless challenges:

* large open spaces
* metal shelving and equipment
* mobile staff using handheld devices
* mixed office and industrial environments

A site walkthrough was used to identify:

* ceiling mount locations
* power availability
* cabling routes back to switching closets

Access points were installed first to establish baseline connectivity for setup and testing.

Once online, wireless coverage could be verified across:

* warehouse floor
* office areas
* shared workspaces

Deploying wireless early made it easier to manage configuration and troubleshooting during the rest of the buildout.

---

# Phase 2: Core Switching Infrastructure

After wireless coverage was operational, the next step was deploying **enterprise switches at key aggregation points**.

Switch placement was determined based on:

* access point locations
* engineering workstations
* office work areas
* uplinks between network segments

Switches were configured with:

* VLAN support
* trunk links between network segments
* managed access ports

This allowed the network to be **logically segmented before the building was fully occupied**.

Because only a small setup team was present during installation, it was easy to establish clean segmentation without disrupting active users.

---

# Phase 3: Network Segmentation

Rather than running everything on a single flat network, the infrastructure was designed using **multiple subnets and VLANs**.

Separating traffic early prevents many operational and security problems later.

The initial segmentation included:

| Network Segment     | Purpose                                   |
| ------------------- | ----------------------------------------- |
| Office LAN          | Staff workstations and internal systems   |
| Engineering LAN     | High-performance engineering machines     |
| Warehouse Crew WiFi | Mobile devices used on the floor          |
| Infrastructure      | Network devices and management interfaces |

Segmenting these environments provided several benefits:

* reduced broadcast traffic
* improved security boundaries
* simplified monitoring
* better performance isolation

This design also allowed **network policies to be enforced at the firewall layer**.

---

# Phase 4: pfSense Firewall Deployment

Before the office team migrated to the new site, a **pfSense firewall** was installed as the network gateway.

The firewall handled:

* inter-VLAN routing
* outbound NAT
* network access control
* security monitoring

Because the network was already segmented, firewall rules could be implemented immediately.

Examples included:

* warehouse WiFi isolated from internal office systems
* engineering machines allowed limited access to production resources
* infrastructure networks restricted to administrative systems

This prevented accidental cross-network access as staff began moving into the building.

---

# Safety and Operational Considerations

Warehouse environments introduce additional operational concerns compared to traditional offices.

One important decision was deploying **a dedicated WiFi VLAN for warehouse crews**.

This network allowed mobile devices used on the floor to access necessary tools while remaining **isolated from the office network**.

The separation provided several advantages:

* reduced risk from unmanaged devices
* prevented accidental access to internal systems
* simplified troubleshooting of production equipment

Operational networks and office networks often have **very different risk profiles**, so isolating them early proved valuable.

---

# Phase 5: Monitoring and Security Visibility

Once the network was fully operational and staff had migrated to the new site, monitoring and security tooling were added.

---

## Zabbix Hardware Monitoring

Engineering workstations and critical systems were integrated into **Zabbix**.

Zabbix provided visibility into:

* hardware health
* system load
* disk utilization
* network performance

This was particularly important for engineering machines performing heavy workloads.

Early detection of hardware degradation prevented unexpected downtime.

---

## Wazuh SIEM

To strengthen security monitoring, a **Wazuh SIEM platform** was deployed.

Wazuh aggregated logs from:

* servers
* endpoints
* network devices

This enabled centralized detection of:

* authentication anomalies
* suspicious system activity
* configuration changes

For a small IT team, having a centralized view of events significantly improved incident response capability.

---

# Firewall Security Enhancements

As the environment matured, additional security tooling was enabled on the pfSense firewall.

---

## Suricata IDS/IPS

Suricata was deployed to provide **intrusion detection and prevention** capabilities.

This allowed the firewall to inspect traffic for known attack signatures, including:

* malware command and control traffic
* exploit attempts
* suspicious outbound connections

---

## pfBlockerNG

pfBlockerNG was added to block traffic from:

* known malicious IP ranges
* botnet infrastructure
* high-risk geographic regions when appropriate

This reduced exposure to common scanning and attack traffic.

---

# Results

After deployment, the new warehouse site had:

* segmented network architecture
* secure wireless infrastructure
* centralized monitoring
* layered network security controls

The infrastructure supported both **office staff and production crews** while maintaining strong network isolation between environments.

Because segmentation was implemented from the beginning, the network remained easy to manage even as additional devices and systems were added.

---

# Lessons Learned

### Build Segmentation Early

It is much easier to design VLANs and subnet boundaries **before a building fills with users and devices**.

### Monitoring Is Critical

Tools like Zabbix and Wazuh provided visibility that would otherwise be difficult for a small IT team to maintain.

### Layered Security Works Best

Combining:

* firewall controls
* IDS/IPS
* IP reputation blocking
* network segmentation

creates significantly stronger protection than relying on any single control.

---

# Final Thoughts

Standing up a network in a new facility is an opportunity to design infrastructure **correctly from day one**.

By focusing on:

* wireless planning
* segmentation
* firewall enforcement
* monitoring and detection

the warehouse environment was able to scale quickly while maintaining strong operational and security controls.
