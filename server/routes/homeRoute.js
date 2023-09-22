// Express route handler for the homepage
app.get('/', (req, res) => {
    // Fetch featured projects or other content from the database
    const featuredProjects = []; // Retrieve featured projects from the database
  
    // Render the homepage 
    res.render('home', {
      title: 'FocusFolio - Photography Platform',
      featuredProjects,
      user: req.user, // Pass user information if logged in (optional)
    });
  });
  