import React, { useState } from "react";

const Modal = () => {
  const [show, setShow] = useState(false);

  return (
    <div
      style={{ height: "100vh", width: "100vw" }}
      onClick={(e) => {
        console.log(e);
        if (e.target === e.currentTarget) {
          setShow(false);
        }
      }}
    >
      <button onClick={() => setShow(true)}>Open Modal</button>
      {show && (
        <div
          style={{
            height: "500px",
            width: "500px",
            backgroundColor: "gray",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
            }}
          >
            <h1>Modal Title</h1>
            <button
              style={{ height: "50px", width: "50px" }}
              onClick={() => setShow(false)}
            >
              X
            </button>
          </div>
          <div>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
