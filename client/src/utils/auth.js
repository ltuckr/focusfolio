class Auth {
    constructor() {
      this.authenticated = false;
    }
  
    login(token) {
      localStorage.setItem('token', token);
      this.authenticated = true;
    }
  
    logout() {
      localStorage.removeItem('token');
      this.authenticated = false;
    }
  
    isAuthenticated() {
      // Check if the user is authenticated by verifying the presence of a token
      const token = localStorage.getItem('token');
      return !!token; // Convert to boolean
    }
  }
  
  export default new Auth();
  