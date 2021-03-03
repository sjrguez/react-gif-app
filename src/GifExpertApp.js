import React, { useState } from 'react';
import  AddCategory  from './components/AddCategory';
import GifGrid  from './components/GifGrid';

const GifExpertApp = () => {


    const [categories, setcategories] = useState(['Hunter x Hunter'])


    // const handleAdd = () => {
    //     // categories.push([)
    //     // setcategories([...categories, 'Sakura card captor'])
    //     setcategories(cats => [...cats, 'Sakura card captor'])

    // }

    return ( 
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={ setcategories} />
            <hr/>

            <ol>
            {
                categories.map((category, i) => <GifGrid key={category} category = {category}/>)
            }
            </ol>
        </>
    )

}

export default GifExpertApp;
