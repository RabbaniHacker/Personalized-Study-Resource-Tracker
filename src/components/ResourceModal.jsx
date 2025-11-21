import React, { useState } from 'react'

export default function ResourceModal({board, onClose, onAdd}){
  const [title,setTitle] = useState('')
  const [link,setLink] = useState('')
  const [type,setType] = useState('Video')
  const [note,setNote] = useState('')
  const [status,setStatus] = useState('To Do')

  function submit(e){
    e.preventDefault()
    if(!link) return alert('Add link')
    onAdd({ id: Date.now(), title, link, type, note, status })
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/60 z-50">
      <form onSubmit={submit} className="bg-slate-900 p-6 rounded w-full max-w-lg">
        <h3 className="text-lg font-semibold mb-4">Add resource to {board.name}</h3>
        <div className="grid grid-cols-1 gap-3">
          <input value={title} onChange={(e)=>setTitle(e.target.value)} placeholder="Title (optional)" className="p-2 rounded bg-slate-800" />
          <input value={link} onChange={(e)=>setLink(e.target.value)} placeholder="https://..." className="p-2 rounded bg-slate-800" />
          <select value={type} onChange={(e)=>setType(e.target.value)} className="p-2 rounded bg-slate-800">
            <option>Video</option>
            <option>Reading</option>
            <option>Practice</option>
            <option>Notes</option>
            <option>Other</option>
          </select>
          <select value={status} onChange={(e)=>setStatus(e.target.value)} className="p-2 rounded bg-slate-800">
            <option>To Do</option>
            <option>In Progress</option>
            <option>Completed</option>
          </select>
          <textarea value={note} onChange={(e)=>setNote(e.target.value)} placeholder="Short note (optional)" className="p-2 rounded bg-slate-800" />
          <div className="flex gap-2 justify-end">
            <button type="button" onClick={onClose} className="px-3 py-2 border rounded">Cancel</button>
            <button type="submit" className="px-3 py-2 bg-sky-500 text-black rounded font-semibold">Add Resource</button>
          </div>
        </div>
      </form>
    </div>
  )
}