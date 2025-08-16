import Badge from "react-bootstrap/Badge";
import ListGroup from "react-bootstrap/ListGroup";

interface Props {
  areas: string[];
  quantias: number[];
}

function QuantiaPerguntas({ areas, quantias }: Props) {
  return (
    <ListGroup as="ol" numbered>
      {areas.map((area, index) => (
        <ListGroup.Item
          as="li"
          key={area}
          className="d-flex justify-content-between align-items-start"
        >
          <div className="ms-2 me-auto">
            <div className="fw-bold">{area}</div>
          </div>
          <Badge bg="primary" pill>
            {quantias[index]}
          </Badge>
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
}

export default QuantiaPerguntas;
