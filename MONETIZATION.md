# AgentForge — Monetization Plan

**Principle:** never pay before a user pays you. Charge for the *platform* (curated
experts + orchestration + sync + collaboration), not the free LLM tokens.

## Revenue layers (zero upfront investment)
| Layer | AI source | Your cost | Earn via |
|-------|-----------|-----------|----------|
| Free | user's own free key | $0 | funnel + viral growth |
| Pro (BYO-key) | user's key | $0 | subscription for premium features |
| Premium (managed) | you, via prepaid credits | paid *after* user pays | margin on credits |

## Monetization models
1. Freemium subscription — Pro $5–9/mo, Team $19–29/mo (primary).
2. Prepaid AI credits — "$5 = X messages" on your premium models (~70% margin).
3. Lifetime unlock — $39–49 early-bird (instant cash).
4. Agent/Pipeline marketplace — creators sell, you take 20–30%.
5. Template packs — one-time bundles.
6. Affiliate links, white-label embeds, sponsorships, Ko-fi memberships.

## Payment infra (no tax headaches)
- **Lemon Squeezy / Paddle** (Merchant of Record) — handles global VAT, ~5% fee, pay-per-sale only.
- Webhook → Supabase Edge Function flips the user's `plan` flag.

## Zero-cost stack
GitHub Pages (host) · Supabase (auth/DB/edge, free 50k MAU) · Cloudflare (CDN/domain) · Lemon Squeezy (pay-per-sale). Fixed cost: **$0/mo**.

## Pro-gated features (≈$0 to run)
Cloud sync · unlimited history · Pro export (PDF/DOCX/Notion) · custom agent creator ·
saved pipelines · bigger orchestration · scheduled agents · smart model routing ·
team workspaces · marketplace · API access · white-label.

## Growth levers (free)
Generous free tier · "Made with AgentForge" share links · referral program ·
247 SEO landing pages (one per agent) · marketplace creators · Product Hunt/Reddit launch.

## Rollout
1. **Foundation** — accounts (planned; a prior auth build was removed, `supabase/schema.sql` scaffold remains) → Supabase setup → cloud sync + `plan` flag.
2. **First revenue** — paywall + Lifetime $39 + Pro $7/mo gating software-only features ($0 cost).
3. **Scale** — prepaid credits + managed premium models + API.
4. **Network effects** — marketplace + teams + white-label.

## Cost guardrails
Prepaid only for managed AI · hard free-tier rate limits · cache repeated prompts ·
free tier = BYO-key (costs $0) · spend alerts.
