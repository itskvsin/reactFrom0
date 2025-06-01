import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data , showItems , setShowIndex}) => {
    // console.log(data)
    const handleClick = () => {
        setShowIndex()
    }
    return (
        <div>
            {/* Header */}
            <div className="w-6/12 m-auto  p-4  my-4 shadow-lg ">
                <div className="flex justify-between cursor-pointer" onClick={handleClick}>
                <span className="font-semibold">{data.title} ({data.itemCards.length})</span>
                <span>🔽</span>
                </div>
                {/* Accordian Body */}
                <div>
                    {showItems && <ItemList items={data.itemCards} />}
                </div>
            </div>
        </div>
    )
}

export default RestaurantCategory;