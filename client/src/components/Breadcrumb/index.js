
import { useState, useEffect } from 'react'
import './style.css'
export default function Breadcrumb() {

  const [path, setPath] = useState('root')
  const [files, setFiles] = useState([])
  const [nextFiles, setNextFiles] = useState('')
  const [nextFileType, setNextFileType] = useState('')

  async function getPathFromServer(path) {
    const fetchOptions = {
      method: 'get',
    }
    const result = await fetch(`/path/${encodeURIComponent(path)}`, fetchOptions).then(r => r.json())
    if (result.type === '&#34;file&#34;') {
      setNextFiles(['no new files'])
    } else {
      setNextFiles(Object.keys(result.children))
      setNextFileType(Object.values(result.children))
    }
    setFiles([...files, path])
  }

  function surfBreadcrumb(event) {
    let id = event.target.id
    setPath(id)
    setFiles(files.slice(0, files.indexOf(id)))
  }

  useEffect(() => {
    getPathFromServer(path)
  }, [path])

  return (
    <div className="container">
      <h1 className='title'>File Browser</h1>
      <nav className="my-3" aria-label="breadcrumb">
        <ol class="breadcrumb">
          {files && files.map((elementt, index) => {
            return (
              <li class={(index === (files.length - 1)) ? "breadcrumb-item active" : ' breadcrumb-item '}
                aria-current={(index === (files.length - 1)) ? "page" : ''} >
                {(index !== (files.length - 1)) ?
                  (<button className='breadcrumb' id={elementt} onClick={surfBreadcrumb}>{elementt}</button>) : elementt}
              </li>)
          })}
        </ol>
      </nav>
      <div className="container m-3 bord">
        {nextFiles && nextFiles.map((elementt, index) =>
          <div style={{ display: 'block' }} >
            <i class={(nextFileType[index]?.type === '&#34;file&#34;') ? "fa fa-file" : 'fa fa-folder'} style={{ fontSize: '24px' }}></i>
            {(elementt === 'no new files') ? (<h3>THIS IS FILE: {files[files.length - 1]}</h3>) :
              (<button onClick={(event) => { setPath(event.target.id) }} id={elementt} class={(nextFileType[index]?.type === '&#34;file&#34;') ? 'btn btn-danger m-3' : 'btn btn-primary m-3'}>{elementt}</button>)}
          </div>)}
      </div>

    </div>
  )
}