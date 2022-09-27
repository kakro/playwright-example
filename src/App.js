import './App.css';

function App() {
  return (
    <div className="app">
      <header className="header">
        <h3>I am a header</h3>
      </header>
      <div className="page-holder">
        <main className="main">
          <section className="error-page-section">
            <h1 className="section-title">Page title</h1>
            <p className="block-content-text">
              Some text in a paragraph<br/>
              <a href="/" className="link">some link</a>.
            </p>
          </section>
        </main>
      </div>
      <footer className="footer">
        <h3>Footer</h3>
          <a href="mailto:test@blub.de">Mail me..</a>
          <div className="footer-bottom">
            <p className="footer-bottom-description">Some footer disclaimer text</p>
          </div>

      </footer>
    </div>
  );
}

export default App;
