import React,{useState, useEffect} from "react";
import Editor from "./components/Editor";

function App() {
  const [html, setHtml]= useState('Hello World');
  const [css, setCss]= useState('body{\nfont-size:100px;\ncolor: white;\n}');
  const [js, setJs]= useState('document.body.style.background="blue";');
  const[srcDoc, setSrcDoc]= useState('')

  useEffect(()=>{
    const timeout= setTimeout(()=>{
      setSrcDoc(`
        <html>
          <body>${html}</body>
          <style>${css}</style>
          <script>${js}</script>
        </html>     
      `)
    },250)
    return ()=> clearTimeout(timeout)
  },[html,css,js])

  return (
    <>
    <div className="pane top-pane">
      <Editor 
        language="xml" 
        displayName="Html"
        value={html}
        onChange={setHtml}
        />
      <Editor 
        language="css" 
        displayName="CSS"
        value={css}
        onChange={setCss}
        />
      <Editor 
        language="javascript" 
        displayName="JS"
        value={js}
        onChange={setJs}
        />
    </div>
    <div className="pane">
      <iframe
        srcDoc={srcDoc}
        title="output"
        sandbox="allow-scripts"
        frameBorder="0"
        width="100%"
        height="100%"
        />
    </div>
    </>
  );
}

export default App;
