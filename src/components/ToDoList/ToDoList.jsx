import { useState } from "react";
import './ToDoList.css';
function ToDoList() {
    const [todo, setTodo] = useState([]);
    function handleAddItem(event) {
        const newItem = document.getElementById("itemInput").value;


        if (newItem.trim() === "") {
            alert("Please enter a valid item name.");
            return;
        }
        setTodo([...todo, newItem]);
        document.getElementById("itemInput").value = "";

    }
    const handleRemoveItem = (index) => {
        setTodo(item => item.filter((_, i) => i !== index));
    };
    return (
        <div className="list">
            <div></div>

            <table className="todo-list">
                <thead>
            
                    <tr>
                        <th colSpan="3">
                            <input
                                id="itemInput"
                                type="text"
                                placeholder="Add a new task"
                                onKeyDown={(e) => {
                                    if (e.key === "Enter") {
                                        handleAddItem(e);
                                    }
                                }}
                            />
                            <button className="add" onClick={handleAddItem}>Add</button>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {todo.map((item, index) => (
                        <tr className="itemrow" key={index}>

                            <td className="item">{item}</td>
                            <td className="remove">
                                <button onClick={() => handleRemoveItem(index)}>X</button>
                            </td>
                            <td className="done">
                                <button>Finished</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>


    );
}
export default ToDoList;