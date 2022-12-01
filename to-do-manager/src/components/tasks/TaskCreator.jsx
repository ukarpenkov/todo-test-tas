import React, { useEffect } from 'react';


const TaskCreator = ({ isVisible = false, title, content, footer, onClose }) => {
    const keydownHandler = ({ key }) => {
        switch (key) {
            case 'Escape':
                onClose();
                break;
            default:
        }
    };

    useEffect(() => {
        document.addEventListener('keydown', keydownHandler);
        return () => document.removeEventListener('keydown', keydownHandler);
    });

    return !isVisible ? null : (
        <div className='todo-create'>
            <span className="modal-close" onClick={onClose}>
                &times;
            </span>
            <div className='todo-create__inputs'>
                <div>
                    <label htmlFor="">Заголовок</label>
                    <input type="text" />
                </div>
                <div>
                    <label htmlFor="">Описание</label>
                    <input type="text" />
                </div>
                <div>
                    <label htmlFor="">Приоритет</label>
                    <select>
                        <option>-----</option>
                        <option>Важно</option>
                        <option>Средне</option>
                        <option>Не важно</option>
                    </select>
                </div>
            </div>
            <div className='todo-create__task-info'>
                <span className='todo-create__task-info_item'>Текущий статус</span>
                <span className='todo-create__task-info_item'>Время в работе</span>
                <span className='todo-create__task-info_item'>Дата создания</span>
                <span className='todo-create__task-info_item'>Дата окончания</span>
            </div>
            <div>
                <button>
                    Создать задачу
                </button>
            </div>
            <div className='todo-create__comments'>
                <label htmlFor="">Ваш комментарий</label>
                <input type="text" />
                <button>Отправить комментарий</button>
            </div>
        </div>
    )
}



export default TaskCreator