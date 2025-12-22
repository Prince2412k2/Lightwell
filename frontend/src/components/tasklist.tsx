"use client";

import { useState } from "react";

import { XIcon } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

import { Checkbox } from "./ui/checkbox";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";

type Task = {
  id: number;
  title: string;
  completed: boolean;
  due?: string;
};

export default function TaskList() {
  const [tasks, setTasks] = useState<Task[]>([
    { id: 1, title: "Design new homepage", completed: false },
    { id: 2, title: "Fix bug in upload flow", completed: false },
    { id: 3, title: "Write newsletter", completed: true },
  ]);
  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    if (!newTask.trim()) return;
    setTasks((prev) => [
      ...prev,
      { id: Date.now(), title: newTask.trim(), completed: false },
    ]);
    setNewTask("");
  };

  const toggleCompleted = (id: number) => {
    setTasks((prev) =>
      prev.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t)),
    );
  };

  const removeTask = (id: number) => {
    setTasks((prev) => prev.filter((t) => t.id !== id));
  };

  return (
    <div className="max-w-lg mx-auto space-y-6">
      {/* Header */}
      <div className="flex items-center gap-2">
        <Input
          placeholder="Add new task..."
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && addTask()}
        />
        <Button onClick={addTask}>Add</Button>
      </div>

      {/* Tasks list */}
      <div className="space-y-2">
        {tasks.map((task) => (
          <div
            key={task.id}
            className="flex items-center justify-between gap-2 border rounded p-3"
          >
            <div className="flex items-center gap-3">
              <Checkbox
                checked={task.completed}
                onCheckedChange={() => toggleCompleted(task.id)}
              />
              <span
                className={`${
                  task.completed ? "line-through text-slate-400" : ""
                }`}
              >
                {task.title}
              </span>
            </div>

            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-slate-500 hover:text-red-500"
                >
                  <XIcon className="w-4 h-4" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-40">
                <p className="text-sm mb-2">Remove this task?</p>
                <div className="flex justify-end gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => removeTask(task.id)}
                  >
                    Yes
                  </Button>
                </div>
              </PopoverContent>
            </Popover>
          </div>
        ))}
      </div>
    </div>
  );
}
