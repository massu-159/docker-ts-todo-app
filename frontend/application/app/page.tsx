'use client'
import React, { useState } from "react";

export default function Home() {
  const [tasks, setTasks] = useState<string[]>(["掃除", "買い物", "筋トレ"]);
  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    if (newTask !== "") {
      setTasks([...tasks, newTask]);
      setNewTask("");
    }
  };

  const deleteTask = (index: number) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <main className='flex flex-col items-center justify-center min-h-screen'>
      <div className='border border-white p-24 min-w-96'>
        <input
          type='text'
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder='新しいタスクを入力'
          className='mb-4 p-2 border border-gray-300 text-black'
        />
        <button onClick={addTask} className='mb-4 p-2 bg-blue-500 text-white'>
          タスクを追加
        </button>
        <ul>
          {tasks.map((task, index) => (
            <li key={index} className='mb-2'>
              {task}
              <button onClick={() => deleteTask(index)} className='ml-4 p-1 bg-red-500 text-white'>
                削除
              </button>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
