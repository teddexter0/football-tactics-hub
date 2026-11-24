import { useEffect, useRef, useState } from 'react';
import {
  markingZones,
  pitchLanes,
  type BoardMark,
  type Point,
} from '@/data/squad';

const arrowColors = {
  run: '#a6dfff',
  pass: '#f4df90',
  press: '#ffa0cb',
  curve: '#8ff6dc',
};
const zoneColor = '#c0a9ff';
type Assignment = { start: Point; end: Point; zone?: number };

export default function PitchLines({
  marks,
  first,
  bend,
  showLanes,
  assignments,
}: {
  marks: BoardMark[];
  first: Point | null;
  bend: Point | null;
  showLanes: boolean;
  assignments: Assignment[];
}) {
  const svg = useRef<SVGSVGElement>(null);
  const [ratio, setRatio] = useState(1);
  useEffect(() => {
    const element = svg.current;
    if (!element) return;
    const observer = new ResizeObserver(([{ contentRect }]) => {
      if (contentRect.height) setRatio(contentRect.width / contentRect.height);
    });
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <svg
      className="studio-pitch-lines"
      ref={svg}
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <defs>
        {Object.entries(arrowColors).map(([type, color]) => (
          <marker
            key={type}
            id={'studio-arrow-' + type}
            markerWidth="6"
            markerHeight="6"
            refX="5"
            refY="3"
            orient="auto"
          >
            <path fill={color} d="M0,0 L6,3 L0,6 Z" />
          </marker>
        ))}
      </defs>
      {showLanes && (
        <g className="studio-lanes">
          {pitchLanes.map((lane, i) => (
            <rect
              key={lane}
              x={3 + i * (94 / 5)}
              y="3"
              width={94 / 5}
              height="94"
              fillOpacity={i % 2 === 0 ? '.06' : '.16'}
            />
          ))}
        </g>
      )}
      <g fill="none" stroke="currentColor" strokeWidth=".26">
        <rect x="3" y="3" width="94" height="94" rx=".35" />
        <path d="M3 50h94 M22 3v15h56V3 M22 97V82h56v15 M37 3v6h26V3 M37 97v-6h26v6 M44 3V1h12v2 M44 97v2h12v-2" />
        <ellipse cx="50" cy="50" rx="15" ry="9" />
      </g>
      <g fill="currentColor">
        <circle cx="50" cy="50" r=".45" />
        <circle cx="50" cy="13" r=".38" />
        <circle cx="50" cy="87" r=".38" />
      </g>
      <g className="studio-marking-overlay">
        {[
          ...new Set(
            assignments.flatMap(({ zone }) =>
              zone === undefined ? [] : [zone]
            )
          ),
        ].map((index) => {
          const { x, y, width, height } = markingZones[index];
          return (
            <rect
              key={index}
              x={x}
              y={y}
              width={width}
              height={height}
              fillOpacity=".2"
              className="studio-zonal"
            />
          );
        })}
        {assignments.map((item, i) => (
          <line
            key={i}
            x1={item.start.x}
            y1={item.start.y}
            x2={item.end.x}
            y2={item.end.y}
            strokeDasharray="1 .65"
            className={item.zone === undefined ? undefined : 'studio-zonal'}
          />
        ))}
      </g>
      {marks.map(({ start, end, type, bend }, i) => {
        if (type === 'zone')
          return (
            <rect
              key={i}
              x={Math.min(start.x, end.x)}
              y={Math.min(start.y, end.y)}
              width={Math.abs(start.x - end.x)}
              height={Math.abs(start.y - end.y)}
              fill={zoneColor}
              fillOpacity=".2"
              stroke={zoneColor}
              strokeWidth=".25"
              strokeDasharray="1 .6"
            />
          );
        if (type === 'circle') {
          const radius = Math.hypot((end.x - start.x) * ratio, end.y - start.y);
          return (
            <ellipse
              key={i}
              cx={start.x}
              cy={start.y}
              rx={radius / ratio}
              ry={radius}
              fill={zoneColor}
              fillOpacity=".19"
              stroke={zoneColor}
              strokeWidth=".33"
            />
          );
        }
        // Convert the clicked midpoint to the control point of a quadratic curve.
        const path =
          type === 'curve' && bend
            ? `Q ${2 * bend.x - (start.x + end.x) / 2} ${2 * bend.y - (start.y + end.y) / 2} ${end.x} ${end.y}`
            : `L ${end.x} ${end.y}`;
        return (
          <path
            key={i}
            d={`M ${start.x} ${start.y} ${path}`}
            fill="none"
            stroke={arrowColors[type]}
            strokeWidth=".42"
            markerEnd={'url(#studio-arrow-' + type + ')'}
            strokeDasharray={
              type === 'pass' || type === 'press' ? '1.2 .6' : undefined
            }
          />
        );
      })}
      {[first, bend].map(
        (point, i) =>
          point && (
            <circle key={i} cx={point.x} cy={point.y} r=".85" fill="#eee8ff" />
          )
      )}
    </svg>
  );
}
