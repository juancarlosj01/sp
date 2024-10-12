// Dirección del contrato y ABI (Interfaz del Contrato)
const contractAddress = "DIRECCION_DEL_CONTRATO_MARKETPLACE";
const contractABI = [
  /* ABI del contrato marketplace */
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
    alert("Por favor, ingresa un ID de NFT válido.");
    return;
  }

  try {
    const tx = await nftMarketplaceContract.buyNFT(tokenId);
    await tx.wait(); // Esperar a que la transacción se confirme
    alert(`Has comprado el NFT con ID ${tokenId}`);
  } catch (error) {
    console.error("Error al comprar el NFT:", error);
  }
};
