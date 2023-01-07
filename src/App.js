import Button from "./Button";

function App() {
  return (
    <div>
      <div>
        <Button success rounded outline>
          Click me2!
        </Button>
      </div>
      <div>
        <Button danger outline>
          Buy Now!
        </Button>
      </div>
      <div>
        <Button warning rounded>
          See Deal!
        </Button>
      </div>
      <div>
        <Button success rounded outline>
          Hide Adds!
        </Button>
      </div>
      <div>
        <Button warning rounded>
          Something!
        </Button>
      </div>
    </div>
  );
}

export default App;
