'use client'

import { useMemo, useState } from 'react'
import { Copy, FileSearch, GitBranch, RefreshCw, Sparkles, WandSparkles } from 'lucide-react'

const starter = `# Hey, I'm Alex\n\nI build useful things for the web.\n\n## Currently\nShipping with intention.`

export function ReadmeScanner() {
  const [source, setSource] = useState('https://github.com/babamottos-bit')
  const [readme, setReadme] = useState(starter)
  const [scanning, setScanning] = useState(false)
  const [autoScan, setAutoScan] = useState(true)
  const [copied, setCopied] = useState(false)

  const lines = useMemo(() => readme.split('\n'), [readme])

  function scan() {
    if (!source.trim()) return
    setScanning(true)
    window.setTimeout(() => {
      setScanning(false)
      setReadme((current) => current.includes('## Currently') ? current : `${current}\n\n## Currently\nShipping with intention.`)
    }, 650)
  }

  async function copyReadme() {
    await navigator.clipboard.writeText(readme)
    setCopied(true)
    window.setTimeout(() => setCopied(false), 1400)
  }

  return (
    <section id="scanner" className="scanner shell" aria-labelledby="scanner-title">
      <div className="scanner-header">
        <div>
          <span className="kicker">Live workspace</span>
          <h2 id="scanner-title">Scan once.<br /><span>Ship sharper.</span></h2>
        </div>
        <div className="live-pill"><span className="status-dot" /> Live preview</div>
      </div>
      <div className="scanner-grid">
        <div className="scan-panel">
          <div className="panel-heading"><FileSearch aria-hidden="true" /><span>Automatic scan</span><span className="panel-state">ready</span></div>
          <p>Point to a GitHub profile and get an instant read on clarity, structure, and missing signals.</p>
          <label className="field-label" htmlFor="profile-source">GitHub profile URL</label>
          <div className="url-field"><GitBranch aria-hidden="true" /><input id="profile-source" value={source} onChange={(event) => setSource(event.target.value)} onKeyDown={(event) => { if (event.key === 'Enter') scan() }} /></div>
          <button className="button button-primary scan-button" type="button" onClick={scan} disabled={scanning}>{scanning ? <RefreshCw className="spin" aria-hidden="true" /> : <Sparkles aria-hidden="true" />}{scanning ? 'Scanning profile…' : 'Scan automatically'}</button>
          <label className="toggle-row"><input type="checkbox" checked={autoScan} onChange={(event) => setAutoScan(event.target.checked)} /><span className="toggle" aria-hidden="true" /><span>Keep scanning for updates</span></label>
        </div>
        <div className="preview-panel">
          <div className="panel-heading"><WandSparkles aria-hidden="true" /><span>Instant update</span><button className="copy-button" type="button" onClick={copyReadme} aria-label="Copy README"><Copy aria-hidden="true" />{copied ? 'Copied' : 'Copy'}</button></div>
          <div className="readme-editor" aria-label="Live README editor">{lines.map((line, index) => <div className="editor-line" key={`${index}-${line}`}><span>{String(index + 1).padStart(2, '0')}</span><p className={line.startsWith('#') ? 'heading-line' : ''}>{line || ' '}</p></div>)}</div>
          <p className="update-note"><span className="status-dot" /> Updates appear here instantly as your profile changes.</p>
        </div>
      </div>
    </section>
  )
}
