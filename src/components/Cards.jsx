import styles from '../styles/Cards.module.scss';
import { useContext, useState } from 'react';
import { stateContext } from '../utils/createContext.js';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

function Cards({ id }) {
  const { historyLists } = useContext(stateContext);
  const { detail } = historyLists.find((item) => item.id === id);
  const [characters, setCharacters] = useState(detail);

  const onDragEndHandler = (res) => {
    if (!res.destination) return;
    const items = Array.from(characters);
    const [targetItem] = items.splice(res.source.index, 1);
    items.splice(res.destination.index, 0, targetItem);

    setCharacters(items);
  };

  return (
    <DragDropContext onDragEnd={onDragEndHandler}>
      <Droppable droppableId="characters">
        {(provided) => (
          <div className={styles.cardsContainer} {...provided.droppableProps} ref={provided.innerRef}>
            {characters.map((card, index) => {
              return (
                <Draggable key={card.id} draggableId={card.id} index={index}>
                  {(provided) => (
                    <div
                      className={styles.card}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      ref={provided.innerRef}
                    >
                      {card.content}
                    </div>
                  )}
                </Draggable>
              );
            })}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
}

export default Cards;
