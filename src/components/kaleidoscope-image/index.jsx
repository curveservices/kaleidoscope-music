import "./index.scss";

const colours = ["pink", "teal", "blue", "yellow", "purple"];

const Kaleidoscope = ({
  position = "bottom-right",
  size = "large",
  shards = 16,
}) => {
  const pieces = Array.from({ length: shards });

  return (
    <div
      className={`kaleidoscope kaleidoscope--${position} kaleidoscope--${size}`}
      aria-hidden="true"
    >
      {pieces.map((_, index) => {
        const angle = (360 / shards) * index;

        return (
          <span
            key={index}
            className={`kaleidoscope__shard kaleidoscope__shard--${
              colours[index % colours.length]
            }`}
            style={{
              "--angle": `${angle}deg`,
            }}
          />
        );
      })}
    </div>
  );
};

export default Kaleidoscope;
