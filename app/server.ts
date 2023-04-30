import app from './app';
const port = 8000;
app.listen(port, () => {
  console.log(`app started: http://localhost:${port}`);
});
