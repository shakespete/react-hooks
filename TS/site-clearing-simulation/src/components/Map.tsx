import React, { useEffect, useRef } from 'react';
import { IMapProps } from '../interfaces';
import { useMap } from '../context/MapProvider';

export default function Map({ width, height}: IMapProps): JSX.Element {
  const { state } = useMap();
  const layout = state.mapSite;
  const rows = state.totalRows;
  const cols = state.totalCols;

  const len = 30;
  const pad = 35;
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    ctx?.clearRect(0, 0, width, height);

    if (canvas && rows && cols) {
      if (ctx) {
        for (let i = 0; i < rows; ++i) {
          for (let j = 0; j < cols; ++j) {
            switch (layout[i][j]) {
              case "o":
                ctx.strokeStyle = "#0FAAF5";
                break;
              case "r":
                ctx.strokeStyle = "#F58C0C";
                break;
              case "t":
                ctx.strokeStyle = "#95F518";
                break;
              case "T":
                ctx.strokeStyle = "#CE0CF5";
                break;
              default:
                break;
            }
            
            ctx.font = '16px serif';
            ctx.strokeRect(j * pad + 10, i * pad + 10, len, len);
            ctx.fillText(layout[i][j], j * pad + 21, i * pad + 30);
          }
        }
      } 
    }
  },[layout, rows, cols, width, height]);
  return <canvas ref={canvasRef} className="canvasRect" width={width} height={height} />;
}