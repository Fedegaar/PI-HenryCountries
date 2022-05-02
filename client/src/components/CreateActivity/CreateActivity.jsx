import React from 'react'
import s from'./CreateActivity.module.css'

function CreateActivity() {
  return (
    <div className={s.DivMay}>
        
        <div className={s.Box}>
        
        <form action=" " className={s.Form}>
            <div>
                <label>Nombre de la actividad: </label>
                <input type="text" ></input>
            </div>
            <div>
                <label>Dificultad: </label>
                <input type="range" name="difrange" min="1" max="5"></input>
            </div>
            <div>
                <label>Duracion: </label>
                <input type="text"></input>
            </div>
            <div>
                <label>Temporada: </label>
                <input type="text"></input>
            </div>
            <div>
                <label>Seleccionar pais: </label>              
                <select>
                    <option value="Paises">Paises</option>
                </select>
            </div>
            <div>              
                <input type="submit"></input>
            </div>
            <div>              
                <input type="reset"></input>
            </div>
            </form>
        </div>
    </div>
  )
}

export default CreateActivity


// Nombre
// Dificultad
// Duración
// Temporada
// [ ] Posibilidad de seleccionar/agregar varios países en simultáneo
// [ ] Botón/Opción para crear una nueva actividad turística