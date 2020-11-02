import React, { useState } from 'react'
import { AddCategory } from './AddCategory';
import { GifGrid } from './GifGrid';

export const GifExpertApp = () => {

//const categories = ['One Punch', 'Vegetta', 'Dragon Ball']

const [categories, setCategories] = useState(['One Punch'])

const handleAdd = () =>{
    setCategories( [...categories, 'aa']);
}
    return (
        <>
           <h2>GifExpertApp</h2> 
           <hr/>

           <AddCategory setCategories={setCategories}/>

           <br/>

           <ol>
               {
                  categories.map( category => 
                       <GifGrid
                            key={category}
                            category={category}
                            
                       />
                  )  

               }
           </ol>
        </>
    )
}
