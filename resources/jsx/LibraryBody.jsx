import React from 'react';

const componentsToRender = [
  {
    title: "Introduction",
    id: "introduction"
  }
]

class LibraryBody extends React.Component {
    constructor(props) {
      super(props)

      this.handleMenuChange = this.handleMenuChange.bind(this)

      this.state = {
        pageContent: "default"
      }
    }

    handleMenuChange(event){
      event.preventDefault();
      this.setState({
        pageContent: event.target.id
      })
    }

    renderPageContent() {
      if(this.state.pageContent === "default") {
        return (
          <div>
            <h1>Introduction</h1>
            <p>
              This is Alden Wolf's CSS style guide, where classes and reusable modules are outlined for reuse. The goals here are to define a source of consistent, scalable, flexible styling options to enable faster development.
            </p>
            <div className="library--code-sample">
              <h1>Downloads</h1>
              <div className="row">
                <div className="col-sm-2">
                  <button className="libary-code-sample--button button--primary">Sketch</button>
                </div>
                <div className="col-sm-2">
                  <button className="libary-code-sample--button button--primary">Fonts</button>
                </div>
              </div>
            </div>
          </div>
        )
      } else if(this.state.pageContent === "typography") {
        return (
          <div>
            <h1>Typography</h1>
            <div className="row">
              <div className="col-sm-12 library--code-sample">
                <h1 className="code-sample--example">H1/Large Headings</h1>
                <code className="code-sample--code">&lt;h1&gt;H1/Large Headings&lt;/h1&gt;</code>
              </div>
              <div className="col-sm-12 library--code-sample">
                <h2 className="code-sample--example">H2/Medium Headings</h2>
                <code className="code-sample--code">&lt;h2&gt;H2/Medium Headings&lt;/h2&gt;</code>
              </div>
              <div className="col-sm-12 library--code-sample">
                <p className="code-sample--example">
                  Paragraphs
                </p>
                <code className="code-sample--code">&lt;p&gt;Paragraphs&lt;/p&gt;</code>
              </div>
              <div className="col-sm-12 library--code-sample">
                <a className="link code-sample--example" id="typography-code-sample--link" href="#">Links</a>
                <code className="code-sample--code">&lt;a class="link" href="/"&gt;Links&lt;/a&gt;</code>
              </div>
            </div>
          </div>
        )
      } else if(this.state.pageContent === "colors") {
        return (
          <div>
            <h1>Colors</h1>
            <div className="row">
              <div className="col-sm-6 library--code-sample">
                <div className="black code-sample--color"></div>
                <p>Black</p>
                <p>#000000</p>
                <p>This can be used as an accent, for text, or backgrounds.</p>
                <code className="code-sample--code">&lt;div class="black"&gt;&lt;/div&gt;</code>
              </div>
              <div className="col-sm-6 library--code-sample">
                <div className="blue code-sample--color"></div>
                <p>Blue</p>
                <p>#4468CE</p>
                <p>This should be used as an accent, for text, but <b>not</b> for backgrounds.</p>
                <code className="code-sample--code">&lt;div class="blue"&gt;&lt;/div&gt;</code>
              </div>
              <div className="col-sm-6 library--code-sample">
                <div className="beige code-sample--color"></div>
                <p>Beige</p>
                <p>#EAE6E2</p>
                <p>This should be used only for backgrounds.</p>
                <code className="code-sample--code">&lt;div class="beige"&gt;&lt;/div&gt;</code>
              </div>
            </div>
          </div>
        )
      } else if(this.state.pageContent === "buttons") {
        return (
          <div>
            <h1>Buttons</h1>
            <div className="row">
              <div className="col-sm-6 library--code-sample">
                <button className="libary-code-sample--button button--primary-disabled button--primary">Let’s talk</button>
                <p>Disabled State</p>
                <p>This should be used if the action linked to the button is not yet available to the user.</p>
                <code className="code-sample--code">&lt;button class="button--primary button--primary-disabled"&gt;Let’s talk&lt;/button&gt;</code>
              </div>
              <div className="col-sm-6 library--code-sample">
                <button className="libary-code-sample--button button--primary">Let’s talk</button>
                <p>Enabled State</p>
                <p>This should be used if the action linked to the button is available to the user.</p>
                <code className="code-sample--code">&lt;button class="button--primary"&gt;Let’s talk&lt;/button&gt;</code>
              </div>
            </div>
          </div>
        )
      } else if(this.state.pageContent === "text") {
        return (
          <div>
            <h1>Text modules</h1>
            <div className="row">
              <div className="col-sm-12 library--code-sample">
                <div class="left-column--text">
                  <h1>We keep costs down.</h1>
                  <p>
                    High-quality creative should be affordable for businesses that need it. We’re efficient with our time and that’s always reflected in our rates.
                  </p>
                </div>
                <code className="code-sample--code">
                  &lt;div class="left-column--text"&gt;
                  &lt;h1&gt;We keep costs down.&lt;/h1&gt;
                  &lt;p&gt;High-quality creative should be affordable for businesses that need it. We’re efficient with our time and that’s always reflected in our rates.&lt;/p&gt;
                  &lt;/div&gt;
                </code>
              </div>
            </div>
          </div>
        )
      } else if(this.state.pageContent === "illustrations") {
        return (
          <div>
            <h1>Illustrations</h1>
            <div className="row">
              <div className="col-sm-6 library--code-sample">
                <div className="blue-square">
                  <div className="blue-square--inner">
                    <img id="blue-square-stamp" src="./images/Blue_Square_Stamp.png" alt="Alden Wolf Stamp"/>
                  </div>
                </div>
                <code className="code-sample--code">
                  &lt;div class="blue-square"&gt;
                    &lt;div class="blue-square--inner"&gt;
                      &lt;img id="blue-square-stamp" src="./images/Blue_Square_Stamp.png" alt="Alden Wolf Stamp"/&gt;
                    &lt;/div&gt;
                  &lt;/div&gt;
                </code>
              </div>
              <div className="col-sm-6 library--code-sample">
                <div className="pink-square" id="pink-square--sample">
                  <div className="pink-square--inner">
                    <img id="pink-square-stamp" src="./images/Pink_Square_Stamp.png" alt="Alden Wolf Stamp"/>
                  </div>
                </div>
                <code className="code-sample--code">
                  &lt;div class="pink-square"&gt;
                    &lt;div class="pink-square--inner"&gt;
                      &lt;id="pink-square-stamp" src="./images/Pink_Square_Stamp.png" alt="Alden Wolf Stamp"/&gt;
                    &lt;/div&gt;
                  &lt;/div&gt;
                </code>
              </div>
            </div>
          </div>
        )
      }
    }

    render() {
        return (
          <div id="library--outer">
            <div className="container">
              <div id="library--menu" className="col-md-3 col-sm-12">
                <img id="logo" src="/images/AW_Logo.png" alt="Alden Wolf Logo" id="library-nav--logo"/>
                <a href="#" onClick={this.handleMenuChange} className="link" id="default">Introduction</a>
                <a href="#" onClick={this.handleMenuChange} className="link" id="typography">Typography</a>
                <a href="#" onClick={this.handleMenuChange} className="link" id="colors">Colors</a>
                <a href="#" onClick={this.handleMenuChange} className="link" id="buttons">Buttons</a>
                <a href="#" onClick={this.handleMenuChange} className="link" id="text">Text modules</a>
                <a href="#" onClick={this.handleMenuChange} className="link" id="illustrations">Illustrations</a>
              </div>
              <div id="library--body" className="col-md-9 col-sm-12">
                {this.renderPageContent()}
              </div>
            </div>
          </div>
        );
    }

};

export default LibraryBody;