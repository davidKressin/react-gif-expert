import React, { useState } from 'react'
import { AddCategory,GifGrid } from './components';

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(['One Punch', 'Dragon Ball']);
  // NO PONER LOS HOOKS DENTRO DE CONDICIONALES PARA NO ALTERAR LAS POSICIONES DE LOS HOOKS

  const onAddCategory = (newCategory)=>{

    if( categories.includes(newCategory) ) return;
    setCategories([newCategory, ...categories])
  }

  
  return (
    <>
        <h1>GifExpertApp</h1>

        <AddCategory 
          // setCategories={setCategories}
          onNewCategory={category => onAddCategory(category)}
        />


          {/* No hay que usar el indice como key, ya que si eliminamos el elementos con key 0, siempre existirá el indice 0.  */}
          {categories.map((category, i)=>(
              <GifGrid key={category} category={category}/>
            ))
          }

    </>
    )
}
