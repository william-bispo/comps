import { GoBell, GoCloudDownload, GoDatabase } from "react-icons/go";
import Button from "../components/Button";

function ButtonPage() {
  return (
    <div>
      <div>
        <Button
          success
          outline
          rounded
          className="mb-5"
          onClick={() => console.log("Clicked!!")}
        >
          <GoBell />
          Buy Now!
        </Button>
      </div>
      <div>
        <Button danger outline>
          <GoCloudDownload />
          Buy Now!
        </Button>
      </div>
      <div>
        <Button primary outline>
          <GoDatabase />
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

export default ButtonPage;
