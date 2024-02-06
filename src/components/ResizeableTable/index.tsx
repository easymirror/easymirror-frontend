/*
 * Source from:
 * https://www.letsbuildui.dev/articles/resizable-tables-with-react-and-css-grid/
 * 
*/

import { useState, useCallback, useEffect, useRef } from "react";
import "./styles.css";

interface TableColumn {
  text: string;
  ref: React.RefObject<HTMLTableHeaderCellElement>;
}

interface TableProps {
    headers: any[];
    minCellWidth: number;
    tableContent: React.ReactNode;
}

const createHeaders = (headers: any[]): TableColumn[] => {
  return headers.map((item) => ({
    text: item,
    ref: useRef<HTMLTableHeaderCellElement>(null)
  }));
};


export const Table: React.FC<TableProps> = ({ headers, minCellWidth, tableContent }) => {
  const [tableHeight, setTableHeight] = useState<string>("auto");
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const tableElement = useRef<HTMLTableElement>(null);
  const columns = createHeaders(headers);

  useEffect(() => {
    if (tableElement.current)
      setTableHeight(`${tableElement.current.offsetHeight}px`);
  }, []);

  const mouseDown = (index: number) => {
    setActiveIndex(index);
  };

  const mouseMove = useCallback(
    (e: MouseEvent) => {
      if (activeIndex !== null) {
        const gridColumns = columns.map((col, i) => {
          if (i === activeIndex && col.ref.current) {
            const width = e.clientX - col.ref.current.offsetLeft;

            if (width >= minCellWidth) {
              return `${width}px`;
            }
          }
          return `${col.ref.current?.offsetWidth}px`;
        });

        if (tableElement.current)
          tableElement.current.style.gridTemplateColumns = gridColumns.join(" ");
      }
    },
    [activeIndex, columns, minCellWidth]
  );

  const removeListeners = useCallback(() => {
    window.removeEventListener("mousemove", mouseMove);
    window.removeEventListener("mouseup", removeListeners);
  }, [mouseMove]);

  const mouseUp = useCallback(() => {
    setActiveIndex(null);
    removeListeners();
  }, [removeListeners]);

  useEffect(() => {
    if (activeIndex !== null) {
      window.addEventListener("mousemove", mouseMove);
      window.addEventListener("mouseup", mouseUp);
    }

    return () => {
      removeListeners();
    };
  }, [activeIndex, mouseMove, mouseUp, removeListeners]);

  // Demo only
  const resetTableCells = () => {
    if (tableElement.current)
      tableElement.current.style.gridTemplateColumns = "";
  };

  return (
    <div className="container">
      <div className="table-wrapper">
        <table className={`resizeable-table num_${headers.length}`} ref={tableElement}>
          <thead>
            <tr>
              {columns.map(({ ref, text }, i) => (
                <th ref={ref} key={text}>
                  <span>{text}</span>
                  <div
                    style={{ height: tableHeight }}
                    onMouseDown={() => mouseDown(i)}
                    className={`resize-handle ${
                      activeIndex === i ? "active" : "idle"
                    }`}
                  />
                </th>
              ))}
            </tr>
          </thead>
          {tableContent}
        </table>
      </div>
    </div>
  );
};