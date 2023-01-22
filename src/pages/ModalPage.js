import { useState } from "react";
import Modal from "../components/Modal";
import Button from "../components/Button";

function ModalPage() {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const actionBar = (
    <div>
      <Button onClick={handleClose} primary>
        I Accept
      </Button>
    </div>
  );
  const modal = (
    <Modal onClose={handleClose} actionBar={actionBar}>
      <p>Here is an important agreement for you to accept</p>
    </Modal>
  );

  return (
    <div className="relative">
      <Button onClick={handleClick} primary>
        Open Modal
      </Button>
      {showModal && modal}
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed imperdiet
        leo sit amet sem vehicula, sed aliquam felis faucibus. Sed rutrum odio
        enim, a suscipit leo tempus eget. Nunc in ex augue. Quisque sagittis
        pulvinar leo, ut bibendum urna consectetur quis. Maecenas eget
        scelerisque diam. Sed vestibulum blandit nunc. Suspendisse vitae leo
        eget justo feugiat sagittis iaculis vel libero. Aliquam placerat mauris
        quis turpis sodales vehicula.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed imperdiet
        leo sit amet sem vehicula, sed aliquam felis faucibus. Sed rutrum odio
        enim, a suscipit leo tempus eget. Nunc in ex augue. Quisque sagittis
        pulvinar leo, ut bibendum urna consectetur quis. Maecenas eget
        scelerisque diam. Sed vestibulum blandit nunc. Suspendisse vitae leo
        eget justo feugiat sagittis iaculis vel libero. Aliquam placerat mauris
        quis turpis sodales vehicula.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed imperdiet
        leo sit amet sem vehicula, sed aliquam felis faucibus. Sed rutrum odio
        enim, a suscipit leo tempus eget. Nunc in ex augue. Quisque sagittis
        pulvinar leo, ut bibendum urna consectetur quis. Maecenas eget
        scelerisque diam. Sed vestibulum blandit nunc. Suspendisse vitae leo
        eget justo feugiat sagittis iaculis vel libero. Aliquam placerat mauris
        quis turpis sodales vehicula.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed imperdiet
        leo sit amet sem vehicula, sed aliquam felis faucibus. Sed rutrum odio
        enim, a suscipit leo tempus eget. Nunc in ex augue. Quisque sagittis
        pulvinar leo, ut bibendum urna consectetur quis. Maecenas eget
        scelerisque diam. Sed vestibulum blandit nunc. Suspendisse vitae leo
        eget justo feugiat sagittis iaculis vel libero. Aliquam placerat mauris
        quis turpis sodales vehicula.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed imperdiet
        leo sit amet sem vehicula, sed aliquam felis faucibus. Sed rutrum odio
        enim, a suscipit leo tempus eget. Nunc in ex augue. Quisque sagittis
        pulvinar leo, ut bibendum urna consectetur quis. Maecenas eget
        scelerisque diam. Sed vestibulum blandit nunc. Suspendisse vitae leo
        eget justo feugiat sagittis iaculis vel libero. Aliquam placerat mauris
        quis turpis sodales vehicula.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed imperdiet
        leo sit amet sem vehicula, sed aliquam felis faucibus. Sed rutrum odio
        enim, a suscipit leo tempus eget. Nunc in ex augue. Quisque sagittis
        pulvinar leo, ut bibendum urna consectetur quis. Maecenas eget
        scelerisque diam. Sed vestibulum blandit nunc. Suspendisse vitae leo
        eget justo feugiat sagittis iaculis vel libero. Aliquam placerat mauris
        quis turpis sodales vehicula.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed imperdiet
        leo sit amet sem vehicula, sed aliquam felis faucibus. Sed rutrum odio
        enim, a suscipit leo tempus eget. Nunc in ex augue. Quisque sagittis
        pulvinar leo, ut bibendum urna consectetur quis. Maecenas eget
        scelerisque diam. Sed vestibulum blandit nunc. Suspendisse vitae leo
        eget justo feugiat sagittis iaculis vel libero. Aliquam placerat mauris
        quis turpis sodales vehicula.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed imperdiet
        leo sit amet sem vehicula, sed aliquam felis faucibus. Sed rutrum odio
        enim, a suscipit leo tempus eget. Nunc in ex augue. Quisque sagittis
        pulvinar leo, ut bibendum urna consectetur quis. Maecenas eget
        scelerisque diam. Sed vestibulum blandit nunc. Suspendisse vitae leo
        eget justo feugiat sagittis iaculis vel libero. Aliquam placerat mauris
        quis turpis sodales vehicula.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed imperdiet
        leo sit amet sem vehicula, sed aliquam felis faucibus. Sed rutrum odio
        enim, a suscipit leo tempus eget. Nunc in ex augue. Quisque sagittis
        pulvinar leo, ut bibendum urna consectetur quis. Maecenas eget
        scelerisque diam. Sed vestibulum blandit nunc. Suspendisse vitae leo
        eget justo feugiat sagittis iaculis vel libero. Aliquam placerat mauris
        quis turpis sodales vehicula.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed imperdiet
        leo sit amet sem vehicula, sed aliquam felis faucibus. Sed rutrum odio
        enim, a suscipit leo tempus eget. Nunc in ex augue. Quisque sagittis
        pulvinar leo, ut bibendum urna consectetur quis. Maecenas eget
        scelerisque diam. Sed vestibulum blandit nunc. Suspendisse vitae leo
        eget justo feugiat sagittis iaculis vel libero. Aliquam placerat mauris
        quis turpis sodales vehicula.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed imperdiet
        leo sit amet sem vehicula, sed aliquam felis faucibus. Sed rutrum odio
        enim, a suscipit leo tempus eget. Nunc in ex augue. Quisque sagittis
        pulvinar leo, ut bibendum urna consectetur quis. Maecenas eget
        scelerisque diam. Sed vestibulum blandit nunc. Suspendisse vitae leo
        eget justo feugiat sagittis iaculis vel libero. Aliquam placerat mauris
        quis turpis sodales vehicula.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed imperdiet
        leo sit amet sem vehicula, sed aliquam felis faucibus. Sed rutrum odio
        enim, a suscipit leo tempus eget. Nunc in ex augue. Quisque sagittis
        pulvinar leo, ut bibendum urna consectetur quis. Maecenas eget
        scelerisque diam. Sed vestibulum blandit nunc. Suspendisse vitae leo
        eget justo feugiat sagittis iaculis vel libero. Aliquam placerat mauris
        quis turpis sodales vehicula.
      </p>
    </div>
  );
}

export default ModalPage;
