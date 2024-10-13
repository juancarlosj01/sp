/*

// Obtener el botón y el párrafo para mostrar el estado de la billetera
const connectButton = document.getElementById("connectWallet");
const walletStatus = document.getElementById("walletStatus");

// Función para conectar MetaMask
connectButton.onclick = async () => {
  if (window.ethereum) {
    try {
      await ethereum.request({ method: "eth_requestAccounts" });

      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const address = await signer.getAddress();

      // Actualizar el botón y el estado de la billetera cuando esté conectada
      connectButton.classList.add("connected");
      connectButton.innerText = "Conectado exitosamente";
      walletStatus.innerText = `Billetera conectada: ${address}`;
    } catch (error) {
      console.error("Error al conectar MetaMask:", error);
    }
  } else {
    alert("Por favor, instala MetaMask.");
  }
};

// Función para comprobar si MetaMask ya está conectada al cargar la página
window.addEventListener("load", async () => {
  if (window.ethereum) {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const accounts = await provider.listAccounts();

    if (accounts.length > 0) {
      const signer = provider.getSigner();
      const address = await signer.getAddress();

      // Actualizar el botón y el estado de la billetera cuando esté conectada
      connectButton.classList.add("connected");
      connectButton.innerText = "Conectado exitosamente";
      walletStatus.innerText = `Billetera conectada: ${address}`;
    }
  }
});

// Dirección del contrato y ABI (Interfaz del Contrato)
const contractAddress = "DIRECCION_DEL_CONTRATO_MARKETPLACE";
const contractABI = [

  /* ABI del contrato marketplace */

/*---------------------------------------------------------------------------
];

let provider;
let signer;
let nftMarketplaceContract;

// Conectar MetaMask
document.getElementById("connectWallet").onclick = async () => {
  if (window.ethereum) {
    try {
      await ethereum.request({ method: "eth_requestAccounts" });
      provider = new ethers.providers.Web3Provider(window.ethereum);
      signer = provider.getSigner();
      nftMarketplaceContract = new ethers.Contract(
        contractAddress,
        contractABI,
        signer
      );

      const address = await signer.getAddress();
      document.getElementById(
        "walletAddress"
      ).innerText = `Billetera: ${address}`;
    } catch (error) {
      console.error("Error al conectar MetaMask:", error);
    }
  } else {
    alert("Por favor, instala MetaMask.");
  }
};

// Función para comprar un NFT
document.getElementById("buyNFT").onclick = async () => {
  const tokenId = document.getElementById("tokenId").value;

  if (!tokenId) {
    alert("Por favor, ingresa la cantidad de acciones a comprar.");
    return;
  }

  try {
    const tx = await nftMarketplaceContract.buyNFT(tokenId);
    await tx.wait(); // Esperar a que la transacción se confirme
    alert(`Has comprado exitosamente ${tokenId}`);
  } catch (error) {
    console.error("Error al comprar la acción", error);
  }
};


*/

// Obtener el botón y el párrafo para mostrar el estado de la billetera
const connectButton = document.getElementById("connectWallet");
const walletStatus = document.getElementById("walletStatus");

// Función para conectar MetaMask
connectButton.onclick = async () => {
  if (window.ethereum) {
    try {
      // Solicitar al usuario que conecte MetaMask
      await ethereum.request({ method: "eth_requestAccounts" });

      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const address = await signer.getAddress();

      // Actualizar el botón y el estado de la billetera cuando esté conectada
      connectButton.classList.add("connected");
      connectButton.innerText = "Conectado exitosamente";
      walletStatus.innerText = `Billetera conectada: ${address}`;
    } catch (error) {
      console.error("Error al conectar MetaMask:", error);
    }
  } else {
    alert("Por favor, instala MetaMask.");
  }
};

// Función para comprobar si MetaMask ya está conectada al cargar la página
window.addEventListener("load", async () => {
  if (window.ethereum) {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const accounts = await provider.listAccounts();

    if (accounts.length > 0) {
      const signer = provider.getSigner();
      const address = await signer.getAddress();

      // Actualizar el botón y el estado de la billetera cuando esté conectada
      connectButton.classList.add("connected");
      connectButton.innerText = "Conectado exitosamente";
      walletStatus.innerText = `Billetera conectada: ${address}`;
    } else {
      console.log("No hay cuentas conectadas");
    }
  } else {
    console.log("MetaMask no está instalada.");
  }
});
