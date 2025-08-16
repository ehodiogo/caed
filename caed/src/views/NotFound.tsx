import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#f9f4f4",
        color: "#333",
        textAlign: "center",
        padding: "20px",
      }}
    >
      <h1 style={{ fontSize: "5rem", marginBottom: "20px", color: "#b03a2e" }}>
        404
      </h1>
      <h2 style={{ fontSize: "1.8rem", marginBottom: "15px" }}>
        Página não encontrada
      </h2>
      <p style={{ fontSize: "1rem", marginBottom: "30px", maxWidth: "400px" }}>
        A página que você está procurando pode ter sido removida, ter mudado de
        endereço ou nunca existiu.
      </p>
      <Link
        to="/"
        style={{
          backgroundColor: "#b03a2e",
          color: "#fff",
          padding: "12px 24px",
          borderRadius: "8px",
          textDecoration: "none",
          fontWeight: "bold",
          transition: "all 0.3s ease",
        }}
        onMouseOver={(e) =>
          ((e.target as HTMLElement).style.backgroundColor = "#922b21")
        }
        onMouseOut={(e) =>
          ((e.target as HTMLElement).style.backgroundColor = "#b03a2e")
        }
      >
        Voltar para a página inicial
      </Link>
    </div>
  );
};

export default NotFound;
