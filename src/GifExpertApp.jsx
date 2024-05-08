import {useState} from 'react';
import {AddCategory, GifGrid} from './components';

export const GifExpertApp = () => {
    const [categories, setCategories] = useState(['The Bigbang Theory', 'Friends']);
    
    const onAddCategory = newCategory=>{
        const newArrLow = categories.map(cat=> cat.toLowerCase());
        const newCatLow = newCategory.toLocaleLowerCase();
        
        if (newArrLow.includes(newCatLow)) return;

        setCategories([newCategory, ... categories])
    }

    return (
        <>
        {/* Title */}
        <h1>GifExpertApp</h1>

        {/* Input */}
        <AddCategory
        onNewCategory={text=>onAddCategory(text)}
        />

        {/* List of gifs */}
        { categories.map(category=>{
            return <GifGrid 
                    key={category} 
                    category={category}
                    />
        }) }


        {/* Gif item */}
        </>
    );
};
