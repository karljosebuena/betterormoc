# Hooking up Godaddy Domain to Vercel

> **Prerequisite**: You must have purchased your domain on GoDaddy and have your Vercel project deployment ready.

## Phase 1: Vercel Configuration (Do this first)

1.  Log in to your **Vercel Dashboard**.
2.  Select your project (`betterormoc`).
3.  Go to **Settings** -> **Domains**.
4.  Enter your domain name (e.g., `betterormoc.org`) in the input field.
5.  Click **Add**.
6.  Vercel will usually provide two options. Choose the **Recommended** one (usually adds both `betterormoc.org` and `www.betterormoc.org`).
7.  Vercel will now show an **"Invalid Configuration"** error with a set of DNS records it expects. **Keep this tab open.**

You will likely see values similar to:
-   **A Record** pointing to `76.76.21.21`
-   **CNAME Record** (for www) pointing to `cname.vercel-dns.com`

---

## Phase 2: GoDaddy DNS Configuration

1.  Log in to your **GoDaddy Dashboard**.
2.  Go to your **Domain Portfolio** and find your domain.
3.  Click on **DNS** or **Manage DNS** for that domain.
4.  You will see a list of records. You need to add/edit the following:

### Step 2.1: The Root Domain (@)
Look for an existing **A** record with Name `@`.
-   **If it exists**: Edit it.
-   **If not**: Click "Add New Record".

| Type | Name | Value | TTL |
| :--- | :--- | :--- | :--- |
| **A** | `@` | `76.76.21.21` | 1 Hour (or Default) |

> **Note**: If there are other "A" records with the name "@" (Parked), **delete them**. You should only have one A record for "@" pointing to Vercel.

### Step 2.2: The Subdomain (www)
Look for an existing **CNAME** record with Name `www`.
-   **If it exists**: Edit it.
-   **If not**: Click "Add New Record".

| Type | Name | Value | TTL |
| :--- | :--- | :--- | :--- |
| **CNAME** | `www` | `cname.vercel-dns.com` | 1 Hour (or Default) |

---

## Phase 3: Verification

1.  Go back to your **Vercel Domains** tab.
2.  It might take a few minutes (sometimes up to 24-48 hours, but usually <5 mins) for the changes to propagate.
3.  Vercel will automatically retry verifying.
4.  Once the error message turns into a valid status (blue/green checks), your site is live!

### Troubleshooting
-   **Redirect loops**: Ensure your build code doesn't force redirects that conflict with Vercel's.
-   **"Not Secure"**: Vercel automatically creates SSL certificates. This might take an extra 5-10 minutes after domain verification. just wait.
