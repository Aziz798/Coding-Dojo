

const Display = ({ boxes }) => {
  return (
    <div className="dis">
      {boxes.map((box, idx) => (
        // <div key={idx} style={{ height: box.height, width: box.width, background: box.color }}></div>
        <div key={idx} style={{ height: box.height+'px', width: box.width+'px', background: box.color }}></div>
      ))}
    </div>
  );
};

export default Display;
