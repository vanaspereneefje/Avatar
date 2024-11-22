import { useState } from 'react';
import {DndContext} from '@dnd-kit/core';

import Droppable from './Droppable';
import Draggable from './Draggable';

import Sidebar from './Sidebar';


function DragDrop() {
    const [droppedItems, setDroppedItems] = useState([[], [], []]);

    function handleDragEnd(event) {
        const { active, over } = event;

        if (over) {
            //extract id which should be an integer
            const dropboxIndex = parseInt(over.id.replace("droppable-", ''), 10);

            const droppedImageUrl = active.data.current.src;
            console.log('Dropped Data:', droppedImageUrl);

            if(droppedItems[dropboxIndex].length === 0) {
                setDroppedItems((prev) => {
                    const newItems = [...prev];
                    newItems[dropboxIndex] = [...newItems[dropboxIndex], droppedImageUrl];
                    return newItems;
                });
            } else {
                console.log("dropbox full");
            }
        }
    }

const droppableClasses = ['dropbox-one', 'dropbox-two', 'dropbox-three'];

  return (
    <DndContext onDragEnd={handleDragEnd}>
        <div className="container">
            <div className='dropbox'>
                {droppableClasses.map((className, index) => (
                    <Droppable key={index} id={`droppable-${index}`} className={className}>
                        {droppedItems[index].map((item, itemIndex) => (
                            <Draggable 
                                id={`dropped-${index}-${itemIndex}`} 
                                key={itemIndex} 
                                data={{ src: item }}>
                                <img src={item} width="325" alt="dropped-item" />
                            </Draggable>
                        ))}
                    </Droppable>
                ))}
                <div className='avatar-image'></div>
            </div>
            <Sidebar />
        </div>
    </DndContext>
  )
}

export default DragDrop;