import JumboTron from "./components/jumboTron";
import jumboData from "./fixtures/jumbo.json";
function App() {
  return (
    <JumboTron.Container>
      {jumboData.map((item) => (
        <JumboTron key={item.id} direction={item.direction}>
          <JumboTron.Pane>
            <JumboTron.Title>{item.title}</JumboTron.Title>
            <JumboTron.SubTitle>{item.subTitle}</JumboTron.SubTitle>
          </JumboTron.Pane>
          <JumboTron.Pane>
            <JumboTron.Image src={item.image} alt={item.alt} />
          </JumboTron.Pane>
        </JumboTron>
      ))}
    </JumboTron.Container>
  );
}

export default App;
