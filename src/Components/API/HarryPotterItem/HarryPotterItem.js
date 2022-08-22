import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

const HarryPotterItem = ({ character }) => {
  return (
    <>
      <li>
        <Card>
          <CardContent>
            <img src={character.image} alt={character.name} />
            <p>{character.name}</p>
          </CardContent>
        </Card>
      </li>
    </>
  );
};

export default HarryPotterItem;
