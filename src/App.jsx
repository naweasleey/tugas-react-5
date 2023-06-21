import React from 'react'
import Galaxy from './components/Galaxy'
import { useState } from 'react'
import { MdDelete } from 'react-icons/md'
import { MdOutlineZoomIn } from 'react-icons/md'
import { MdOutlineZoomOut } from 'react-icons/md'
import { MdSaveAlt } from 'react-icons/md'
import { TbPlus } from 'react-icons/tb'

const App = () => {
  const [id, setId] = useState('')
  const [editId, setEditId] = useState('')
  const [name, setName] = useState('')
  const [editName, setEditName] = useState('')
  const [diameter, setDiameter] = useState('')

  const [galaxies, setGalaxies] = useState([
    {
      id: 1,
      name: "Andromeda",
      diameter: 220000
    },
    {
      id: 2,
      name: "Bima Sakti",
      diameter: 100000
    },
    {
      id: 3,
      name: "Triangulum",
      diameter: 60000

    }
  ])

  //=============== HANDLE BUTTON =============================//
  const tambahDepan = () => {
    setGalaxies([...galaxies, { id: id, name: name, diameter: diameter }])
  }
  const tambahBelakang = () => {
    setGalaxies([{ id: id, name: name, diameter: diameter }, ...galaxies])
  }
  const Perbesar = () => {
    setGalaxies(galaxies.map((value) => {
      if (value.id == editId) {
        return {
          ...value,
          diameter: value.diameter + 1000
        }
      } else {
        return value
      }
    }))
  }
  const Perkecil = () => {
    setGalaxies(galaxies.map((value) => {
      if (value.id == editId) {
        return {
          ...value,
          diameter: value.diameter - 1000
        }
      } else {
        return value
      }
    }))
  }
  const hapusById = () => {
    setGalaxies(galaxies.filter((value) => value.id != parseInt(editId)))
  }
  const Simpan = () => {
    setGalaxies(galaxies.map((value) => {
      if (value.id == editId) {
        return {
          ...value,
          name: editName
        }
      } else {
        return value
      }
    }))
  }
  const hapusDepan = () => {
    setGalaxies(galaxies.slice(1))
  }
  const hapusBelakang = () => {
    setGalaxies(galaxies.slice(0, -1))
  }
  const hapusSemua = () => {
    setGalaxies(galaxies.slice(galaxies.length, 0))
  }
  //======================================================================

  const Container = {
    display: 'flex',
    gap: 20,
  }

  const Content = {
    display: 'flex',
    flexDirection: 'column',
    gap: 10,
  }

  const Tambah = {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#b195c1',
    borderRadius: 8,
    padding: 5,
    height: 300
  }

  const Edit = {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#b195c1',
    borderRadius: 8,
    padding: 5,
    height: 300,
    width: 300
  }

  const Delete = {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#b195c1',
    borderRadius: 8,
    padding: 5,
    height: 200,
    width: 200
  }



  return (
    <div style={Container}>
      <div style={Content}>
        {
          galaxies.map((value, index) => {
            return <Galaxy key={index} name={value.name} id={value.id} diameter={value.diameter} />
          })
        }
      </div>
      <div style={Tambah}>
        <h3>TAMBAH</h3>
        <label>ID : </label>
        <input type='text' value={id} onChange={(e) => setId(e.target.value)} /> <br />
        <label>NAMA : </label>
        <input type='text' value={name} onChange={(e) => setName(e.target.value)} /> <br />
        <label>DIAMETER : </label>
        <input type='text' value={diameter} onChange={(e) => setDiameter(e.target.value)} />
        <div>
          <button onClick={tambahDepan}><TbPlus />Depan</button>
          <button onClick={tambahBelakang}><TbPlus />Belakang</button>
        </div>
      </div>

      <div style={Edit}>
        <h3>EDIT/HAPUS BERDASARKAN ID</h3>
        <label>ID : </label>
        <input type='text' value={editId} onChange={(e) => setEditId(e.target.value)} /> <br />
        <label>NAMA : </label>
        <input type='text' value={editName} onChange={(e) => setEditName(e.target.value)} /> <br />
        <label>DIAMETER : </label>
        <div>
          <button onClick={Perbesar}><MdOutlineZoomIn color='black' />Perbesar</button>
          <button onClick={Perkecil}><MdOutlineZoomOut color='black' />Perkecil</button><br />
          <button onClick={hapusById}><MdDelete color='black' />Hapus</button>
          <button onClick={Simpan}><MdSaveAlt />Simpan</button>
        </div>
      </div>

      <div style={Delete}>
        <h3>HAPUS</h3>
        <div>
          <button onClick={hapusDepan}><MdDelete color='black' />Depan</button>
          <button onClick={hapusBelakang}><MdDelete color='black' />Belakang</button><br />
          <button onClick={hapusSemua}><MdDelete color='black' />Semua</button>
        </div>
      </div>

    </div>
  )
}

export default App