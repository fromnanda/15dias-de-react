import React from "react";

import SquareCollab from "../SquareCollab";
import "./styles.css";

const BoardCollab = ({ qtd }) => (
    <article className="board-collab">
        <SquareCollab />
        <SquareCollab />
        <SquareCollab />
        <SquareCollab />
        <SquareCollab />
        <SquareCollab />
        <SquareCollab />
        <SquareCollab />
        <SquareCollab />
    </article>
);

export default BoardCollab;