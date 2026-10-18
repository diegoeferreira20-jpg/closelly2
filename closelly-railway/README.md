# Closelly — deploy (Supabase + Railway)

## 1. Supabase
1. Crie um projeto em supabase.com.
2. SQL Editor > cole todo o `schema.sql` > Run.
3. Authentication > Providers > Email: desative **Confirm email** (para entrar logo após o cadastro) ou mantenha ativo e confirme pelo e-mail.
4. Project Settings > API: copie **Project URL** e a chave **anon public**.

## 2. Railway
1. Suba esta pasta para um repositório no GitHub.
2. Railway > New Project > Deploy from GitHub repo.
3. Em Variables, adicione:
   - `SUPABASE_URL` = Project URL
   - `SUPABASE_ANON_KEY` = chave anon public
4. Settings > Networking > Generate Domain.

## 3. Supabase (final)
Authentication > URL Configuration: coloque o domínio do Railway em **Site URL**.

Teste local: `npm install && SUPABASE_URL=... SUPABASE_ANON_KEY=... npm start`
