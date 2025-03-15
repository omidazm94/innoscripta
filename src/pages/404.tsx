const Error404 = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#f8f9fa",
        fontFamily: "Arial, sans-serif",
        textAlign: "center",
        padding: "20px",
      }}
    >
      {/* Funny Title */}
      <h1 style={{ fontSize: "4rem", color: "#343a40", marginBottom: "10px" }}>
        404: Oops!
      </h1>

      {/* Funny Subtitle */}
      <p style={{ fontSize: "1.5rem", color: "#6c757d", marginBottom: "30px" }}>
        Looks like you're lost in the void. Don't worry, it happens to the best
        of us!
      </p>

      {/* Animated Illustration */}
      <div
        style={{
          width: "150px",
          height: "150px",
          backgroundColor: "#ffc107",
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: "30px",
          animation: "float 3s ease-in-out infinite",
        }}
      >
        <span
          style={{
            fontSize: "4rem",
            color: "#343a40",
          }}
        >
          🚀
        </span>
      </div>

      {/* CSS Animation */}
      <style>
        {`
          @keyframes float {
            0%, 100% {
              transform: translateY(0);
            }
            50% {
              transform: translateY(-20px);
            }
          }
        `}
      </style>
    </div>
  );
};

export default Error404;
