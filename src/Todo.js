import React, { useState } from "react";

export default function Todo({ todo, index }) {
  return <div className="todo">{todo.text}</div>;
}
