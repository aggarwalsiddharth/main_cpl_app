const initialData = {
  tasks: {
    "task-1": { id: "task-1", content: "Take out garbage" },
    "task-2": { id: "task-2", content: "Take out luggage" },
    "task-3": { id: "task-3", content: "Take out toxins" },
    "task-4": { id: "task-4", content: "Take out material" },
  },
  columns: {
    "column-1": {
      id: "column-1",
      title: "ORDER RECEIVED",
      taskIds: ["task-1", "task-2", "task-3", "task-4"],
    },
    "column-2": {
      id: "column-2",
      title: "ORDER APPROVED",
      taskIds: ["task-1", "task-2", "task-3", "task-4"],
    },
    "column-3": {
      id: "column-3",
      title: "ORDER IN PRODUCTION",
      taskIds: ["task-1", "task-2", "task-3", "task-4"],
    },
    "column-4": {
      id: "column-4",
      title: "ORDER READY",
      taskIds: ["task-1", "task-2", "task-3", "task-4"],
    },
    "column-5": {
      id: "column-5",
      title: "ORDER DISPATCHED",
      taskIds: ["task-1", "task-2", "task-3", "task-4"],
    },
  },
  columnOrder: ["column-1", "column-2", "column-3", "column-4", "column-5"],
};

export default initialData;
