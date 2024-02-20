import "https://cdn.lordicon.com/lordicon.js";

const Loading = () => {
  return (
    <lord-icon
      className="loading"
      src="https://cdn.lordicon.com/szoiozyr.json"
      trigger="loop"
      stroke="light"
      state="in-reveal"
      style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        zIndex: 100000,
      }}
    ></lord-icon>
  );
};

export default Loading;
