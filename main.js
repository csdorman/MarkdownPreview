// function toPreviewText(input) {
//     const rawText = input
//     //const markUpText = marked(rawText)
//     console.log("toPreview function called")
//     return input
//   }
  
  const placeholder = `# Welcome to a Markdown Preview
  ## Here is a subheading
  ### And one a little bit smaller!
  Now here is a paragraph (or sentence).
  - Here's a bullet point.
  - Here's one with **some bolded text!**
  - Here's a [link](www.google.com) to go to another site. 
  > We can even do quotes. - Abraham Lincoln.
  
  If you want, there are options for \`inline code\`.
  
  Or if you're crazy you can even do
  \`\`\`
  Code
  blocks
  that
  go on
  and
  on.
  \`\`\`
  You can even put in an image!
  ![React Logo w/ Text](https://goo.gl/Umyytc)
  `
  
  class Editor extends React.Component {
    constructor(props) {
      super(props);
      this.handleChange=this.handleChange.bind(this)
    }
    handleChange(e) {
      this.props.onChange(e.target.value)
    }
    render() {
      const writtenText = this.props.text
      return(
        <div>
          <h2 class="title">Editor</h2>
          <textarea
            value={writtenText}
            onChange={this.handleChange}
            id="editor" />
        </div>
      )
    }
  }
  
  class Preview extends React.Component {
    constructor(props) {
      super(props);
      this.handleChange = this.handleChange.bind(this)
    }
    handleChange(e) {
      this.props.onChange(e.target.value)
    }
    render() {
      const writtenText = this.props.text
      return(
        <div>
          <h2 class="title">Preview Box</h2>
            <div
              dangerouslySetInnerHTML={{__html: marked(writtenText, {gfm:true, breaks: true})}}
              id="preview"
              onChange={this.handleChange} />
        </div>
      )
    }
  }
  
  class MarkdownPreview extends React.Component {
    constructor(props) {
      super(props);
      //Handlechange goes here
      this.handleChange = this.handleChange.bind(this)
      //State goes here
      this.state = {text: placeholder}
    }
    handleChange(text) {
      this.setState({text})
    }
    render() {
      const placeText = placeholder
      const writtenText = this.state.text
      const markedText = toPreviewText(writtenText)
      return(
        <div>
          <Editor
            text={writtenText}
            onChange={this.handleChange} />
          <hr />
          <Preview
            text={markedText}        
            onChange={this.handleChange} />
        </div>
      )
    }
  }
  
  ReactDOM.render(
    <MarkdownPreview />,
    document.getElementById('markdown-app'))
  