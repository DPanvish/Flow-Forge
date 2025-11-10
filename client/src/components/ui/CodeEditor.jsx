import React from 'react'
import { useTheme } from '../../contexts/ThemeContext'
import { Editor } from '@monaco-editor/react'

const CodeEditor = ({value, language, onChange}) => {
  const {theme} = useTheme();
  const editorTheme = theme === "dark" ? "dark" : "light";

  const handleEditorChange = (value, event) => {
    if(onChange){
      onChange(value);
    }
  }

  return (
    <Editor 
      height="100%"
      width="100%"
      language={language}
      theme={editorTheme}
      value={value}
      onChange={handleEditorChange}
      options={{
        fontSize: 14,
        minimap: { enabled: false }, // Disable minimap
        contextmenu: false, // Disable context menu
        automaticLayout: true, // Enable automatic layout
        scrollBeyondLastLine: false, // Disable scroll beyond last line
        fontFamily: 'Fira Code',
      }}
    />
  )
}

export default CodeEditor
