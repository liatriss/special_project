import React, { memo, useRef } from "react";
import { CSSTransition } from "react-transition-group";
import classNames from "classnames";
import "./Overlay.css";
import GetData from "../teachLoadTable/GetData";

export interface IOverlayProps {
  className?: string;
  timeout?: number;
  isActive?: boolean;
  teacherId: string;
  checked: boolean;
  onClick?: (event: React.MouseEvent) => void;
}

const OverlayComponent: React.FC<IOverlayProps> = ({
  className,
  timeout = 300,
  isActive = false,
  teacherId,
  checked,
  onClick,
}) => {
  const nodeRef = useRef(null);

  return (
    <CSSTransition
      className={classNames("Overlay", className)}
      in={isActive}
      nodeRef={nodeRef}
      timeout={timeout}
      unmountOnExit
      onClick={onClick}
    > 
      <div ref={nodeRef}>
        <h1>teacherID : {teacherId}</h1>
        <h1>{checked}</h1>
        <GetData teacherId={teacherId} checked={checked}></GetData>
      </div>
    </CSSTransition>
  );
};

export const Overlay = memo(OverlayComponent);