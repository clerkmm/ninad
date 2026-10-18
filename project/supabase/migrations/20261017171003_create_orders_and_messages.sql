/*
# Create orders and messages tables for Ninad's freelance developer website

## Overview
This migration creates two tables to store data submitted from the public website:
- `orders` — project order requests from the Order page
- `messages` — contact messages from the Contact page

## Tables

### orders
- id (uuid, PK)
- name (text) — client's full name
- email (text) — client's email
- website_type (text) — type of website (Salon, Medical, etc.)
- preferred_style (text) — style preference
- num_pages (text) — number of pages requested
- budget (text) — budget range
- description (text) — project description
- created_at (timestamptz)

### messages
- id (uuid, PK)
- name (text) — sender's full name
- email (text) — sender's email
- message (text) — message body
- created_at (timestamptz)

## Security
- Both tables allow public INSERT (anyone can submit an order or message) via anon + authenticated roles.
- Both tables restrict SELECT/UPDATE/DELETE to authenticated users only (admin access).
- RLS enabled on both tables.
*/

CREATE TABLE IF NOT EXISTS orders (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  website_type text NOT NULL,
  preferred_style text NOT NULL,
  num_pages text NOT NULL,
  budget text NOT NULL,
  description text NOT NULL,
  created_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS messages (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  message text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE orders ENABLE ROW LEVEL SECURITY;
ALTER TABLE messages ENABLE ROW LEVEL SECURITY;

-- Orders: public can insert, only authenticated (admin) can read
DROP POLICY IF EXISTS "public_insert_orders" ON orders;
CREATE POLICY "public_insert_orders"
  ON orders FOR INSERT
  TO anon, authenticated WITH CHECK (true);

DROP POLICY IF EXISTS "admin_select_orders" ON orders;
CREATE POLICY "admin_select_orders"
  ON orders FOR SELECT
  TO authenticated USING (true);

DROP POLICY IF EXISTS "admin_delete_orders" ON orders;
CREATE POLICY "admin_delete_orders"
  ON orders FOR DELETE
  TO authenticated USING (true);

-- Messages: public can insert, only authenticated (admin) can read
DROP POLICY IF EXISTS "public_insert_messages" ON messages;
CREATE POLICY "public_insert_messages"
  ON messages FOR INSERT
  TO anon, authenticated WITH CHECK (true);

DROP POLICY IF EXISTS "admin_select_messages" ON messages;
CREATE POLICY "admin_select_messages"
  ON messages FOR SELECT
  TO authenticated USING (true);

DROP POLICY IF EXISTS "admin_delete_messages" ON messages;
CREATE POLICY "admin_delete_messages"
  ON messages FOR DELETE
  TO authenticated USING (true);
