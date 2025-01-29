// Create web server
// Return comments
app.get('/comments', function(req, res) {
  res.json(comments);
});
