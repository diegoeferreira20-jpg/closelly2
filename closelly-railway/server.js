const express = require('express');
const app = express();
// A anon key do Supabase é pública por design; a segurança vem das políticas RLS (schema.sql).
app.get('/config.js', (_, res) => {
  res.type('js').send('window.CFG=' + JSON.stringify({
    url: process.env.SUPABASE_URL, key: process.env.SUPABASE_ANON_KEY }) + ';');
});
app.use(express.static('public'));
app.listen(process.env.PORT || 3000, () => console.log('Closelly no ar'));
